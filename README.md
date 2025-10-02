# 🍳 Recipe Book App [[LIVE]](https://recipebook-emilyclam.onrender.com/)

A full-stack web application where users can **search, view, and save recipes**.  

> The live app is hosted on **Render** for free. As a result, the backend takes **~30 seconds** to boot up. Thanks for your patience!

<br>

## 🚀 Features
- 🔐 **User Authentication** – Sign up, log in, and manage sessions using JWT.  
- 🍽 **Recipe Search** – Scrapes recipes from [AllRecipes](https://www.allrecipes.com/) with BeautifulSoup.  
- 📖 **Save Favorites** – Users can bookmark and manage their recipe collection.  
- ⚡ **Full-Stack CRUD** – Create, Read, Update, and Delete user data.  
- 🌐 **Deployed** – Accessible live on Render.

<br>

## 🛠 Tech Stack
**Frontend**: React  
**Backend**: Django REST Framework  
**Database**: PostgreSQL  
**Web Scraping**: BeautifulSoup (Python)  
**Authentication**: JWT (djangorestframework-simplejwt)  
**Hosting**: Render  

<br>

## 📸 Screenshots

![Login Page](/frontend/public/login.png)
![Search Page](/frontend/public/search.png)
![Saved Page](/frontend/public/saved.png)
![Profile Page](/frontend/public/profile.png)

---

## 📦 Installation & Setup
### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- PostgreSQL

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```