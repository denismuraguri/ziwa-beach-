import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    rooms: [
        {
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
            description: "Comfortable housing and Adequate safety/security."

        },
        {
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
            description: "Comfortable housing and Adequate safety/security."

        },
        {
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
            description: "Comfortable housing and Adequate safety/security."

        },
        {//images/img1.jpg
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
            description: "Comfortable housing and Adequate safety/security."
            

        },
        
    ]
}
export default data