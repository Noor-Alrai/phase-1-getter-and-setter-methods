// Add your Circle class here
class Circle{

    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
        return  this.radius * 2;
    }
    get circumference(){
        return Math.PI * this.diameter
    }
    get area(){
        return Math.PI * ( this.radius * this.radius)
    }
    set diameter(newDiameter){
        return this.radius  = newDiameter / 2

    }
    set circumference(newCircumference){
        return this.radius = newCircumference / (2* Math.PI)
    }
    set area(newArea){
        return this.radius= Math.sqrt(newArea / Math.PI)
    }
}
let myCircle = new Circle(5);
console.log(myCircle.diameter);
myCircle.circumference;
myCircle.area