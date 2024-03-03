import './AddFilm.css'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddFilm({add}){
    
   const [test, setTest] = useState(false);
    const myfunction=()=>{  setTest(!test) }
   const [film,setFilm]=useState({title:"",description:"",date:"",rate:"",imgUrl:"",category:""})
   
 
  function handleTitleChange(e) {
    setFilm(c=>({...c,title:e.target.value}));
  }
  function handleDateChange(e) {
    setFilm(e.target.value);
  }
  function handleDescriptionChange(e) {
    setFilm(e.target.value);
  }
  function handleRateChange(e) {
    setFilm(e.target.value);
  }
  function handleImgUrlChange(e) {
    setFilm(e.target.value);
  }
  function handleCategoryChange(e) {
    setFilm(e.target.value);
  }
 
   

return(
   
<>


 
<div style={{display:test?'flex':'none'}}  className="input">
Movie Title:
<input placeholder="title" onChange={(e)=>{handleTitleChange}}   type="text" id="fname" name="fname" />
Date:
<input placeholder="Date" onChange={(e)=>{handleDateChange}}   type="text" id="fname" name="fname" />
Rate( 1To 5)
<input placeholder="Rate" onChange={(e)=>{handleRateChange}} type="text" id="fname" name="fname" />
Movie Discription:
<input placeholder="Discription" onChange={(e)=>{handleDescriptionChange}}   type="text" id="fname" name="fname" />
Url Image:
<input placeholder="Image" onChange={(e)=>{handleImgUrlChange}}   type="text" id="fname" name="fname" />
category:
<div style={{display :'flex'}}>
action:  <input type="checkbox" onChange={(e)=>{setCategory(e.target.value)}} value='action'/>
drama:  <input type="checkbox" onChange={(e)=>{setCategory(e.target.value)}} value='drama'/>
Biography:  <input type="checkbox" onChange={(e)=>{setCategory(e.target.value)}} value='Biography'/>
</div>
<br/>
<button  onClick={()=>add(film)} >add</button>
</div>

<button onClick={()=>myfunction()}  >add your film</button>

</>

)
}
export default AddFilm