/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/


let toCelcius = (farenheitt) =>{
    return (farenheitt - 32) * 5/9;
};

console.log(toCelcius(32))
console.log(toCelcius(212))
console.log(toCelcius(50))

//=================================================================================================//


/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }


    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            console.log(`Password changed. Your new password is now: ${this.password}`);
        } else {
            console.log("Password is incorrect. Cannot change your password.");
        }
    }
}

let user1 = new User('brians', 'abc123');
user1.changePassword('abc123', '123abc'); // Sets the user's password to 123abc

//=================================================================================================//

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods


*/


function squareNegatives(negInt){
    for (let x of negInt){
        if (x > 0);{
            x = x*x
        }return negInt
    }
}


function squareNegatives(negInt) {
    console.log(negInt.filter(num => num < 0).map(num => num * num));
  }

squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
squareNegatives([2, 4, 6, 8, 10]) // []


