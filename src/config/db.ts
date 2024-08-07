import { Sequelize } from 'sequelize-typescript';
import {Cart,User,Order,Permissions,Product,ProductCart,Role,Entities} from '../models'


const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Rlwl2023.',
    database: 'test',
    models: [Cart,User,Order,Permissions,Product,ProductCart,Role,Entities], // Añade todos tus modelos aquí
});

// Sincroniza los modelos con la base de datos
// sequelize.sync({ alter: true }) // Usar `alter: true` para ajustar la base de datos al esquema de modelos
//     .then(() => {
//         console.log('Database & tables created or updated!');
//     })
//     .catch((error) => {
//         console.error('Error syncing database:', error);
//     });

export default sequelize;