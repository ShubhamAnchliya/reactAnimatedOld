// // p1,p2
// import React from "react";

// const Home = () => {
//     return (
//         <>
//             <h1> Home Page </h1>
//         </>
//     );
// };

// export default Home;



// p3 paste container code from navbar part2  ,  add img by import and, add text 
// import React from "react";
// import homepagepic1 from "../src/images/homepagepic1.jpg";

// const Home = () => {
//     return (
//         <>
//             <section id="header" className="">
//                 <div className="container-fluid nav_bg">
//                   <div className='row'>
//                      <div className="col-10 mx-auto">
//                         <div className="col-md-6 pt-lg-0 order-2 order-lg-1" >
//                             <h1> 
//                                 Grow your buisness <br/>  with
//                                 <strong className="brand-name"> F9 Tech </strong>
//                             </h1>
//                             <h2 className="my-3 fs-5">
//                                 We are the team of talented developer making websites
//                             </h2>
//                             <div className="mt-3">
//                                 <a href="" className=" btn btn-outline-primary rounded-pill "> Get Started </a>
//                             </div>
//                         </div>
                      
//                      <div className="col-lg-6 order-1 order-lg-2 header-img">
//                             <img src={homepagepic1}  
//                             //   style={{height: "100%"}}
//                              className="img-fluid animated" alt="home img "/>
//                      </div>

//                      </div>
//                   </div>
//                 </div>
                
//             </section>
//         </>
//     );
// };

// export default Home;




// p4 now moving position of pic  ,after  className="col-10 mx-auto" line 70
// add new div  <div className="row"> inside  <div className="col-10 mx-auto">
// then in section  give className = display flex  by <section id="header" className="d-flex align-items-center ">
// then on line <div className="col-md-6 pt-lg-0 order-2 order-lg-1 " > write d-flex justify-content-center flex-column
// then change <a> to NavLInk , to="/service" used css ss
// import React from "react";
// import { NavLink } from "react-router-dom";
// import homepagepic1 from "../src/images/homepagepic1.jpg";

// const Home = () => {
//     return (
//         <>
//             <section id="header" className="d-flex align-items-center ">
//                 <div className="container-fluid nav_bg">
//                   <div className='row'>
//                      <div className="col-10 mx-auto">
//                         <div className="row">

//                             <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >
//                                 <h1> 
//                                     Grow your buisness with <br/> 
//                                     <strong className="brand-name"> F9 Tech </strong>
//                                 </h1>
//                                 <h2 className="my-3 fs-5">
//                                     We are the team of talented developer making websites
//                                 </h2>
//                                 <div className="mt-3">
//                                     {/* <a href="" className=" btn btn-outline-primary rounded-pill "> Get Started </a> */}
//                                     <NavLink to="/service" className=" btn btn-outline-primary rounded-pill "> Get Started </NavLink>
//                                 </div>
//                             </div>
                        
//                             <div className="col-lg-6 order-1 order-lg-2 header-img">
//                                     <img src={homepagepic1}  
//                                     //   style={{height: "100%"}}
//                                     className="img-fluid animated" alt="home img "/>
//                             </div>

//                         </div>

//                      </div>
//                   </div>
//                 </div>
                
//             </section>
//         </>
//     );
// };

// export default Home;



// p5 now call common Component
import React from "react";
import { NavLink } from "react-router-dom";
// import homepagepic1 from "../src/images/homepagepic1.jpg";
import homepage4 from "../src/images/homepage4.png";

import Comman from "./Comman";

const Home = () => {
    return (
        <>
            <Comman 
                name=' Grow your buisness with ' 
                imgsrc={homepage4} 
                visit='/service/' 
                btname="Get Started" 
            />
        </>
    );
};

export default Home;