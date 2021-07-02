function validationphone(num) {
    const re =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
    let result = num.match(re);
    if (result){
        console.log("the number is valid.");

    }
    else{
        let num = prompt("enter the number in xxx-xxx-xxxx format:");
        validationphone(num);
    }

}

let number  = prompt("enter the number xxx-xxx-xxxx");
validationphone(number);