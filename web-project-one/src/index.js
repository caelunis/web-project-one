import React from "react";
import {createRoot} from "react-dom/client";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);