// question No.32= Checking Usernames: Do the following to create a program that simulates how websites ensure
// that everyone has a unique username.
// step 1 • Make a list of five or more usernames called current_users.
// step 2 • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
//are also in the current_users list.
// step 3 • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// step 4 • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//list off current users  
let current_users = ["Farhan", "ali", "ahsan", "imran", "qurban"]
// Array of new usersd
let new_users = ["Hamza", "ali","arish","imran","khan"]

// loop  through rae-users to check for usersname avaibility
new_users.forEach(new_one_user =>{

    // making a coundition for user name already exist and save in over_coundition vareible
let over_coundition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())


// print DIfrent massages using if-else statment 
    if (over_coundition){
        console.log(`soory ${new_one_user}, is already taken`)
       
        } else{
            console.log(`This Username ${new_one_user}, is available`)
    }
})
