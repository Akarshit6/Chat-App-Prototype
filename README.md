**Name:** Akarshit Trivedi
**College/University** Indian Institute of Technology Indore
**Department** Metallurgical Engineering and Materials Science (MEMS)

# Gossip
  Gossip is a Full Stack Chatting App.
  Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.

# Architecture
Frontend: React with Chakra UI for styling and  responsiveness.
  Backend: Node.js with Express for handling API requests and Socket.IO for real-time communication.
Database: MongoDB (with Mongoose) for storing user data and messages.

# Features
  Authenticaton
  Real Time Chatting with Typing indicators
  One to One chat
  Search Users
  Create Group Chats
  Notifications 
  Add or Remove users from group
  View Other user Profile
  Group Video Call

# Components-
Frontend
  User Interface: Built with Chakra UI for responsiveness.
  Real-Time Messaging: Implemented using Socket.IO.
  Video Calls: Managed through zegocloud , which simplifies video call integration.
  API Requests: Handled via Axios.
  Routing: Managed with react-router-dom.

Backend 
  RESTful API for user authentication and messaging.
  Socket.IO for real-time bidirectional communication.
  JWT for secure authentication.

# Dependencies

Frontend Dependencies
  @chakra-ui/react, @chakra-ui/icons: UI component library for building responsive and accessible applications.
  axios: Promise-based HTTP client for making API requests.
  react-router-dom: Declarative routing for React applications, managing navigation and route handling.
  socket.io-client: Client library for real-time communication with the Socket.IO server.
  @zegocloud/zego-uikit-prebuilt: Provides a prebuilt, customizable UI for video/audio calls. Chosen for its ease of integration and fast setup for video call functionality, making it ideal for real-time communication in a chat application.

Backend Dependencies
  express: Web framework for building the REST API.
  mongoose: ODM for MongoDB, allowing interaction with the database using JavaScript.
  jsonwebtoken: For handling JSON Web Tokens (JWT) for user authentication.
  dotenv: To manage environment variables securely.
  socket.io: Enables real-time communication between clients and the server.

## Set Up
1. Clone the Repository
2. Setup Environment Variables
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
3. cd Chat-App
4. npm install
5. cd frontend
6. npm install
7. //open new terminal
    npm run start
8. //open new terminal
    cd frontend
    npm start