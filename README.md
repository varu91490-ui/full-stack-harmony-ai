# 🌊 HarmoniOcean AI

HarmoniOcean AI is a modern full-stack web application designed to help fishers, divers, and coastal communities identify and report marine pollution, biodiversity risks, and unsafe fishing conditions using AI-assisted analysis.

The platform focuses on environmental awareness, community participation, and ocean conservation through a simple and interactive user experience.

---

# 🚀 Features

## Frontend Features
- Modern ocean-inspired responsive UI
- Login page
- Dashboard
- Upload image/video page
- AI prediction results page
- Community missions page
- Rewards dashboard
- Responsive design for mobile and desktop
- Smooth animations and transitions
- Local loading states and notifications

## Backend Features
- FastAPI backend
- REST API architecture
- Image upload support
- Mock AI prediction engine
- Geotag validation logic
- JSON API responses
- Modular backend structure
- Supabase integration support

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- Framer Motion

## Backend
- Python FastAPI
- Uvicorn
- python-multipart
- Pillow
- requests

## Database / Backend Services
- Supabase

---

# 📂 Project Structure

```plaintext
harmoniocean-ai/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── uploads/
│   ├── services/
│   └── main.py
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/harmoniocean-ai.git
```

---

# 🎨 Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Frontend runs on:

```plaintext
http://localhost:5173
```

---

# 🧠 Backend Setup

## Navigate to backend folder

```bash
cd backend
```

## Create virtual environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

---

## Install dependencies

```bash
pip install -r requirements.txt
```

---

## Run backend

```bash
uvicorn main:app --reload
```

Backend runs on:

```plaintext
http://localhost:8000
```

---

# 🔗 API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| /login | POST | User login |
| /upload | POST | Upload image/video |
| /analyze | POST | AI prediction analysis |
| /missions | GET | Fetch missions |
| /points | GET | Fetch rewards/points |

---

# 🌍 Main Functionalities

## Upload & Analysis
Users can upload marine-related photos/videos for AI-assisted analysis.

## AI Prediction System
The backend generates mock AI predictions such as:
- Plastic pollution detection
- Fish species identification
- Pollution risk assessment
- Safe fishing suggestions

## Community Missions
Users can join cleanup missions and earn reward points.

## Rewards System
Users receive points for participation and environmental contributions.

---

# 📱 Responsive Design

The application is optimized for:
- Mobile devices
- Tablets
- Desktop screens

---

# 🔒 Offline-First Concept

The frontend uses local storage and cached states to simulate offline-first functionality.

---

# 🚀 Future Improvements

- Real TensorFlow Lite integration
- Federated learning support
- Real-time marine pollution prediction
- Live geolocation tracking
- Push notifications
- Cloud image storage
- Advanced analytics dashboard

---
