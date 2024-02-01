Overview
Foodiez is a modern and efficient web application designed to showcase restaurant information, making it easy for users to discover and explore various dining options. The project utilizes cutting-edge technologies and best practices to ensure a seamless and performant user experience.

Tech Stack
Frontend
Parcel: The project is built using Parcel, a blazing-fast, zero-configuration web application bundler. It supports various features like Hot Module Replacement (HMR), file watching, caching, image optimization, and more.

React: The frontend is developed using React, a popular JavaScript library for building user interfaces. React provides a component-based architecture for creating reusable UI elements.

React Hooks: The project leverages React Hooks, specifically useState() and useEffect(), for managing state and side effects in functional components.

Redux Toolkit: Redux is used for state management, with the help of the Redux Toolkit. It simplifies the process of building a Redux store, creating slices, and dispatching actions.

Frontend Structure
Components
Header: Displays the website's logo and navigation items.

Body:

Search: Allows users to search for restaurants.
Restaurant Container: Contains individual restaurant cards with information such as images, names, star ratings, delivery times, and cuisines.
Footer: Includes copyright information, links, address, and contact details.

Development Workflow
Parcel Dev Build:

Utilizes Parcel for a fast and efficient development build.
Implements Hot Module Replacement (HMR) for exchanging, adding, or removing modules during runtime without a full reload.
File Watching Algorithm:

Written in C++ for efficient file watching.
Caching:

Improves build speed by caching certain assets.
Image Optimization:

Optimizes images for better performance.
Minification:

Minifies files to reduce their size.
Bundling:

Bundles all files into one to minimize HTTP requests.
Compressing:

Compresses files for faster loading.
Consistent Hashing:

Uses consistent hashing for efficient resource distribution.
Code Splitting:

Implements code splitting for better resource management.
Differential Bundling:

Provides support for older browsers.
Tree Shaking:

Removes unused code for a smaller bundle size.
HTTPS Hosting:

Hosts the website on HTTPS for a secure connection.
Redux Toolkit Integration
Installation:

bash
Copy code
npm install @reduxjs/toolkit react-redux
Store Setup:

Configures and builds the Redux store.
Connecting to the App:

Connects the Redux store to the React application.
Slice (cartSlice):

Defines a slice of the Redux store for managing the shopping cart state.
Dispatch and Selector:

Utilizes the dispatch function to trigger actions and selectors to retrieve specific slices of the state.
Testing
Types of Testing
Unit Testing:

Tests individual units of code in isolation.
Integration Testing:

Tests the integration of multiple units or components.
End-to-End Testing (e2e Testing):

Tests the entire application workflow.
Setting up Testing
Dependencies:

Installs React Testing Library, Jest, and Babel dependencies.
Configuration:

Configures Babel to support JSX in test cases.
Configures Parcel to disable default Babel transpilation.
Initializes Jest configuration.
Environment Setup:

Configures Jest to use the jsdom environment.
React Testing Library:

Ensures the installation of @testing-library/jest-dom.
