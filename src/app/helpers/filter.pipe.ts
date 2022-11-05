import { Pipe, PipeTransform } from '@angular/core';
import { smartPhone } from '../models/smartphone.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(phones: smartPhone[], search: string): smartPhone[] {
    if (!phones) return [];
    if (!search) return phones;
    search = search.toLowerCase();
    let arr = phones.filter(phone => phone.title.toLowerCase().includes(search) || phone.description.toLowerCase().includes(search));
    return arr;
  }

}
