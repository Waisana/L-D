let farenheit = 100;
let celicious =(farenheit-32)* 5/9;
let kelvin =(farenheit + 459.57)*5/9;

let isfreezing = celicious < 32;
let isHot = celicious >=40;
if(isfreezing){
console.log("It's freezing outside, You may need to use some jackets");
}
else if(isHot){
console.log("It's quite hot outside, and you may need to wear light cloths");
}
else{
    console.log("It's a mild climent");
}

let isGuestOneVegan = true;
let isGuestTwoVegan = true;
//Are both Vegan? Only offer up vegan dishes.
if(isGuestOneVegan && isGuestTwoVegan){

    console.log('Offer only Vegan dishes');

}
//At least one Vegan? Make sure to offer up some vegan options.
else if(isGuestOneVegan || isGuestTwoVegan){
console.log('make sure you offer some vegan option');
}
//Else, offer up anything on the menu.
else{
    console.log('Offer anything on the menu');
}



