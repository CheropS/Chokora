
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username!:string;
  private clientid='Iv1.e75f1a99aca08279';
  private clientsecret=' 0c05c97d1f8ae41ffb64566a40ae7887a2fdb178';

  constructor(private http:Http) {
    console.log("service is functioning");
    this.username='cherops';
   }

   getProfileInfo() {
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }
}

