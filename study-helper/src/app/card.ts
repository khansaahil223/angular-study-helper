export class Card {
    id:number
    title:string
    front:string
    back:string
    showFront:boolean = true    
    constructor(id:number,title:string,front:string,back:string) {
        this.id=id
        this.title = title
        this.front=front
        this.back=back
    }
} 