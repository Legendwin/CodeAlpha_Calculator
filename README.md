# CodeAlpha_Calculator

A modern, fully-functional JavaScript calculator with a sleek user interface and comprehensive functionality. Built with vanilla JavaScript, HTML5, and CSS3.

## 🌟 Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Functions**: Clear all (C), clear current entry (CE), and backspace (⌫)
- **Decimal Support**: Full support for decimal numbers
- **Error Handling**: Division by zero detection and error display
- **Keyboard Support**: Use your keyboard for quick calculations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient background with smooth animations and intuitive button layout
- **Real-time Display**: Dual display showing both current and previous operands

## 📋 Project Structure

```
CodeAlpha_Calculator/
├── README.md
└── calculator/
    ├── index.html       # Main HTML file with calculator layout
    ├── calculator.css   # Styling and responsive design
    └── calculator.js    # Calculator logic and event handling
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional dependencies required

## 💻 How to Use

### Mouse/Touch Input
1. Click number buttons (0-9) to enter digits
2. Click an operator button (+, -, ×, ÷) to select an operation
3. Click the equals (=) button to calculate the result
4. Use special buttons:
   - **C**: Clear all and reset calculator
   - **CE**: Clear current entry only
   - **⌫**: Delete the last digit (backspace)

### Keyboard Shortcuts
- **Numbers**: `0-9` - Enter digits directly
- **Operators**: 
  - `+` - Addition
  - `-` - Subtraction
  - `*` - Multiplication
  - `/` - Division
- **Enter** or `=` - Calculate result
- **Escape** or `C` - Clear all
- **Delete** - Clear current entry
- **Backspace** - Delete last digit

## 🎨 Features in Detail

### Display System
- **Previous Operand**: Shows the first number and selected operation
- **Current Operand**: Shows the number being entered or the result

### Operations
- **Addition (+)**: Adds two numbers
- **Subtraction (-)**: Subtracts the second number from the first
- **Multiplication (×)**: Multiplies two numbers
- **Division (÷)**: Divides the first number by the second (handles division by zero)

### Error Handling
- Shows "Error" when attempting to divide by zero
- Automatically resets on the next number input after an error

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, flexbox, and grid layout
- **JavaScript (ES6)**: Event handling and calculation logic
- **No External Dependencies**: Pure vanilla implementation

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Calculation Examples

| Operation | Input | Result |
|-----------|-------|--------|
| Addition | 10 + 5 = | 15 |
| Subtraction | 10 - 5 = | 5 |
| Multiplication | 10 × 5 = | 50 |
| Division | 10 ÷ 5 = | 2 |
| Decimals | 10.5 + 2.3 = | 12.8 |
| Chained | 10 + 5 - 3 = | 12 |

## 👨‍💻 Author

Created as part of the CodeAlpha initiative.

**Enjoy calculating! 🧮**