import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import rocket from '../../../Assets/Login/roket.svg'
import useTitle from '../../../Hooks/Title/useTitle';
import useAuth from '../../../Hooks/Auth/useAuth';
import userImg from '../../../Assets/Login/profile.png'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
   useTitle('Login');
   const { user, setUser, loginUserByEmail, forgotUserPassword, popUpLogin } = useAuth();
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/';
   const [userEmail, setUserEmail] = useState();




   // Email Handler 
   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);

      loginUserByEmail(email, password)
         .then(result => {
            const loginUser = result.user;
            setUser(loginUser);
            const currentUser = {
               email: loginUser.email
            }

            fetch('https://assignment-11-server-site.vercel.app/jwt', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(currentUser)
            })
               .then(res => res.json())
               .then(data => {
                  // console.log(data);
                  localStorage.setItem('user_token', data.token)
                  navigate(from, { replace: true });
               })

            form.reset()

         })
         .catch(err => console.log(err.message))
   }


   // Take Email for P-Reset 
   const emailBlur = event => {
      const email = event.target.value;
      setUserEmail(email);
   }


   // Reset password
   const resetPassword = () => {
      if (!userEmail) {
         return notifyToast('Please enter your email.!')
      }
      forgotUserPassword(userEmail)
      verifyToast('Recovery code is send. Check Your mail !');
   }


   // Google Login 
   const handlerGoogle = () => {
      handlerPopup(googleProvider)
   };

   // Github Login 
   const handlerGithub = () => {
      handlerPopup(githubProvider)
   }


   // Popup  SignIn
   const handlerPopup = (provider) => {
      popUpLogin(provider)
         .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
            fetch('https://assignment-11-server-site.vercel.app/jwt', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(currentUser)
            })
               .then(res => res.json())
               .then(data => {
                  // console.log(data);
                  localStorage.setItem('user_token', data.token)
                  navigate(from, { replace: true });
               })
         })
         .catch(e => notifyToast(e.message))
   }



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
               <img src={rocket} alt="" />
            </div>

            {/* Form section  */}
            <div className="card h-full flex-shrink-0 w-fit mt-10 lg:mt-0 max-w-md shadow-2xl">
               <div className='login-body text-white'>
                  <div className="box">
                     <form onSubmit={handleLogin} className='form'>
                        <div className="w-14 rounded-full mx-auto text-center">
                           <img src={userImg} alt='' />
                        </div>
                        <h2 className=' text-teal-400 font-bold text-2xl text-center'>
                           {
                              user || user?.uid ? "Your are already signed in" : "Sign in"
                           }
                        </h2>
                        <div className="inputBox">
                           <input onBlur={emailBlur} type="email" name='email' required />
                           <span> Username</span>
                           <i></i>
                        </div>
                        <div className="inputBox">
                           <input type="password" name='password' required />
                           <span> Password</span>
                           <i></i>
                        </div>
                        <div className="flex justify-between align-middle gap-5 mr-3 my-2 font-semibold" style={{ fontSize: "0.75em" }}>
                           <div><Link className='hover:text-cyan-300' onClick={resetPassword}>Forgot Password</Link></div>
                           <div><Link to='/signup' className='text-cyan-300'>Signup</Link></div>
                        </div>

                        <div className='my-8'>
                           <button type='submit' className="rounded px-7 bg-cyan-400 hover:bg-cyan-500 btn-sm font-semibold" disabled={user}>Log in</button>
                        </div>

                        <div className='or_section px-5 mt-5'>
                           <h2><span>or</span></h2>
                        </div>

                        <div className='my-5'>
                           <fieldset className=' border-white border-2 rounded'>
                              <legend className='ml-5 px-3 pb-1' style={{ fontFamily: '"Concert One", cursive' }}>Continue with</legend>
                              <div className='flex justify-between align-middle px-5 pb-2 '>

                                 <Link onClick={handlerGoogle}>
                                    <div className='w-fit font-bold text-4xl  rounded-full'>
                                       <FcGoogle />
                                    </div>
                                 </Link>


                                 <Link onClick={handlerGithub}>
                                    <div className='w-fit font-bold text-4xl bg-gray-900 rounded-full border-0'>
                                       <BsGithub />
                                    </div>
                                 </Link>

                              </div>
                           </fieldset>
                        </div>

                     </form>
                  </div>
               </div>
            </div>
         </div >
         <ToastContainer />
      </div >
   );
}

export default Login;