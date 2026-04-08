import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const JWT_SECRET = 'super-secret-key-123';

app.use(express.json());

let products = [
  { id: 1, name: 'Áo thun đẹp', price: 299000, stock: 50 },
  { id: 2, name: 'Quần jeans', price: 499000, stock: 30 },
  { id: 3, name: 'Giày sneaker', price: 899000, stock: 15 }
];

let users: any[] = [];

 // Extend Express Request type to include user property
declare global {
  namespace Express {
    interface Request {
      user?: { id: number; username: string };
    }
  }
}

// Middleware kiểm tra token
const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Thiếu token, phải login trước' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;   // ← tờ giấy note cho bếp biết khách là ai
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token không hợp lệ hoặc hết hạn' });
  }
};

// ===================== ROUTES =====================

app.get('/', (req, res) => res.send('Hello World! Server Auth Week 2 😎'));

// Route bảo vệ: chỉ ai login mới xem được danh sách sản phẩm
app.get('/products', authMiddleware, (req, res) => {
  res.json(products);
});

app.post('/register', async (req, res) => { /* giữ nguyên code cũ */ 
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: 'Đăng ký thành công!', user: { id: newUser.id, username } });
});

app.post('/login', async (req, res) => { /* giữ nguyên code cũ */ 
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'User không tồn tại' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Sai mật khẩu' });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Đăng nhập thành công!', token });
});

app.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Đây là profile của bạn', user: req.user });
});

app.listen(PORT, () => {
  console.log(`🚀 Server Auth Week 2 chạy tại: http://localhost:${PORT}`);
});