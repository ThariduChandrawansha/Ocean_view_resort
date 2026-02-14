# 🌊 Ocean View Resort - Professional Management System

A premium, full-stack hospitality management platform designed to provide a seamless booking experience for guests and a powerful administrative suite for resort operators. Built with modern technologies, the platform features high-end aesthetics, real-time data management, and automated guest services.

---

## ✨ Key Features

### 🏨 Guest Experience
- **Premium Landing Page**: Dynamic hero sections, curated room collections, and immersive "About Us" storytelling.
- **Smart Booking System**: Real-time availability checks and unified booking requests.
- **Personal Guest Dashboard**:
  - Track stay history and upcoming reservations.
  - Secure payment integration with digital checkouts.
  - **Digital Invoices**: Instant generation and printing of stay statements.
- **Instructional Help Center**: Step-by-step guides for account management and platform usage.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

### 🔐 Administrative & Staff Suite
- **Comprehensive Dashboards**: Real-time analytics and system health monitoring.
- **Reservation Lifecycle Management**: Efficient approval/rejection workflows with automated guest notifications.
- **Inventory Control**: Manage room categories, individual room status, and pricing dynamically.
- **Staff Operations**: Specialized views for room cleaning schedules and guest management.
- **User Management**: Control roles and access for both staff and registered guests.

---

## 🛠️ Technology Stack

### Frontend (Modern UI/UX)
- **Framework**: [React.js](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: Context API
- **Networking**: Axios
- **Animations**: Tailwind Animate & CSS Transitions

### Backend (Robust Services)
- **Language**: Java 17
- **Framework**: [Spring Boot 3.4.2](https://spring.io/projects/spring-boot)
- **Security**: Spring Security & Custom Auth Controllers
- **Communication**: Spring Mail Integration (Mailtrap)
- **Repository**: Spring Data MongoDB

### Database
- **NoSQL**: [MongoDB](https://www.mongodb.com/) (Local/Atlas support)

---

## 🚀 Getting Started

### Prerequisites
- **Java**: 17 or higher
- **Node.js**: v18+ & npm
- **MongoDB**: Running locally on port `27017`

### 1. Database Setup
Ensure MongoDB is running. The system will automatically create the `tharindu_ocean_view_resort` database upon first connection.

### 2. Backend Configuration
Navigate to `backend/src/main/resources/application.properties` and verify your settings:
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/tharindu_ocean_view_resort
server.port=8080

# For Email Notifications (Mailtrap recommended for dev)
spring.mail.host=sandbox.smtp.mailtrap.io
spring.mail.username=your_username
spring.mail.password=your_password
```

**Run Backend:**
```bash
cd backend
./mvnw spring-boot:run
```

### 3. Frontend Configuration
Ensure the API URL in the frontend matches your backend port (default: `8080`).

**Run Frontend:**
```bash
cd frontend
npm install
npm run dev
```
The application will be accessible at: `http://localhost:5173`

---

## 📂 Project Structure

```text
Ocean_view_resort/
├── backend/                # Spring Boot Application
│   ├── src/main/java       # Controllers, Models, Services
│   └── src/main/resources  # Config & Mail Templates
├── frontend/               # React + Vite Application
│   ├── src/assets          # Premium Imagery & Brand Assets
│   ├── src/components      # Reusable UI (Header, Sidebars)
│   ├── src/pages           # Guest & Admin views
│   └── public/             # Static files
└── README.md
```

---

## 🤝 Development Workflow

1. **Feature Branching**: Use dedicated branches for new components.
2. **Linting**: Run `npm run lint` in the frontend to maintain code quality.
3. **Database Checks**: Use the built-in diagnostic at `GET /api/db-check` to verify connectivity.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Developed with ❤️ for Ocean View Resort.
