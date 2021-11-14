import { connection, Sequelize } from "./index.js";
import bcrypt from 'bcryptjs';

const USER_TABLE = 'users';

const User = connection.define(
    USER_TABLE,
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',
        },

        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            field: 'email'
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false,
            field:'password',
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: 'user',
            field:'role',
        },

        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            field:'phone',
        },
        avatar: {
            type: Sequelize.STRING,
            allowNull: false,
            field:'avatar',
        },

        address: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'address',
        },

        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            field: 'created_at',
        },

        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            field: 'updated_at'
        },

    },

    {
        timestamps: false,
    },
);
User.prototype.comparePassword = function comparePassword(userPassword) {
    return bcrypt.compareSync(userPassword, this.password);
}

export default User;