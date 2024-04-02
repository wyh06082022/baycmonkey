// user/index.js

const book = require('book');

function createUser(username, email) {
    console.log(`User "${username}" with email "${email}" has been created.`);
}

function getUserBooks(username) {
    console.log(`Fetching books for user "${username}":`);
    // Dummy implementation, fetching user books from a database or API
    console.log("Some sample books...");
}

module.exports = {
    createUser,
    getUserBooks
};