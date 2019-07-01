// console.log(firebase)

let database = firebase.database();
// (function(){
// database.ref("/message").set({
//     msg:"Hey",
//     author:"Kanishk"
//     })
// })()

// database.ref('/message').on('value', function(data) {
//   console.log(data.val())
// });

// document.getElementById("messageBox").value;

const writeInDatabase = (messageObject) => {
    database.ref("/chat").push(messageObject);
};

const readFromDatabase = () => {
    database.ref('/chat').on('value', function(data) {
    let messages = data.val();
    $("#display").empty();
    for(messageKey in messages){
        let message = messages[messageKey];
        $("#display").append(`<p id="para">${message.message} -- ${message.user}</p>`)
    }
});
}

const send = () => {
    let message = document.getElementById("messageBox").value;
    let messageObject = {
        message:message,
        user:"Kanishk"
    }
    writeInDatabase(messageObject);
    $("#messageBox").val("")
}

readFromDatabase();