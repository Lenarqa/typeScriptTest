class TypeScript {
    version: string;
    constructor(version: string){
        this.version = version;
    }

    info(name: string){
        return `name: ${name}, version: ${this.version}`;
        
    }
}

// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;

//     constructor(tModel: string){
//         this.model = tModel;
//     }
// }

class Car {
    readonly numberOfWheels: number = 4;

    constructor(readonly model: string){}
}

class Animal{
    protected voice : string = '';
    public color: string  = 'black';
    private Go(){
        console.log("Go");
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice;
    }

    public sayVoice(): void{
        console.log(this.voice);
    }
}

const cat = new Cat();
cat.color = "white";
cat.setVoice("May May");

console.log(cat.color);
cat.sayVoice();


//=====================
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component{

    render(): void {
        console.log("render!");
    }
    
    info(): string {
        return "info!";
    }
}