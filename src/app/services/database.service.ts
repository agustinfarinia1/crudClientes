import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { client } from '../models/client.model';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit{

  constructor(private httpCliente:HttpClient,private login:LoginService) {}

  ngOnInit(): void {
  }

  url:string = environment.url;
  token = this.login.getIdToken();


  getClientesDatabase(){
    let urlGet:string = `${this.url}.json?auth=${this.token}`;
    return this.httpCliente.get(urlGet);
  }

  guardarClientes(listaClientes:client[]){
    let urlGuardar:string = `${this.url}.json?auth=${this.token}`;
    this.httpCliente.put(urlGuardar,listaClientes)
    .subscribe((response) => {
      return response;
    })
  }

  actualizarCliente(indice:number,cliente:client){
    let urlActualizar:string = `${this.url}/${indice}.json`;
    this.httpCliente.put(urlActualizar,cliente)
    .subscribe((response) => {
      return response;
    })
  }

  eliminarCliente(indice:number){
    let urlEliminar = `${this.url}/${indice}.json`;
    this.httpCliente.delete(urlEliminar)
    .subscribe((response) => {
      return response;
    })
  }
}
