const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const entries = [];


// Ask the user a question
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}


// Get a rating between 1 and 5
async function getRating(factor) {
    while (true) {
        const answer = await ask(
            `How would you rate the ${factor}? (1-5): `
        );

        const rating = Number(answer);

        if (
            Number.isInteger(rating) &&
            rating >= 1 &&
            rating <= 5
        ) {
            return rating;
        }

        console.log("Please enter a whole number from 1 to 5.");
    }
}


// Add a new environment entry
async function addEntry() {
    console.log("\n========================================");
    console.log("              NEW ENTRY");
    console.log("========================================");

    const noise = await getRating("noise");
    const light = await getRating("light");
    const temperature = await getRating("temperature");
    const humidity = await getRating("humidity");

    const notes = await ask("Notes (optional): ");

    const entry = {
        noise: noise,
        light: light,
        temperature: temperature,
        humidity: humidity,
        notes: notes
    };

    entries.push(entry);

    console.log("\nEntry saved!");
}


// Display previous entries
function viewHistory() {
    console.log("\n========================================");
    console.log("               HISTORY");
    console.log("========================================");

    if (entries.length === 0) {
        console.log("No entries have been recorded yet.");
        return;
    }

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];

        console.log(`\nEntry ${i + 1}`);
        console.log(`Noise: ${entry.noise}`);
        console.log(`Light: ${entry.light}`);
        console.log(`Temperature: ${entry.temperature}`);
        console.log(`Humidity: ${entry.humidity}`);

        if (entry.notes !== "") {
            console.log(`Notes: ${entry.notes}`);
        }
    }
}

// Calculate and display averages
function showSummary() {
    console.log("\n========================================");
    console.log("               SUMMARY");
    console.log("========================================");

    if (entries.length === 0) {
        console.log("No entries have been recorded yet.");
        return;
    }

    let noiseTotal = 0;
    let lightTotal = 0;
    let temperatureTotal = 0;
    let humidityTotal = 0;

    for (const entry of entries) {
        noiseTotal += entry.noise;
        lightTotal += entry.light;
        temperatureTotal += entry.temperature;
        humidityTotal += entry.humidity;
    }

    const count = entries.length;

    const noiseAverage = noiseTotal / count;
    const lightAverage = lightTotal / count;
    const temperatureAverage = temperatureTotal / count;
    const humidityAverage = humidityTotal / count;

    console.log(`Entries recorded: ${count}\n`);

    console.log(`Noise:        ${noiseAverage.toFixed(1)}`);
    console.log(`Light:        ${lightAverage.toFixed(1)}`);
    console.log(`Temperature:  ${temperatureAverage.toFixed(1)}`);
    console.log(`Humidity:     ${humidityAverage.toFixed(1)}`);
}


// Main program
async function main() {
    let running = true;

    console.log("\n========================================");
    console.log("      SENSORY ENVIRONMENT TRACKER");
    console.log("========================================");

    while (running) {
        console.log("\n1. Add Entry");
        console.log("2. View History");
        console.log("3. View Summary");
        console.log("4. Exit");

        const choice = await ask("\nChoose an option: ");

        if (choice === "1") {
            await addEntry();
        }
        else if (choice === "2") {
            viewHistory();
        }
        else if (choice === "3") {
            showSummary();
        }
        else if (choice === "4") {
            running = false;
            console.log("\nGoodbye!");
        }
        else {
            console.log("\nInvalid choice. Please choose 1-4.");
        }
    }

    rl.close();
}

main();
