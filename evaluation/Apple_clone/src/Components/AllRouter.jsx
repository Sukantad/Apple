import React from 'react';
import {Routes, Route} from "react-router-dom"
import HomePage from './HomePage.';
import StorePage from './StorePage';
function Router() {
    return (
        <div>
            <Routes> 
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/store' element={<StorePage/>}> 
                </Route>
                
            </Routes>
        </div>
    );
}

export default Router;