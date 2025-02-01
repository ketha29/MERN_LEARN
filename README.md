# MERN_LEARN
FreeCodeCamp MERN Stack Tutorial with Deployment – Beginner's Course

1. Create seperate folders for Frontend and Backend
2. Create package.json to put all the scripts - "npm init -y"
3. Installing the required packages - "npm install express mongoose dotenv"
     a. express -> web framework
     b. mongoose -> intract with database (mongoDb)
     c. dotenv -> environment variables
4. To use modeule directly -> add "type": "module" in package.json
5. Restart the server the if any changes made on the file -> "npm i nodemon -D"
     add
             "scripts": {
                  "dev": "nodemon Backend/server.js"
              },
     in package.json
