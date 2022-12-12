import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Housing from './pages/Housing/Housing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Housing/:id' element={<Housing />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;