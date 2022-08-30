// p1 to p6
// import React from "react";

// const Contact = () => {
//     return (
//         <>
//             <h1> Hello i am Contact Page</h1>
//         </>
       
//     );
// };

// export default Contact;



// p6.2 created after p6.1
// past form bootstrap
// After changing all fields lable name, type, placeholder
// Add validation now copy sumit form code paste it after message div

// import React from "react";

// const Contact = () => {
//     return (
//         <>
//             <div className="my-5 text-center"   >
//                 <h1> Contact Us</h1>    
//             </div>
//             <div className="container contact_div">
//                 <div className="row">
//                     <div className="col-md-6 col-10 mx-auto">

                       
//                         <form>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     FullName
//                                 </label>
//                                 <input 
//                                     type="text" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     placeholder="Enter your name"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                    Contact Number
//                                 </label>
//                                 <input 
//                                     type="number" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     placeholder="mobile number"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     Email address
//                                 </label>
//                                 <input 
//                                     type="email" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     placeholder="name@example.com"

//                                 />
//                             </div>

                           
//                             <div class="mb-3">
//                                 <label for="exampleFormControlTextarea1" class="form-label">
//                                     Message
//                                 </label>
//                                 <textarea 
//                                     class="form-control" 
//                                     id="exampleFormControlTextarea1" 
//                                     rows="3">
//                                 </textarea>
//                             </div>


//                             <div class="col-12">
//                                 <button class="btn btn-outline-primary" type="submit">
//                                     Submit form
//                                 </button>
//                             </div>




//                         </form>

//                     </div>

//                 </div>

//             </div>
            
//         </>
       
//     );
// };

// export default Contact;





// p6.3  add name, va;lue attributes in input before place holder , onchange{InputEvent}
// add these in message 
// name=""
// value={}
// onChange={InputEvent}

// then add onSubmit on <form>  then create formSubmit Func.
// use useState for accesing dATA then in value write 

// import React, { useState } from "react";

// const Contact = () => {

//     const [data, setData] = useState({
//         fullname: "",
//         mobile: "",
//         email: "",
//         msg: "",

//     });

//     const InputEvent = (event) => {
//         const { name, value } = event.target;

//         setData ((preVal) =>{
//             return {
//                 ...preVal,
//                 [name] : value,
//             };
//         });

//     };

//     const formSubmit = () => {};

//     return (
//         <>
//             <div className="my-5 text-center"   >
//                 <h1> Contact Us</h1>    
//             </div>
//             <div className="container contact_div">
//                 <div className="row">
//                     <div className="col-md-6 col-10 mx-auto">

                       
//                         <form onSubmit={formSubmit} >

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     FullName
//                                 </label>
//                                 <input 
//                                     type="text" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="fullname"
//                                     value={data.fullname}
//                                     onChange={InputEvent}
//                                     placeholder="Enter your name"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                    Contact Number
//                                 </label>
//                                 <input 
//                                     type="number" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="mobile"
//                                     value={data.mobile}
//                                     onChange={InputEvent}
//                                     placeholder="mobile number"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     Email address
//                                 </label>
//                                 <input 
//                                     type="email" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="email"
//                                     value={data.email}
//                                     onChange={InputEvent}
//                                     placeholder="name@example.com"

//                                 />
//                             </div>

                           
//                             <div class="mb-3">
//                                 <label for="exampleFormControlTextarea1" class="form-label">
//                                     Message
//                                 </label>
//                                 <textarea 
//                                     class="form-control" 
//                                     id="exampleFormControlTextarea1" 
//                                     rows="3"
//                                     name="msg"
//                                     value={data.msg}
//                                     onChange={InputEvent}
//                                 ></textarea>
//                             </div>


//                             <div class="col-12">
//                                 <button class="btn btn-outline-primary" type="submit">
//                                     Submit form
//                                 </button>
//                             </div>




//                         </form>

//                     </div>

//                 </div>

//             </div>
            
//         </>
       
//     );
// };

// export default Contact;



// p6.4  now we dont want to refresh page after clicking on btn  ,  then add e.preventDefault(); in formSubmit
// after this part create footer.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./index.css"

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        mobile: "",
        email: "",
        msg: "",

    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData ((preVal) =>{
            return {
                ...preVal,
                [name] : value,
            };
        });

    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(` My name is ${data.fullname} , mobile number is ${data.mobile} , email id is ${data.email}  and i want to say is ${data.msg}`)  
    };

    return (
        <>
            <div className="my-4 text-center"   >
                <h1> Contact Us</h1>    
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                       
                        <form onSubmit={formSubmit} >

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    FullName
                                </label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name"

                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                   Contact Number
                                </label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="mobile"
                                    value={data.mobile}
                                    onChange={InputEvent}
                                    placeholder="mobile number"

                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"

                                />
                            </div>

                           
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </label>
                                <textarea 
                                    class="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                ></textarea>
                            </div>


                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>




                        </form>

                    </div>

                </div>

            </div>
            
        </>
       
    );
};

export default Contact;






// // P7
// import { Modal } from "bootstrap";
// import React, { useState } from "react";
// import About from "./About";
// import { Button } from "bootstrap";
// import Service from "./Service";


// const Contact = () => {

//     const [data, setData] = useState({
//         fullname: "",
//         mobile: "",
//         email: "",
//         msg: "",

//     });

//     const InputEvent = (event) => {
//         const { name, value } = event.target;

//         setData ((preVal) =>{
//             return {
//                 ...preVal,
//                 [name] : value,
//             };
//         });

//     };
   
//     return (
//         <>
//             <div className="my-5 text-center"   >
//                 <h1> Contact Us</h1>    
//             </div>
//             <div className="container contact_div">
//                 <div className="row">
//                     <div className="col-md-6 col-10 mx-auto">

                       
//                         <form >

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     FullName
//                                 </label>
//                                 <input 
//                                     type="text" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="fullname"
//                                     value={data.fullname}
//                                     onChange={InputEvent}
//                                     placeholder="Enter your name"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                    Contact Number
//                                 </label>
//                                 <input 
//                                     type="number" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="mobile"
//                                     value={data.mobile}
//                                     onChange={InputEvent}
//                                     placeholder="mobile number"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     Email address
//                                 </label>
//                                 <input 
//                                     type="email" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="email"
//                                     value={data.email}
//                                     onChange={InputEvent}
//                                     placeholder="name@example.com"

//                                 />
//                             </div>

                           
//                             <div class="mb-3">
//                                 <label for="exampleFormControlTextarea1" class="form-label">
//                                     Message
//                                 </label>
//                                 <textarea 
//                                     class="form-control" 
//                                     id="exampleFormControlTextarea1" 
//                                     rows="3"
//                                     name="msg"
//                                     value={data.msg}
//                                     onChange={InputEvent}
//                                 ></textarea>
//                             </div>

// {/* modal start */}
                        
                       
//         <Button onClick={() => <Service /> } >
//             Click me!
//           </Button>

                         

                           
                            
// {/* modal end */}


//                         </form>

//                     </div>

//                 </div>

//             </div>
            
//         </>
       
//     );
// };

// export default Contact;





// p7.2
// import React, { useState } from "react";
// // import Modalc from "./Modalc";
// // import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import "./index.css"



// const Contact = () => {

//     const [data, setData] = useState({
//         fullname: "",
//         mobile: "",
//         email: "",
//         msg: "",

//     });

//     const InputEvent = (event) => {
//         const { name, value } = event.target;

//         setData ((preVal) =>{
//             return {
//                 ...preVal,
//                 [name] : value,
//             };
//         });

//     };

//     const formSubmit = (e) => {
//         e.preventDefault();
//         alert(` My name is ${data.fullname} , mobile number is ${data.mobile} , email id is ${data.email}  and i want to say is ${data.msg}`)  
//     };

//     return (
//         <>
//             <div className="my-5 text-center"   >
//                 <h1> Contact Us</h1>    
//             </div>
//             <div className="container contact_div">
//                 <div className="row">
//                     <div className="col-md-6 col-10 mx-auto">

                       
//                         <form onSubmit  >

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     FullName
//                                 </label>
//                                 <input 
//                                     type="text" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="fullname"
//                                     value={data.fullname}
//                                     onChange={InputEvent}
//                                     placeholder="Enter your name"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                    Contact Number
//                                 </label>
//                                 <input 
//                                     type="number" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="mobile"
//                                     value={data.mobile}
//                                     onChange={InputEvent}
//                                     placeholder="mobile number"

//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">
//                                     Email address
//                                 </label>
//                                 <input 
//                                     type="email" 
//                                     class="form-control" 
//                                     id="exampleFormControlInput1" 
//                                     name="email"
//                                     value={data.email}
//                                     onChange={InputEvent}
//                                     placeholder="name@example.com"

//                                 />
//                             </div>

                           
//                             <div class="mb-3">
//                                 <label for="exampleFormControlTextarea1" class="form-label">
//                                     Message
//                                 </label>
//                                 <textarea 
//                                     class="form-control" 
//                                     id="exampleFormControlTextarea1" 
//                                     rows="3"
//                                     name="msg"
//                                     value={data.msg}
//                                     onChange={InputEvent}
//                                 ></textarea>
//                             </div>


//                             {/* <Button variant="primary" onClick={handleShow}>
//                                     Submit
//                             </Button> */}
//                             <Button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
//                                 Submit
//                             </Button>

                         




//                         </form>

//                     </div>

//                 </div>

//             </div>
            
//         </>
       
//     );
// };

// export default Contact;