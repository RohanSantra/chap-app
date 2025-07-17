# 💬 Chatty

A full-stack real-time **chat application** built with **React, Express, Socket.io, Zustand, and MongoDB**. Designed with clean state management, authentication, profile updates, and live messaging capabilities.

---

## 🚀 **Features**

✅ User signup & login with JWT authentication  
✅ Profile picture upload & update  
✅ Real-time online users list  
✅ Live messaging with Socket.io  
✅ Responsive and modern UI (Tailwind CSS + DaisyUI)  
✅ Toast notifications for actions  
✅ Clean state management with Zustand

---

## 🛠️ **Tech Stack**

| Frontend | Backend | Database | Other |
| --- | --- | --- | --- |
| React 19 | Express 5 | MongoDB | Socket.io |
| Vite | Node.js | Mongoose | JWT |
| Zustand | | | Cloudinary (for images) |
| Tailwind CSS + DaisyUI | | | |

---

## 📁 **Project Structure**

```

chap-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── package.json (root)
└── README.md

````

---

## ⚙️ **Installation**

1. **Clone the repository:**

```bash
git clone https://github.com/RohanSantra/chat-app.git
cd chat-app
````

2. **Setup backend:**

```bash
cd backend
npm install
```

3. **Setup frontend:**

```bash
cd ../frontend
npm install
```

4. **Add environment variables:**

Create a `.env` file in your `backend/` directory:

```
MONGO_URL=your_mongodb_connection_string
JWT_TOKEN=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🧩 **Running Locally**

**Backend (port 3000)**

```bash
cd backend
npm run dev
```

**Frontend (port 5173)**

```bash
cd frontend
npm run dev
```

---

## 🌐 **Deployment**

### **Backend**

You can deploy your Express backend to platforms like:

* **Render**
* **Railway**
* **Vercel (serverless functions)** (if configured properly)

Ensure:

✅ CORS allows your frontend deployed domain
✅ Socket.io server runs and listens on the correct port

---

### **Frontend**

Deploy the frontend separately to **Vercel**:

1. Set **Root Directory** as `frontend`
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install`

✔️ **Update your axios baseURL** in frontend to point to the backend deployed URL.

---

## ⚠️ **Common Issues**

* **CORS errors:**
  Ensure your backend CORS includes your frontend domain and `credentials: true` is set both on server and axios client.

* **Socket connection errors:**
  Confirm your Socket.io server is running and your client connects using the correct deployed URL.

* **Payload Too Large (413):**
  Adjust your `express.json({ limit: "10mb" })` if uploading large images.

---

## ✨ **Contributing**

1. Fork the repo
2. Create your branch (`git checkout -b feature/yourFeature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/yourFeature`)
5. Open a Pull Request

---

## 📸 **Preview**

https://chap-app-pqfg.onrender.com

---

## 📝 **License**

This project is licensed under the MIT License.

---

## 🙌 **Credits**

Developed with ❤️ by **Rohan Santra**

