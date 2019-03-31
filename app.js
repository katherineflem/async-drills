let lunchTime = true 
const orderMeSomeFood = ()=>{
    //function that returns a promise
    //promise must have a resolve and reject in the constructor
    //must have one executor aka a function that you pass in that will run inside that promise
    return new Promise((resolve,reject)=>{
        if (lunchTime === true) {
            let lunch = new Object ({
                lunch: "tacos",
                drink: "iced coffee"
            })
            resolve(lunch);
        } else {
            let error = new Error("There was an error.");
            reject(error);
        }
    })
} 
//we call the function that creates a promise
//whatever the promise resolves with is what is passed into the .then()
// whateverthe promise rejects with is what is passed into the .catch()
orderMeSomeFood()
.then((result) => {
    console.log(result);
}).catch((err)=>{
    console.log(err);
})


// const countDown = (num, callback) => {
//     setTimeout(() => {


//         if (num > 0) {
//             console.log(num);
//             countDown(num - 1, callback);
//         } else {
//             done();
//         }
//     }, 1000);
// }
// let done = () => {
//     console.log("Job's Done!")
// }
// countDown(10, done)

//the message 2 will have a 2 second delay
// function newFunc(string) {
//     console.log(string);
//     setTimeout(() => {
//         console.log("message 2");
//     }, 2000);
// }
// newFunc("message 1");

// let getWords = (word) => {
//     console.log(word);
//     setTimeout(() => {
//         console.log("What's up?")
//     }, 3000);
//     setTimeout(() => {
//         console.log("nm u")
//     }, 2000);
//     setTimeout(() => {
//         console.log("bored")
//     }, 1000);
// }
// getWords("Hey");

