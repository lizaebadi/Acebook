# Acebook

In this project, we are tasked with working on an existing application. A significant part of the challenge will be to familiarise ourselves with the codebase we've inherited, as we work to **improve and extend** it.

## Features

- Sign up
- Sign in
- Sign out
- View a list of posts
- Create posts
- Like posts

## Technologies

Here's an overview of the technologies used to build this application:

<img height="30" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /><img height="30" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /><img height="30" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" /><img height="30" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" /><img height="30" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" /><img height="30" src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" />

This application is comprised of two distinct pieces.

- A backend API built with Express
- A front end built with React

The React front end sends HTTP requests to the backend API and receives JSON in response body, rather than a whole page of HTML.
  
## What we have learnt

- Better comprehension of the MERN stack
- Developed the ability to collaborate effectively as a team while exploring new technologies together.
- Employed various practices such as team standups, sprints, retrospectives, code reviews, and pairing to enhance our communication and workflow.
- Better understanding of End-to-end and Component testing in Cypress
- Embraced agile work practices, breaking down tickets into smaller tasks and assigning pairs 

## Quickstart

1. Clone this repository
   
2. `cd` to cloned repository

3. Start the server

  **Note the use of an environment variable for the JWT secret**

   ```
   ; cd api
   ; JWT_SECRET=SUPER_SECRET npm start
   ```
4. Start the front end

  In a new terminal session...

  ```
  ; cd frontend
  ; npm start
  ```
