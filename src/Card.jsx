// // p6.1 create card component and copy p5 service code and past
// // remove div drom starting to   <div className ="row gy-4" > 
// // change <a> and href to NavLInk and to
// // now create Sdata component for api data then go to servicees import Sdata
// // change in calss name of card title,  then change img src to props.imgsrc and on alt, props.title

// import React from "react";
// import { NavLink } from "react-router-dom";
// import cardimg from "../src/images/appdevelopment.jpg";

// const Card = (props) => {

//     return (
//         <>
//             <div className="col-md-4 col-10 mx-auto cards ">
//             {/* <div className="cards"> */}
//                 <div className="card"  >
//                     <img src={props.imgsrc} className="card_img" alt={props.imgsrc} />
//                     <div className="card-body">
//                         <h5 className="card-title font-weight-bold">{props.title}</h5>
//                         <p className="card-text">
//                             Some quick example text to build on the card title 
//                             and make up the bulk of the card's content.</p>
//                         <NavLink to="" className="btn btn-primary">
//                           Go somewhere
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
               
//         </>
        
//   );
// }

// export default Card;





// p7 add <a> for linking card btn


import React from "react";
import { NavLink } from "react-router-dom";
import cardimg from "../src/images/appdevelopment.jpg";

const Card = (props) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto cards ">
            {/* <div className="cards"> */}
                <div className="card"  >
                    <img src={props.imgsrc} className="card_img" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title 
                            and make up the bulk of the card's content.</p>
                        {/* <NavLink to=" " className="btn btn-primary" >
                            Go somewhere
                        </NavLink>
                         */}
                        <a href={props.link} className="btn btn-primary">
                          See Details
                        </a>                
                    </div>
                </div>
            </div> 
               
        </>
        
  );
}

export default Card;

