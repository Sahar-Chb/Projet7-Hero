import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public shared: SharedService) {
    
  }

  heros: any;

  ngOnInit(): void{
    
    this.shared.all()
      .subscribe(
        {
           next: (res) => {
            this.heros=res;
          },

          error: (err) => {
            console.log(err);
            
          }
        }

      )
    }
   
  
  
  deleteItem(id: any) {
    this.shared.delete(id)
      .subscribe(
        {
          next: (res) => {
            console.log(res);
            this.ngOnInit();

          }, error: (err) => {
            console.log(err);
          }
        }
    )
    
  }
}
