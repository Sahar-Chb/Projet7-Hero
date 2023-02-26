import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {


  hero = {
    name: '',
    power:0
  }

  image: any;

  selectImage(e: any) {
    this.image = e.target.files[0];
    console.log(this.image);
  }


  createHero() {

    let fd = new FormData();
    fd.append('name', this.hero.name);
    fd.append('power', this.hero.power.toString());
    fd.append('image', this.image);

    this.shared.ajout( fd )
      .subscribe(
        {
        
          next: (res) => {
            console.log(res);
          },

          error: (err) => {
            console.log(err);
            
          }
        })
    
    this._router.navigate(['/list']);
  }
    
  constructor(private shared:SharedService , private _router:Router) {
    
  }

  ngOnInit(): void{
    
  }
  

}
