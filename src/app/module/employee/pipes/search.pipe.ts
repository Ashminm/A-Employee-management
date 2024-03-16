import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchKey:any): any[] {
    // console.log(searchKey);
    const result:any=[]

    if(!value || !searchKey){return value}

    value.forEach((item:any)=>{
      if(item.Username.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    

    return result;
  }

}
