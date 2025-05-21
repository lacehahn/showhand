import express from 'express';
import cors from 'cors';
import data from './data/data.json';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 获取所有房产列表
app.get('/api/properties', (req, res) => {
  const properties = Object.values(data.targetInfo);
  res.json(properties);
});

// 获取单个房产详情
app.get('/api/properties/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const property = Object.values(data.targetInfo).find(p => p.id === id);
  
  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 