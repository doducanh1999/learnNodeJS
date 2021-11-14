import { connection, Sequelize } from "./index.js";

const PRODUCT_TABLE = 'products';
const Product = connection.define(
    PRODUCT_TABLE,
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',

        },

        name: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'name',
        },

        categories: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'categories',
        },

        price: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'price',
        },

        description: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'description',
        },

        creator_Product: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'creator_product',
        },

        madein_Product: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'madein_product',
        },

        created_At: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            field: 'created_at',
        },

        updated_At: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            field: 'updated_at',
        },

    },

    {
        timestamps: false,
    },
);

export default Product;