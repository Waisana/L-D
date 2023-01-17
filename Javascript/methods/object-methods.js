let restaurant ={
    name: 'Food point O',
    guestCapacity : 75,
    guestCount: 0,
    checkAvailability: function(partsize) {
        let seatleft = this.guestCapacity - this.guestCount;
        let actsize = seatleft -partsize;
        return actsize;
        // console.log(partsize);
    },
    seatPart: function(partsize) {
        this.guestCount =this.guestCount + partsize;
    },
    removeParty: function(partsize) {
        this.guestCount = this.guestCount -partsize;
    }
}
// restaurant.checkAvailability(4);
restaurant.seatPart(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
// let status = restaurant.checkAvailability(4)
// console.log(status);

//strings 

let bname ='  Bosco Waisana';
//length property
console.log(bname.length);
//convert to uppercase
console.log(bname.toUpperCase());
//convert to lowercase
console.log(bname.toLowerCase());

//includes method
let password = 'abd@123!';
console.log(password.includes('abc'));

//Trim method
console.log(bname.trim());

//challenge area
let isValidPassword= function(password){
    return password.length > 8 && password.includes('@') && password.includes('password');
}
console.log(isValidPassword('adsdd'));
console.log(isValidPassword('abc123!4gg'));
console.log(isValidPassword('abc@password123'));

//numbers

let num = 132.809;

console.log(num.toFixed());

//math methods
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num)); 

//random numbers
let randomNum = Math.random();
console.log(randomNum);
 
let min =10
let max =20
let randomans = Math.floor( Math.random() *(max - min + 1)) + min;
console.log(randomans);