export class client{

  constructor(id:number,firstName:string,lastName:string,dni:number,email:string,address:string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
    this.address = address;
  }
  id:number;
  firstName:string;
  lastName:string;
  dni:number;
  email:string;
  address:string;
}
