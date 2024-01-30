import { Schema, Document } from 'mongoose';
import { getModelForDatabase } from '../config/database';

const ShipmentSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

export const ShipmentModel = getModelForDatabase('Shipment', 'shipmentdb', ShipmentSchema);