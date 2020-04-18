import React, { Component } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

class Nav extends Component {
  // [store] = useStoreContext();
   
 
render(){
   const { isAuthenticated, login, logout, userHasScopes } = this.props.auth;
   const location = useLocation();
  // const [store] = userStoreContext();
  return ( <>

   
    <div id="top" class="top-header hidden-sm hidden-xs">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-md-6">
                  <div class="top-number">
                     <p>
                        <i class="fa fa-phone"></i>  +1 900 234 567, +1 900 234 568
                        &nbsp;&nbsp;&nbsp; <i class="fa fa-envelope-o"></i> Mail : info@osahan.com
                     </p>
                  </div>
               </div>
               <div class="col-xs-12 col-md-6 text-right">
                  <ul class="social-share-top">
                     <a href="#" class="btn-social btn-behance"><i class="fa fa-behance"></i></a>
                     <a href="#" class="btn-social btn-dribbble"><i class="fa fa-dribbble"></i></a>
                     <a href="#" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a>
                     <a href="#" class="btn-social btn-google-plus"><i class="fa fa-google-plus"></i></a>
                     <a href="#" class="btn-social btn-instagram"><i class="fa fa-instagram"></i></a>
                     <a href="#" class="btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a>
                     <a href="#" class="btn-social btn-pinterest"><i class="fa fa-pinterest"></i></a>
                     <a href="#" class="btn-social btn-skype"><i class="fa fa-skype"></i></a>
                     <a href="#" class="btn-social btn-twitter"><i class="fa fa-twitter"></i></a>
                     <a href="#" class="btn-social btn-youtube"><i class="fa fa-youtube"></i></a>
                     <a href="#" class="btn-social btn-email"><i class="fa fa-envelope-o"></i></a>
                  </ul>
               </div>
            </div>
         </div>
      </div>
     <nav> {/*here is start to nav bar */}
      {/* <ul class="Mass"><li> Constuction Helper</li></ul> */}
<ul class="menu">
         <li class="logo">
         <img src = "../img/favicon.png"/>
        </li>
        <li class="item"> <Link to="/" className={location.pathname === "/" ? "activate" : "notactivate"}>Home </Link></li>
        <li class="item">
        <Link to="/projects" className={location.pathname === "/projects" ? "activate" : "notactivate"}>Projects </Link> </li>
        
        <li class="item">
            <Link to="/profile" className={location.pathname === "/profile" ? "activate" : "notactivate"}>Profile</Link>
          </li>
          <li class="item">
            <Link to="/public" className={location.pathname === "/public" ? "activate" : "notactivate"}>Public</Link>
          </li>


        <li class="item">
        <Link to="/contact" className={location.pathname === "/contact" ? "activate" : "notactivate"}>Contact </Link></li>
        {/* <li class="item button"><a href="#">Log In</a></li>
        <li class="item button secondary"><a href="#">Sign Up</a></li>
        <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li> */}


          {isAuthenticated() && (
            <li>
              <Link to="/private" className={location.pathname === "/private" ? "activate" : "notactivate"}>Private</Link>
            </li>
          )}
          {isAuthenticated() &&
            userHasScopes(["read:posts"]) && (
              <li>
                <Link to="/posts" className={location.pathname === "/posts" ? "activate" : "notactivate"}>Posts</Link>
              </li>
            )}
          <li>
            <button className = "item button " onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "Log Out" : "Log In"}
            </button>
          </li>
        
        </ul> 
        
</nav>
</>
  );
}
}

export default Nav;


