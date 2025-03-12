const fs = require('fs');

function parseFileToArray(filePath) {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');
    // Split the data into an array of lines
    return data.split('\n');
}

// Example usage
const filePath = process.argv[2]; // Get the file path from command line arguments
const linesArray = parseFileToArray(filePath);

const sanitise = async (line) => {
    line = line.toLowerCase();
    line = line.replace(/\([^()]*\)/g, '');
    line = line.replace(/[^a-zA-Z0-9]/g, '');
    line = line.trim();
    return line;
}

const sanitisedLinesArray = linesArray.map(sanitise);

Promise.all(sanitisedLinesArray).then(lines => {
    lines = new Set(lines);
    lines = Array.from(lines);
    lines.sort();
    lines = lines.filter(line => line.length > 0);

    fs.writeFileSync(filePath, lines.join('\n'));
});