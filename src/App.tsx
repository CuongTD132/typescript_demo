import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";

function App() {
  const personName = {
    first: "Minh",
    last: "Trang",
  };

  const nameList = [
    {
      first: "Huyen",
      last: "Trang",
    },
    {
      first: "Minh",
      last: "Trang",
    },
    {
      first: "Thu",
      last: "Trang",
    },
  ];
  return (
    <div className="App">
      <User />
      {/* <LoggedIn /> */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <Button
        handleClick={(e, id) => {
          console.log("Button clicked", e, id);
        }}
      />

      <Input value="" handleChange={(e) => console.log(e)} /> */}
      {/* <Oscar>
        <Heading>Oscar goes to Mee</Heading>
      </Oscar> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Status status="loading" /> */}
      {/* <Greet
        name="Duc Cuong"
        //  msgCount={20}
        isLoggedIn={true}
      /> */}
      {/* <PersonList name={nameList} /> */}
      {/* <Person name={personName} /> */}
    </div>
  );
}

export default App;
