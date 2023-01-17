/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// var name = prompt("Please enter your name:");

// var age = prompt("Please enter your Age:");



// switch (true) {

//     case (age >= 0 && age <= 5):

//         console.log(name + ", you should have some milk.");

//         break;

//     case (age >= 6 && age <= 12):

//         console.log(name + ", you should have some juice.");

//         break;

//     case (age >= 13 && age <= 17):

//         console.log(name + ", you should have some cola.");

//         break;

//     case (age >= 18):

//         console.log(name + ", you should have some wine.");

//         break;

//     default:

//         console.log("Invalid age input.");

// }

// 2. Variante mit Switch

let alter, nutzer;



alter = prompt("Bitte Alter angeben:");

nutzer = prompt("Bitte Namen angeben:");



switch (true)

{

        case (alter <=5):

            console.log(nutzer +" trinkt Milch");

            break;

        case (alter >= 6 && alter <=12):

            console.log(nutzer +" trinkt Saft");

            break;

        case (alter >=13 && alter <15):

            console.log(nutzer +" trinkt Cola");

            break;

        case (alter >=16 && alter <18):

            console.log(nutzer +" trinkt Bier");

        break;    

        case (alter >=18):

            console.log(nutzer +" trinkt Wein");

            break;

        default:

        console.log("Die Eingabe ist nicht korrekt!")

            break;

}

// Patrick's Variante

/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen usern ein
Geben über eine Prompt-Anforderung ein Alter ein
Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :
Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein
-->zB: "Max trinkt Cola."
/* Getränke-Challenge */

var user = prompt("Please enter your user:");
var age = prompt("Please enter your Age:");

// age = ">= 0 && <=5";
// age = ">= 6 && age <= 12";
// age = ">= 13 && age <= 17";
// age = ">= 18";

switch (true) 
{
    case (age >= 0 && age <= 5):
        console.log(user + ", you should have some milk.");
        break;
    case (age >= 6 && age <= 12):
        console.log(user + ", you should have some juice.");
        break;
    case (age >= 13 && age <= 17):
        console.log(user + ", you should have some cola.");
        break;
    case (age >= 18):
        console.log(user + ", you should have some wine.");
        break;

    default:
        console.log("Invalid age input.");
        break;
}

// if (age >= 0 && age <= 5)
// {
//     console.log(user + ", you should have some milk.");
// }
// else if (age >= 6 && age <= 12)
// {
//     console.log(user + ", you should have some juice.");
// }
// else if (age >= 13 && age <= 17)
// {
//     console.log(user + ", you should have some cola.");
// }
// else (age >= 18)
// {
//     console.log(user + ", you should have some wine.");
// }

// Lösung Dozent 

const firstMane = prompt ("Bitte Namen eingeben;");
const age = parseInt(prompt("Bitte Alter eingeben:")); // "2" -->2

switch (true) 
{
    case (age >=0) && (age <=5) :
        console.log(firstName + "trinkt Milch:");
        break;
    case (age >=6) && (age <=12) :
        console.log(firstName + "trinkt Saft:");
        break;
        case (age >= 13) && (age <= 17):
            console.log(firstName + " trinkt Cola.");
            break;
        case (age >= 18) && (age <= 130):
            console.log(firstName + " trinkt Wein.");
            break;   
        default:
            console.log("Bitte Tee trinken!");   
            break;
    }