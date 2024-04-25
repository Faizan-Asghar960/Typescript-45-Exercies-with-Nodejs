// question. no.17 = Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
// dinner, and you have space for only two guests.

//question. No. 16 = More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.

// Creating a guestlist Arry
let guestList =["Faizan khan","Adnan khan","zohiab", "M.farhan"];

// Making verible for those guest who cant come 
let dontcome = guestList[0];

// print the name of guest who cant come
console.log(dontcome, "Nahi askaty hain");

// Add or remove guest from guest list Array
guestList.splice(0,1, "Arham");

// Meassage print for Bigger Table
console.log("Good News ! we have Found a Bigger Table For Dinner. ");

// Adding a new guest at starting index of array
guestList.unshift("Shahbaz khan");

// Adding a new guest at ending index of array
guestList.push("zain");

// Get a middle index of our guest list array 
let middleIndex:number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Usama");

// Print Meassge of updated List
console.log("updated List of our Guests");

// Sending a invition measse to our guests one by one with thier names 
guestList.forEach(oneguest => console.log(`Aslamo alikom ${oneguest}, would you like to dinner with me`));

// Infrom that only two guests can be invited for dinner 
console.log("unfrotunaclty, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me");

// Using while loop to remove guests from the array until only two names remain
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Soory, ${removeGuest},I cant inivte you to dinner`);
}

// sending a initaion to the last two guest on the list
console.log("innitaions to the Last 2 Guests");

guestList.forEach(lasttwo => console.log(`luckally ${lasttwo}, you are still invited to Dinner`));

// Removing to last two guest from the list 
guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);
