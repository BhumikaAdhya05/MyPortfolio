# 🌐 Bhumika's Developer Portfolio

A sleek, animated portfolio website built with **React**, featuring a **secure admin panel** powered by **Firebase**. This allows real-time editing of content (About, Projects, Contact) **directly from the deployed site** — no need to touch code!

---

## 📸 Demo

Live Site: [https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app)

Admin Panel: [https://your-vercel-app.vercel.app/admin](https://your-vercel-app.vercel.app/admin)

---

## ✨ Features

- ⚡ Fully responsive, modern design
- 🔄 Live-editable content (no redeploys needed)
- 🔐 Admin dashboard with Firebase Auth
- ☁️ Content stored in Firebase Firestore
- 🎬 Smooth page transitions using Framer Motion
- 🧱 Built with styled-components
- 🚀 Deployed using Vercel

---

## 🔧 Tech Stack

| Frontend | Backend | Auth & DB | Animations |
|----------|---------|-----------|------------|
| React    | N/A (client only) | Firebase Auth + Firestore | Framer Motion |

---

## 🧠 How It Works

- Visitors can see the full portfolio with no login.
- `/admin` route is protected by Firebase Authentication.
- Admin can:
  - Edit About content
  - Add/Edit/Delete Projects
  - Update Contact info
- All content is saved in Firestore.
- The public site **fetches live data** from Firestore, not from local files.

---

