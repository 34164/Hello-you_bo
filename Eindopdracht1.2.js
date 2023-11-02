var rl = require('readline-sync');

console.log("Welkom in het avonturenspel!");
console.log("Je staat voor een kruispunt.");

console.log("1  (Noord)");
console.log("2  (Oost)");
console.log("3  (Zuid)");
console.log("4  (West)");

var const_answer = rl.question('Kies de richting die je op wilt: ');

if (const_answer === "1") {
    console.log("Je vertrekt richting het noorden en komt bij een brug.");
    console.log("Wat wil je doen?");
    console.log("1  (Over de brug gaan)");
    console.log("2  (Terugkeren naar het kruispunt)");
    var bridge_choice = rl.question("Maak je keuze: ");
}
   

    if (bridge_choice === "1") {
        console.log("Je bent veilig over de brug gegaan en hebt een schatkist gevonden.");

        console.log("1  (Je maakt hem open)");
        console.log("2  (Je loopt door)");
    }
        

        var chest_choice = rl.question('Wat doe je?');

        if (chest_choice === "1") {
            console.log("Je maakt hem open en er springen 100 giftige slangen op je, oei je bent dood ");
        } else if (chest_choice === "2") {
            console.log("Je loopt door en ziet een winkel");
            console.log("Ga je naar binnen?"); 

            console.log("1  (ja,ik ga naar binnen)");
            console.log("2  (nee,ik ga niet naar binnen)");

            var winkel_choice = rl.question('Wat doe je?');

            if (winkel_choice === "1") {
                console.log("Je loopt naar binnen... zodra je binnen bent hoor je een knal van buiten.");
                console.log("Ga je kijken wat dat was?"); 

                console.log("1 (ja, je gaat buiten kijken wat dat was)");
                console.log("2 (Nee, je blijft binnen in de winkel.)");

                var kijken_choice = rl.question("wat doe je?"); 

                if(kijken_choice === "1") {
                    console.log("Je gaat naar buiten en ziet 10 kapote piano`s op straat.");
                    console.log("BOEM!!!, er viel nog 1 piano op jouw.");
                    console.log("Helaas je bent dood");
                } else if (kijken_choice === "2"){ 
                    console.log("Je blijft binnen en ziet dat je krasloten kunt gaan kopen");

                    console.log("1 (Je koopt een lot)");
                    console.log("2 (Je koopt geen lot)");

                }else{
                    console.log("Ongeldige keuze.");
                }

                var lot_choice = rl.question('Ga je een lot kopen?');
                if (lot_choice === "1") { 
                    console.log("Je koopt een lot en krast hem open");

                    console.log("1");
                    console.log("2"); 

                    var kras_choice = rl.question('Kies een getal:  ');

                    if (kras_choice === "1") {
                        console.log("Helaas, geen prijs.");
                    } else if (kras_choice === "2") {
                        console.log("Gefeliciteerd, je hebt zojuist $100000 gewonnen!");

                    } else { 
                        console.log("Ongeldige keuze voor het krassen.");

                    }

                } else if (lot_choice === "2") {
                    console.log("Je koopt geen lot en krijgt een berichtje van de bank dat je -$100000 op de bank hebt staan");
                    console.log("Je sterft aan een hartaanval.");

                }else {
                    console.log("Ongeldige keuze voor het kopen van een lot. ");
                }
                
}

    }

      if (bridge_choice === "2") {
        console.log("Je keert terug naar het kruispunt.");
    } else {
        console.log("Ongeldige keuze. Het avontuur is voorbij.");
    }
  if (const_answer === "2") {
    console.log("Je vertrekt richting het oosten en komt bij een donkere grot.");
    console.log("Wat wil je doen?");
    console.log("1  (De grot verkennen)");
    console.log("2  (Terugkeren naar het kruispunt)");
    var cave_choice = rl.question("Maak je keuze: ");

    if (cave_choice === "1") {
        console.log("Je bent de grot ingegaan en hebt een draak gevonden. De draak heeft je gedood.");
    } else if (cave_choice === "2") {
        console.log("Je keert terug naar het kruispunt.");
    } else {
        console.log("Ongeldige keuze. Het avontuur is voorbij.");
    }
} else if (const_answer === "3") {
    console.log("Je vertrekt richting het zuiden en komt bij een mysterieuze tempel.");
    console.log("Wat wil je doen?");
    console.log("1  (De tempel betreden)");
    console.log("2  (De tempel niet betreden.)");
    var temple_choice = rl.question("Maak je keuze: ");

    if (temple_choice === "1") {
        console.log("Je bent de tempel binnengegaan en hebt een magische schat gevonden. Gefeliciteerd, je hebt gewonnen!");
    } else if (temple_choice === "2") {
        console.log("Je gaat de tempel niet in, opeens hoor je wat in de struiken.");
        console.log("Ga je kijken wat dat was?");
        console.log("1  (Ja) ");
        console.log("2  (Nee) ");
        var struik_choice = rl.question("Maak je keuze:  ");

        if (struik_choice === "1") {
            console.log("Je loopt naar de struik toe om te kijken wat dat was, O NEE!!! En tijger springt uit de struiken");
            console.log("Helaas de tijger heeft je goed te pakken, je bent dood."); 
        }
     else if (struik_choice === "2");
        console.log("Je rent snel weg, oeps je struikelt. En uit de struiken rent een tijger op je af.");
        console.log("Hij verscheurd je in stukken, helaas je bent dood"); 

    }
} else if (const_answer === "4") {
    console.log("Je vertrekt richting het westen en komt bij een diepe afgrond.");
    console.log("Wat wil je doen?");
    console.log("1  (Proberen over te steken)");
    console.log("2  (Terugkeren naar het kruispunt)");
    var cliff_choice = rl.question("Maak je keuze: ");
}
    


   if (cliff_choice === "1") {
    console.log("Je springt over de afgrond en haalt nog maar net de rand.");
    console.log("Je balanceert nu op de afgrond, zorg ervoor dat je naar voren beweegt.");
    console.log("1");
    console.log("2");
    var balance_choice = rl.question("SNEL MAAK JE KEUZE!"); 

    if (balance_choice === "1") {
        console.log("NEE, je was net te langzaam en valt naar achteren de afgrond in");
        console.log("Helaas, je bent dood");
    } else if (balance_choice === "2") {
        console.log("Je beweegt net op tijd naar voren en hebt het overleefd");
        console.log("Je loopt snel door en komt uiteindelijk terecht bij een superrijke verloren stad waar je belastingvrij kunt gaan leven");
        console.log("Jackpot, gefeliciteerd, je hebt gewonnen");
    } else {
        console.log("Nee, je valt achterover de afgrond in, je bent dood");
    }
} else if (cliff_choice === "2") {
    console.log("Je keert terug naar het kruispunt.");
} else {
    console.log("Ongeldige keuze. Het avontuur is voorbij.");
}

