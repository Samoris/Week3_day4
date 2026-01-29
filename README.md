# Interactive JavaScript Events Page

This project demonstrates various JavaScript DOM manipulation and event handling techniques by adding interactive features to a Bootstrap-based webpage.

## Project Overview

This is an educational project that transforms a static HTML page into an interactive experience using pure JavaScript. The project implements 9 different interactive features without modifying the original HTML file.

## Files Structure

- [`exo_events.html`](exo_events.html) - The original HTML page (do not modify)
- [`script.js`](script.js) - JavaScript file containing all interactive features
- [`README.md`](README.md) - This documentation file

## How to Run

1. Clone this repository or download the files
2. Open [`exo_events.html`](exo_events.html) in a web browser
3. Open browser developer tools (F12) to see console outputs
4. Test the various interactive features listed below

## Interactive Features

### Core Features

#### Feature 1 & 1-bis: Footer Click Counter
- **Action**: Click on the footer area
- **Result**: Console displays "click number X" (starting from 1, incrementing with each click)
- **Implementation**: Uses [`addEventListener('click')`](script.js:14) with a counter variable

#### Feature 2: Hamburger Menu Toggle
- **Action**: Click the hamburger menu button (three lines) in the top-right navbar
- **Result**: Toggles the visibility of the navigation header
- **Implementation**: Uses [`classList.toggle('collapse')`](script.js:27) on the navbarHeader element

#### Feature 3: First Card Text Color
- **Action**: Click the "Edit" button on the first card (HTML card)
- **Result**: Card text turns red permanently (until page reload)
- **Implementation**: Sets [`style.color = 'red'`](script.js:35) on the card text

#### Feature 4: Second Card Text Toggle
- **Action**: Click the "Edit" button on the second card (CSS card)
- **Result**: Card text toggles between green and normal color
- **Implementation**: Uses conditional logic to toggle [`style.color`](script.js:41) between 'green' and ''

#### Feature 5: Bootstrap Toggle (Nuclear Option)
- **Action**: Double-click on the navbar area
- **Result**: Toggles Bootstrap CSS on/off, dramatically changing page appearance
- **Implementation**: Toggles [`disabled`](script.js:53) property on the Bootstrap CSS link

### Bonus Features

#### Feature 6: Card Shrink on Hover
- **Action**: Hover over any "View" button on the cards
- **Result**: Card shrinks (text disappears, image becomes 20% size, buttons remain)
- **Implementation**: Uses [`mouseenter/mouseleave`](script.js:62) events with style modifications

#### Feature 7: Move Last Card to First
- **Action**: Click the gray "==>" button
- **Result**: Last card (bottom-right) moves to first position (top-left)
- **Implementation**: Uses [`insertBefore()`](script.js:75) to reorder DOM elements

#### Feature 8: Move First Card to Last
- **Action**: Click the blue "<===" button  
- **Result**: First card moves to last position
- **Implementation**: Uses [`preventDefault()`](script.js:84) and [`insertBefore()`](script.js:89) with nextSibling

#### Feature 9: Keyboard Layout Shortcuts
- **Action**: Focus on the "JS & Events" logo and press keys:
  - `a` - Page content moves to left (4 columns)
  - `y` - Page content moves to center (4 columns with offset)
  - `p` - Page content moves to right (4 columns with larger offset)
  - `b` - Returns to normal layout
- **Implementation**: Uses [`keypress`](script.js:93) event with Bootstrap class manipulation

## Technical Implementation Notes

### DOM Manipulation Techniques Used
- **Element Selection**: [`querySelector()`](script.js:13), [`querySelectorAll()`](script.js:32), [`getElementById()`](script.js:25)
- **Event Handling**: [`addEventListener()`](script.js:14) for various event types (click, dblclick, mouseenter, mouseleave, keypress)
- **Style Modification**: Direct [`style`](script.js:35) property manipulation
- **Class Manipulation**: [`classList.toggle()`](script.js:27), [`classList.add()`](script.js:99), [`classList.remove()`](script.js:96)
- **DOM Structure**: [`insertBefore()`](script.js:75), [`nextSibling`](script.js:89)

### Best Practices Applied
- **DOM Ready**: Wrapped all code in [`DOMContentLoaded`](script.js:2) event listener
- **Event Prevention**: Used [`preventDefault()`](script.js:84) to stop default link behavior
- **Loop Variables**: Used `let` instead of `var` in [`forEach`](script.js:46) to avoid closure issues
- **Accessibility**: Made logo [`focusable`](script.js:106) with tabindex for keyboard events

### Console Output
The page logs various actions to the browser console:
- Footer clicks with incremental counter
- Confirmation message when all features are loaded

## Learning Objectives Achieved

This project demonstrates mastery of:
1. **DOM Navigation**: Finding and selecting HTML elements
2. **Event Handling**: Responding to user interactions
3. **DOM Manipulation**: Modifying content, styles, and structure
4. **JavaScript Fundamentals**: Variables, conditionals, loops, functions
5. **Bootstrap Integration**: Working with CSS frameworks

## Browser Compatibility

This project uses standard JavaScript DOM methods and should work in all modern browsers. Requires:
- ES6+ support for `const`/`let` declarations
- Modern DOM API support

## Usage Tips

1. Open browser developer tools to see console messages
2. Try all interactive elements in different sequences
3. Notice how some features interact with each other (e.g., card reordering affects hover behavior)
4. Use the keyboard shortcuts while focused on the logo

## Project Structure

```
JS_events/
├── exo_events.html    # Main HTML file with Bootstrap styling
├── script.js          # JavaScript implementation of all features
└── README.md          # This documentation