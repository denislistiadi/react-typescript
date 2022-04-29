import "./App.css";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
// import Box from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Counter from "./components/state/Counter";
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Button from "./components/Button";
// import Container from "./components/Container";
// import Input from "./components/Input";

function App() {
  // const personName = {
  //   first: 'Denis',
  //   last: 'Listiadi'
  // }

  // const personList = [
  //   {
  //     first: 'Denis',
  //     last: 'Listiadi'
  //   },
  //   {
  //     first: 'Ahmad',
  //     last: 'Saputra'
  //   },
  //   {
  //     first: 'Zaskia',
  //     last: 'Saputri'
  //   }
  // ]

  return (
    <div className="App">
      {/* 
      <Greet name="Denis" isLogin={false}/> 
      <Person name={personName}/>
      <PersonList names={personList} /> */}

      {/* <Status status='success' />
      <Oscar>
        <Heading>Hello World!!</Heading>
      </Oscar> */}

      {/* <Button
        handleClick={(e, id) => {
          console.log("Button clicked", e, id);
        }}
      />

      <Input value='' handleChange={(event) => console.log(event.target.value)} /> */}

      {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}
      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
