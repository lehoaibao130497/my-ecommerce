import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'Áo thun đẹp', price: 299000, stock: 50 },
  { id: 2, name: 'Quần jeans', price: 499000, stock: 30 },
  { id: 3, name: 'Giày sneaker', price: 899000, stock: 15 }
];

app.get('/', (req, res) => res.send('Hello World! Đây là server Node.js + TypeScript của tao 😎'));

app.get('/products', (req, res) => res.json(products));

app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json({ message: 'Tạo thành công!', product: newProduct });
});

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Không tìm thấy' });
  const deleted = products.splice(index, 1)[0];
  res.json({ message: 'Đã xóa!', product: deleted });
});

// Route mới: Sửa sản phẩm (PUT)
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
  }

  products[index] = { ...products[index], ...req.body }; // merge dữ liệu mới
  res.json({ message: 'Cập nhật thành công!', product: products[index] });
});

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại: http://localhost:${PORT}`);
});