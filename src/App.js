import './App.css';
import './pages/Home'
import Home from './pages/Home';
import './css/custom.css'
import './css/aboutUS.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
  },
  {
    path : '/about',
    element : <AboutUs/>,
  }
])


function App() {
  return (
    
      <div className='App'>
        <RouterProvider router = {router}/>
      </div>

  );
}

export default App;
