import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

import dathongbao from '../../img/dathongbao.png'
import proteced from '../../img/proteced.png'
import './footer.css'
function footer() {
    return (
        <div className='footer'>
            <Container>
                <Row className='w-100 content-footer '>
                    <Col md={7} className='footer-left'>
                        <ul className='ul-footer'>
                            <a href="#/guarantee"> <li>Bảo hành</li></a>
                            <a href="#/doitra"> <li>Đổi trả</li></a>
                            <a href="#/security"> <li>Bảo mật</li></a>
                            <a href="#/dieukhoan"> <li>Điều khoản</li></a>
                        </ul>
                        <div className='content-footer'>
                            <span>Hộ kinh doanh Linh kiện điện tử Nshop / GPĐKKD số: 41X8035261 do UBND Quận Tân Phú cấp ngày 08/05/2019</span>
                            <p> <b> Điện tử NShop Tân Phú:</b> 1 Bùi Xuân Phái, Tây Thạnh, Tân Phú, TP. HCM – 📞 0902 64 39 78 <br />
                               <b>Điện tử NShop Quận 9:</b>  7 Trần Hưng Đạo, Hiệp Phú, Quận 9, TP. HCM – 📞 093 27 23 186</p>
                            <b>NSHOPVN.COM © 2019 - 2021</b>
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <img src={proteced} width={135} />
                        <img src={dathongbao} width={180} />

                    </Col>
                    <Col xs={8} className='d-block d-sm-none'>
                        <button>Nshop.com</button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default footer
