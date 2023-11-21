//your JS code here. If required.
const student = {
    name: "Prasann",
};

Object.prototype.getkeys = function(){
    return Object.keys(this);
};

const keys = student.getkeys();

console.log(keys);