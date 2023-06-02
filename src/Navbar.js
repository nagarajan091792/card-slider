import React, { useEffect, useState } from 'react'
import logo from './nav_image.png';
 import drop_img1 from './drop_img1.png';
 import './Navbar.css'
const Navbar = () => {
   const [screenSize, setScreenSize] = useState(getCurrentDimension());

   function getCurrentDimension(){
     return {
         width: window.outerWidth
      
     }
   }

   useEffect(() => {
       const updateDimension = () => {
           setScreenSize(getCurrentDimension())
       }
       window.addEventListener('resize', updateDimension);
  
  
       return(() => {
           window.removeEventListener('resize', updateDimension);
       })
   }, [screenSize])

 let a =   screenSize.width

const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  return (
    <>
   

<div>
<nav  className='navbar navbar-expand-lg navbar-light bg-light' style={{padding:'25px'}} id='foo1'>
 
<img src={logo}  style={{height:"70px",width:"180px" }}/>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
           <span class="my-1 mx-2 close">X</span>

  </button>
 <div class="collapse navbar-collapse" id="navbarNav">
 
<ul className="navbar-nav" style={{marginLeft:'auto',marginRight:'auto'}}>
  <li className='nav-item'><a href='#' className='nav-link'>Home</a></li>
  <li className='nav-item'><a href='#' className='nav-link'>About Us</a></li>
  {/* <li  className='nav-item dropdown'><a href='#' className='nav-link dropdown-toggle' onClick={item}>Products</a></li> */}
  { matches && <>
  <li class="nav-item dropdown" style={{position:'static'}}>
        <a class="nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Products
        </a>
        <div class="dropdown-menu form-control"   style={{marginTop:'40px',width:'100%',textAlign:'center',left:'0'}}>
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
        <div class="dropdown-menu form-control"   style={{marginTop:'40px',width:'100%',textAlign:'center',left:'0'}}>
          <a class="dropdown-item" href="#" style={{display:'inline-block'}}>

          <div id='foo'>
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
      </li></>
      }
      {!matches &&
       <>
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
         </a>
         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           <a class="dropdown-item" href="#">Action</a>
           <a class="dropdown-item" href="#">Another action</a>
           <a class="dropdown-item" href="#">Something else here</a>
         </div>
       </li>
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Solutions
         </a>
         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           <a class="dropdown-item" href="#">Action</a>
           <a class="dropdown-item" href="#">Another action</a>
           <a class="dropdown-item" href="#">Something else here</a>
         </div>
       </li>
       </> 
      }

  <li className='nav-item'><a href='#' className='nav-link'>Careers</a></li>
  <li className='nav-item'><a href='#' className='nav-link'>Contact Us</a></li>
</ul>
</div>
</nav>

</div> 


    



    </>  )
}

 export default Navbar


//  import drop_img1 from './drop_img1.png';
//  import navBottom_img from './navBottom_img.png'
//  import App from './App';
//  import React, { Component } from 'react';
//  import ReactCardCarousel from 'react-card-carousel';

//  class MyCarousel extends Component  {
//    static get CARD_STYLE() {
//      return {
//        height: '200px',
//        width: '200px',
//        textAlign: 'center',
//        background: '#52C0F5',
//        color: '#FFF',
//        fontSize: '12px',
//        textTransform: 'uppercase',
//        borderRadius: '10px',
//      };
//    }

//     function item() {
//       document.getElementById('foo1').style.cssText = 'background-color:pink;!important';

//     }
//    render() {
//    return (
//      <>
//      {/* <div>
//    <img src={navBottom_img} className='col-sm-12'></img>
//  </div> */}
//  <div className='container'>
//    <div className='row'>
//  <div className='col-sm-9' style={{backgroundColor:'greenyellow'}}>hi</div>
//  <div className='col-sm-3' style={{backgroundColor:'yellow'}}>
//  <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }  style={{marginRight:'130px'}}>
//          <div style={ MyCarousel.CARD_STYLE }>
//            First Card
//          </div>
//          <div style={ MyCarousel.CARD_STYLE }>
//            Second Card
//          </div>
//          <div style={ MyCarousel.CARD_STYLE }>
//            Third Card
//          </div>
//          <div style={ MyCarousel.CARD_STYLE }>
//            Fourth Card
//          </div>
//          <div style={ MyCarousel.CARD_STYLE }>
//            Fifth Card
//          </div>
//        </ReactCardCarousel>
//  </div>

//    </div>
//  </div>
//      </>
//    )}
//  }

//  export default MyCarousel;
