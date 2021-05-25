interface Point {
    x : number
    y : number
}

let diplay = (p : Point) => { console.log(p.x, p.x) }
diplay( { x: 5 , y: 15 } );

interface TPoint extends Point{
    translate (delta_x : number, delta_y : number):void
}

class MyPoint implements TPoint {
    translate(delta_x: number, delta_y: number): void {
        this.x = delta_x,
        this.y = delta_y
    }
    x: number;
    y: number;
    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }
}

var P = new MyPoint(3,4)