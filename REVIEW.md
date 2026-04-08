# REVIEW WEEK 1 - Node.js + TypeScript + Express

**Ngày hoàn thành:** Hôm nay (08/04/2026)  
**Tác giả:** Tao (siêu lười nhưng làm được)

## 1. Tao đã làm được gì?
- Tạo project `my-ecommerce` chạy server thật.
- Xây dựng **đầy đủ CRUD** cho sản phẩm (4 route):
  - GET /products → xem danh sách
  - POST /products → thêm sản phẩm mới
  - DELETE /products/:id → xóa
  - PUT /products/:id → sửa
- Dữ liệu đang lưu tạm trong RAM (mảng `products`).

## 2. Hình dung Feynman của tao (nhớ như in)
- Server = cái **nhà bếp**
- Express = cái **bếp gas** (giúp nấu món nhanh)
- Route = **thực đơn món ăn**
- GET / = vào nhà chào chủ nhà (“Hello World”)
- GET /products = đem **dĩa thức ăn** ra cho khách xem
- POST /products = khách **ném trái ớt mới** vào dĩa
- DELETE /products/:id = dùng **đũa gắp ớt** ra khỏi dĩa
- PUT /products/:id = đem dĩa cũ vô bếp **xào lại** (thêm dầu nhiều hơn)
- `app.use(express.json())` = **máy rửa + cắt nhỏ ớt** (không có thì ném ớt dính đất vô bếp)
- `req.body` = **cái rổ** khách đưa ớt vào bếp
- `req.params.id` = **tên cái ớt** khách chỉ định
- `parseInt()` = **bồi bàn dịch** từ chuỗi sang số cho đầu bếp hiểu
- `{ ...old, ...new }` = cầm dĩa cũ + **rưới thêm dầu**

## 3. Cách chạy (copy-paste)
```bash
cd my-ecommerce
npm run dev