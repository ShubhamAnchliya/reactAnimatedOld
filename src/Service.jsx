// p1 to p4
// import React from "react";

// const Service = () => {

//     return (
//         <>
//             <h1> Hello i am Service Page </h1>;
//         </>
        
//   );
// }

// export default Service;


// p5 after all p5 home,about,common create it, paste container part code from navbar.jsx modify in  classNAme container
// create another div inside container by row, column, then add card from bootstrap , remove style from card className
// then copy from <div className="col-md-4 col-10 mx-auto "> <div class="card" > multiple type paste
// now copy src and put image name , then add className row gy-4 gutter for space in   <div className="col-10 mx-auto">

// import React from "react";
// import cardimg from "../src/images/appdevelopment.jpg";

// const Service = () => {

//     return (
//         <>
//             <div className= "my-5"> 
//                 <h1 className="text-center">Our Services </h1>;
//             </div>
           
//             <div className="container-fluid mb-5 ">
//                 <div className='row'>
//                     <div className="col-10 mx-auto">
//                         <div className ="row gy-4" > 

//                             <div className="col-md-4 col-10 mx-auto ">
//                                 <div class="card" >
//                                     <img src={cardimg} class="card-img-top" alt="cardImg" />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                         <p class="card-text">
//                                             Some quick example text to build on the card title 
//                                             and make up the bulk of the card's content.</p>
//                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-10 mx-auto ">
//                                 <div class="card" >
//                                     <img src={cardimg} class="card-img-top" alt="cardImg" />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                         <p class="card-text">
//                                             Some quick example text to build on the card title 
//                                             and make up the bulk of the card's content.</p>
//                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div className="col-md-4 col-10 mx-auto ">
//                                 <div class="card" >
//                                     <img src={cardimg} class="card-img-top" alt="cardImg" />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                         <p class="card-text">
//                                             Some quick example text to build on the card title 
//                                             and make up the bulk of the card's content.</p>
//                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-10 mx-auto ">
//                                 <div class="card" >
//                                     <img src={cardimg} class="card-img-top" alt="cardImg" />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                         <p class="card-text">
//                                             Some quick example text to build on the card title 
//                                             and make up the bulk of the card's content.</p>
//                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-10 mx-auto ">
//                                 <div class="card" >
//                                     <img src={cardimg} class="card-img-top" alt="cardImg" />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                         <p class="card-text">
//                                             Some quick example text to build on the card title 
//                                             and make up the bulk of the card's content.</p>
//                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-10 mx-auto ">
//                                 <div class="card" >
//                                     <img src={cardimg} class="card-img-top" alt="cardImg" />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                         <p class="card-text">
//                                             Some quick example text to build on the card title 
//                                             and make up the bulk of the card's content.</p>
//                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                     </div>
//                                 </div>
//                             </div>



//                         </div>
//                     </div> 
//                 </div>
//             </div>
//         </>
        
//   );
// }

// export default Service;




// p6 creating new component card for not writing card code multiple tym, then call it

// import React from "react";
// import Card from "./Card";
// import cardimg from "../src/images/appdevelopment.jpg";

// const Service = () => {

//     return (
//         <>
//             <div className= "my-5"> 
//                 <h1 className="text-center">Our Services </h1>;
//             </div>
           
//             <div className="container-fluid mb-5 ">
//                 <div className='row'>
//                     <div className="col-10 mx-auto">
//                         <div className ="row gy-4" > 

//                             <Card />

//                         </div>
//                     </div> 
//                 </div>
//             </div>
//         </>
        
//   );
// }

// export default Service;

// // p6.1 creating new component card for not writing card code multiple tym, then call it
// // now import Sdata after creating it,  now removing Card component and using Sdata.map
// // now update contact page 
// import React from "react";
// import Card from "./Card";
// import Sdata from "./Sdata";
// import cardimg from "../src/images/appdevelopment.jpg";

// const Service = () => {

//     return (
//         <>
//             <div className= "my-5"> 
//                 <h1 className="text-center">Our Services </h1>;
//             </div>
           
//             <div className="container-fluid mb-5 ">
//                 <div className='row'>
//                     <div className="col-10 mx-auto">
//                         <div className ="row gy-4" > 
//                             {
//                                 Sdata.map((val, ind) => {
//                                     return <Card 
//                                         key = {ind}
//                                         imgsrc= {val.imgsrc}
//                                         title={val.title}

//                                     />

//                                 })
//                             }
                            

//                         </div>
//                     </div> 
//                 </div>
//             </div>
//         </>
        
//   );
// }

// export default Service;



// p7 add btn link card btn
import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import cardimg from "../src/images/appdevelopment.jpg";

const Service = () => {

    return (
        <>
            <div className= "my-4"> 
                <h1 className="text-center">Our Services </h1>;
            </div>
           
            <div className="container-fluid mb-5">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className ="row gy-5" > 
                            {
                                Sdata.map((val, ind) => {
                                    return <Card 
                                        key = {ind}
                                        imgsrc= {val.imgsrc}
                                        title={val.title}
                                        link= {val.link}

                                    />

                                })
                            }
                            

                        </div>
                    </div> 
                </div>
            </div>
        </>
        
  );
}

export default Service;
