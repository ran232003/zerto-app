import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";



const DropMenu = (props)=>{
    const{items,lable,editItem} = props;
    const[item,setItem] = useState({
        chooseItem:editItem || ""
    })
    console.log(item);
const handleChange = (e)=>{
    setItem(()=>{
        return {chooseItem:e.target.value}
    });
    let obj = {value:e.target.value,valid:true}
    props.handleInput(lable,obj)
}
    const age = 20;
    return(
        <div>
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{lable}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={item.chooseItem}
    label={lable}
    onChange={handleChange}
  >
      {items.map((itemObj)=>{
          return(
            <MenuItem value = {itemObj} >{itemObj}</MenuItem>
          )
      })}
    
  </Select>
</FormControl>
        </div>
    )
}
export default DropMenu;