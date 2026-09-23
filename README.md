# Little Lemon Restaurant App

This is the front-end web application developed for the Meta Front-End Developer Capstone project on Coursera. Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. 

## Key Features
* **Semantic & Responsive Design:** Layout adapts perfectly to both desktop and mobile devices using CSS Grid and Flexbox.
* **Booking System:** A robust form that allows users to select dates, dynamic available times, party size, and occasions.
* **Form Validation:** Client-side HTML5 and JavaScript validations ensure all fields satisfy constraints before processing.
* **Accessibility:** Integrated standard ARIA labels, semantic HTML tags, and form helpers to ensure smooth navigation for screen readers.
* **Local Storage Persistence:** Booking data is saved locally so information is maintained across browser sessions.
* **Automated Tests:** Built-in unit tests verifying component behaviors, DOM elements, and state reducer logic using Jest and React Testing Library.

## Tech Stack
* React.js (Bootstrapped with Create React App)
* React Router DOM for internal navigation
* CSS3 for custom styling
* HTML5

## Installation and Setup

1. **Clone the repository:**
   Ensure you have Git installed, then download the code locally.

2. **Navigate to the project folder:**
   `cd capstone`

3. **Install the dependencies:**
   Make sure you have Node.js installed, then run:
   `npm install`

4. **Start the development server:**
   `npm start`
   The application will run automatically and open in your browser at [http://localhost:3000](http://localhost:3000).

## Running Tests

To run the automated test suite, execute the following command in the terminal:
`npm test`

This command will launch the interactive test watcher. Press `a` to run all available tests.

## API Integration Note
The booking system simulates communication using a mock API script provided by Coursera (`https://raw.githubusercontent.com/courseraap/capstone/main/api.js`), which is embedded in the `public/index.html` file.