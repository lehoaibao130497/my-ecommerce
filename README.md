# My E-Commerce (Week 1 - 2)

Project Fullstack Node.js + TypeScript đơn giản.

## Đã làm được gì
- Server Express + TypeScript chạy tại `http://localhost:3000`
- CRUD sản phẩm đầy đủ (lưu tạm trong RAM):
  - GET /products → xem danh sách
  - POST /products → thêm sản phẩm mới
  - DELETE /products/:id → xóa
  - PUT /products/:id → sửa
- **Authentication với JWT** (mới thêm):
  - POST /auth/register
  - POST /auth/login (trả về token)
  - **Protect /products**: Giờ phải có token (Authorization: Bearer <token>) mới gọi được. Không có token = 401 Unauthorized (phòng VIP vl).

## Cách chạy
```bash
npm install
npm run dev