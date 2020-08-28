interface person {
    name: string;
    age: number;
}

type PersonKeys = keyof person; //name | age

const myName: PersonKeys = 'name';
const myAge: PersonKeys = 'age';
// const myJob: PersonKeys = 'job'; //error

type User = {
    _id: number;
    name: string;
    mail: string;
    createdAt: Date;
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>;//delete this keys from type

type UserKeysNoMeta2 = Pick<User, 'name' | 'mail'>;//take this keys from type

let user1: UserKeysNoMeta = 'name';
// user1 = '_id';//error

let user2: UserKeysNoMeta2 = {
    name: 'Test',
    mail: 'gmail' 
};




