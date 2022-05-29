import React from "react";
import { useSelector } from "react-redux";
import Headline from "../../components/Headline";
import Site from "./Site";

const ListOfSites = (props)=>{
   const sites = useSelector((state)=>{
      return state.site.sites
   })
   if(sites.length === 0){
       return(
        <div className="centerText">
        <Headline
        lable = "No WebSite Available"
        />
        </div>
       )
   }
   else{
    return(
        <div>
           
            <div>
            {sites.map((site)=>{
                return(
                    <Site
                    name = {site.name}
                    health = {site.health}
                    platform = {site.platform}
                    addresses = {site.ip}
                    key = {site.name}
                    />
                )
            })}
            </div>
        </div>
    )
   }
    
}
export default ListOfSites;