import { Component, OnInit } from '@angular/core';
import { client } from '../../models/client.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { LoginService } from '../../services/login.service';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-client-add-edit',
  templateUrl: './client-add-edit.component.html'
})
export class ClientAddEditComponent implements OnInit{

  constructor(private route:ActivatedRoute,private dataService:DataService,private router:RouterService,private login:LoginService){
    this.indice=-1;
    this.listaClientes = [];
    this.formulario = new FormGroup({
      id : new FormControl(),
      firstName : new FormControl(),
      lastName : new FormControl(),
      dni : new FormControl(),
      email : new FormControl(),
      address : new FormControl()
    })
  }

  ngOnInit(): void {
    let cliente:client;
    let index = this.route.snapshot.params['index'];
    if(index){
      this.indice = index;
    }
    if(this.login.isLogged()){
      this.dataService.getClientes().subscribe((response) =>{
        if(response){
          this.listaClientes = Object.values(response);
        }
        this.dataService.setClientes(this.listaClientes);
      });
    }
    if(this.indice>-1){
      cliente = this.dataService.obtenerCliente(this.indice - 1);
      if(cliente){
        this.formulario.setValue(cliente);
        this.mensajeBoton = "Actualizar";
        this.tituloFormulario = "Actualizar Usuario"
      }
    }
  }

  indice:number;
  formulario:FormGroup;
  mensajeBoton:string = "Crear";
  tituloFormulario:string = "Agregar Usuario";
  listaClientes: client[];

  onSubmit(){
    let cliente : client = new client(this.formulario.value["id"],this.formulario.value["firstName"],this.formulario.value["lastName"],this.formulario.value["dni"],this.formulario.value["email"],this.formulario.value["address"]);
    console.log(cliente);
    console.log(this.indice);
    if(this.indice == -1){
      this.dataService.guardarCliente(cliente);
      if(this.route.snapshot.params['index']){
        this.router.irHome();
      }
    }
    else{
      this.actualizarCliente(cliente);
    }
  }

  actualizarCliente(cliente:client){
    this.dataService.actualizarCliente(this.indice - 1,cliente);
    this.router.irHome();
  }
}
