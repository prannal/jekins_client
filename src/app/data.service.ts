import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private helper:HttpClient) {

   }

   select()
   {
     return this.helper.get("http://localhost:3434/world/");
   }

   selectByNo(id)
   {
    return this.helper.get("http://localhost:3434/world/"+id);

   }

   insert(worldObj)
   {
    return this.helper.post("http://localhost:3434/world/",worldObj);

   }

   delete(id)
   {
    return this.helper.delete("http://localhost:3434/world/"+id);

   }

   

   
}
