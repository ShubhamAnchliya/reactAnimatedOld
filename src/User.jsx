
// p1 useHistory  , so we can goto last page we have visited by goBack() by clicking button
// import React from 'react';
// import { useParams, useLocation, useHistory } from 'react-router-dom';

// const User = () =>{

//     const { uname, ulname } = useParams();
//     const location = useLocation();
//     const history = useHistory();

//     // console.log(location);
//     console.log(history);

//     return (
//         <>
//              <h1> 
//                 User { uname } {ulname}  Page
//              </h1>
//              <p>
//                  My Current location is {location.pathname}
//              </p>
//              {location.pathname === `/user/shubh/jain` ? (
//                 <button  onClick= {() => history.goBack() } >  Go Back </button> 
//              ) : null }
//         </>
//     ); 
// };

// export default User;



// P2 WE CAN USE history.push("/") to go to home page
// we can go to  any page by like this history.push("/contact")
// import React from 'react';
// import { useParams, useLocation, useHistory } from 'react-router-dom';

// const User = () =>{

//     const { uname, ulname } = useParams();
//     const location = useLocation();
//     const history = useHistory();

//     // console.log(location);
//     console.log(history);

//     return (
//         <>
//              <h1> 
//                 User { uname } {ulname}  Page
//              </h1>
//              <p>
//                  My Current location is {location.pathname}
//              </p>
//              {location.pathname === `/user/shubh/jain` ? (
//                 <button  onClick= {() => history.push("/") } >  HomePage </button> 
//              ) : null }
//         </>
//     ); 
// };

// export default User;





// p1 live search using hooks and router
import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () =>{

    const { uname, ulname } = useParams();
    const location = useLocation();
    const history = useHistory();

    // console.log(location);
    console.log(history);

    return (
        <>
             <h1> 
                User { uname } {ulname}  Page
             </h1>
             <p>
                 My Current location is {location.pathname}
             </p>
             {location.pathname === `/user/shubh/jain` ? (
                <button  onClick= {() => history.push("/") } >  HomePage </button> 
             ) : null }
        </>
    ); 
};

export default User;