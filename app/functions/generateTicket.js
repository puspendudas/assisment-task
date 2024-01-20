// Function to generate Tambola tickets
const generateTickets = (N) => {
  const tickets = {};

  // Iterate for each set of tickets (N sets)
  for (let setIndex = 1; setIndex <= N; setIndex++) {
    const setKey = (setIndex + 10).toString(); // Generating unique set key (e.g., "11", "12", ...)

    tickets[setKey] = []; // Initialize tickets array for the current set

    // Generate 6 tickets for each set
    for (let ticketIndex = 1; ticketIndex <= 6; ticketIndex++) {
      const ticket = generateTicket(); // Call a separate function to generate a single ticket
      tickets[setKey].push(ticket);
    }
  }

  return { tickets };
};

// Function to generate a single Tambola ticket
const generateTicket = () => {
  const ticket = [];

  // Iterate over each row in the ticket (3 rows)
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    const row = generateRow(); // Call a separate function to generate a single row
    ticket.push(row);
  }

  return ticket;
};

// Function to generate a single row in a Tambola ticket
const generateRow = () => {
    const row = [];
    const usedNumbers = new Set(); // To track which numbers are already used in the row
  
    // Iterate over each column in the row (9 columns)
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      const columnStart = columnIndex * 10 + 1; // Calculate the starting number for the column
      const columnEnd = columnStart + 9; // Calculate the ending number for the column
  
      // Generate a random number within the column range, excluding used numbers
      const number = getRandomNumber(columnStart, columnEnd, usedNumbers);
  
      // Check if the column has reached its limit of 5 numbers
      if (row.length < 5) {
        row.push(number);
        usedNumbers.add(number); // Mark the number as used in the row
      } else {
        // Randomly decide whether to fill the remaining cells with zero or another number
        const fillWithZero = Math.random() < 0.5;
  
        if (fillWithZero) {
          row.push(0);
        } else {
          // If not filling with zero, generate a new number and ensure it's unique
          const newNumber = getRandomNumber(columnStart, columnEnd, usedNumbers);
          row.push(newNumber);
          usedNumbers.add(newNumber); // Mark the new number as used in the row
        }
      }
    }
  
    return row;
  };  

// Function to get a random number within a range, excluding numbers that are already used
const getRandomNumber = (min, max, usedNumbers) => {
  let number;
  do {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.has(number)); // Repeat until a unique number is generated
  return number;
};

module.exports = { generateTickets };
