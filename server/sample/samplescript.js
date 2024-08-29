const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri =
  'mongodb+srv://somjeetsrimani:Babai2000@cluster-dasboard-accele.00juq.mongodb.net/';
const client = new MongoClient(uri);

// Database and collection name
const dbName = 'Order_Details';
const collectionName = 'orders';

function generateOrderNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

function generateUsername() {
  const firstNames = [
    'John',
    'Jane',
    'Alice',
    'Bob',
    'Michael',
    'Sarah',
    'David',
    'Emily',
    'Chris',
    'Laura',
  ];
  const lastNames = [
    'Smith',
    'Doe',
    'Johnson',
    'Brown',
    'Williams',
    'Jones',
    'Davis',
    'Miller',
    'Wilson',
    'Taylor',
  ];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
}

function generateOrderStatus() {
  return ['Delivered', 'Cancelled', 'Pending'][Math.floor(Math.random() * 3)];
}

function generateCost() {
  return parseFloat((Math.random() * 490 + 10).toFixed(2)); // Random number between 10 and 500
}

function generateActualCost(costOfOrder) {
  return parseFloat((Math.random() * (costOfOrder - 5) + 5).toFixed(2)); // Random number between 5 and costOfOrder
}

function generateFeedback() {
  const feedbackOptions = [
    'Great service!',
    'Satisfied with the purchase.',
    'Will not buy again.',
    'Product arrived late.',
    'Excellent quality!',
    'Good value for money.',
    'Poor customer service.',
    'Fast delivery!',
    'Average experience.',
    'Highly recommend!',
  ];
  return feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
}

function generateRating() {
  return Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
}

function generateDate() {
  const year = 2024;
  const month = Math.floor(Math.random() * 12); // Random month
  const day = Math.floor(Math.random() * 28) + 1; // Random day
  return new Date(year, month, day).toISOString();
}

function generateSampleData(numEntries) {
  const data = [];
  for (let i = 0; i < numEntries; i++) {
    const costOfOrder = generateCost();
    const actualCost = generateActualCost(costOfOrder);
    const entry = {
      // userid: Math.floor(1000 + Math.random() * 9000).toString(),
      userName: generateUsername(),
      orderID: generateOrderNumber(),
      orderStatus: generateOrderStatus(),
      costOfOrder: costOfOrder,
      actualCost: actualCost,
      netProfit: parseFloat((costOfOrder - actualCost).toFixed(2)),
      date: generateDate(),
      feedback: generateFeedback(),
      rating: generateRating(),
    };
    data.push(entry);
  }
  return data;
}

async function run() {
  try {
    // Connect to the MongoDB client
    await client.connect();

    // Access the database and collection
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Generate sample data
    const sampleData = generateSampleData(50);

    // Insert the data into the collection
    const result = await collection.insertMany(sampleData);
    console.log(`${result.insertedCount} documents were inserted.`);
  } finally {
    // Close the connection
    await client.close();
  }
}

run().catch(console.dir);
