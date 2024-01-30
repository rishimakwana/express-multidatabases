import express from 'express';
const app = express();
import { connectToAllDatabases } from "./config/database"
import { Port } from './config';
connectToAllDatabases()

import apiRoutes from './routes';
app.use(express.json());
app.use('/api', apiRoutes);

const PORT = Port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
