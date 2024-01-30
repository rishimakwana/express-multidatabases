import { Schema } from 'mongoose';
import { getModelForDatabase } from '../config/database';

const InventorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

export const InventoryModel = getModelForDatabase('Inventory', 'inventorydb', InventorySchema);