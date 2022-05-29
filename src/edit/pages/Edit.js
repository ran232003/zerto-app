import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import DropMenu from "../../components/DropMenu";
import Input from "../../components/Input";
import { siteAction } from "../../store/siteSlice";

const Edit = (props)=>{
    const { state } = useLocation();
    const dispatch = useDispatch();
const navigate = useNavigate();
    console.log(state.platform)
    const[inputs,setInputs] = useState({
        name:state.name,
        validName:true,
        ip:state.addresses,
        validIp:true,
        platform:state.platform,
        validPlatform:true,
        health:state.health,
        validHealth:true
    })
    const handleInput = (lable,obj)=>{
        console.log(lable,obj)
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
            dispatch(siteAction.update({name:state.name,inputs}));
            updateStorage();
            navigate("/web-sites");
        }
        else{
            console.log("else") 
        }
    }
    const updateStorage = ()=>{
        const localSites = JSON.parse(localStorage.getItem("sites") || "[]");
        let tempArray = localSites.map((item)=>{
            return item.name != state.name;
        })
        tempArray.push(inputs)
        console.log(tempArray);
        localStorage.setItem("sites", JSON.stringify(tempArray));
        
    }
        return(
        <div className="site-item">
            <Input
                lable = "Site Name"
                type = "text"
                placeHolder = "www.google.com"
                errorMessage = "Requierd Field"
               handleInput = {handleInput}
               editValue = {state.name}
               editValid = {true}
                />
                 <Input
                lable = "IP Address"
                type = "text"
                placeHolder = "Enter IP"
                errorMessage = "Requierd Field"
                handleInput = {handleInput}
                editValue = {state.addresses}
               editValid = {true}
                />
                 <div className="drop">
                 <DropMenu
                lable = "Platform"
                items = {["VMware","Hyper-V","Public Cloud"]}
                handleInput = {handleInput}
                editItem = {state.platform}
                />
               </div>
               <div className="drop">
                <DropMenu
                lable = "Health"
                items = {["Good","Warning","Failure"]}
                handleInput = {handleInput}
                editItem = {state.health}
                />
                </div>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
             </Button>
                
        </div>
    )
}

export default Edit;