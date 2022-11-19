import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Loader from "../../Loader/Loader";
import AddPlaces from "../../Pages/AddPlaces/AddPlaces";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/SignUp/Signup";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UpdateReview from "../../Pages/MyReviews/UpdateReview/UpdateReview";
import PackageDetails from "../../Pages/PackageDetails/PackageDetails/PackageDetails";
import Packages from "../../Pages/Packages/Packages";
import Profile from "../../Pages/Profile/Profile";
import ErrorPage from "../../Pages/Shared/Error/ErrorPage";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";


const HomePage = Loader(
   lazy(() => import("Pages/Home/Home/Home"))
);

const PackagesPage = Loader(
   lazy(() => import("Pages/Packages/Packages"))
);



export const Routes = createBrowserRouter([
   {
      path: '/', element: <Main />, children: [
         {
            path: '/', element: <HomePage />,
            loader: () => fetch(`https://assignment-11-server-site.vercel.app/packages?page=${0}&size=${3}`)
         },
         {
            path: '/home', element: <HomePage />,
            loader: () => fetch(`https://assignment-11-server-site.vercel.app/packages?page=${0}&size=${3}`)
         },
         { path: '/login', element: <Login /> },
         { path: '/signup', element: <Signup /> },
         { path: '/profile', element: <PrivetRoutes><Profile /></PrivetRoutes> },
         {
            path: '/packages', element: <PackagesPage />
         },
         {
            path: '/packages/:id', element: <PackageDetails />,
            loader: ({ params }) => fetch(`https://assignment-11-server-site.vercel.app/packages/${params.id}`)
         },
         { path: '/reviewsByEmail', element: <PrivetRoutes><MyReviews /></PrivetRoutes> },
         { path: '/addPlaces', element: <AddPlaces /> },
         { path: '/blogs', element: <Blogs /> },
         {
            path: '/reviews/:id', element: <PrivetRoutes><UpdateReview /></PrivetRoutes>,
            loader: ({ params }) => fetch(`https://assignment-11-server-site.vercel.app/reviews/${params.id}`)
         }



      ]
   },
   { path: '*', element: <ErrorPage /> }
])

