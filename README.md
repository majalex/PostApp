
# Post App 

A social media app built with React, Node.js, Mongo DB, Express and MUI, with Google Authentication. It allows users to post memories and share those with others.


## Screenshots
![FireShot Capture 002 - Post App - postapp fun-min](https://user-images.githubusercontent.com/105987428/210068281-cbb5bffb-60dd-4436-bb72-6247d0467582.png))



## Features

- Post creation
- editing, or deleteing posts
- liking each other posts
- user authentication


## Tech Stack

**Client:** React, Redux, Material UI

**Server:** MongoDB, Node, Express

## Demo

https://postapp.fun


## Run Locally

Clone the project

```bash
  git clone https://github.com/majalex/PostApp.git
```
For client site: 
- Go to the client directory,
- Install dependencies,
- Start the app 

```bash
  cd client

  npm install

  npm start
```
For server site:
- In another terminal go to the server directory,
- Install dependencies,
- Run server


```bash
  cd server

  npm install

  node index
```
- then go to: client > src > api > index.js and change the baseURL to http://localhost:5001
## Environment Variables

To run this project, you will need to add the following environment variables to your .env files
(one in the client site and enother on the server site)

`REACT_APP_CLIENT_ID` - client_id of the google authentication services

`CONNECTION_URL` - connection to MongoDB Atlas


