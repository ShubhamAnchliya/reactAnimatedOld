// import React from 'react';
// // import './App.css';
// import {Button, Modal } from 'react-bootstrap';

// class Modalc extends React.Component {
// constructor()
// {
//   super();
//   this.state = {
//     show: false
//   }
  
// }
// handleModal(){
//   //  this.setState({show: true})
//   this.setState({show: !this.state.show})
// }

//   render() {
//     return (
//       <div>
       
//         <Button onClick= {() => this.handleModal()} > Submit </Button>
//         <Modal show={this.state.show} onHide= {() => this.handleModal()} >
//             <Modal.Header closeButton > Modal Heading </Modal.Header>
//             <Modal.Body>
//                   Hello this is Modal Body
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick= {() => this.handleModal()} > Close </Button>
//                 <Button onClick= {() => this.handleModal()} > Save </Button>
//             </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Modalc;


import React from 'react';
import { useState } from 'react';
// import './App.css';
import {Button, Modal } from 'react-bootstrap';

function Modalc() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalc;