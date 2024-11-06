import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    if (!list || !filterText) {
      return list; // Retournez la liste complète si le filtre est vide
    }

    const lowerCaseFilterText = filterText.toLowerCase();
    return list.filter(
      (item) => item.titre?.toLowerCase().includes(lowerCaseFilterText) // Utilisation de l'opérateur de nullish coalescing
    );
  }
}
