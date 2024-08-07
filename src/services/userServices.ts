import { User } from "../models/userModel";
import UserRepository from "../repositories/userRepository";
import { inject,injectable } from "tsyringe";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET_KEY = "el-joji";

@injectable()
export default class UserService {
    constructor(@inject(UserRepository) private userRepository: UserRepository) {}

    async findAll() {
        return await this.userRepository.findAll();
    }
    async findById(id: number) {
        return await this.userRepository.findById(id);
    }

    async update(id: number, user: Partial<User>) {
        return await this.userRepository.update(id, user);
    }
   
    async createUser(user: Partial<User>) {
        
        if (!user.email || !user.password) {
          throw new Error("Username, email, and password are required");
        }
      
        // Cifra la contraseña antes de almacenarla
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      
        return await this.userRepository.create(user);
      }
    
      async getUserByEmail(email: string, password: string) {
        const userFounded = await this.userRepository.findByEmail(email);
        if (!userFounded) throw new Error("User not found");
    
        // Compara la contraseña proporcionada con el hash almacenado
        const isPasswordValid = await bcrypt.compare(password, userFounded.password);
        if (!isPasswordValid) throw new Error("Wrong password");
    
        const payload = { id: userFounded.id, email: userFounded.email };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
        return token;
      }

      async delete(id: number) {
        return await this.userRepository.delete(id);
      }

      async getUsersByRole(role: number) {
        return this.userRepository.findRolesUsersBy(role); 
      }

    
}

