# AyushSync Website

This repository contains the frontend web application for the AyushSync platform. The AyushSync Website provides a user-friendly interface to interact with Ayush-related data, offering features such as user authentication, audit log viewing, problem list management, data search, and data upload capabilities.

## Features

*   **User Authentication:** Secure login and registration for users.
*   **Audit Logs:** View a comprehensive history of system activities.
*   **Problem List:** Manage and track various problems or issues.
*   **Data Search:** Efficiently search through Ayush-related data.
*   **Data Upload:** Upload new data to the AyushSync platform.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool that provides an extremely fast development experience.
*   **React Router:** For declarative routing in the application.
*   **CSS:** For styling the application.
*   **Axios (assumed):** For making HTTP requests to the backend API.

## Setup and Installation

Follow these steps to get the AyushSync Website up and running on your local machine.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/flashcodes-themayankjha/AyushSyncWeb.git
    cd AyushSyncWeb
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables (if applicable):**
    If your project uses environment variables (e.g., for API endpoints), create a `.env` file in the root directory based on a `.env.example` (if provided) and fill in the necessary values. For example:
    ```
    VITE_API_BASE_URL=https://ayush-auth.vercel.app
    ```

### Running the Application

#### Development Mode

To run the application in development mode with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).

#### Production Build

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with the optimized production build. You can then serve these static files using a web server of your choice.

## Project Structure

```
.
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Images, JSON animations, etc.
│   ├── components/         # Reusable React components
│   ├── App.jsx             # Main application component
│   ├── Login.jsx           # Login page component
│   ├── AuditLogs.jsx       # Audit logs page component
│   ├── Problem_list.jsx    # Problem list page component
│   ├── Search.jsx          # Search page component
│   ├── Upload.jsx          # Upload page component
│   ├── router.jsx          # React Router configuration
│   └── ...                 # Other core files
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Contributing

If you wish to contribute, please follow standard GitHub practices: fork the repository, create a new branch for your features or bug fixes, and submit a pull request.

## License

(Optional: Add your project's license information here)
