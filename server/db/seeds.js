use hotel;
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Johnny Laurence",
        email: "waxon@waxoff.com",
        checkedIn: true
    }
])