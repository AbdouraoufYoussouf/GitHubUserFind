import { Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import Root from './components/Root/Root';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,  
    },
    {
      path:"/dashboard",
      element:<Root />,
      // children:[
      //   {
      //     path:"/userId",
      //     element:<UserDashboard />
      //   },
      //   {
      //     path:"/repositories",
      //     element:<UserDashboard  />
      //   }
      // ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// const Navbar = () =>{
//   return(
//     <>
//       <div>
//         <Link to="/">home</Link>
//         <Link to="/dashboard">dashboard</Link>
//       </div>
//     </>
//   )
// }

export default App;
