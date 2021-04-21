let number1 = 100;
let number2 = 70;

switch (true) {
    case (number1>number2):
        console.log("Maximum number is:"+ number1);
        
        break;
    case (number1<number2):
        console.log("Maximum number is:"+ number2);
        
        break;
    case (number1==number2):
        console.log("Numbers are equal!");
        break;

    default:
        console.log("Not a number!");
        break;
}