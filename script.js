// see rida kuvab hoiatuse enne lehe laadimist
// alert("Watch out! Grinning cats are on their way!");

var cheshireCat = "I'm printing a grinning cat... <br>";

// need read trükivad tekstiread
document.write(cheshireCat);
document.write(cheshireCat);
document.write(cheshireCat);
document.write(cheshireCat);

/* niimoodi saab kirjutada pikemat kommentaari,
kus saab ka ridu vahetada ilma, et ridade ees oleks alati tingimata kommentaari märgendid

kasulik näiteks juhul, kui on vaja midagi pikemalt lahti seletada, 
jätta kolleegidele kirjakesi 
VÕI kopeerida koodi sisse laulusõnu, mida lehel tegelikult ei kuvata */

var num1 = 9;
var num2 = 3;
// num1-- lahutab ühe
// num1++ liidab ühe


document.write ("<br> Matemaatilised ülesanded numbritega 9 ja 3 <br>")

document.write ("<br> Liitmine ")
document.write (num1 + num2); // liitmine

document.write ("<br> Lahutamine ")
document.write (num1 - num2); // lahutamine

document.write ("<br> Korrutamine ")
document.write (num1 * num2); // korrutamine

document.write ("<br> Jagamine ")
document.write (num1 / num2); // jagamine

document.write ("<br> +1 numbrile 9 = ")
document.write (num1 +1); // liidab juurde 1

document.write ("<br><br> Funktsioonid <br>")

// alert funktsioon

// function Congrats(){

//     document.write("Starting congrats")
//     alert("Siin on hoiatusteavitus, mis on kirjutatud funktsioonina")
//     document.write("Ending congrats")

// }

// Congrats(); // kutsub funktsiooni esile

// nuppudele alert funktsiooni andmine

function ShowCurtain(CurtainNumber , prize){

    alert("You opened curtain number " +  CurtainNumber + ", You Won: " + prize)

}

// funktsioon, mis liidab omavahel 2 numbrit

function BasicAddition(num1, num2) {

    return num1+ num2;

}

var result = BasicAddition(1, 2) // need numbrid tulenevad funktsiooni parameetritest
document.write(result)

// funktsioon, mis kutsub esile teise funktsiooni

function GoodNight() {

    document.write("Good night! <br>")

}

function GoodMorning(){

    document.write("<br> Good morning! <br>")

}

function Start () {
    GoodMorning()
    GoodNight()
}

Start ()

// if statement

var num3 = 2
var num4 = 2

if(num3 == num4){

    /* 
    == Kasutame 2 võrdusmärki, sest ainult ühega arvab ta, et anname num3-le hoopis parameetri. Teine võrdusmärk kinnitab, et tahame "on võrdne teise parameetriga."
    != siis tähistab see "ei ole võrdne" 
    > esimene number on suurem kui teine
    <= vähem kui VÕI võrdne
    */
    document.write("<br> See lause tekib lehele juhul kui kaks <i>if</i> funktsioonis määratud numbrit on samad <br>")

}

// else & else if

function ChoppingBanana(){
    document.write("Chopping Banana..")
}

function ChoppingPineapple(){
    document.write("Chopping Pineapple..")
}

function ChoppingCherry(){
    document.write("Chopping Cherry..")
}

if("banana" == "pineapple"){
    ChoppingBanana()
}

else if ("banana" == "cherry") {
    ChoppingCherry()
}

else ChoppingPineapple()

// switch case

function VendingPendingMachine(pendingTime) {

    switch(pendingTime) {
        case 1:
            // case for 1
            PendingMessage(pendingTime)
            break;
        case 2:
            // case for 2
            PendingMessage(pendingTime)
            break;
        case 3:
            PendingMessage(pendingTime)
            break;
        default: //rest of the buttons
        PendingMessage(pendingTime)
            break;
    }

}

function PendingMessage(time) {
    alert("Sa pead ootama " + time + " minutit!")
}

// for loop

var text = "<br> Tekst, mis loopib 10 korda <br>";

function WriteLineMachine(lineText) {

    for(i=0; i<10; i++) {
        Write(lineText)
    }

}

function Write(lineText) {
    document.write(lineText)
}

function StartMachine(lineText) {
    WriteLineMachine(lineText)
}

StartMachine(text)

// arrays

var names = new Array("Tony", "Bob", "Jeff", "Jane")
document.write(names[3] + "<br>")
names[3] = "Tammy"
document.write(names[3] + "<br>")

names.push("Martha", "George")
document.write(names + "<br>")

names.sort()
document.write(names + "<br>")

names.reverse()
document.write(names + "<br>")

// password area

function CheckValidation() {
    var password = document.getElementById("password").value

    if(password != "1234"){
        alert("Password is incorrect!")
    }

    else {
        //success
        var y = document.getElementById("sendItem")
        y.className += "leftTrans"

    }
}