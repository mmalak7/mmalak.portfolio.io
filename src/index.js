import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../src/stylesheets/main.scss'
import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('app')
);