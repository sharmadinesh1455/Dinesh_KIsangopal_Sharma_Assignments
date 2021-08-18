// Task 1st of Question5.....
let add = (a=10, b=20) =>{
    console.log(a+b); 
}

add();
add(50,20);


//Task 2nd of Question 5
let userFriends= (username, ...arrayFriends)=>
{
    console.log("Username: "+username);
    for(let i in  arrayFriends)
    {
        console.log(arrayFriends[i]);
    }
    
}
let username= "Dinesh";
let array = ["nikita", "Novita", "Ayushi"];
userFriends(username,array);

//Third Task OF Question 5
let printCapitalNames = (message, ...cities) =>
{
    console.log(message);
    console.log("List in uppercase");
    for(let i in cities)
    {
        console.log(cities[i].toUpperCase());
    }
    
    
}
let message= "List of Cities";
let cityArray = ["Kolhapur", "Pune", "Sangali", "Amritsar"];
printCapitalNames(message,...cityArray);