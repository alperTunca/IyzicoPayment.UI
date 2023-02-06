import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Payment from './pages/Payment';

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "payment",
            element: <Payment/>,
        },
    ]);

    return (
        <div>
            <div className='header'>HEADER</div>
            <div className='main'>
                <RouterProvider router={router}/>
            </div>
            <div className='footer'>FOOTER</div>
        </div>
    );
}

export default App;

