import { render } from 'preact';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './app';
import Home, { fetchAllPosts } from './pages/Home';
import Contact from './pages/Contact';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <App/> }>
            <Route index element={ <Home/> } loader={ fetchAllPosts }/>
            <Route path="/contact" element={ <Contact/> }/>
        </Route>
    )
);

render(
    <RouterProvider router={ router }/>, 
    document.getElementById('app')
);
