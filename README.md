# Flavor Book Courese Project | Softuni "ReactJS" - October 2025

A modern, user-friendly React web application for exploring and managing cooking recipes.
The platform enables users to discover newly added recipes, filter them by popularity or date, create and like recipes, and manage their accounts with login/logout functionality.

## Installation & Setup
- **Clone the repository**
   - git clone https://github.com/valerig1/flavor-book-react-softuni.git
   - cd flavor-book-react-softuni 

- **Install client dependencies**
    - cd client
    - npm install

- **Run the client in development mode**
    - npm run dev

- **Run the SoftUni practice server**
    - cd server
    - node server.js
> This project works with the [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server) (run it from the `server` folder as instructed in the repo, no installation of dependencies is required).

## Project Architecture

The project follows a client–server architecture with two main parts: a React front-end and the SoftUni Practice Server back-end.

**Client (React Application)**
  
   - **Directory**: client/
    
   - **Responsibilities:**
     - Rendering UI using React components
     - Client-side routing
     - Managing user authentication and session state
     - Fetching, creating, and liking recipes through API requests
     - Filtering recipes by date or popularity
     - Managing form validation and data handling
     
**Server (SoftUni Practice Server)**  
   - **Directory**: server/

   - **Responsibilities:**
     - User registration, login, and logout
     - Session handling and token validation
     - Storing and managing recipe data
     - Managing likes and recipe filtering
     - Providing REST endpoints used by the client
