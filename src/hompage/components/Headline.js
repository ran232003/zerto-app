import React from "react";
import { Button } from "react-bootstrap";
import "./Headline.css"
import { useNavigate } from "react-router-dom";
const Headline = (props)=>{
    const navigate = useNavigate();
    const handleStarted = (e)=>{
        e.preventDefault();
       // navigate("/sign-up");
    }
    const handleLogin = (e)=>{
        e.preventDefault();
       // navigate("/login");
    }
    return(
        <div className = "hero-container">
        
          <h1>WELCOME TO ZERTO</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleStarted}
        >
          GET STARTED
        </Button>
        <Button  variant="light"
          className='btns'
          onClick={handleLogin}
        >
          EDIT <i className='far fa-play-circle' />
        </Button>
      </div>
        </div>
    )
}
export default Headline