import pro1 from "..//Assets/project1.png"
import pro2 from "..//Assets/project2.png"
import pro3 from "..//Assets/project3.png"
import pro4 from "..//Assets/project4.png"

const Data=[
    {
        id: "1",
        imgs: pro1,
        title: "Simon Game Challenge",
        discription: "This game challenges players to repeat a pattern of button presses in the correct order.This Game will be built using HTML for the overall structure of the web page, CSS for the styling and layout, and JavaScript for the interactivity and game logic. The game will use JavaScript to handle user input and generate the game's pattern of button presses, the pattern will come with the help of Math. random function in Js. The game will also use JavaScript to play the corresponding sound effects when the buttons are pressed.There would be two arrays that'll compare the color pattern, the point at which pattern doesn't match,the game will end.",
        github: "https://github.com/Simran2507/Front-End-Projects/tree/master/Simon%20Game%20Challenge",
        liveServer: "https://simon-game-liart.vercel.app/"  
    },
    {
        id:"2",
        imgs: pro2,
        title: "Drum Kit",
        discription: "A web application that plays different sounds of different kinds of drums, you can press the picture of the drum to hear the sound or can click on the alphabet that is written on the picture on the musical instrument, it'll do the same thing.This Game will be built using HTML for the overall structure of the web page, CSS for the styling and layout, and JavaScript for the interactivity.",
        github: "https://github.com/Simran2507/Front-End-Projects/tree/master/Drum-Kit",
        liveServer: "https://drum-kit-kappa-vert.vercel.app/" 
    },
    {
        id:"3",
        imgs: pro3,
        title: "Travel Page",
        discription: "The TravelPage project is a dynamic web application built with React, designed to provide users with an immersive experience for exploring and planning travel destinations. The application utilizes various React features and libraries to deliver a responsive and interactive user interface.The project incorporates the useState hook, a fundamental feature of React, which enables the management of state within functional components.Overall, the TravelPage project demonstrates the power of React and its ecosystem in building a user-friendly travel application",
        github: "https://github.com/Simran2507/TravelPage",
        liveServer: "https://travel-page-pi.vercel.app/" 
    },
    {
        id:"4",
        imgs: pro4,
        title: "Book Store",
        discription: "The BookStore project is a full-stack application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It leverages React, a popular JavaScript library for building user interfaces, to create an interactive and dynamic book store platform.The book store's UI is designed with a responsive layout, adapting to different screen sizes and devices. React's state management capabilities, facilitated by hooks such as useState and useEffect, enable the application to handle data updates and re-render components efficiently. Users can conveniently manage book details using various CRUD (Create, Read, Update, Delete) operations. The front-end of the application is developed using React, which enables the creation of reusable UI components for a modular and efficient development experience.On the back-end, the application utilizes Express.js as a lightweight and flexible web framework for handling HTTP requests and API endpoints. MongoDB, a NoSQL database, is employed to store and retrieve book data, providing a scalable and efficient solution for data management.",
        github:"https://github.com/Simran2507/BookStore",
        liveServer:"https://book-store-eight-fawn.vercel.app/"

    }
];

export default Data;