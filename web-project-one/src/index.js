import React from "react";
import {createRoot} from "react-dom/client";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Implement React Application', important: true },
        { label: 'Make notes from your stud', important: false },
        { label: 'Do not drink alchohol', important: false },
    ];
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);