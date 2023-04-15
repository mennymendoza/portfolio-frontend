import './css/main.css';
import './css/fonts.css';
import './css/experience.css';
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

