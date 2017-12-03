var nameVar = "Magnus";
var nameVar = "Mogge";
console.log("nameVar", nameVar);

let nameLet = "Jenny";
nameLet = "Jens";
console.log("nameLet", nameLet);

const nameConst = "Frida";
console.log("nameConst", nameConst);


const fullName = "Magnus Ass";
let firstName = "None";
let lastName = "None";

if (fullName) {
    let firstName = fullName.split(" ")[0];
    let lastName = fullName.split(" ")[1];
    console.log(firstName);
    console.log(lastName)
}
