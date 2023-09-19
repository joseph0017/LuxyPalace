
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import { logoutRequest } from "../redux/user/user-actions";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from "../redux/user/user-selectors";

const Navbar = ({user, logoutUser}) => {
  const [navbar, setNavbar] = useState(false);

  const nanvigate = useNavigate()

    const handleLogout = () => {
    logoutUser()
    nanvigate('/')
  }
  return (
    <nav className="w-full bg-white shadow">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link to="/" className="pl-8 sm:text-base italic font-medium cursor-pointer ">
                LuxyPalace
            </Link>
                <div className="lg:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 cursor-pointer">
                    <li className="text-gray-600 ">
                    <Link className="border-b-2 border-transparent hover:text-orange-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-orange-300 mx-1.5 sm:mx-6 text-base" to="/">
                      Home
                    </Link>
                    </li>
                    <li className="text-gray-600">
                    <Link className="border-b-2 border-transparent hover:text-orange-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-orange-300 mx-1.5 sm:mx-6 text-base" to="/product">
                      Products
                    </Link>
                    </li>
                    <li className="text-gray-600">
                    <Link className="border-b-2 border-transparent hover:text-orange-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-orange-300 mx-1.5 sm:mx-6 text-base" to="/about">
                      About
                    </Link>
                    </li>
                    <li className="text-gray-600">
                    <Link className="border-b-2 border-transparent hover:text-orange-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-orange-300 mx-1.5 sm:mx-6 text-base" to="/contact">
                      Contact
                    </Link>
                    </li>
                </ul>     
            </div>
        </div>

        
         { user ? (
            <>
         <div className='inline-flex  ml-12 sm:text-base pt-4 md:pt-0  '>
                      Welcome <span className="ml-4"> {user.username} </span> 
                      
                    </div>
                    
                    <p className="py-6 cursor-pointer border-b-2 border-transparent hover:text-orange-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-orange-300"
                    onClick={handleLogout}
                    >
                        Sign Out</p>
                    </>
        ) : (
            <Link className='border-b-2 border-transparent hover:text-orange-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-orange-300 mx-1.5 sm:mx-6 text-base' to='/login'>
                      Log in
                    </Link>
        )
        }               
    </div>
</nav>
  );
};


const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
})

function mapDispatchToProps (dispatch) {
  return {
    logoutUser: () => dispatch(logoutRequest())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
