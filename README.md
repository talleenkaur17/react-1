# Foodiez Web Application

Foodiez is a modern and efficient web application designed to provide users with an easy and enjoyable experience in discovering and exploring various dining options. The project embraces cutting-edge technologies and follows best practices to ensure a seamless and performant user interface.

## Tech Stack

### Frontend

- **Parcel:** A blazing-fast, zero-configuration web application bundler that supports features like Hot Module Replacement (HMR), file watching, caching, and image optimization.
- **React:** A popular JavaScript library for building user interfaces, offering a component-based architecture for creating reusable UI elements.
- **React Hooks:** Leveraging `useState()` and `useEffect()` for effective state management and handling side effects in functional components.
- **Redux Toolkit:** Utilizing Redux for state management, with Redux Toolkit simplifying the process of building a Redux store, creating slices, and dispatching actions.

## Frontend Structure

### Components

- **Header:** Displays the website's logo and navigation items.
- **Body:**
  - **Search:** Allows users to easily search for restaurants.
  - **Restaurant Container:** Contains individual restaurant cards with details such as images, names, star ratings, delivery times, and cuisines.
- **Footer:** Includes copyright information, links, address, and contact details.

## Development Workflow

1. **Parcel Dev Build:**
   - Utilizes Parcel for a fast and efficient development build.
   - Implements Hot Module Replacement (HMR) for exchanging, adding, or removing modules during runtime without a full reload.
2. **File Watching Algorithm:**
   - Implemented in C++ for efficient file watching.
3. **Caching:**
   - Improves build speed by caching certain assets.
4. **Image Optimization:**
   - Optimizes images for enhanced performance.
5. **Minification:**
   - Minifies files to reduce their size.
6. **Bundling:**
   - Bundles all files into one to minimize HTTP requests.
7. **Compressing:**
   - Compresses files for faster loading.
8. **Consistent Hashing:**
   - Uses consistent hashing for efficient resource distribution.
9. **Code Splitting:**
   - Implements code splitting for better resource management.
10. **Differential Bundling:**
    - Provides support for older browsers.
11. **Tree Shaking:**
    - Removes unused code for a smaller bundle size.
12. **HTTPS Hosting:**
    - Hosts the website on HTTPS for a secure connection.

## Redux Toolkit Integration

- **Installation:**
  ```bash
  npm install @reduxjs/toolkit react-redux
-**Store Setup:**
Configures and builds the Redux store.
Connecting to the App:
Connects the Redux store to the React application.
Slice (cartSlice):
Defines a slice of the Redux store for managing the shopping cart state.
Dispatch and Selector:
Utilizes the dispatch function to trigger actions and selectors to retrieve specific slices of the state.
# Testing

## Types of Testing

### Unit Testing

Unit testing involves testing individual units of code in isolation. It ensures that each unit of code, typically a function or method, behaves as expected.

### Integration Testing

Integration testing focuses on testing the integration of multiple units or components. It verifies that different parts of the system work together as intended.

### End-to-End Testing (e2e Testing)

End-to-End testing, often referred to as e2e testing, involves testing the entire application workflow from start to finish. It simulates real user scenarios to ensure that the application functions correctly.

## Setting up Testing

### Dependencies

To set up testing, ensure the following dependencies are installed:

- [React Testing Library](https://testing-library.com/react): A testing utility for React.
- [Jest](https://jestjs.io/): A JavaScript testing framework.
- Babel dependencies.

### Configuration

Configure the testing environment by:

- Configuring Babel to support JSX in test cases.
- Configuring Parcel to disable default Babel transpilation.
- Initializing Jest configuration.

### Environment Setup

Set up the testing environment by:

- Configuring Jest to use the jsdom environment, a JavaScript implementation of the DOM.
- Ensuring the installation of `@testing-library/jest-dom` to enhance Jest assertions with additional matchers for the DOM.

Ensure these steps are completed to establish a robust testing environment for your project.

