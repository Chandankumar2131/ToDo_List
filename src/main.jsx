import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Toggle from './Toggle/Toggle.jsx'
import ToDo from './ToDo/ToDo.jsx'
// import Todo2 from './ToDo/Todo2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Toggle/> */}
    <ToDo/>
    {/* <Todo2/> */}
  </StrictMode>,
)
