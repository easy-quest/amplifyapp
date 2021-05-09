import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const replapi = ReplAPI({
  username: 'easyquest'
});
// Если вы хотите начать измерение производительности в вашем приложении, пройдите функцию
// Для журнала результатов (for example: reportWebVitals(console.log))
// или отправить в конечную точку аналитики. Учить больше: https://bit.ly/CRA-vitals
reportWebVitals();

