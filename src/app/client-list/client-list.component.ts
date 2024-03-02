import { Component, Input, OnInit } from '@angular/core';
import { client } from '../models/client.model';
import { DatabaseService } from '../services/database.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{

  constructor(private dataService:DataService){
    this.listaClientes = [];
  }

  ngOnInit(): void {
    this.dataService.getClientes().subscribe((response) =>{
      if(response){
        this.listaClientes = Object.values(response);
      }
      this.dataService.setClientes(this.listaClientes);
    });
  }

  listaClientes: client[];

  eliminarCliente(index:number){
    this.dataService.eliminarCliente(index);
  }
}
