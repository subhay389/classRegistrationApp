import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Pipe({
  name: 'filter'
})
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// //searchText = searchText.toLowerCase();
// return items.filter( it => {
//     //return it.toLowerCase().includes(searchText);  
//     return it.includes(searchText);
//     });
//    }

   @Injectable()
export class FilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   if (!items) return [];
   return items.filter(it => it[field] == value);
 }
}