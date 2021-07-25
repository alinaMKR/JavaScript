//Playing FizzBuzz with incrementing array

var output = [];
var number = 1;
var count = 1;
function fizzBuzz(){
    output.push(number);
    count++;
    number = count;
    if (number%3===0){
        if (number%5===0){
            number = "FizzBuzz";
        }
        else{
            number = "Fizz";
        }
    }
    if (number%5===0){
        number="Buzz";
    }

    console.log(output);

}
