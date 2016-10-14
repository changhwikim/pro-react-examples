import React, { Component } from 'react';
import './App.css';
import './styles.css';
import KanbanBoard from './KanbanBoard.js'

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Code along with the samples in the book",
        description: "Type every single code by yourself!",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "Contactlist Eample",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to Kanban</h2>
                </div>
                <div className="App-content">
                    <KanbanBoard cards={cardsList} />
                </div>
            </div>
        );
    }
}

export default App;