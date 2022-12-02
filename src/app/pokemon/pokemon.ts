export class Pokemon {
  id:number
  name:string;
  hp: number; 
  cp : number; 
  picture : string; 
  types: string[];
  created: Date = new Date;

  constructor(
    name:string = 'Entrez un nom ...',
    hp: number = 100,
    cp : number = 10,
    picture : string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/XX.png',
    types: string[] = ['Normal'] ,
    created: Date = new Date
  ){
 
   this.hp = hp;
    this.cp= cp;
   this.name= name;
   this.picture = picture;
  this.types = types;
   this.created = created;
  }
  
    
  }