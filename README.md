# Spreadsheet UI Prototype

This project is a static, front-end-only React prototype designed to mimic a spreadsheet view, adhering to the requirements of the Inscripts React Intern Assignment. It focuses on pixel-close layout, spreadsheet-like user experience (editable cells, basic keyboard navigation), and uses TypeScript with Tailwind CSS for styling.

## Features

* **Pixel-Close Layout:** The UI is designed to closely match the provided screenshots, including the header, toolbars, main table, and footer tabs.
* **Spreadsheet-Like Experience:**
    * **Editable Cells:** Most cells in the main table are editable. Click on a cell to activate an input field, type, and press `Enter` or click outside to save changes.
    * **Keyboard Navigation (Stretch Goal Implemented):** Use arrow keys (`Up`, `Down`, `Left`, `Right`) to navigate between editable cells. Press `Enter` to move to the next editable cell in the row, or to the first editable cell of the next row if at the end of the current row.
* **Responsive Design:** The layout adapts to different screen sizes, though the primary focus is on a desktop spreadsheet view.
* **Interactive UI Elements:** Buttons and tabs change state or log actions to the console (though actual backend logic is not implemented as per assignment).
* **TypeScript:** The project is built with TypeScript for enhanced code quality and type safety.
* **Tailwind CSS:** Utility-first CSS framework for rapid and consistent styling.

## Tech Stack

* **React 18**
* **TypeScript (strict mode)**
* **Tailwind CSS**
* **Custom Table Component:** A minimal table component is implemented directly within `App.tsx` to handle the grid and editable cells.
* No external state management library (local component state is used).

## Setup and Running the Project

Follow these steps to get the project up and running on your local machine:

1.  **Prerequisites:**
    * Node.js (LTS version recommended) and npm (Node Package Manager) installed. You can download them from [nodejs.org](https://nodejs.org/).

2.  **Create a New React Project:**
    If you haven't already, create a new React project using Create React App (CRA) with a TypeScript template:
    ```bash
    npx create-react-app my-spreadsheet-app --template typescript
    # Or using yarn:
    # yarn create react-app my-spreadsheet-app --template typescript
    ```
    Navigate into your new project directory:
    ```bash
    cd my-spreadsheet-app
    ```

3.  **Install Tailwind CSS:**
    Install Tailwind CSS, PostCSS, and Autoprefixer as development dependencies:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    # Or using yarn:
    # yarn add -D tailwindcss postcss autoprefixer
    ```

4.  **Initialize Tailwind CSS Configuration:**
    Generate your `tailwind.config.js` and `postcss.config.js` files:
    ```bash
    npx tailwindcss init -p
    ```

5.  **Configure `tailwind.config.js`:**
    Open `tailwind.config.js` and update the `content` array to include paths to your React components:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

6.  **Add Tailwind Directives to CSS:**
    Open your project's main CSS file (usually `src/index.css`) and add the following at the very top:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

7.  **Paste the Application Code:**
    Replace the entire content of `src/App.tsx` with the code provided in the `src/App.tsx` immersive artifact.

8.  **Start the Development Server:**
    Run your React application:
    ```bash
    npm start
    # Or using yarn:
    # yarn start
    ```
    This will open your application in your web browser (usually `http://localhost:3000`).

## Trade-offs and Considerations

* **Custom Table vs. `react-table`:** While `react-table` (now TanStack Table) is a powerful library for complex table features, a custom component was chosen for this prototype to meet the "minimal table component" criteria and to demonstrate direct control over cell editing and keyboard navigation within React's local state. For a production-grade application with more advanced features (sorting, filtering, pagination, virtualized scrolling), `react-table` would be a more robust choice.
* **Pixel-Perfect Replication:** Achieving absolute pixel-perfect replication without direct access to the Figma file (only screenshots) involves some estimation for spacing and sizing. Minor discrepancies might exist.
* **Status/Priority Badges:** The logic for updating badge colors based on text input is simplified. In a real application, these might be dropdowns or have more sophisticated validation and mapping to predefined styles.
* **Data Structure:** The `tableData` is hardcoded. In a real application, this would be fetched from an API or managed through a more complex state.
* **Error Handling/Validation:** Basic input validation and error handling for cell edits are not extensively implemented.
* **Stretch Goals:**
    * **Keyboard Navigation:** Basic arrow key navigation and `Enter` key behavior are implemented. More advanced features like `Tab` key navigation across rows/columns, `Shift+Tab` for reverse navigation, or `Esc` to cancel edits could be added.
    * **Column Resize/Hide:** These features were not implemented in this version due to time constraints and the complexity involved in managing column widths and visibility dynamically, which often requires a more robust table library or significant custom DOM manipulation.

## Linting and Type Checking

The code is written in TypeScript and aims to be type-safe. To ensure it passes linting and type-checking:

* **Type Check:** TypeScript will perform type checking automatically during compilation. You can manually run it with:
    ```bash
    npx tsc --noEmit
    ```
* **Linting (ESLint + Prettier):** If your `create-react-app` setup includes ESLint and Prettier, they will run automatically during development and build. You can also run them manually:
    ```bash
    npm run lint
    # npm run format (if you have a format script for prettier)
    ```
    Ensure your IDE (like VS Code) has ESLint and Prettier extensions installed and configured to format on save.
