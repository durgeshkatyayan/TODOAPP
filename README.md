��#   T O D O A P P 


All Project is complete 
First Clone project on vscode 


 First create database name is => mern
 
Navigate to the client directory
cd client 
first type => npm install vite --save-dev
npm install

Navigate to the server directory
cd server
npm install

After installing node_module 

Stay in the server directory and start the backend server
npm run dev
This will start both the frontend and backend servers.



Here’s a revised and polished version of your sentences for the README.md file:

Project Setup Instructions
Prerequisites
Ensure you have Node.js and MySQL installed on your system.

Steps to Set Up the Project
Clone the Repository
Clone this project to your local machine using the following command:

bash
Copy code
git clone <repository-url>
Create the Database
Create a database named uis in your MySQL server.

Install Dependencies

Navigate to the client directory and install the required dependencies:
bash
Copy code
cd client
npm install
Navigate to the server directory and install the required dependencies:
bash
Copy code
cd ../server
npm install
Start the Project

Stay in the server directory and start the backend server:
arduino
Copy code
npm run dev
This will start both the frontend and backend servers.


Project Structure and Functionality
Home Page:
Displays the list of TODOs.

Login Page:
Go to the login page to log into your account. email=>user@gmail.com pass=12345

Dashboard Page:
After logging in, you'll be redirected to the dashboard. The dashboard includes two main menus:

Dashboard: 
View, update, or delete TODO items.
Create TODO:
Add new TODO items.

Notes
JWT Authentication:
This project does not include JWT authentication due to time constraints.

  const token = jwt.sign(
                { userId: user.id, UID: user.email },
                process.env.SECRET_KEY,
                { expiresIn: '7d' }
            );

            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000,
                secure: true
            });

            return res.status(200).send({
                success: true,
                message: 'Login successful',
                result,
                token
            });


Development Context:
This project was created during my work at a company, which limited the time and scope for implementing advanced functionality.



 
 
