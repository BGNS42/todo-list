# todo-list
# Todo List - The Odin Project

A todo management web application built with Vanilla JavaScript, Webpack, and HTML5. Part of The Odin Project curriculum.

**Live Demo:** [https://bgns42.github.io/todo-list/](https://bgns42.github.io/todo-list/)

---

## Overview

A functional todo application demonstrating separation of concerns, modular JavaScript architecture, and modern web technologies. The app allows users to create, view, complete, and delete todos with a clean, interactive interface.

**Version:** 1.0.0  
**License:** ISC

---

## Project Structure

```
src/
├── index.js                    # Entry point
├── template.html               # HTML template with form
│
├── app/                        # Logic & State
│   ├── state.js               # State management
│   └── stateIA.js             # LocalStorage (commented)
│
├── components/                 # Models & Renderers
│   ├── todos.js               # Todo class definition
│   ├── todoCard.js            # Todo DOM renderer
│   └── pageLoad.js            # Page load stub
│
├── elements/                   # UI Elements
│   ├── todoForm.js            # Modal form factory
│   ├── button.js              # Button helper (commented)
│   ├── sideBar.js             # Sidebar (commented)
│   └── workSpace.js           # Workspace (commented)
│
├── pages/                      # Pages
│   └── home.js                # Home page stub
│
├── style/                      # Styles
│   ├── styles.css             # Global styles & reset
│   └── pages.css              # Page-specific styles
│
└── assets/
    └── odin.png               # Odin Project logo
```

---

## Architecture

```
Index.js (Entry Point)
    ↓
    ├── State Management (app/state.js)
    │   └── Array of Todos
    │
    ├── Components (components/)
    │   ├── Todo Model (todos.js)
    │   └── Todo Renderer (todoCard.js)
    │
    └── Elements (elements/)
        └── Form Factory (todoForm.js)
```

### User Flow

1. User clicks "Add" button → Modal dialog opens
2. User fills form → Submit event triggered
3. New Todo object created → Added to state
4. `showTodo()` renders card in DOM
5. Form resets → Dialog closes

---

## Key Components

### `app/state.js` - State Management

Maintains global todos array and provides state manipulation functions.

```javascript
const projetos = [];

function addProject(novoTodo) {
    projetos.push(novoTodo);
    logProjects();
}

function removeFromProjects(todo) {
    const indexToRemove = projetos.findIndex(item => item.id === todo.id);
    if (indexToRemove !== -1) {
        projetos.splice(indexToRemove, 1);
    }
    logProjects();
}
```

**Exports:** `addProject()`, `removeFromProjects()`, `logProjects()`

### `components/todos.js` - Todo Model

Defines the Todo class with properties and getters.

```javascript
export class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;  // boolean
        this.notes = notes;
    }

    id = crypto.randomUUID();
    completed = false;

    getTitle() { return this.title; }
    getDescription() { return this.description; }
    getDueDate() { return this.dueDate; }
    getPriority() { return this.priority; }
    getNotes() { return this.notes; }
}
```

**Properties:**
- `title`, `description`, `dueDate`, `priority`, `notes`
- `id` - Auto-generated UUID
- `completed` - Boolean flag

### `components/todoCard.js` - Todo Renderer

Creates DOM elements and attaches event listeners for delete and complete actions.

```javascript
export function showTodo(todo) {
    const lista = document.querySelector(".lista");
    const todoCard = document.createElement("div");
    todoCard.classList.add("todoCard");
    todoCard.dataset.id = todo.id;

    // Creates list items for each property
    // Creates Delete and Done buttons
    // Adds event listeners with event delegation
    
    lista.appendChild(todoCard);
}
```

**Features:**
- Delete button: removes from DOM and state
- Done button: marks completed and removes from DOM
- Event delegation for button handling

### `elements/todoForm.js` - Form Factory

Returns a cloned dialog element from an HTML template.

```javascript
function todoForm() {
    const template = document.querySelector("#todo-form-template");
    const clone = document.importNode(template.content, true);
    return clone.querySelector("dialog");
}
```

---

## Data Model

```javascript
Todo {
    title: string,
    description: string,
    dueDate: string,
    priority: boolean,
    notes: string,
    id: UUID,
    completed: boolean
}
```

---

## Features Implemented

- ✅ Create todos with modal form
- ✅ Display todos with all information (title, description, due date, priority, notes)
- ✅ Delete todos
- ✅ Mark todos as complete
- ✅ Unique ID generation (crypto.randomUUID)
- ✅ Form validation (HTML5 required)
- ✅ Event delegation for buttons
- ✅ HTML5 dialog element for modalss
- ✅ Example todos pre-loaded
- ✅ Webpack bundling with hot reload

---

## Features Planned

- ❌ Multiple projects/folders (code in `sideBar.js`, `workSpace.js`)
- ❌ LocalStorage persistence (commented in `stateIA.js`)
- ❌ Filter buttons (all, active, completed)
- ❌ Page routing system

---

## Installation & Setup

### Prerequisites

- Node.js 14+
- npm or yarn

### Install

```bash
git clone https://github.com/BGNS42/todo-list.git
cd todo-list
npm install
```

### Available Commands

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Build Configuration

**Webpack Setup:**
- Entry: `./src/index.js`
- Output: `dist/[name].bundle.js`
- Loaders: css-loader, style-loader, html-loader
- Plugins: HtmlWebpackPlugin, CleanWebpackPlugin
- Dev Mode: Hot reload, eval-source-map
- Prod Mode: Minification, optimization

**Dev Dependencies:**
- webpack ^5.105.0
- webpack-cli ^6.0.1
- webpack-dev-server ^5.2.3
- webpack-merge ^6.0.1
- html-webpack-plugin ^5.6.6
- css-loader ^7.1.3
- style-loader ^4.0.0
- html-loader ^5.1.0

---

## Technologies Used

**Frontend:**
- JavaScript ES6+ (Classes, Modules, Arrow Functions, Template Literals)
- HTML5 (`<dialog>`, `<template>`, Form Validation, Semantic Markup)
- CSS3 (Flexbox, CSS Variables, Media Queries)

**Build & Deployment:**
- Webpack 5 (Bundling, Code Splitting, Dev Server)
- npm (Package Management)
- GitHub Pages (Hosting)

---

## Author

**BGNS42**

- GitHub: [@BGNS42](https://github.com/BGNS42)
- LinkedIn: [Link](https://www.linkedin.com/in/igor-carrasco/)

*Built as part of The Odin Project curriculum*