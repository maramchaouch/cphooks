import './Film.css'
function Film({title,id,rate,date,disc,src})
{return(
<>
<div style={{backgroundRepeat:'no-repeat',backgroundSize:'100% 100%' }} className='cardd'>
<img src={src} alt='' />
<h2 style={{color:'blue',fontWeight:'bold',fontSize:'50px'}}>{title}</h2>
<h3 style={{color:'green',fontWeight:'bold',fontSize:'20px'}}>Rate:{rate} </h3>
<h3 style={{color:'red',fontWeight:'bold',fontSize:'20px'}}>Date:{date} </h3>
<p style={{color:'black',fontWeight:'bold',fontSize:'20px'}}>Description: {disc}</p>


</div>
</>
)
}
export default Film