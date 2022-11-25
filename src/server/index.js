const users = require('./users.json');
const tickets = require('./tickets.json');

module.exports = () => ({
    users: users,
    tickets: tickets
})