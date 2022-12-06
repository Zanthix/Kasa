import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import Banner from './components/Header/index'
import About from './pages/About'
import Error from './components/Error/index'
import Annonces from './logements.json'

console.log(Annonces);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Banner />   
        </Router>
    </React.StrictMode>
)