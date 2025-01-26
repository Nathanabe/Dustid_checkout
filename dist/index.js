"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
// Define a single array to hold all the address objects
const addresses = [
    {
        id: 1,
        firstName: 'Fei',
        lastName: 'Smith',
        addressLine1: '10 Downing Street',
        addressLine2: '',
        city: 'London',
        country: 'United Kingdom',
        postcode: 'SW1A 2AA',
    },
    {
        id: 2,
        firstName: 'Eckra',
        lastName: 'Johnson',
        addressLine1: '221B Baker Street',
        addressLine2: 'Flat 3',
        city: 'London',
        country: 'United Kingdom',
        postcode: 'NW1 6XE',
    },
    {
        id: 3,
        firstName: 'Kolawole',
        lastName: 'Abdulrahman',
        addressLine1: '1 High Street',
        addressLine2: 'Suite 5',
        city: 'Edinburgh',
        country: 'Scotland',
        postcode: 'EH1 1AA',
    },
    {
        id: 4,
        firstName: 'Michael',
        lastName: 'Livingstone',
        addressLine1: '50 Princes Street',
        addressLine2: '',
        city: 'Manchester',
        country: 'United Kingdom',
        postcode: 'M1 4QS',
    },
];
// Root rouute
app.get('/', (req, res) => {
    res.send('Welcome to the Mock API');
});
// Define the route to handle fetching address by ID
app.get('/user/address/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extract the ID from the URL params
    const address = addresses.find(a => a.id === id); // Find the matching address
    if (address) {
        res.status(200).json(address); // Send the address as a response
    }
    else {
        res.status(404).json({ message: 'Address not found' }); // Send a 404 if not found
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Mock API server running at http://localhost:${port}`);
});
