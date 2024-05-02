# ChatterBox⚡
Welcome to ChatterBox⚡! 

# Demo💻



https://github.com/doraemon7467/Chat-App/assets/106157824/40028bb6-93ef-43b2-ab2c-69578e1cb04a



# Features💫
- **Real-time Chatting**: ChatterBox leverages the power of 'socket.io' to enable real-time communication between users. Messages are instantly delivered to recipients, ensuring a smooth and responsive chatting experience.

- **User Authentication**: The application includes a secure login and signup system. Users can create accounts, log in with their credentials, and access their chat rooms. Authentication is handled using JWT tokens.

- **Persistent Data Storage**: MongoDB is utilized as the database for ChatterBox, ensuring reliable and efficient storage of user information and chat messages. The use of MongoDB allows for scalability and flexibility, accommodating the growth of the application and its user base.

# Installation⬇️
1. Clone the repository
```bash
git clone https://github.com/doraemon7467/Chat-App.git
```
2. Install dependencies
```bash
cd Chat-App
npm install
```
3. Set up the environment variables:
  - Create a .env file in the root directory.
  - Specify the required environment variables in the .env file. For example:
  ```bash
MONGODB_URI=your-mongodb-connection-string
PORT=port on which you wish to run your server
REACT_APP_LOCALHOST_KEY="chat-app-current-user" 
ORIGIN=domain-name-string ("http://localhost:3000" if not hosted)
```
4. Start the development server
```bash
npm start
```
5. Open your browser and visit http://localhost:3000 to access Quirk Chat.

# Technologies Used🛠️
- React A popular JavaScript library for building user interfaces. React provides an efficient and reusable component-based architecture for ChatterBox's front end.

- Node.js: A server-side JavaScript runtime environment. Node.js powers the backend of ChatterBox, allowing for server-side logic and handling of real-time communication.

- Socket.io: A library that enables real-time, bidirectional communication between web clients and servers. Socket.io forms the core of ChatterBox's real-time chat functionality.

- MongoDB: A NoSQL database that offers scalability and flexibility for storing and retrieving user information and chat messages. MongoDB integrates seamlessly with ChatterBox's Node.js backend.

# Routes

- authRoutes:
- **router.post("/login", login);** : To make User Log-in.
- **router.get("/allusers/:id", getAllUsers);**: To get information about all the users 
- **router.post("/register", register);**: To register a new user.
- **router.get("/logout/:id", logOut);**: For a user to log-out from the applicaton.

- messageRoutes
- **router.post("/addmsg/", addMessage);**: To add a message in the database
- **router.post("/getmsg/", getMessages);**: To get all the messages between two users from the database.

# License📄
ChatterBox is open source and available under the MIT License.

Thank you for choosing ChatterBox! We hope you enjoy using our real-time chat application and have meaningful conversations with others.

