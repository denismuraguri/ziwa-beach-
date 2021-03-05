import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'denis',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'james',
            email: 'james@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    rooms: [
        {
            _id: "1",
            name: "single economy",
            image: "/images/img5.jpg",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: "not allowed",
            rating: 4.5,
            roomsAvailable: 0,
            numReviews: 10,
            breakfast: "not provided",
            description: [
            "Comfortable beds. ",
            "Complimentary refreshments. ",
            "Adequate safety/security. ",
            "Internet",],

        },
        {
            _id: "2",
            name: "single basic",
            image: "/images/img4.jpg",
            type: "single",
            rating: 2.5,
            numReviews: 10,
            roomsAvailable: 7,
            price: 150,
            size: 250,
            capacity: 1,
            pets: "not allowed",
            breakfast: "not provided",
            description: ["Comfortable beds. ",
            "Complimentary refreshments. ",
            "Adequate safety/security. ",
            "Internet"],

        },
        {
            _id: "3",
            name: "single standard",
            image: "/images/img7.jpg",
            rating: 4.8,
            numReviews: 10,
            roomsAvailable: 2,
            type: "single",
            price: 150,
            size: 300,
            capacity: 1,
            pets: "not allowed",
            breakfast: "not provided",
            description: ["Comfortable beds. ",
            "Complimentary refreshments. ",
            "Adequate safety/security. ",
            "Internet"],

        },
        {//images/img1.jpg
            _id: "4",
            name: "single deluxe",
            image: "/images/img6.jpg",
            type: "single",
            price: 300,
            rating: 4.9,
            numReviews: 10,
            roomsAvailable: 5,
            size: 400,
            capacity: 1,
            pets: "allowed",
            breakfast: "not provided",
            description: ["Comfortable beds. ",
            "Complimentary refreshments. ",
            "Adequate safety/security. ",
            "Internet"],

        },
        
    ]
}
export default data