// p1 now copy navbar bootstrap from side and paste then we correct the error
// change name to className , selfclose tags  hr and input tag
// import React from 'react';

// const Navbar = () => {
//     return (
//         <>
//             <nav className ="navbar navbar-expand-lg navbar-light bg-light">
//             <div className ="container-fluid">
//                 <a className ="navbar-brand" href="#">Navbar</a>
//                 <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className ="navbar-toggler-icon"></span>
//                 </button>
//                 <div className ="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className ="nav-item">
//                     <a className ="nav-link active" aria-current="page" href="#">Home</a>
//                     </li>
//                     <li className ="nav-item">
//                     <a className ="nav-link" href="#">Link</a>
//                     </li>
//                     <li className ="nav-item dropdown">
//                     <a className ="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown
//                     </a>
//                     <ul className ="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a className ="dropdown-item" href="#">Action</a></li>
//                         <li><a className ="dropdown-item" href="#">Another action</a></li>
//                         <li><hr className ="dropdown-divider" /></li>
//                         <li><a className ="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                     </li>
//                     <li className ="nav-item">
//                     <a className ="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//                     </li>
//                 </ul>
//                 <form className ="d-flex">
//                     <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className ="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//                 </div>
//             </div>
//             </nav>

//         </>
//     );
// }

// export default Navbar;



//part 2
// now adding div  <div className="container-fluid nav">, then inside that row div

// most used part copy past it
// div className="container-fluid nav_bg">
//     <div className='row'>
//         <div className="col-10 mx-auto">
//         </div>
//     </div>
// </div>


// put nav code in containers col part due to these our nav bar will come in center of page
// import React from 'react';

// const Navbar = () => {
//     return (
//         <>
//         <div className="container-fluid nav_bg">
//             <div className='row'>
//                 <div className="col-10 mx-auto">

//                     <nav className ="navbar navbar-expand-lg navbar-light bg-light">
//                             <div className ="container-fluid">
//                                 <a className ="navbar-brand" href="#">Navbar</a>
//                                 <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className ="navbar-toggler-icon"></span>
//                                 </button>
//                                 <div className ="collapse navbar-collapse" id="navbarSupportedContent">
//                                 <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
//                                     <li className ="nav-item">
//                                     <a className ="nav-link active" aria-current="page" href="#">Home</a>
//                                     </li>
//                                     <li className ="nav-item">
//                                     <a className ="nav-link" href="#">Link</a>
//                                     </li>
//                                     <li className ="nav-item dropdown">
//                                     <a className ="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Dropdown
//                                     </a>
//                                     <ul className ="dropdown-menu" aria-labelledby="navbarDropdown">
//                                         <li><a className ="dropdown-item" href="#">Action</a></li>
//                                         <li><a className ="dropdown-item" href="#">Another action</a></li>
//                                         <li><hr className ="dropdown-divider" /></li>
//                                         <li><a className ="dropdown-item" href="#">Something else here</a></li>
//                                     </ul>
//                                     </li>
//                                     <li className ="nav-item">
//                                     <a className ="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//                                     </li>
//                                 </ul>
//                                 <form className ="d-flex">
//                                     <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                                     <button className ="btn btn-outline-success" type="submit">Search</button>
//                                 </form>
//                                 </div>
//                             </div>
//                     </nav>
//                 </div>
//             </div>
//         </div>

//         </>
//     );
// }


// export default Navbar;




// p2 now removing unnecessary part
// and copy nav-item for about, service, contact
// then in line 146  do ms on place of me for left margin  <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
// import React from 'react';

// const Navbar = () => {
//     return (
//         <>
//         <div className="container-fluid nav_bg">
//             <div className='row'>
//                 <div className="col-10 mx-auto">

//                     <nav className ="navbar navbar-expand-lg navbar-light bg-light">
//                             <div className ="container-fluid">
//                                 <a className ="navbar-brand" href="#">Navbar</a>
//                                 <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className ="navbar-toggler-icon"></span>
//                                 </button>
                                
//                                 <div className ="collapse navbar-collapse " id="navbarSupportedContent">
                                
//                                     <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">

//                                         <li className ="nav-item">
//                                         <a className ="nav-link active" aria-current="page" href="#">Home</a>
//                                         </li>

//                                         <li className ="nav-item">
//                                         <a className ="nav-link" href="#">About</a>
//                                         </li>

//                                         <li className ="nav-item">
//                                         <a className ="nav-link" href="#">Service</a>
//                                         </li>

//                                         <li className ="nav-item">
//                                         <a className ="nav-link" href="#">Contact</a>
//                                         </li>
                                    
//                                     </ul>
                              
//                                 </div>
//                             </div>
//                     </nav>
//                 </div>
//             </div>
//         </div>

//         </>
//     );
// }


// export default Navbar;



// p3 
// now change the name of Navbar in 195 <a> tag ,
// then change <a> with NavLink thrn import NavLink
// now replace href with to="/" for pathName  then add exact in NavLink
// add activeClassName='menu_active'  
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">

                    <nav className ="navbar navbar-expand-lg navbar-light bg-light ">
                            <div className ="container-fluid">
                                <NavLink  
                                    // activeClassName="menu_active"
                                    className ="navbar-brand" to="/">
                                    F9 Tech Pvt. Ltd.
                                </NavLink>
                                <button 
                                    className ="navbar-toggler" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation">
                                    <span
                                        className ="navbar-toggler-icon">   
                                    </span> 
                                </button>
                                
                                <div
                                    className ="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                
                                    <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">

                                        <li className ="nav-item">
                                            <NavLink  activeClassName="menu_active" exact className ="nav-link active" aria-current="page" to="/" >
                                                Home
                                            </NavLink>
                                        </li>

                                        <li className ="nav-item">
                                            <NavLink  activeClassName="menu_active" exact className ="nav-link" to="/about" >
                                                About
                                            </NavLink>
                                        </li>

                                        <li className ="nav-item">
                                            <NavLink  activeClassName="menu_active" exact className ="nav-link" to="/service" >
                                                Service
                                            </NavLink>
                                        </li>

                                        <li className ="nav-item">
                                            <NavLink  activeClassName="menu_active" exact className ="nav-link" to="/contact" >
                                                Contact
                                            </NavLink>
                                        </li>
                                    
                                    </ul>
                              
                                </div>
                            </div>
                    </nav>
                </div>
            </div>
        </div>

        </>
    );
}


export default Navbar;