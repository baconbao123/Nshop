import {Col,Row} from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../../img/logo.jpg'

import './SlideMd.css'



export default function SlideMd() {
    return(
        <>
        <Row className='d-lg-none d-md-block slideMd'>

      
           <Col  md={4}   className=' slideMd-content'>
            <div className='slideMd-container'>

            <div className='slideMd-title'>
                <img src={logo} width='50'></img>
                <h4 className='d-inline-block'>N-shop</h4>
            </div>

            </div>
           
            </Col>  

            <Col>
            </Col>

        </Row>
           
        
        </>
    )
}
