import React, { useState } from 'react'
import styled from 'styled-components';
import './Item.css'
const Div=styled.div`

  display:flex;
  text-algin: center;
  font-size:14px;
  justify-content: space-between;

`
const Img=styled.img`
  
 margin-right:10px;
  height: ${prop=>prop.show ? '1.5rem':'1rem'}
`
const Button=styled.button`
  display: ${show=>show.show   ? 'flex' :'none'}!important;
  
  padding: 0px 7px 0px 7px;
`
export default function Item({icon,content,bigger,add}) {
  const [state,setState]=useState(false)
  return (
    <>
    <Div className='Div' onMouseEnter={()=>(setState(true)) } onMouseLeave={()=>setState(false)}>
      {console.log(state)}
       <div className='d-flex'>
       <Img src={icon} alt="" show={bigger}/>
        <p style={{marginBottom:'8px'}}>{content}</p>
       </div>
       <div>
          <Button type="" className='add-btn btn  btn-primary ' show={state && add} >+</Button>
        </div>
    </Div>
    </>
    
  )
}
