class Videogame {
    name:string;
    gender:string;
    numPlayers:number;
    plataform:[string];
    preco:number;

    constructor(name:string, gender:string, numPlayers:number, plataform:[string], preco:number){
        this.name = name;
        this.gender = gender;
        this.numPlayers = numPlayers;
        this.plataform = plataform;
        this.preco = preco;
    }

    showDetails():void{
        console.log(`O jogo escolhido foi ${this.name}`)
    }

    Apply():void{
        console.log(`Seu desconto é de 10%, portanto o novo preço será ${this.preco*0.9}.`)
    }
    
    novaPlataforma(novaPlataforma : string): [string] {
        this.plataform.push(novaPlataforma)
        return this.plataform

    }

    estimarTempoJogo(): string {
        switch (this.gender) {
          case 'Action':
            return 'Cerca de 8 horas';
          case 'Adventure':
            return 'Cerca de 15 horas';
          case 'Sports':
            return 'Indeterminado';
          case 'Strategy':
            return 'Cerca de 36 horas';
          default:
            return 'Tempo estimado desconhecido';
        }
    }
}

const sonic = new Videogame('Sonic', 'Adventure', 2, ['Nintendo'] , 50);
sonic.showDetails();
sonic.Apply();

sonic.novaPlataforma('PS4')
console.log(sonic.plataform)
console.log(`Tempo estimado para terminar o jogo: ${sonic.estimarTempoJogo()}`);

