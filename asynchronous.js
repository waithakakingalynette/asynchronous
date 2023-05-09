// Write an asynchronous function that accepts a message
//  string and a delay time in milliseconds. The function should log 
//  the message to the console after the specified delay time.

// function message (str){
//     console.log(message("I born of God",3000));
// }
// message(str);

let message =()=>{
    console.log("I am born of God")
}
setTimeout(message,4000)
// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID.
//  Write an asynchronous function that fetches and logs the data 
//  for each user ID one by one, in sequence.

let userIDs=[1024,3254,1254,6767]
async function getUserData(){
    for(const id in userIDs){
        const userData= await getUserData(id)
        console.log(userData);
    }
}

getUserData();

// You have an asynchronous function performTask() that 
// returns a Promise. The Promise resolves if the task is successful and rejects
//  if there's an error. Write a function that calls performTask() and logs a custom success message 
//  if the task is successful, and a custom error message if there's an error.

let error=true
// let performTask=new Performance(function(successful,rejects){
function performTask(successful,rejects){
    if(error){
        setTimeout(successful("There is an erro",3000))
    }
    else{
        setTimeout(rejects("No error found",3000))
    }
     
};

console.log({performTask})