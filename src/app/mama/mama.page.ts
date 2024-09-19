import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-mama',
  templateUrl: 'mama.page.html',
})
export class mamaPage {

  constructor(private navCtrl: NavController) {}

  items4=[
    {
     id:1,
     name: 'มาม่าหมูสับ',
     price: 20,
     imageURL: 'assets/img/mama/1.png'
    },
    {
     id:2,
     name: 'นิชชินคัพนูดเดิลรสหมูสับ',
     price: 20,
     imageURL: 'assets/img/mama/2.png'
    },
    {
     id:3,
     name: 'นิชชินคัพนูดเดิลรสหมูมะนาว',
     price: 20,
     imageURL: 'assets/img/mama/3.png'
    },
    {
     id:4,
     name: 'นิชชินคัพนูดเดิลรสต้มยำน้ำข้น',
     price: 20,
     imageURL: 'assets/img/mama/4.png'
    },
    {
      id:5,
      name: 'นิชชินคัพนูดเดิลรสซุปทะเลน้ำข้น',
      price: 20,
      imageURL: 'assets/img/mama/5.png'
     },
     {
      id:6,
      name: 'นิชชินคัพนูดเดิลรสไก่เผ็ดเกาหลีชีส',
      price: 20,
      imageURL: 'assets/img/mama/7.png'
     },
     {
      id:7,
      name: 'นิชชินคัพนูดเดิลรสซุปเกาหลีกลิ่นพริกภูเขาไฟ',
      price: 20,
      imageURL: 'assets/img/mama/8.png'
     },
     {
      id:8,
      name: 'มาม่าคลิกต้มดค้ง',
      price: 20,
      imageURL: 'assets/img/mama/9.png'
     },
     {
      id:9,
      name: 'มาม่ารสต้มยำกุ้ง',
      price: 20,
      imageURL: 'assets/img/mama/10.png'
     },
     {
      id:10,
      name: 'มาม่ารสต้มยำกุ้งน้ำข้น',
      price: 20,
      imageURL: 'assets/img/mama/11.png'
     },
     {
      id:11,
      name: 'คนอร์คัพโจ๊กรสไก่',
      price: 20,
      imageURL: 'assets/img/mama/12.png'
     },
    




  ]
  goBack() {
    this.navCtrl.back();  // กลับไปยังหน้าก่อนหน้า
  }

  goNdwdext() {
    this.navCtrl.navigateForward('/prouct');  // ไปยังหน้าต่อไป
  }


  }


