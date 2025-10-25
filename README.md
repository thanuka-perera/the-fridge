
#  The Fridge - Next.js CRUD App

A simple and elegant CRUD application built with **Next.js (App Router)** and **Fetch API** to manage fridge items and their expiry dates.  
This project was developed as part of a **React.js / Next.js Practical Exercise**.


## 🚀 Project Overview

**The Fridge** helps users keep track of what’s inside their fridge and when items expire.  
Users can:
- View all items in the fridge.
- Add new items with expiry dates.
- Edit existing items.
- Delete items after confirmation.
- Quickly identify if an item is **Healthy**, **Expiring Soon**, or **Expired**.
---
## ⚙️ Tech Stack

| Purpose | Technology |
|----------|-------------|
| Framework | [Next.js (App Directory)](https://nextjs.org/docs/app) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| API Handling | Native **Fetch API** |
| Icons | [Lucide React](https://lucide.dev/) |
| Notifications | [Sonner](https://sonner.emilkowal.ski/) |
| Language | TypeScript |

---
## 🎯 Features

- **Modern UI** using Next.js App Router and Tailwind CSS  
- **Fully functional CRUD** operations with real-time updates  
- **Date validation** — users cannot add or update items with expiry dates earlier than **today**  
- **Dynamic item labels**  
    - 🟢 **Healthy** — expiry more than 1 month away  
    - 🟡 **Expiring Soon** — expiry within 1 month  
    - 🔴 **Expired** — expiry date has already passed  
- **Confirmation dialog** before deleting items  
- **Instant UI updates** (no page refresh needed)  
- **Responsive design** for desktop and mobile  
- **Error handling and input validation**

---
## API Reference

Base URL: `https://thefridge-api.karapincha.io/fridge`

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/` | Get all fridge items |
| `POST` | `/` | Create a new fridge item |
| `GET` | `/:itemId` | Get an individual item |
| `PUT` | `/:itemId` | Update an existing item |
| `DELETE` | `/:itemId` | Delete a fridge item |

### Example Request Body

```json
{
  "title": "Lemon",
  "expiry": "20/11/2040"
}

```


## 🧰 Setup Instructions

1.Clone repository
```bash
git clone https://github.com/<your-username>/the-fridge.git
cd the-fridge
```
2.Install Dependencies

```bash
npm install
```
3.Run the Development Server
```bash
npm run dev
```
Your app will be live at http://localhost:3000

4.Build for Production
```bash
npm run build
npm run start
```

## 🧠 Development Notes

- **Client Components** — All interactive UI parts are implemented as client components.  
-  **Hydration Consistency** — Ensured using standardized date formatting (`YYYY-MM-DD`).  
-  **Data Fetching** — Uses the native `fetch()` API inside React hooks for a clean and modern data flow.  
- **Form Validation**
  - Prevents submitting empty fields.  
  - Disallows adding or updating items with expiry dates **earlier than today**.  
- **Code Quality**
  - Built entirely with **functional components**.  
  - Strong **TypeScript typing** for safety and clarity.  
  - Clean import organization and **utility-based architecture**.  
  - Minimal inline styles — layout and styling are managed via **Tailwind CSS**.  

---


## 🚀 Deployment

👉 https://the-fridge-six.vercel.app/

