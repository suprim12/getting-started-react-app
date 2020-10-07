import React from "react";
import { NavBar, Button, Container, Input, Spacer } from "suprim-ui";
function App() {
  return (
    <div className="App">
      <NavBar>
        <NavBar.Container>
          <NavBar.Menu>
            <NavBar.Link>
              <a href="/" className="active">
                Home
              </a>
            </NavBar.Link>
            <NavBar.Link>
              <a href="/">About</a>
            </NavBar.Link>
          </NavBar.Menu>
        </NavBar.Container>
      </NavBar>
      <Container>
        <Spacer></Spacer>
        <Input type="text" placeholder="Full Name" label="Full Name" />
        <Input type="email" placeholder="Email" label="Email Address" />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          passwordtoggle
        />
        <Button type="submit" variation="primary">
          Submit
        </Button>
        <Spacer></Spacer>
      </Container>
    </div>
  );
}

export default App;
