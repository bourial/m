# Team Autocomplete App

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Folder Structure](#folder-structure)
6. [Usage](#usage)

## Introduction

The **Team Autocomplete App** is a React-based application that demonstrates a reusable, well-structured, and efficiently designed autocomplete component using MUI Base UI and Tailwind CSS.

## Features

- **Autocomplete Component**: A customizable and reusable autocomplete component.
- **Team Details**: Displays detailed information about a selected team.
- **Loading State**: Displays a skeleton loader while data is being fetched.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for enhanced code quality and maintainability.
- **MUI Base UI**: Provides foundational components for building modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Query**: For fetching, caching, and updating server data in React applications.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/bourial/m
   ```

2. Navigate to the project directory:

   ```sh
   cd m
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

### Running the App

1.  ```sh
    npm start
    ```

    or

    ```sh
    yarn start
    ```

This will start the development server and open the app in your default browser.

## Folder Structure

```plaintext
team-autocomplete-app/
├── public/
├── src/
│   ├── components/
│   │   ├── custom-autocomplete.tsx
│   │   ├── team.tsx
│   │   ├── teams.tsx
│   ├── interfaces/
│   │   └── teams.ts
│   ├── services/
│   │   ├── queries.ts
│   │   └── teams.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── App.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Usage

1. The Teams component fetches team data and renders the **CustomAutocomplete** component.

2. Select a team from the autocomplete dropdown to view its details in the **Team** component.

3. The app provides a responsive design and a loading state while fetching data.
