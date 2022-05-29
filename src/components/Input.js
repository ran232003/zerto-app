import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { checkInput } from "../HelperFunc";

const Input = (props)=>{
    const{placeHolder,type,lable,errorMessage,editValue,editValid} = props;
    const[error,setError] = useState({
        isValid : false,
        countError : 0
    })
    const[input,setInput] = useState({
       value:editValue||"",
       valid:false||editValid,
       
    })
    const handleInput = (e)=>{
        console.log(e.target.value);
       let value = e.target.value.trim();
         //checkInput(lable,value);
         let valid;
       const count = 1;
       if(value.length>0){
         valid =true
        if(error.countError>0){
            setError(()=>{
                return {isValid:false,countError:1}
            }) 
        }
       }
       else{
        valid =false
        if(error.countError>0){
            setError(()=>{
                return {isValid:true,countError:1}
            }) 
        }
       }
       
        setInput(()=>{
            return {valid,value}
        })
        let obj = {valid,value}
        props.handleInput(lable,obj);
    }
    const onInput = ()=>{
        
        setError(()=>{
            return {...error,countError:1}
        })
    }
    return(
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{lable}</Form.Label>
    <Form.Control type={type} value = {input.value} placeholder={placeHolder} onChange={handleInput}  isInvalid = {error.isValid} onBlur={onInput}/>
   
    <Form.Control.Feedback type="invalid">
              {errorMessage}
            </Form.Control.Feedback>
  </Form.Group>
 
</Form>
        </div>
    )
}
export default Input;