const rl = require('readline-sync');

function displayOptions(options) {
    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}  (${options[i]})`);
    }
}

function getUserChoice(options) {
    displayOptions(options);
    const choice = rl.question('Kies een optie: ');
    return choice - 1; // We verminderen met 1 om de array-index te krijgen
}

function gameOver(message) {
    console.log(message);
    process.exit(0);
}

console.log("Welkom in het avonturenspel!");
console.log("Je staat voor een kruispunt.");

const directions = ["Noord", "Oost", "Zuid", "West"];
const choice = getUserChoice(directions);

if (choice === 0) {
    console.log("Je vertrekt richting het noorden en komt bij een brug.");
    console.log("Wat wil je doen?");
    
    const bridgeOptions = ["Over de brug gaan", "Terugkeren naar het kruispunt"];
    const bridgeChoice = getUserChoice(bridgeOptions);

    if (bridgeChoice === 0) {
        console.log("Je bent veilig over de brug gegaan en hebt een schatkist gevonden.");
        const chestOptions = ["Open de schatkist", "Loop door"];
        const chestChoice = getUserChoice(chestOptions);

        if (chestChoice === 0) {
            console.log("Je maakt de schatkist open en er springen 100 giftige slangen op je. Je bent dood.");
            gameOver("Game Over");
        } else {
            console.log("Je loopt door en ziet een winkel. Ga je naar binnen?");
            const shopOptions = ["Ja, ik ga naar binnen", "Nee, ik ga niet naar binnen"];
            const shopChoice = getUserChoice(shopOptions);

            if (shopChoice === 0) {
                console.log("Je loopt naar binnen en hoort een knal van buiten. Ga je kijken wat dat was?");
                const lookOptions = ["Ja, ga naar buiten kijken", "Nee, blijf binnen in de winkel"];
                const lookChoice = getUserChoice(lookOptions);

                if (lookChoice === 0) {
                    console.log("Je gaat naar buiten en ziet 10 kapotte piano's op straat. Er valt nog een piano op je en je bent dood.");
                    gameOver("Game Over");
                } else {
                    console.log("Je blijft binnen en ziet dat je krasloten kunt kopen.");
                    const lotOptions = ["Koop een lot", "Koop geen lot"];
                    const lotChoice = getUserChoice(lotOptions);

                    if (lotChoice === 0) {
                        console.log("Je koopt een lot en krast het open.");
                        const krasOptions = ["1", "2"];
                        const krasChoice = getUserChoice(krasOptions);

                        if (krasChoice === 1) {
                            console.log("Helaas, geen prijs.");
                        } else {
                            console.log("Gefeliciteerd, je hebt $100,000 gewonnen!");
                            gameOver("Gefeliciteerd, je hebt gewonnen!");
                        }
                    } else {
                        console.log("Je koopt geen lot en krijgt een berichtje van de bank dat je -$100,000 op de bank hebt. Je sterft aan een hartaanval.");
                        gameOver("Game Over");
                    }
                }
            } else {
                console.log("Je gaat niet naar binnen en loopt door. Plotseling vallen er 10 piano's op je en je bent dood.");
                gameOver("Game Over");
            }
        }
    } else {
        console.log("Je keert terug naar het kruispunt.");
        gameOver("Game Over");
    }
} else if (choice === 1) {
    // Voeg hier code toe voor de oostelijke richting
} else if (choice === 2) {
    // Voeg hier code toe voor de zuidelijke richting
} else if (choice === 3) {
    // Voeg hier code toe voor de westelijke richting
} else {
    console.log("Ongeldige keuze. Het avontuur is voorbij.");
    gameOver("Game Over");
}
