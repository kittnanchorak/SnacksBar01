import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-food',
  templateUrl: 'food.page.html',
})
export class foodPage {

  constructor(private navCtrl: NavController) {}

  items2=[
    {
     id:1,
     name: 'เลย์รสดั้งเดิม',
     price: 10,
     imageURL: 'assets/img/Kanom/Kanom1.jpg'
    },
    {
     id:2,
     name: 'เรย์รสเมี่ยงคำ',
     price: 10,
     imageURL: 'assets/img/Kanom/Kanom2.png'
    },
    {
     id:3,
     name: 'เลย์รสสาหร่าย',
     price: 10,
     imageURL: 'assets/img/Kanom/Kanom3.png'
    },
    {
     id:4,
     name: 'ข้าวเกรียบกุ้งPR',
     price: 10,
     imageURL: 'assets/img/Kanom/Kanom4.png'
    },
    {
      id:5,
      name: 'Milo',
      price: 6,
      imageURL: ' assets/img/Kanom/Kanom5.png'
     },
     {
      id:6,
      name: 'Snickers',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom6.png'
     },
     {
      id:7,
      name: 'Break',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom7.png'
     },
     {
      id:8,
      name: 'Break Supa',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom8.png'
     },
     {
      id:9,
      name: 'Oreo',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom9.png'
     },
     {
      id:10,
      name: 'Oreoสตอเบอร์รี่',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom10.png'
     },
     {
      id:11,
      name: 'Mentos',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom11.png'
     },
     {
      id:12,
      name: 'Hallsสีเหลือง',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom12.png'
     },
     {
      id:13,
      name: 'Hallsสีเขียว',
      price: 6,
      imageURL: 'assets/img/Kanom/Kanom13.png'
     },
  ]
  goBack() {
    this.navCtrl.back();  // กลับไปยังหน้าก่อนหน้า
  }

  goNdwdext() {
    this.navCtrl.navigateForward('/snacks');  // ไปยังหน้าต่อไป
  }


  }


