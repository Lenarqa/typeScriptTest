console.log("Hello world!");

//boolean;
const isFething: boolean = true;
const isLoading: boolean = false;

//number
const int: number = 42;
const float: number = 4.55;
const num: number = 3e10;

//sting
const massage: string = 'Hello World';

//array
const numArray: number[] = [1, 1, 2, 5, 70, 24];
const numArray2: Array<number> = [1, 1, 2, 5, 70, 24];
 
const stringArray: string[] = ["Hello", " world"];
const stringArray2: Array<string> = ["Hello", " world"];

//Tuple
const concat: [string, number] = ['Lenar', 8999];

//any
let variabe: any = 34;
variabe = 'newString';

//function
function sayName(name: string): void{
    console.log(name);
}

sayName("Lenar");

//Never
function throwError(massage: string): never{
    throw new Error('massage')
}

function infinit():never{
    while(true){
        //some code
    }
}

//type
type Login = string;

const login: Login = 'admin';
// const login2: Login = 2;

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "Hello";

