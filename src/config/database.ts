import mongoose, { Connection, Schema, Document, Model } from 'mongoose';
import { databases } from './'

const connections: any = {};

export const connectToAllDatabases = async () => {
    try {
        await Promise.all(Object.keys(databases).map(async (dbName) => {
            connections[dbName] = mongoose.createConnection(databases[dbName]);
            connections[dbName].on('connected', () => {
                console.log(`Connected to ${dbName}`);
            });
            await new Promise((resolve, reject) => {
                connections[dbName].once('connected', () => resolve(undefined));
                connections[dbName].once('error', (error: any) => reject(error));
            });
        }));
    } catch (error) {
        console.error('Error connecting to databases:', error);
    }
};

export const connectToDatabase = (dbName: string) => {
    if (!connections[dbName]) {
        console.error(`Database connection "${dbName}" not initialized.`);
        throw new Error('Database connection not initialized.');
    }
    return connections[dbName];
};

export const getModelForDatabase = (
    modelName: string,
    dbName: string,
    schema: any
) => {
    const connection: any = connectToDatabase(dbName);
    return connection.model(modelName, schema);
};



