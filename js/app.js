/**************************/
/* Example: Calculate GST */
/**************************/

const subTotal = 40;

const total = subTotal * 0.05 + subTotal;

console.log(`${subTotal} plus GST is ${total}.`);


/****************************/
/* Example: Square a number */
/****************************/

const num = 4;

const numSquared = num * num;

console.log(`${num} squared is ${numSquared}.`);


/**********************************************/
/* Example: Calculate fahrenheit from celsius */
/**********************************************/

const tempF = 72;
const tempPreference = 'celsius';
const tempC = 22.2;

if (tempPreference == 'celsius') {
  const temp = (5 / 9) * (tempF - 32)
} else {
  const temp = tempF;
}

console.log(`Temp is ${tempF} degrees`);