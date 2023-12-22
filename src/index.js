import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { thunk } from 'redux-thunk';
import authReducer from './redux/Slices/authSlice';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { store } from './app/store';
// const initialState = {};
// const middlewares = [thunk];
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
