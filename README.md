# 💰 Expense & Salary Management System

A full-stack web application for managing personal finances, tracking expenses, and monitoring salary information.

## ✨ Features

- 🔐 **User Authentication** - Secure register and login system with JWT tokens
- 💵 **Salary Management** - Add, view, and manage salary records
- 💸 **Expense Tracking** - Track daily expenses with categories
- 📊 **Dashboard** - Visual overview of your financial status
- 🔄 **RESTful API** - Well-structured backend API

## 🛠️ Tech Stack

### Frontend
- React.js 19
- React Router DOM
- Axios (HTTP client)
- CSS Modules

### Backend
- Node.js
- Express.js
- MySQL (Database)
- JWT (Authentication)
- bcryptjs (Password hashing)

## 📁 Project Structure

```
Backend copy/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # Database configuration
│   │   │   └── jwt.js        # JWT configuration
│   │   ├── middleware/
│   │   │   └── auth.middleware.js  # Auth middleware
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   └── auth.service.js
│   │   │   ├── expense/
│   │   │   │   ├── expense.controller.js
│   │   │   │   ├── expense.routes.js
│   │   │   │   └── expense.service.js
│   │   │   └── salary/
│   │   │       ├── salary.controller.js
│   │   │       ├── salary.routes.js
│   │   │       └── salary.service.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js      # Axios configuration
│   │   ├── components/
│   │   │   ├── ExpenseForm.js
│   │   │   ├── ExpenseList.js
│   │   │   ├── Navbar.js
│   │   │   ├── SalaryForm.js
│   │   │   └── *.css
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Backend copy
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Backend Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Set up the Database**
   
   Create a MySQL database and run the necessary migrations (if any).

5. **Set up the Frontend**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```
   Application will open in `http://localhost:3000`

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Salary
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/salary` | Get all salary records |
| POST | `/api/salary` | Add salary record |
| DELETE | `/api/salary/:id` | Delete salary record |

### Expenses
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Get all expenses |
| POST | `/api/expenses` | Add expense |
| DELETE | `/api/expenses/:id` | Delete expense |

## 🔒 Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## 📦 Available Scripts

### Backend
```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
```

### Frontend
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

Made with ❤️ for personal finance management

