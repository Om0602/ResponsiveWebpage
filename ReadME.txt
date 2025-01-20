# Responsive Webpage with Fixed Navbar, Collapsible Menu, and Dynamic Scaling

This project is a simple responsive webpage that features:
- A **fixed navbar** that stays in place when scrolling.
- A layout with three sections: a **left menu**, **main content area**, and **right-side panel**.
- A **collapsible left menu** that can be toggled for mobile devices.
- A **footer** that stays at the bottom of the page.
- **Dynamic scaling** based on the screen width (adjusts to 50%, 75%, 80%, or 90%).

## Features
1. **Fixed Navbar**: The navbar is always visible at the top of the page even when scrolling.
2. **Responsive Layout**: The page adjusts based on screen size using CSS media queries.
3. **Collapsible Left Menu**: The left menu collapses on smaller screens and can be toggled via a button.
4. **Dynamic Page Scaling**: The page shrinks or expands based on the window size.

## Project Structure
MyWebpageProject/ ├── index.html # Main HTML file ├── styles.css # CSS styles ├── script.js # JavaScript for interactivity └── README.md # Project documentation (this file)


## Prerequisites
Before running the project, ensure you have the following installed on your machine:
- **Visual Studio Code** (or any code editor of your choice).
- **Live Server** extension in Visual Studio Code (for live preview of the project).

### Installing Visual Studio Code (if not already installed)
1. Download from [Visual Studio Code Website](https://code.visualstudio.com/).
2. Install it following the prompts for your operating system.

### Installing Live Server Extension (for auto-refresh of webpage)
1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window.
3. Search for "Live Server" and click **Install**.

## Getting Started

1. **Clone or Download the Repository**:
   - To clone the repository, use this command in your terminal:
     ```
     git clone https://github.com/your-username/MyWebpageProject.git
     ```

   - Alternatively, you can download the ZIP file from the GitHub page and extract it.

2. **Open the Project in Visual Studio Code**:
   - Launch Visual Studio Code.
   - Open the project folder by going to **File > Open Folder...** and selecting the project directory.

3. **Open the Project with Live Server**:
   - Right-click the `index.html` file in VS Code and select **Open with Live Server**.
   - This will open the webpage in your default browser and automatically reload the page whenever you make changes.

4. **Testing Responsiveness**:
   - Resize the browser window or use Developer Tools (F12 or Ctrl+Shift+I) to simulate various screen sizes.
   - The page will adjust according to the width of the screen based on the CSS media queries and JavaScript scaling.

## How It Works

- The **fixed navbar** is implemented with CSS using `position: fixed` so it stays at the top when scrolling.
- The **collapsible left menu** uses a toggle button to show or hide the menu on smaller screens. This is done with JavaScript (`toggleMenu()` function).
- The **responsive design** is achieved with CSS media queries that adjust the layout and content visibility based on the screen width.
- **JavaScript scaling** adjusts the entire page size dynamically when the screen width changes:
  - Between **600px** or less: Scale to 50%.
  - Between **700px - 767px**: Scale to 75%.
  - Between **992px - 1600px**: Scale to 90%.
  - More than **1600px**: Full scale (100%).

## Contributing

1. Fork the repository to your GitHub account.
2. Clone your forked repository to your local machine.
3. Make any changes you want (fix bugs, improve design, etc.).
4. Commit your changes and push them to your forked repository.
5. Create a pull request to contribute to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out to me at omwagh27004@gmail.com


