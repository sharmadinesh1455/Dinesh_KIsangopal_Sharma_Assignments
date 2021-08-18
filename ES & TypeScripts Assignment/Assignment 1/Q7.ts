let Emp = ["Dinesh", "Prathmesh", "Swapnil", "Shubham"];

//let[first, second, Third, Fourth] = Emp;

//console.log("Third Element: "+ Third);
let[, , Third, ] = Emp;
console.log("Third Element: "+ Third);

//Task 2 Of Questiion 7
let organization = {
    name: "Dinesh",
    address:
        { city: 'ichalkaranji' ,
          state: 'maharashtra',
          pincode: '416115'
        }
      
};

let {name, address} = organization;

console.log(address.pincode);
// console.log(organization.address[2]);


