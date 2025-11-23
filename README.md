# Banking App

A simple banking website built with React demonstrating **Singleton** and **Factory Method** design patterns.

## Design Patterns Used

### 1. Singleton Pattern (BankInfo.js)
- Ensures only one instance of `BankInfo` exists
- Stores bank name globally across the app

### 2. Factory Method Pattern (NavbarFactory.js)
- Creates navigation items based on type
- Encapsulates object creation logic

## Project Structure

```
banking-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Main component
│   ├── BankInfo.js         # Singleton pattern
│   ├── NavbarFactory.js    # Factory pattern
│   ├── index.js            # Entry point
│   └── styles.css          # Styles
├── package.json
└── README.md
```

## Setup and Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Open browser to: `http://localhost:3000`

## Features

- Responsive navigation bar
- Clean, modern UI
- Design patterns demonstration
- Simple banking homepage
