import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.page.html',
})
export class DrinksPage {

  constructor(private navCtrl: NavController) {}

  items=[
    {
     id:1,
     name: 'นมเมจิรสช็อคกาแลต',
     price: 12,
     imageURL: 'assets/img/drik/01.png'
    },
    {
     id:2,
     name: 'นมจืดเมจิ',
     price: 12,
     imageURL: 'assets/img/drik/02.png'
    },
    {
     id:3,
     name: 'น้ำโออิชิ',
     price: 10,
     imageURL: 'assets/img/drik/03.png'
    },
    {
     id:4,
     name: 'น้ำเป๊ปซี่',
     price: 13,
     imageURL: 'assets/img/drik/04.png'
    },
    {
      id:5,
      name: 'แฟนต้าเขียว',
      price: 13,
      imageURL: 'assets/img/drik/5.png'
     },
     {
      id:6,
      name: 'แฟนต้าแดง',
      price: 13,
      imageURL: 'assets/img/drik/7.png'
     },
     {
      id:7,
      name: 'เกลือแร่เกเตอเรดกลิ่นบลูบลาส',
      price: 10,
      imageURL: 'assets/img/drik/8.png'
     },
     {
      id:8,
      name: 'เกลือแร่เกเตอเรดกลิ่น  มะนาว',
      price: 10,
      imageURL: 'assets/img/drik/9.png'
     },
     {
      id:9,
      name: 'น้ำเปล่าPurra',
      price: 8,
      imageURL: 'assets/img/drik/10.png'
     },
   ];

  goBack() {
    this.navCtrl.back();  // กลับไปยังหน้าก่อนหน้า
  }

  goNdwdext() {
    this.navCtrl.navigateForward('/food');  // ไปยังหน้าต่อไป
  }


}
