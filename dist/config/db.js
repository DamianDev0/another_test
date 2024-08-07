"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Rlwl2023.',
    database: 'test',
    models: [models_1.Cart, models_1.User, models_1.Order, models_1.Permissions, models_1.Product, models_1.ProductCart, models_1.Role, models_1.Entities], // Añade todos tus modelos aquí
});
// Sincroniza los modelos con la base de datos
sequelize.sync({ alter: true }) // Usar `alter: true` para ajustar la base de datos al esquema de modelos
    .then(() => {
    console.log('Database & tables created or updated!');
})
    .catch((error) => {
    console.error('Error syncing database:', error);
});
exports.default = sequelize;
