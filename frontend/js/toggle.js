var users = [
    {
        "name" : "John Doe",
        "gender" : "male",
        "image" : "/images/john.png"
    },
    {
        "name" : "Sarah Smith",
        "gender" : "female",
        "image" : "/images/sarah.avif"
    }
]
var curID = 0;
function toggle() {
    curID = (curID + 1) % 2;
    //image
    document.getElementById("user-img").src = users[curID].image;
    //name
    document.getElementById("user-name").innerText = users[curID].name;
    //gender
    document.getElementById("user-gender").innerText = users[curID].gender;

}
        