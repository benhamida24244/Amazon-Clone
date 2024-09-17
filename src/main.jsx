import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "slick-carousel/slick/slick.css";
import { Provider } from 'react-redux';
import { store } from '../src/redux/store'; // Corrected import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
