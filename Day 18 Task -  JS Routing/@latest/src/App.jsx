import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Parent from "./components/Parent/Parent";
import Send from "./components/Send/Send";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      { path: '/gallery', element: <Gallery/>, children:[
        {path: 'cats', element:<Cats/>},
        {path: 'dogs', element: <Dogs/>},
      ] },
      {path: '/send', element: <Send/>},
      {path: '/hero', element: <Hero/>},
      {path: '/parent', element: <Parent/>},
      {path: '*', element: <NotFound/>},
    ]},
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;