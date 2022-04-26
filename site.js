function Validate() {
    let Email = document.getElementById("js for useerName").value;
    if (Email === "Turzo@gmail.com") {

    } else {
        alert("Your Email is wrong ! Please try again");
    } let Passward = document.getElementById("js for passward").value;
    if (!Email.includes("@")) {
        alert("@ is not includes ")
    }

    if (Passward === "12345") {

    } else {
        alert("Your Passward wrong ! Please try ")
    } if (Email === "Turzo@gmail.com" && Passward === "12345") {
        alert("Sing in  sucsessfully");
        let Question = confirm("Are you want to go in Facebook profile ?");
        if(Question!==true){
            window.location="http://facebook.com"
        }
        alert("Thank you")
        return false
        alert("Thank you")
    } else {
        alert("Sorry ! sing in fail")
    }
}

function Person() {
    const Nasim = {
        name: "Nasim",
        fullName() {
            return "name:" + this.name
        },
        get() {
            return "Name:" + this.name
        },
    }
      return Nasim;
}
console.log(Person())