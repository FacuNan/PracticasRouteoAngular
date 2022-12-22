import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent implements OnInit{
  id: any | undefined;
constructor(private router: ActivatedRoute){}
  ngOnInit(): void {
   this.router.params.subscribe((params: any)=>{
    if(params.id){
      this.id= params.id
    }
   })
  }
}
