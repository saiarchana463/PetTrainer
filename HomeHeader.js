import React from "react";
import {Link} from "react-router-dom";
function HomeHeader(){
 return(
   <div className="ui container" style={{margin:"16% 0 0 0"}}>
   <nav className="navbar navbar-expand-sm bg-info navbar-dark fixed-top">
   <div className="container my-2">
  <h3>Magic pet</h3>
{/*<Link to="/home" className="ml-auto mx-3">contact m</Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

<span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/trainer"><h5>Home</h5></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/report"><h5>Report</h5></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/mybookings"><h5>MyBookings</h5></Link>
      </li>
      <li>
          <Link className="nav-link" to="/"><h5>Logout</h5></Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
);
}
export default HomeHeader;
