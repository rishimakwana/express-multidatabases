import { Request, Response } from 'express';
import { CategoryModel } from '../models/categoryModel';
import { OrderModel } from '../models/orderModel';
import { ProductModel } from '../models/productModel';
import { InventoryModel } from '../models/inventoryModel';
import { ShipmentModel } from '../models/shipmentModel';

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, description, type } = req.body;
        const data = new CategoryModel({
            name,
            description,
            type,
        });
        await data.save();
        return res.status(200).json({
            success: true,
            data,
            message: 'Category created.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createInventory = async (req: Request, res: Response) => {
    try {
        const { name, description, type } = req.body;
        const data = new InventoryModel({
            name,
            description,
            type,
        });
        await data.save();
        return res.status(200).json({
            success: true,
            data,
            message: 'Inventory created.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createShipment = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const data = new ShipmentModel({
            name,
            description,
        });
        await data.save();
        return res.status(200).json({
            success: true,
            data,
            message: 'Shipment created.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const data = new OrderModel({
            name,
            description,
        });
        await data.save();
        return res.status(200).json({
            success: true,
            data,
            message: 'Order created.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const data = new ProductModel({
            name,
            description,
        });
        await data.save();
        return res.status(200).json({
            success: true,
            data,
            message: 'Product created.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
