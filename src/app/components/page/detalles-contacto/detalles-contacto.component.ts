import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icontactos } from 'src/app/models/icontactos';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent implements OnInit{
  id: any | undefined;
  filtro: string = 'todos'
  contacto: Icontactos = {
    id: 0,
    nombre:'',
    apellido:'',
    email:'',
    sexo:'mujer'
  };
constructor(private router: ActivatedRoute){}
  ngOnInit(): void {
   this.router.params.subscribe((params: any)=>{
    if(params.id){
      this.id= params.id
    }
   }
   );
   if(history.state.data){
    this.contacto=history.state.data
   }

   if(history.state.filtro){
    this.filtro=history.state.Filtro
   }
  }
}
