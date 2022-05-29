import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DropMenu from "../../components/DropMenu";
import Headline from "../../components/Headline";
import Input from "../../components/Input";
import { siteAction } from "../../store/siteSlice";
import "./AddSite.css";
import { useNavigate } from "react-router-dom";


const AddSite = (props)=>{
    const navigate = useNavigate();
    const sites = useSelector((state)=>{
        return state.site.sites
      })
    const[inputs,setInputs] = useState({
        name:"",
        validName:false,
        ip:"",
        validIp:false,
        platform:"",
        validPlatform:false,
        health:"",
        validHealth:false
    })
        const dispatch = useDispatch();
    const handleInput = (lable,obj)=>{
        
        if(lable === "Site Name"){
            setInputs(()=>{
                return {...inputs,name:obj.value,validName:obj.valid}
            })
        }
       else if(lable === "IP Address"){
            setInputs(()=>{
                return {...inputs,ip:obj.value,validIp:obj.valid}
            })
        }
        else if(lable === "Platform"){
            setInputs(()=>{
                return {...inputs,platform:obj.value,validPlatform:obj.valid}
            })
        }
        else  if(lable === "Health"){
            setInputs(()=>{
                return {...inputs,health:obj.value,validHealth:obj.valid}
            })
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputs.validName && inputs.validHealth && inputs.validIp && inputs.validPlatform){
            console.log("here") 
            dispatch(siteAction.addSite(inputs));
            updateStorage();
            navigate("/web-sites");
        }
        else{
            console.log("else") 
        }
    }
    const updateStorage = ()=>{
        console.log(sites);
        let tempArray = sites.map((item)=>{
            return item
        })
        
        tempArray.push(inputs)
        console.log(tempArray);
        localStorage.setItem("sites", JSON.stringify(tempArray));
        
    }
   
    return(
        <div>
            <div className="centerText">
           <Headline
           lable = "Add WebSite"
           />
            </div>
            <div className="inputs">
                <Input
                lable = "Site Name"
                type = "text"
                placeHolder = "www.google.com"
                errorMessage = "Requierd Field"
                handleInput = {handleInput}
                />
                 <Input
                lable = "IP Address"
                type = "text"
                placeHolder = "Enter IP"
                errorMessage = "Requierd Field"
                handleInput = {handleInput}
                />
                <div className="drop">
                <DropMenu
                lable = "Platform"
                items = {["VMware","Hyper-V","Public Cloud"]}
                handleInput = {handleInput}
                />
                </div>
                <div className="drop">
                <DropMenu
                lable = "Health"
                items = {["Good","Warning","Failure"]}
                handleInput = {handleInput}
                />
                </div>
                <div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
             </Button>
        
            </div>
            </div>
            
            
        </div>
    )
}
export default AddSite;