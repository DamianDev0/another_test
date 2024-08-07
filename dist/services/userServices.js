"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const tsyringe_1 = require("tsyringe");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SECRET_KEY = "el-joji";
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        return await this.userRepository.findAll();
    }
    async findById(id) {
        return await this.userRepository.findById(id);
    }
    async update(id, user) {
        return await this.userRepository.update(id, user);
    }
    async createUser(user) {
        if (!user.email || !user.password) {
            throw new Error("Username, email, and password are required");
        }
        // Cifra la contraseña antes de almacenarla
        const hashedPassword = await bcrypt_1.default.hash(user.password, 10);
        user.password = hashedPassword;
        return await this.userRepository.create(user);
    }
    async getUserByEmail(email, password) {
        const userFounded = await this.userRepository.findByEmail(email);
        if (!userFounded)
            throw new Error("User not found");
        // Compara la contraseña proporcionada con el hash almacenado
        const isPasswordValid = await bcrypt_1.default.compare(password, userFounded.password);
        if (!isPasswordValid)
            throw new Error("Wrong password");
        const payload = { id: userFounded.id, email: userFounded.email };
        const token = jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn: "1h" });
        return token;
    }
    async delete(id) {
        return await this.userRepository.delete(id);
    }
};
UserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(userRepository_1.default)),
    __metadata("design:paramtypes", [userRepository_1.default])
], UserService);
exports.default = UserService;
