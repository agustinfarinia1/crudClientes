import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { client } from 'src/app/models/client.model';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent {

  constructor(private dataService:DataService,private login:LoginService,private route:ActivatedRoute,private router:RouterService){
    this.listaClientes = [];
    this.cliente = new client(-1,"","",-1,"","");
    this.indice = 0;
  }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['index'];
    if(this.indice>0){
      if(this.login.isLogged()){
        this.dataService.getClientes().subscribe((response) =>{
          if(response){
            this.listaClientes = Object.values(response);
            this.dataService.setClientes(this.listaClientes);
            this.cliente = this.dataService.obtenerCliente(this.indice - 1);
          }
        });
      }
      else{
        this.router.irHome();
      }
    }
    else{
      this.router.irHome();
    }
  }

  listaClientes: client[];
  cliente: client;
  indice:number;

  eliminarCliente(){
    this.dataService.eliminarCliente(this.indice - 1);
    this.router.irHome();
  }
}
