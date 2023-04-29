import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { VscSearch } from 'react-icons/vsc'
export default function Input() {
  return (
    <>
    <InputGroup>
                <InputGroup.Text className='input-icon-search'> <VscSearch /></InputGroup.Text>
                <Form.Control placeholder='Tìm kiếm sản phẩm trên NSHOP...' type='search' className='input-search' />
    </InputGroup>
    <div >
        {/* <h1>Nhap can tim kiem</h1> */}
    </div>

    </>
  )
}
