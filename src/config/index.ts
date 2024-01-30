import dotenv from "dotenv";
dotenv.config();

export const environment = process.env.NODE_ENV || "development";
export const Port = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const databases: any = {
    categorydb: process.env.CATEGORY_DB_CONNECTION || 'mongodb://127.0.0.1:27017/categorydb',
    orderdb: process.env.ORDER_DB_CONNECTION || 'mongodb://127.0.0.1:27017/orderdb',
    productdb: process.env.PRODUCT_DB_CONNECTION || 'mongodb://127.0.0.1:27017/productdb',
    inventorydb: process.env.INVENTORY_DB_CONNECTION || 'mongodb://127.0.0.1:27017/inventorydb',
    shipmentdb: process.env.SHIPMENT_DB_CONNECTION || 'mongodb://127.0.0.1:27017/shipmentdb',
};