import React from 'react';
import {Routes, Route} from "react-router-dom"
import HomePage from './HomePage.';
import Category from './StorePage/Category';
function Router() {
    return (
        <div>
            <Routes> 
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/store' element={<Category/>}> 
                </Route>
                
            </Routes>
        </div>
    );
}

export default Router;