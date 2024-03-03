
import React, { useState } from 'react';


function AddFilm({add}){
    
   
    const myfunction=()=>{  setTest(!test) }
    const [test, setTest] = useState(false);
    const [title, setTitle] = useState('');
  
   const [description, setDiscription] = useState('');
   const [rate, setRate] = useState();
   const [imgUrl, setImgUrl] = useState('');
  

   
   const film={title,description,rate,imgUrl}

return(
   
<>

<button onClick={()=>myfunction()}  >+</button>
 
<div style={{display:test?'flex':'none'}}  className="input">
Movie Title:
<input placeholder="title here" onChange={(e)=>{setTitle(e.target.value)}} value={title}  type="text" id="fname" name="fname" />

Rate( 1To 5)
<input placeholder="Rate here" onChange={(e)=>{setRate(e.target.value)}} value={rate}  type="text" id="fname" name="fname" />
Movie Discription:
<input placeholder="Discription here" onChange={(e)=>{setDiscription(e.target.value)}} value={description}  type="text" id="fname" name="fname" />
Url Image:
<input placeholder="Image here" onChange={(e)=>{setImgUrl(e.target.value)}} value={imgUrl}  type="text" id="fname" name="fname" />
<br/>
<button  onClick={()=>add(film)} >add</button>
</div>
{console.log('hi',typeof add)}
</>

)
}
export default AddFilm