import { Schema, Document } from 'mongoose';
import { getModelForDatabase } from '../config/database';

const OrderSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

export const OrderModel = getModelForDatabase('Order', 'orderdb', OrderSchema);