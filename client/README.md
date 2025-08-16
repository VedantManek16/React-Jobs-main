# 💼 React Job Board App (Vite + Tailwind)

A **Job Board Web Application** built using **React**, **Vite**, **Tailwind CSS**, and **React Router**. This project was created as part of a comprehensive React learning journey, exploring topics like routing, component composition, form handling, JSON Server integration, and much more.

---

## 🚀 Tech Stack

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧭 [React Router](https://reactrouter.com/)
- 📡 [JSON Server](https://github.com/typicode/json-server)
- 🎉 [React Toastify](https://fkhadra.github.io/react-toastify/)
- 💎 [React Icons](https://react-icons.github.io/react-icons/)

---

## 📚 Features & Learnings

### 🔧 Setup & Configuration
- ✅ Project scaffolded with **Vite** for fast development.
- ✅ Cleaned up boilerplate code to start from a minimal base.
- ✅ Integrated **Tailwind CSS** with PostCSS config for utility-first styling.

### 🧱 Components & JSX
- ✅ Practiced JSX rules and best practices.
- ✅ Built reusable components: `Navbar`, `Hero`, `JobListings`, `JobListing`.
- ✅ Applied **props**, **default props**, and **children wrappers**.

### 🗂️ Job Listings Logic
- ✅ Displayed jobs dynamically using `map()` function.
- ✅ Limited initial display to 3 jobs with “Read More” toggle.
- ✅ Used `useState()` for local state control of description toggles.

### 🧭 Routing & Navigation
- ✅ Set up multi-page routing with **React Router**.
- ✅ Defined routes and layout components.
- ✅ Created a **404 Not Found** page.
- ✅ Used `NavLink` to highlight active navigation links.

### 🌐 API & Data Handling
- ✅ Created a local REST API using **JSON Server**.
- ✅ Used `useEffect()` for fetching data on component load.
- ✅ Implemented `useParams()` to extract dynamic job IDs.
- ✅ Handled loading states and error boundaries.

### ✍️ Forms & CRUD Operations
- ✅ Built an **Add Job** form using controlled components.
- ✅ Implemented `POST`, `DELETE`, and `PUT` requests to JSON Server.
- ✅ Used `fetch()` and async/await for API calls.
- ✅ Validated form fields with simple checks and error messages.

### 🔔 User Experience
- ✅ Added toast notifications using **React Toastify** for feedback on actions.
- ✅ Deployed production build using Vite.

---

## 🧠 Core React Concepts Covered

| 🔑 Concept | 📘 Description |
|-----------|----------------|
| `useState()` | Local state management for UI interactions |
| `useEffect()` | Lifecycle hook for side effects & data fetching |
| `useParams()` | Extracting dynamic route values |
| Conditional Rendering | UI control based on state & data |
| Props | Parent-to-child data flow |
| Controlled Inputs | Syncing form input with component state |
| CRUD with API | Create, Read, Update, Delete using JSON Server |
| React Router | Multi-page SPA navigation |

---
## 👤 Author

**Vedant Manek**  
📧 [vedantmanek16@gmail.com](mailto:vedantmanek16@gmail.com) 
🐙 GitHub: [@VedantManek16](https://github.com/VedantManek16)

---

## 🚧 Future Improvements

- 🔍 Add job filtering by tags, location, or salary  
- 📜 Implement pagination or infinite scroll  
- 🔐 Add user authentication for job posting  
- ☁️ Connect to a real backend (Express.js, Firebase, Supabase, etc.)

## 📦 Project Setup (Quick Start)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/VedantManek16/react-job-board-app.git
   cd react-job-board-app

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start JSON Server (Mock API)**

   ```bash
   npx json-server --watch data/jobs.json --port 5000
   ```

4. **Run React App (Dev Server)**

   ```bash
   npm run dev
   ```

> 🚀 React App: [http://localhost:5173](http://localhost:5173)
> 🔌 JSON Server API: [http://localhost:5000/jobs](http://localhost:5000/jobs)

```
```
