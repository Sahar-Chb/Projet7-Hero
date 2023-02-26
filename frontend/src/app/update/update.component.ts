import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {



  id: any;

  hero: any;


  constructor( private _act:ActivatedRoute, private _shared:SharedService , private _router: Router) {
    
  }

  ngOnInit(): void{

    this.id = this._act.snapshot.paramMap.get('id');
    
    this._shared.getById(this.id)
      .subscribe(
        {
          next: (res) => {
            this.hero = res;
            console.log(this.hero);
            
          },
          error: (err) => {
            console.log(err);
            
          }
          
          
      }
    )
    
  }

  save() {
    this._shared.update(this.id, this.hero)
    .subscribe(
        {
           next: (res) => {
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your hero has been saved',
            showConfirmButton: false,
            timer: 1500
            })

            this._router.navigate(['/list']);
            
          },

          error: (err) => {
            console.log(err);
            
          }
        })
  }

}
