// p1  route means path,  and we import Switch, Route, Redirect
// then import bootstrap , create navbar tag


// import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Switch , Route, Redirect } from 'react-router-dom';
// import About from './About';
// import Home from './Home';
// import Service from './Service';
// import Contact from './Contact';
// import Navbar from './Navbar';

// const App = () => {
//     return (
//         <>
//             <Navbar />
//             <Switch>
//                 <Route exact path="/" component= {Home}  />
//                 <Route exact path="/about" component= {About}  />
//                 <Route exact path="/service" component= {Service}  />
//                 <Route exact path="/contact" component= {Contact}  />
//                 <Redirect to="/" />
//             </Switch>
          
//         </>
//     );
// };


// export default App;




// p2  route means path,  and we import Switch, Route, Redirect
// then import bootstrap , now import js file so we can use dropdown menu
// import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import { Switch , Route, Redirect } from 'react-router-dom';
// import About from './About';
// import Home from './Home';
// import Service from './Service';
// import Contact from './Contact';
// import Navbar from './Navbar';
// // import web from "../src/images/homepagepic1";

// const App = () => {
//     return (
//         <>
//             <Navbar />
//             <Switch>
//                 <Route exact path="/" component= {Home}  />
//                 <Route exact path="/about" component= {About}  />
//                 <Route exact path="/service" component= {Service}  />
//                 <Route exact path="/contact" component= {Contact}  />
//                 <Redirect to="/" />
//             </Switch>
          
//         </>
//     );
// };


// export default App;



// p6.4  import Footer.jsx
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch , Route, Redirect } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
// import web from "../src/images/homepagepic1";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component= {Home}  />
                <Route exact path="/about" component= {About}  />
                <Route exact path="/service" component= {Service}  />
                <Route exact path="/contact" component= {Contact}  />
                <Redirect to="/" />
            </Switch>
            <Footer />
          
        </>
    );
};


export default App;