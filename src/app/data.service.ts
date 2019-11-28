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
     return this.helper.get("http://13.235.94.164:3434/world/");
   }

   selectByNo(id)
   {
    return this.helper.get("http://13.235.94.164:3434/world/"+id);

   }

   insert(worldObj)
   {
    return this.helper.post("http://13.235.94.164:3434/world/",worldObj);

   }

   delete(id)
   {
    return this.helper.delete("http://13.235.94.164:3434/world/"+id);

   }

   

   
}
