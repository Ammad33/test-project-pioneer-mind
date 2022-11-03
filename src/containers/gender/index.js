import { React } from 'react'
import { useNavigate } from "react-router-dom";
import './gender.scss';
import logo from '../../assets/logo.png';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../../assets/arrow-narrow-left.svg';
import InfoIcon from '../../assets/info.svg';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(90deg, #6FEACC 0%, #FDFF9B 100%);"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(90deg, #6FEACC 0%, #FDFF9B 100%);"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 4
  }
}));

const steps = ["", "", "", "", "", "", ""];



const Gender = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className='col-sm-12 background'>
      <Row className='header-height'>
        <Col sm="12">
          <header>
            <img src={logo} alt="pioneerMind" />
          </header>
        </Col>
      </Row>
      <Row>
        <Col sm='4'></Col>
        <Col sm="4">
          <div className='title'>
            Getting to know you
          </div>
          <div className="stepper">
            <Stack sx={{ width: "500px" }}>
              <Stepper
                alternativeLabel
                activeStep={3}
                connector={<ColorlibConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}></Step>
                ))}
              </Stepper>
            </Stack>
          </div>
          <div className='gender-title'>
            <div>
              <p> What gender do you </p>
              <p style={{ marginTop: '-16px' }}> identify with?
                <OverlayTrigger
                  style={{ color: '#454259' }}
                  placement="bottom"
                  overlay={
                    <Tooltip style={{ fontFamily: 'Inter-Regular' }}>
                      Add description here about why you want to know this.
                    </Tooltip>
                  }
                ><img className='info-icon' src={InfoIcon} alt="Info Icon" />
                </OverlayTrigger>
              </p>
            </div>
          </div>
          <div className='container'>
            <Form.Select title="Dropdown button" className='form'>
              <option>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Transgender</option>
              <option value="4">Non-Binary/Gender-nonconfirming</option>
              <option value="5">Prefer to self describe</option>
            </Form.Select>
          </div>
          <div className='form-text-container'>
            <Form.Text className='form-text' muted>
              Please Select one
            </Form.Text>
          </div>
          <div className="btn-container">
            <Button onClick={handleClick} variant="custom" className='continue-btn'>
              Continue
            </Button>
          </div>
          <div className='back-btn'>
            <Button variant="custom">
              <img src={BackArrow} alt="Back Arrow" />
              <p> Back </p>
            </Button>
          </div>
        </Col>
        <Col sm='4'></Col>
      </Row>
    </div>


  );

};
export default Gender;