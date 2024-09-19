import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-snacks',
  templateUrl: 'snacks.page.html',
})
export class snacksPage {

  constructor(private navCtrl: NavController) {}

  items3=[
    {
     id:1,
     name: 'ปูอัดเสียบไม้',
     price: 12,
     imageURL: 'assets/img/snacks/snacks1.png'
    },
    {
     id:2,
     name: 'ไส้กรอกชีสเสียบไม้',
     price: 12,
     imageURL: 'assets/img/snacks/snacks2.png'
    },
    {
     id:3,
     name: 'ขนมจีบเสียบไม้',
     price: 12,
     imageURL: 'assets/img/snacks/snacks3.png'
    },
    {
     id:4,
     name: 'ขนมจีบสาหร่ายเสียบไม้',
     price: 12,
     imageURL: 'assets/img/snacks/snacks4.png'
    },
    {
      id:5,
      name: 'ไส้กรอกนมเสียบไม้',
      price: 12,
      imageURL: 'assets/img/snacks/snacks5.png'
     },
     {
      id:6,
      name: 'ไส้กรอกแดงเสียบไม้',
      price: 12,
      imageURL: 'assets/img/snacks/snacks6.png'
     },
     {
      id:7,
      name: 'ไส้กรอกเสียบไม้',
      price: 10,
      imageURL: 'assets/img/snacks/snacks7.png'
     },
     {
      id:8,
      name: 'เฟรนฟราย',
      price: 10-20,
      imageURL: 'assets/img/snacks/8.png.png'
     },


  ]
  goBack() {
    this.navCtrl.back();  // กลับไปยังหน้าก่อนหน้า
  }

  goNdwdext() {
    this.navCtrl.navigateForward('/snacks');  // ไปยังหน้าต่อไป
  }


  }


