import React, { useEffect, useState } from 'react'
import Item from './Item'
import ardyino from "../../img/iconSildebar/arduino-icon.png"
import cambien from "../../img/iconSildebar/cam-bien.png"
import combo from "../../img/iconSildebar/combo.png"
import denLed from "../../img/iconSildebar/den-led-dieu-khien-den-led.png"
import dienDanDung from "../../img/iconSildebar/dien-dan-dung-va-cong-nghiep.png"
import dienNangLuong from "../../img/iconSildebar/dien-nang-luong-mat-troi-solar.png"
import dongHo from "../../img/iconSildebar/dong-ho-van-nang.png"
import mayIn from "../../img/iconSildebar/may-in-3d-cong-nghe.png"
import machDien from "../../img/iconSildebar/module-mach-dien.png"
import robot from "../../img/iconSildebar/robot-phu-kien-diy.png"
import phuKien from "../../img/iconSildebar/phu-kien-dung-cu.png"
import facebook from "../../img/iconSildebar/facebook.png"
import youtube from "../../img/iconSildebar/youtube.png"
import group from "../../img/iconSildebar/group.png"





import '../sildebar/sildebar.css'


export default function Slidebar() {
  const [items, setItems] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [eles,setElses]=useState([]);
  useEffect(() => {

    setItems([{ add:'true',icon: ardyino, content: "Arduino" },
    { add:'true',icon: cambien, content: "Cảm biến" },
    { icon: combo, content: "Combo khuyến mãi" },
    { add:'true',icon: denLed, content: "Đèn LED, Điều khiển LED" },
    { add:'true',icon: dienDanDung, content: "Điện dân dụng và điện công nghiệp" },
    { add:'true',icon: dienNangLuong, content: "Điện năng lượng mặt trời" },
    { add:'true',icon: dongHo, content: "Đồng hồ vạn năng" },
    { add:'true',icon: mayIn, content: "Máy in 3D công nghệ" },
    { add:'true',icon: machDien, content: "Module,Mạch điện" },
    { add:'true',icon: phuKien, content: "Phụ kiện dụng cụ" },
    { add:'true',icon: robot, content: "Robot,Phụ kiện DIY" }
    ])
    setContacts([{ icon: facebook, content: "Linh kiện điện tử Nshop" },
    { icon: youtube, content: "Kênh Youtube của Nshop" },
    { icon: group, content: "Hội đam mê cơ điện tử" }
    ]);
    setElses(['Hướng dẫn mua bán hàng','Hướng dẫn thanh toán','Kiểm tra đơn hàng','Tuyển dụng'])
  }, [])

  return (
    <>
      <div className="mb-3 fs-6 fw-semibold">DANH MỤC SẢN PHẨM</div>
      <ul className="ul">

        {
          items.map((item, index) => (
            <li key={index} className='li'>
              <Item icon={item.icon} content={item.content} add={item.add} ></Item>
            </li>
          ))
        }
      </ul>
      <div className="mb-3 fs-5 fw-semibold">KẾT NỐI VỚI NSHOP</div>
      <ul className='ul'>
        {contacts.map((contact,index)=>(
          <li key={index} className='li'>
            <Item icon={contact.icon} content={contact.content} bigger={true}>  </Item>
          </li>
        ))}
      </ul>

      <div className="mb-3 fs-5 fw-semibold">KHÁC</div>
      <ul className='ul'>
        {
          eles.map((eles,index)=>(
            <li key={index} className='li'>
              <Item content={eles}></Item>
            </li>
          ))
        }
      </ul>

    </>

  )
}
