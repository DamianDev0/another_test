import { injectable } from "tsyringe";
import { User } from "../models/userModel";


@injectable()
export default class UserRepository {
    async findAll() {
        return await User.findAll();
    }

    async findById(id: number) {
        return await User.findByPk(id);
    }

    async create(user: Partial<User>){
        return await User.create(user)
    }
    async update(id: number, user: Partial<User>) {
        await User.update(user, { where: { id } });
        return await User.findByPk(id);
    }

    async delete(id: number) {
        await User.destroy({ where: { id } });
        return true;
    }

    async findByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    async findRolesUsersBy(roleId: number) {
        return await User.findAll({ where: { role: roleId } }); // Busca por identificador numérico
      }
    

}