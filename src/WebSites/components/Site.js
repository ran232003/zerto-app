import React from "react";
import { Button } from "react-bootstrap";
import "./Site.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { siteAction } from "../../store/siteSlice";


const Site = (props)=>{
    const navigate = useNavigate();
    const dispatch = useDispatch()

  const{health,platform,addresses,name} = props;
  const handleEdit = (e)=>{
    e.preventDefault();
    navigate("/edit",{
        state: {health,platform,addresses,name}}
        );
  }
  const handleDelete = (e)=>{
    e.preventDefault();
    dispatch(siteAction.delete(name))
    const localSites = JSON.parse(localStorage.getItem("sites") || "[]");
  const newSites = localSites.filter((item)=>{
        return   item.name != name
    })
    localStorage.setItem("sites", JSON.stringify(newSites));
    console.log("test");
  }
    return(
        <div className="site-item">
           <div className="flex-row">
               Name:
               <h5>{name}</h5> 
               </div> 
               <div className="flex-row">
               IP Address:
               
               <h5>{addresses}</h5> 
               </div> 
               <div className="flex-row">
               Platform:
               <h5>{platform}</h5> 
               </div> 
               <div className="flex-row">
               Health:
               <h5> {health}</h5> 
               </div>
               <div className="rightSide"> 
            <Button className="bt"
            onClick={handleEdit}
            >EDIT</Button>
            <Button variant="danger" className="bt"
            onClick={handleDelete}
            >DELETE</Button>
            
            
        </div>
        </div>
    )
}
export default Site;