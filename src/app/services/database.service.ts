import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { client } from '../models/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit{

  constructor(private httpCliente:HttpClient) {}

  ngOnInit(): void {
  }

  url:string = "https://crud-clientes-d0d60-default-rtdb.firebaseio.com/datos.json";

  getClientesDatabase(){
    return this.httpCliente.get(this.url);
  }

  guardarClientes(listaClientes:client[]){
    this.httpCliente.put(this.url,listaClientes)
    .subscribe((response) => {
      return response;
    })
  }

  actualizarCliente(indice:number,cliente:client){
    let urlActualizacion = "https://crud-clientes-d0d60-default-rtdb.firebaseio.com/datos/"+indice+".json";
    this.httpCliente.put(urlActualizacion,cliente)
    .subscribe((response) => {
      return response;
    })
  }

  eliminarCliente(indice:number){
    let urlEliminar = "https://crud-clientes-d0d60-default-rtdb.firebaseio.com/datos/"+indice+".json";
    this.httpCliente.delete(urlEliminar)
    .subscribe((response) => {
      return response;
    })
  }
}
