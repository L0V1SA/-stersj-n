let gameOver = false;



const none = "" ;

function go(event) {
    if (event.keyCode == 13 || event.which == 13) {
        choice();
    }
}
function clear() {
    document.getElementById("userInput").value = none;
}
function choice() {
    var inputText = document.getElementById("userInput").value;

    switch (inputText) {
        case "Start":
            document.getElementById("thanks").innerHTML = none;
            document.getElementById("happen").innerHTML = "Nyckelarter är viktiga arter (kan även vara växter). Några nyckkelarter i östersjön är torsk, säl och blåstång. Nyckelarter spelar stor roll i andra arters överlevnad. Vad händer om vi tar bort en av nyckelarterna?";
            document.getElementById("choices").innerHTML = "Du kan välja: Ekosystemet rubbas / Inget, det finns ju andra"
            clear();
            break;
        
        case "Ekosystemet rubbas":
            document.getElementById("happen").innerHTML = "Rätt !" ;
            document.getElementById("happen").style.color = "yellow" ;
            document.getElementById("question").innerHTML = "Forskare har länge värnat om torsken i östersjön och dess överlevnad, rekommendationerna har ej följts och till följd av det är vi nu nära på att tappa kontrollen över fiskartens överlevnad. Forskare har bevisat att det, som resultat av överfiske, har blivit födobrist, parasitangrepp, växlande sälpopulationer osv. men viktigast av allt, klimatförändringar och varmare hav. Vissa fiskarter (framför allt torsken) minskar kraftigt på grund av överfiske vilket i sin tur leder till förändringar av ekosystemet. Är torsken en nyckelart i Östersjön? " ;
            document.getElementById("choices").innerHTML = "du kan välja: Ja / Nej" ;
            clear() ;
            break;
            
        case "inget, det finns ju andra" :
            document.getElementById("happen").innerHTML = "Som sagt är nyckelarter väldigt viktiga, även om det bara är en art som försvinner kan hela ekosystemet fortfarande rubbas." ;
            document.getElementById("happen").style.color = "red" ;
            gameOver = true ;
            break;
    
        case "Ja" :
            document.getElementById("happen").innerHTML = "Rätt !" ;
            document.getElementById("question").innerHTML = "Östersjön har idag påtagliga problem med övergödning, övergödning leder till algblomning, syrebrist och bottendöd. Det är framför allt jordbruket men även reningsverk, transporter, avlopp och industri som växtnäringstillförseln är från. Tror du algblommningen är som väst längs kusten eller mitt i havet?" ;
            document.getElementById("question").style.color = "black" ;
            document.getElementById("choices").innerHTML = "Du kan välja: Längs kusten / I havet" ;
            clear() ;
            break ;

        case "Nej" :
            document.getElementById("happen").innerHTML = "Läste du verkligen första frågan?" ;
            document.getElementById("happen").style.color = "red" ;
            gameOver = true ;
            break ;

        case "Längs kusten" :
            document.getElementById("happen").innerHTML = "Rätt !" ;
            document.getElementById("question").innerHTML ="Under 40 års tid har det dumpats gödsel från en fabrik i utkanten av Sankt Petersburg i Ryssland. Gödseln dumpas på fält som ligger nära finska viken vilket leder till att många ämnen som leder till övergödsling läcker ut i Östersjön. Varje år rinner 10-20 ton fosfor ut i havet bara från den fabriken enligt Finlands miljöcentral. Är denna typ av utsläpp bra för Östersjön?" ;
            document.getElementById("choices").innerHTML ="Du kan välja Aa / Nä " ;
            clear() ;
            break;

        case "I havet" :
            document.getElementById("happen").innerHTML = "Ofta ligger reningserk, avlopp och industrier på land vilket leder till ökad algblomning." ;
            document.getElementById("happen").style.color = "red" ;
            gameOver = true ;
            break ;

        case "Aa" :
            document.getElementById("happen").innerHTML = "Rätt!" ;
            document.getElementById("question").innerHTML = "En yta större än Danmark, totalt ungefär 15% av Östersjöns botten är syrefri. Torskens tillgång till mat begränsas kraftigt på grund av bottendöden. När botten blir syrefattig kan djur inte leva på platsen, Östersjöns döda botten områden klassas som världens största. Vad händer om detta fortsätter?";
            document.getElementById("choices").innerHTML = "du kan välja: Allt liv försvinner / Inget, fisken går inte på botten?" ;
            clear() ;
            break ;

        case "Nä" :
            document.getElementById("happen").innerHTML = "Stora utsläpp över lag är ej bra för det mesta här på jorden, att en fabrik släpper ut 10-20 ton fosfor per år är oacceptabelt." ;
            document.getElementById("happen").style.color ="red" ;
            gameOver = true ;
            break ;

        case "Allt liv försvinner" :
            document.getElementById("happen").innerHTML = "Rätt!" ;
            document.getElementById("question").innerHTML ="Grattis du fick 5 av 5 möjliga poäng! Tack så mycket för att du spelade spelet :) ha en bra dag!" ;
            document.getElementById("choices").innerHTML ="" ;
            clear() ;
            break ;

        case "Inget, fisken går inte på botten?" :
            document.getElementById("happen").innerHTML = "Sååå nära slutet!" ;
            document.getElementById("happen").style.color = "red" ;
            gameOver = true ;
            break ;
        
        }
        if (gameOver) {
            document.getElementById("question").innerHTML = "Du förlorade :( , tryck på knappen uppe till vänster för att ladda om sidan och försöka igen! "
            document.getElementById("choices").innerHTML ="" ;
        }
}
