import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = [];
  stats: string = "today";

  constructor(public navCtrl: NavController) {

    this.items = [
        {expanded: true, name: 'ABC', type: 'Sales', icon: 'arrow-dropright'}
    ];

  }

  expandItem(item){

      this.items.map((listItem) => {
          if(item.expanded == true) {
            listItem.icon = 'arrow-dropdown';
          } else {
            listItem.icon = 'arrow-dropright';
          }

          if(item == listItem){
              listItem.expanded = !listItem.expanded;
              // listItem.icon = 'arrow-dropdown';
          } else {
              listItem.expanded = false;
          }

          return listItem;

      });

  }

}
