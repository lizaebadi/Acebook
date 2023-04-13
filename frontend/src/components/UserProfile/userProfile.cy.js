import UserProfile from './userProfile'
const navigate = () => {}

describe("userProfile", () => {
  it("Calls the /users endpoint and lists the curent user", () => {
    window.localStorage.setItem("token", "fakeToken")
    
    cy.intercept('GET', '/users', (req) => {
        req.reply({
          statusCode: 200,
          body: { users: [
            {_id: 1, message: "Hello, world"},
            {_id: 2, message: "Hello again, world"}
          ] }
        })
      }
    ).as("getPosts")

    cy.mount(<Feed navigate={navigate}/>)
    
    cy.wait("@getPosts").then(() =>{
      cy.get('[data-cy="post"]')
      .should('contain.text', "Hello, world")
      .and('contain.text', "Hello again, world")
    })
  })
})

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  user_id: {type: Number, required: false},
  avatarUrl: { 
    type: String, 
    default: './images/defaultAvatar.png',
    required: false 
  }
});
