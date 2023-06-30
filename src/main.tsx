import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/main.css';
import './css/fonts.css';
import './css/experience.css';
import App from './components/App';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
