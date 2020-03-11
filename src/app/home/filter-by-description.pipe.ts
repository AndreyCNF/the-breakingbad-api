import {Pipe, PipeTransform} from '@angular/core';
import { Personagens } from '../model/Personagens';

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {
    transform(personagens: Personagens[], nameQuery: string) {
        nameQuery = nameQuery.trim().toLowerCase()
        if(nameQuery) {
            return personagens.filter(personagem =>
                personagem.name.toLowerCase().includes(nameQuery));

        } else {
            return personagens;
        }
    }
}