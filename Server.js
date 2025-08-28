require('dotenv').config();
import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();
app.use(cors());
app.use(json());

// Connect to MongoDB
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
import projectsRoutes from './routes/projects';
import filesRoutes from './routes/files';

app.use('/api/projects', projectsRoutes);
app.use('/api/files', filesRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
  res.send('DataViz Studio Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
