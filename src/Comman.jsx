// p4
//  copy from about p4

// import React from "react";
// import { NavLink } from "react-router-dom";
// import homepagepic1 from "../src/images/homepagepic1.jpg";

// const Common = () => {
//     return (
//         <>
//             <section id="header" className="d-flex align-items-center ">
//                 <div className="container-fluid nav_bg">
//                   <div className='row'>
//                      <div className="col-10 mx-auto">
//                         <div className="row">

//                             <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >
//                                 <h1> 
//                                     Welcome to Common Page <br/> 
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
//                                     className="img-fluid animated" alt="Common img "/>
//                             </div>

//                         </div>

//                      </div>
//                   </div>
//                 </div>
                
//             </section>
//         </>
//     );
// };

// export default Common;



// p5 now do changes in h1, pass  in h1, in navlink to,  div className my-3,  img src , 
// we dont need nav bg in class Name container
import React from "react";
import { NavLink } from "react-router-dom";
import homepagepic1 from "../src/images/homepagepic1.jpg";
// import  web from "../src/images/homepagepic1.jpg";


const Common = (props) => {
    return (  
        <>
            <section id="header" className="d-flex align-items-center ">
                {/* <div className="container-fluid nav_bg"> */}
                <div className="container-fluid ">
                  <div className='row'>
                     <div className="col-10 mx-auto">
                        <div className="row">

                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >
                            {/* <div className="col-md-6 pt-lg-2 order-2 order-lg-1 d-flex justify-content-center flex-column " > */}
                                <h1> 
                                    {props.name} <br/> 
                                    <strong className="brand-name"> F9 Tech Pvt. Ltd.</strong>
                                </h1>
                                <h2 className="my-3 fs-4">  
                                {/* use below with css file font size */}
                                {/* <h2 className="my-3 ">     */}
                                    We are the team of talented developer making websites
                                </h2>
                                <div className="mt-3">
                                    {/* <a href="" className=" btn btn-outline-primary rounded-pill "> Get Started </a> */}
                              
                                 {/* use below NavLInk with css code in file */}
                                   {/* <NavLink to={props.visit} className=" btn-get-started "> 
                                        {props.btname}
                                    </NavLink>
                                   */}


                                    <NavLink to={props.visit} className=" btn btn-outline-primary rounded-pill "> 
                                        {props.btname}
                                    </NavLink>
                                </div>
                            </div>
                        
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img 
                                        src={props.imgsrc}  
                                        // src={homepagepic1} 
                                          style={{height: "100%"}}
                                        className="img-fluid animated" 
                                        alt="Common img "

                                    />
                            </div>

                        </div>

                     </div>
                  </div>
                </div>
                
            </section>
        </>
    );
};

export default Common;

