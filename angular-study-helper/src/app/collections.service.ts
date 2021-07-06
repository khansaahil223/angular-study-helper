import { Injectable } from '@angular/core';
import { Card } from './card';
import { Collection } from './collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
    collections:Collection[] = [
        new Collection(1,"Science",[
            new Card(1,"Science 1","Science front 1","science back 1"),
            new Card(2,"Science 2","Science front 2","science back 2"),
            new Card(3,"Science 3","Science front 3","science back 3"),
            new Card(4,"Science 4","Science front 4","science back 4"),
        ]),
        new Collection(2,"Math",[
            new Card(1,"Math 1","Math front 1","Math back 1"),
            new Card(2,"Math 2","Math front 2","Math back 2"),
            new Card(3,"Math 3","Math front 3","Math back 3"),
            new Card(4,"Math 4","Math front 4","Math back 4"),
        ]),
        new Collection(3,"History",[
            new Card(1,"History 1","History front 1","History back 1"),
            new Card(2,"History 2","History front 2","History back 2"),
            new Card(3,"History 3","History front 3","History back 3"),
            new Card(4,"History 4","History front 4","History back 4"),
        ])
    ]

  localStorageItemName = "collections"

    constructor(){
        const localStorageCollections = localStorage.getItem(this.localStorageItemName)    
        
        if(localStorageCollections) {
            let localStorageCollectionsParsed = <Collection[]>JSON.parse(localStorageCollections)
            this.collections = localStorageCollectionsParsed
        }
        else {
            localStorage.setItem(this.localStorageItemName,JSON.stringify(this.collections))
        }
    }

    add(collection:Collection){     
        const localStorageItemName = this.localStorageItemName
        if(collection.id<1) {  
            collection.id = this.collections.length+1
            

            const localStorageCollections = localStorage.getItem(localStorageItemName)

            let localStorageCollectionsParsed = <Collection[]>JSON.parse(localStorageCollections!)
            localStorageCollectionsParsed = localStorageCollectionsParsed.concat(collection)
            localStorage.setItem(localStorageItemName,JSON.stringify(localStorageCollectionsParsed))

            this.collections.push(collection)
        }
        else{
            console.log(collection)
            this.collections = this.collections.filter(col=>{return col.id!==collection.id})
            this.collections.push(collection)
            localStorage.setItem(localStorageItemName,JSON.stringify(this.collections))
        }
        
    }

    remove(collectionID:number) {
        this.collections = this.collections.filter(collection=>{return collection.id!==collectionID})
        localStorage.setItem(this.localStorageItemName,JSON.stringify(this.collections))
    }

    getTitles():string[] {
        return this.collections.map(collection=>{return collection.title})
    }  

    getCollection(id:number):Collection{
        return this.collections.filter((collection)=>{return collection.id===id})[0]
    }
}
