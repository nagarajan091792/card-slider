import React from 'react'
import logo from './nav_image.png';
import drop_img1 from './drop_img1.png';
import navBottom_img from './navBottom_img.png'

const Navbar = () => {
  return (
    <>
<div>
<nav className='navbar navbar-expand-sm' style={{padding:'25px'}}>

<img src={logo}  style={{height:"70px",width:"180px" }}/>

<ul className="navbar-nav" style={{marginLeft:'auto',marginRight:'auto'}}>
  <li className='nav-item'><a href='#' className='nav-link'>Home</a></li>
  <li className='nav-item'><a href='#' className='nav-link'>About Us</a></li>
  {/* <li  className='nav-item dropdown'><a href='#' className='nav-link dropdown-toggle' onClick={item}>Products</a></li> */}
  <li class="nav-item dropdown" style={{position:'static'}}>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Products
        </a>
        <div class="dropdown-menu form-control"   style={{marginTop:'39px',width:'100%',textAlign:'center',left:'0'}}>
          <a class="dropdown-item" href="#" style={{display:'inline-block'}}>

          <div >
<div className='container' >
  <div className='row'>
    <div className='col-sm-4' style={{position:'relative',marginTop:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginTop:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginTop:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
   
  </div>
</div>
<div className='container' style={{marginTop:'30px'}}>
  <div className='row'>
    <div className='col-sm-4' style={{position:'relative',marginBottom:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginBottom:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginBottom:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
   
  </div>
</div>
    </div>

          </a>
        </div>
      </li>
  <li class="nav-item dropdown" style={{position:'static'}}>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Solutions
        </a>
        <div class="dropdown-menu form-control"   style={{marginTop:'39px',width:'100%',textAlign:'center',left:'0'}}>
          <a class="dropdown-item" href="#" style={{display:'inline-block'}}>

          <div >
<div className='container' >
  <div className='row'>
    <div className='col-sm-4' style={{position:'relative',marginTop:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginTop:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginTop:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
   
  </div>
</div>
<div className='container' style={{marginTop:'30px'}}>
  <div className='row'>
    <div className='col-sm-4' style={{position:'relative',marginBottom:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginBottom:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
    <div className='col-sm-4' style={{position:'relative',marginBottom:'30px'}}>
       <img src={drop_img1} style={{borderRadius:'20px',height:'140px',width:'450px'}} className="img-fluid"></img>
       <h5 style={{position:'absolute', top:"40%",left:'15%'}}>GATEWAY - DCU - IoT Hub</h5>
    </div>
   
  </div>
</div>
    </div>

          </a>
        </div>
      </li>

  <li className='nav-item'><a href='#' className='nav-link'>Careers</a></li>
  <li className='nav-item'><a href='#' className='nav-link'>Contact Us</a></li>
</ul>
</nav>

    </div>
    <div>
  <img src={navBottom_img} className='col-sm-12'></img>
</div>
    </>
  )
}

export default Navbar