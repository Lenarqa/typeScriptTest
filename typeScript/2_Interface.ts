interface Rect{
    readonly id: string;
    color?: string;
    size: {
        width: number,
        height: number,
    }
}

const rect1: Rect = {
    id: 'rect1',
    size:{
        width: 10,
        height: 5, 
    }
}

const rect2: Rect ={
    id: 'rect2',
    color: 'red',
    size: {
        width: 20,
        height: 20,
    }
}

// ==================
interface RectWithArea extends Rect{
    getArea: ()=> number; 
}

const rect3: RectWithArea = {
    id:"rect3",
    color: "blue",
    size:{
        width: 100,
        height: 100,
    },
    getArea(): number{
        return this.size.width * this.size.height;
    }
}

// ==================
interface IClock{
    time: Date,
    setTime: (date: Date) => void;
}

class Clock implements IClock{
    time: Date = new Date;
    setTime(date: Date): void{
        this.time = date;
    }
}

// ==================
interface IStyle {
    [key: string]: string;
}

const css: IStyle = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}
