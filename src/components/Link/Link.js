import React from 'react'
import './link.css'
function Link() {
  return (
    <div className='link' style={{marginBottom:'14px'}}>
       <a href="/" className='link-active'>NShop</a>
       <span > Sản phẩm</span>
    </div>
  )
}

export default Link