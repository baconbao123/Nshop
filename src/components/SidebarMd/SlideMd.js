import {Col,Row} from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../../img/logo.jpg'
import { useState,useRef, useEffect } from 'react'
import './SlideMd.css'
const Div=styled.div`
display:${props=>props.show===false&&'none!important'}
`


export default function SlideMd() {
    const [show,setShow]=useState(true);
    const slideBarRef=useRef();

    const handleClick=()=> {
        setShow(true)
    }
    useEffect(()=>{
        const handleSlideOutSide=(e)=> {
            if(slideBarRef.current&&!slideBarRef.current.contains(e.target)) {
               setShow(false)
            }
        }
        document.addEventListener('click',handleSlideOutSide);
        return ()=> {
            document.removeEventListener('click',handleSlideOutSide)
        }
    },[])

    return(
        <>
        
            <Div className='d-lg-none d-md-block slideMd' show={show}>
            <Col ref={slideBarRef} md={4}   className=' slideMd-content' >
            <div className='slideMd-container'>

            <div className='slideMd-title'>
                <img src={logo} width='50'></img>
                <h4 className='d-inline-block'>N-shop</h4>
            </div>

            </div>
           
            </Col>  

            <Col>
            </Col>
            </Div>
      
          

        
           
        
        </>
    )
}
