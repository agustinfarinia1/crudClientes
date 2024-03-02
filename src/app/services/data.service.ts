import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { client } from '../models/client.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  constructor(private database:DatabaseService) {
    this.listaClientes = [];
  }

  ngOnInit(): void {
    this.database.getClientesDatabase().subscribe((response) => {
      this.listaClientes = Object.values(response);
    })
  }

  listaClientes : client[];

  getClientes(){
    return this.database.getClientesDatabase();
  }

  setClientes(arregloClientes:client[]){
    this.listaClientes = arregloClientes;
  }

  guardarCliente(cliente:client){
    this.listaClientes.push(cliente);
    this.database.guardarClientes(this.listaClientes);
  }

  actualizarCliente(indice:number,cliente:client){
    let empleadoModificado = this.listaClientes[indice];
    empleadoModificado.id = cliente.id;
    empleadoModificado.firstName = cliente.firstName;
    empleadoModificado.lastName = cliente.lastName;
    empleadoModificado.dni = cliente.dni;
    empleadoModificado.email = cliente.email;
    empleadoModificado.address = cliente.address;
    this.database.actualizarCliente(indice,cliente);
  }

  eliminarCliente(indice:number){
    this.listaClientes.splice(indice,1);
    this.database.eliminarCliente(indice);
    if(this.listaClientes){
      this.database.guardarClientes(this.listaClientes);
    }
  }

  obtenerCliente(indice:number):client{
    return this.listaClientes[indice];
  }
}
