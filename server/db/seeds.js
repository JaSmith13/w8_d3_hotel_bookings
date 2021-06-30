use hotel;
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Johnny Laurence",
        email: "sweeptheleg@cobrakai.com",
        checkedIn: true
    },
    {
        name: "Daniel San",
        email: "waxon@cranekick.com",
        checkedIn: false
    },
    {
        name: "Mr Miyagi",
        email: "waxon@waxoff.com",
        checkedIn: false
    }
])