// let droneid=5;
// console.log("Hi BR");
// console.log(window.droneid);



// class declaration

class Drone{
   constructor(id,name){
//        console.log('Id is ' +id +
//        '  ' + "Nmae is "  + name)

// with this 
   this._id=id;
   this._name=name;
}
get id(){

    console.log('In getter id');
    return this._id;

}
set id(value){
    this._id=value;
}

get name(){
    console.log('In getter name ');
return this._name;
}

// fly(){

//     console.log("Drone" +"  " + this.id + " " + 'is flaying');
// }
}


// console.log(typeof Drone);


let drone = new Drone(1,'Prabhu'); 
let dronetwo = new Drone(2,'Bhgwan');
// console.log(drone instanceof Drone);
// with this

console.log('Drone :' + drone["id"] + " " + drone["name"]);
console.log('Drone :' + dronetwo["id"] + " " + dronetwo["name"]);
drone.id='0'
console.log('Drone :' + drone["id"] + " " + drone["name"]);
// drone.fly();
// dronetwo.fly();