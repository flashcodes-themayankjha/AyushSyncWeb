# AyushSync Website

## Project Description
The AyushSync Website serves as the frontend interface for the AyushSync platform, providing users with a seamless experience to interact with the system. This application is built using modern web technologies to ensure a responsive, efficient, and user-friendly experience.

## Features
- User Authentication (Login/Signup)
- Problem List Viewing
- Audit Logs
- File Upload functionality
- Search capabilities
- Responsive UI/UX

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool that provides an extremely fast development experience for modern web projects.
- **React Router DOM:** For declarative routing in React applications.
- **Axios:** Promise based HTTP client for the browser and node.js.
- **Tailwind CSS (or similar utility-first CSS framework):** For rapid UI development and styling. (Assuming based on modern React projects, though not explicitly in package.json)
- **ESLint:** For maintaining code quality and consistency.

## Setup

To get the AyushSync Website up and running on your local machine, follow these steps:

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd AyushWeb
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory of the project and add the necessary environment variables. An example might look like this:
    ```
    VITE_API_BASE_URL=http://localhost:8000/api
    ```
    (Adjust `VITE_API_BASE_URL` to your backend API endpoint)

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with the optimized production build.

## Deployment
This project is configured for deployment on platforms like Vercel, as indicated by the `public/_redirects` file.

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues.

## License
[Specify your license here, e.g., MIT, Apache 2.0, etc.]
