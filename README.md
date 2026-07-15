# Serenity

A modern, responsive mental health web application designed to promote mental wellness by providing users with educational resources, self-assessment tools, therapist information, and an intuitive appointment booking experience. Built with React, React Router, Tailwind CSS, and Vite, this project demonstrates modern front-end development principles, component-based architecture, client-side routing, and responsive user interface design.

---

## Overview

Serenity is a front-end mental health platform that enables users to access reliable mental health information, complete self-assessment quizzes, browse therapist profiles, and schedule appointments through a user-friendly interface. The application focuses on creating an accessible and engaging digital experience while demonstrating best practices in modern React development.

---

## Features

### Responsive User Interface

* Clean and modern landing page
* Fully responsive design for desktop, tablet, and mobile devices
* Intuitive navigation with React Router

### Therapist Directory

* Browse available therapists
* View therapist profiles and specialties
* Easy-to-navigate therapist listings

### Appointment Booking

* Interactive multi-step booking workflow
* User-friendly appointment scheduling interface
* Simulated booking confirmation

### Mental Health Assessment

* Interactive self-assessment questionnaire
* Immediate feedback based on responses
* Client-side score calculation

### Mental Health Chatbot

* Rule-based virtual assistant
* Answers common mental health questions
* Provides guidance and helpful resources

### Educational Resources

* Mental health articles and wellness tips
* Information on common mental health conditions
* Self-help resources for users

### Crisis Support

* Dedicated crisis support page
* Emergency mental health resources
* Quick access to important support information

---

## Technologies Used

| Technology        | Purpose                                    |
| ----------------- | ------------------------------------------ |
| React             | Component-based user interface development |
| React Router      | Client-side routing and navigation         |
| Tailwind CSS      | Styling and responsive design              |
| Vite              | Fast development server and build tool     |
| JavaScript (ES6+) | Application logic and interactivity        |

---

## How to Run the Project

### Method 1: Download ZIP

1. Download the project ZIP file.
2. Extract the project folder.
3. Open the folder in Visual Studio Code or your preferred code editor.
4. Install project dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the URL displayed in your terminal (typically `http://localhost:5173`).

---

### Method 2: Clone Repository

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd serenity
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Production Build

Generate a production-ready build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── CrisisBanner.jsx
│   ├── ui/
│   │   ├── Card.jsx
│   │   └── PathDivider.jsx
│   ├── BookingCalendar.jsx
│   ├── Chatbot.jsx
│   ├── QuizWidget.jsx
│   ├── ServiceCard.jsx
│   └── TherapistCard.jsx
├── data/
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```

---

## Available Routes

| Route             | Description                  |
| ----------------- | ---------------------------- |
| `/`               | Home Page                    |
| `/about`          | About Serenity               |
| `/services`       | Services                     |
| `/conditions`     | Mental Health Conditions     |
| `/conditions/:id` | Individual Condition Details |
| `/resources`      | Mental Health Resources      |
| `/crisis`         | Crisis Support               |
| `/booking`        | Appointment Booking          |
| `/assessment`     | Self-Assessment Quiz         |
| `/contact`        | Contact                      |
| `/privacy`        | Privacy Policy               |
| `/terms`          | Terms & Conditions           |

---

## Key Concepts Demonstrated

* Component-Based Architecture
* React Hooks
* Client-Side Routing
* State Management
* Event Handling
* Conditional Rendering
* Responsive Web Design
* Reusable UI Components
* Form Handling
* Modern JavaScript (ES6+)

---

## Application Workflow

The application follows a simple user journey:

1. Users explore the homepage and available services.
2. Browse therapist profiles and mental health resources.
3. Complete a self-assessment questionnaire.
4. Interact with the chatbot for general guidance.
5. Schedule an appointment using the booking interface.
6. Access crisis support information whenever needed.

---

## Learning Objectives

This project was developed to practice:

* Building modern React applications
* Creating reusable React components
* Managing application state
* Implementing client-side routing
* Designing responsive user interfaces
* Working with Tailwind CSS
* Creating accessible and user-friendly web applications
* Structuring scalable front-end projects

---

## Project Notes

* This is a front-end application only.
* Appointment bookings are simulated and are not stored in a database.
* The chatbot uses predefined responses and does not use artificial intelligence.
* Self-assessment results are generated entirely on the client side.
* No backend services or authentication have been implemented.

---

## Future Improvements

* User authentication and accounts
* Backend API integration
* Real appointment scheduling with database support
* Secure therapist dashboard
* AI-powered mental health chatbot
* Personalized user dashboard
* Progress tracking and mood history
* Email notifications and appointment reminders
* Online therapy session integration
* Dark mode support

---

## Contributing

Contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## License

This project is open-source and available under the MIT License.

---

## Author

**Denis Mwangi**

📧 [deniswambui6@gmail.com](mailto:deniswambui6@gmail.com)

If you found this project useful, consider giving it a ⭐ on GitHub!
