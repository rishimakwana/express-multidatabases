import { Schema } from 'mongoose';
import { getModelForDatabase } from '../config/database';

const CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
});

export const CategoryModel = getModelForDatabase('Category', 'categorydb', CategorySchema);