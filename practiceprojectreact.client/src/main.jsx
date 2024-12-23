import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import store from './App/store.js'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/*<App />*/}
        <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
        </Provider>
  </StrictMode>,
)
