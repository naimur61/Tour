import React from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import enroll from '../../../Assets/Login/enrollment.png'
import monitor from '../../../Assets/Login/monitor.svg'
import useAuth from '../../../Hooks/Auth/useAuth';
import useTitle from '../../../Hooks/Title/useTitle';
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Signup = () => {
   useTitle('SignUp');
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   const { user, createUserByEmail, emailVerified, updateUserProfile, setUser } = useAuth();


   const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);

      createUserByEmail(email, password)
         .then(result => {
            // const user = result.user;
            profileUpdater(name, photoURL)

            form.reset();
            // Email verify Section
            /*   emailVerifyHandler();
              verifyToast('Verify your email address & login.') */

            navigate(from, { replace: true });
         })
         .catch(err => notifyToast(err.message))
   }

   const profileUpdater = (displayName, photoURL) => {
      const details = {
         ...user,
         displayName,
         photoURL,
      };
      setUser(details);
      updateUserProfile(details)
         .then(() => { })
         .catch(er => console.log(er))
   }



   // Email verify
   /*    const emailVerifyHandler = () => {
         emailVerified()
            .then(() => { })
            .catch((e) => console.log(e))
      } */





   // Tost section 

   // Success testify
   const verifyToast = (success) => {
      toast.success((success), {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
   };

   // Error Text
   const notifyToast = (eTxt) => {
      toast.error(eTxt,
         {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
   };




   return (
      <div className="hero min-h-screen overflow-hidden">
         <div className="hero-content flex-col lg:flex-row lg:gap-10">
            <div className="text-center lg:text-left lg:w-1/2 lg:mr-20">
               <img src={monitor} alt="" />
            </div>


            {/* Form  Section*/}
            <div className="card h-full flex-shrink-0 w-fit mt-10 lg:mt-0 max-w-md shadow-2xl">
               <div className='login-body text-white'>
                  <div className="box">
                     <form onSubmit={handleSignUp} className='form'>
                        <div className="w-10 rounded-full mx-auto text-center">
                           <img src={enroll} alt='' />
                        </div>
                        <h2 className=' text-teal-400 font-bold text-2xl text-center'>
                           {
                              user || user?.uid ? "Your are already signed in" : "Sign Up"
                           }
                        </h2>

                        <div className="inputBox">
                           <input type="text" name='name' required />
                           <span> Name</span>
                           <i></i>
                        </div>

                        <div className="inputBox">
                           <input type="text" name='photoURL' required />
                           <span> Profile Picture</span>
                           <i></i>
                        </div>

                        <div className="inputBox">
                           <input type="email" name='email' required />
                           <span> Username</span>
                           <i></i>
                        </div>
                        <div className="inputBox">
                           <input type="password" name='password' required />
                           <span> Password</span>
                           <i></i>
                        </div>
                        <div className="flex justify-end align-middle  mt-2 font-semibold" style={{ fontSize: "0.75em" }}>

                           <div><Link to='/login' className='text-cyan-300'>Login</Link></div>
                        </div>

                        <div className='mt-5'>
                           <button className="rounded px-7 bg-cyan-400 btn-sm font-semibold hover:bg-cyan-500" disabled={user}>Sign Up</button>
                        </div>
                     </form>
                  </div>
                  <ToastContainer />
               </div>
            </div>
         </div >
      </div >
   );
};

export default Signup;