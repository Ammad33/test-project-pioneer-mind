import React from 'react'
import "./Navbar.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar() {
  return (
    <div className='col-sm-12 background_custom p-3'>
      <Row >
        <Col sm="2">
          <img src='../images/logo.png' className='img-fluid' />
        </Col>
        <Col sm="8" className="text-center" >
          <span><button className='btn btn-success button1'><b>Dashboard</b></button></span>
          <span><button className='btn btn-success button2'><b>Progress</b></button></span>
          <span><button className='btn btn-success button2'><b>Team</b></button></span>
        </Col>
        <Col sm="2" className="nav-profile" >
          <img className='img-fluid' src='../images/notif.png' />
          <img className='img-fluid' src='../images/Avatar.png' />
          <span> Tania Sharma </span>
        </Col>
      </Row>
    </div>
  )
}

export default Navbar