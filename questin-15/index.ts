//question. No. 15 = Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
// send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList = ["Ameen ALam", "kamran khan tessowri", "sir zia khan", "sir wajhat"];

let dontcome = guestList[1];

console.log(dontcome, "nhi ahh sakta ha");

guestList.splice(1, 1, "mouhmmad qasim");

guestList.forEach(guest => console.log(`aslamo alikom ${guest}, would you like to dinner wiht me?`));