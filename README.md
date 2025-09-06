# 🏡 Real Estate Web Application

**Real Estate** is a web application built with **Next.js (App Router)** and **MongoDB**.

## ✨ Features

- 🔑 Authentication & Authorization with role-based access (Admin vs User)
- 📊 Admin Dashboard: manage properties
- 👤 User Dashboard: view and manage owned properties
- 📋 Property Listings with details
- 📌 **Copy to Clipboard** functionality for property links
- ⏳ Date formatting using **moment**
- 🔒 Password hashing with **bcryptjs**
- 🎨 Responsive UI styled with raw CSS
- ⚡️ Optimized SEO with Next.js App Router


## 🛠️ Tech Stack

- Next.js
- Mongoose
- NextAuth.js
- bcryptjs
- moment
- MongoDB
- CSS Modules

## 📸 Screenshots

> ![Home Page]
<img width="1920" height="1654" alt="Real Estate Capture 00 - املاک - پروژه بوتواستارت -  Home page" src="https://github.com/user-attachments/assets/ab3d89e1-ddf8-487e-b214-68b4bc7c7a9c" />


> ![Signup Page]
<img width="1920" height="1313" alt="Real Estate Capture 01 - املاک - پروژه بوتواستارت -  Sign Up" src="https://github.com/user-attachments/assets/706a45f4-6ec8-4c24-8aec-d24ebaef2508" />

> ![ Dashboard - add property]
<img width="1920" height="2439" alt="Real Estate Capture 02 - املاک - پروژه بوتواستارت -  Sabte agahi" src="https://github.com/user-attachments/assets/adf18c2b-907c-497d-a1a0-5762ad64181d" />


> ![ Dashboard - properties]
<img width="1920" height="1447" alt="Real Estate Capture 03 - املاک - پروژه بوتواستارت -  Dashboard Agahi ha" src="https://github.com/user-attachments/assets/763b6f8b-ac35-49fc-8527-3279be63c7c4" />


## 🔗 Live Demo

👉 [Your Live Demo Link](https://botomelk.vercel.app/)


## ⚙️ Getting Started 

### 1️⃣ Clone the repository 
```bash
git clone https://github.com/springtofigh/next-real-estate
cd nextjs-practise-sheypoor
````

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure environment variables (`.env.local`)

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Now head over to 👉 [http://localhost:3000](http://localhost:3000)

---

## 👮 Role-based Access

| Role      | Permissions                                            |
| --------- | ------------------------------------------------------ |
| **Admin** | Manage properties, access full dashboard |
| **User**  | Add & manage own properties, view listings             |

---


## 🚀 Deployment

Easily deploy on [Vercel](https://vercel.com/):

```bash
vercel
```

---

## 👨‍💻 Author

📌 Developed with ❤️ by **\[Spring Tofigh]**