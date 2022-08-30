// p1
// import React from "react";

// const About = () => {
//     return (
//         <>
//             <h1> Hello i am About Page</h1>
//         </>
//     ) ;
// };

// export default About;



// p4
// after p4 home.jsx create it 
// import React from "react";
// import { NavLink } from "react-router-dom";
// import homepagepic1 from "../src/images/homepagepic1.jpg";

// const About = () => {
//     return (
//         <>
//             <section id="header" className="d-flex align-items-center ">
//                 <div className="container-fluid nav_bg">
//                   <div className='row'>
//                      <div className="col-10 mx-auto">
//                         <div className="row">

//                             <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >
//                                 <h1> 
//                                     Welcome to About Page <br/> 
//                                     <strong className="brand-name"> F9 Tech </strong>
//                                 </h1>
//                                 <h2 className="my-3 fs-5">
//                                     We are the team of talented developer making websites
//                                 </h2>
//                                 <div className="mt-3">
//                                     {/* <a href="" className=" btn btn-outline-primary rounded-pill "> Get Started </a> */}
//                                     <NavLink to="/service" className=" btn btn-outline-primary rounded-pill "> Contact Now </NavLink>
//                                 </div>
//                             </div>
                        
//                             <div className="col-lg-6 order-1 order-lg-2 header-img">
//                                     <img src={homepagepic1}  
//                                     //   style={{height: "100%"}}
//                                     className="img-fluid animated" alt="About img "/>
//                             </div>

//                         </div>

//                      </div>
//                   </div>
//                 </div>
                
//             </section>
//         </>
//     );
// };

// export default About;



// p5 now call Common component, pass props bcoz we want to change name, imgsrc , visit for visit on other page on clicking btn
import React from "react";
import { NavLink } from "react-router-dom";
import about1 from "../src/images/about1.jpg";
// import web from "../src/images/homepagepic1.jpg";
import Common from "./Comman";

const About = () => {
    return (
        <>
            <Common 
                name=' Welcome to About Page ' 
                imgsrc={about1} 
                visit='/contact/' 
                btname="Contact Now" 

            />
        </>
    );
};

export default About;