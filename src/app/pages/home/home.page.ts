import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;

  constructor(
    private router: Router,
    public itemService: ItemService,
    public navCtrl: NavController, 
    public alertCtrl: AlertController
  ){}

  ngOnInit(){
    this.items = this.itemService.getItems();
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }

  async updateItem(id) {
    let item = this.items[this.items.findIndex(item => item.id === id)];
    const alert = await this.alertCtrl.create({
      header: 'Update Item?',
      message: 'Type in your new Item information to update.',
      inputs: [
        { 
          name: 'title',
          placeholder: 'Item Name',
          value: item.title
        },
        {
          name: "description",
          placeholder: "Item Description",
          value: item.description
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel' 
        },
        { 
          text: 'Update', 
          handler: data => { 
            this.itemService.updateItem(Object.assign(data, {id: id}));
          }
        }
      ]
    });
    await alert.present();
  }
}
