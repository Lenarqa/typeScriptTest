const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfString: Array<string> = ['one', 'two', 'three'];

function reverve<T>(array: T[]): T[]{
    return array.reverse();
}

reverve(arrayOfNumbers);
reverve(arrayOfString);
