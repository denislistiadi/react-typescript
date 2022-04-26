import './App.css';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
import Status from './components/Status';

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
      {/* <Person name={personName}/>
      <PersonList names={personList} /> */}

      <Status status='success' />
      <Oscar>
        <Heading>Hello World!!</Heading>
      </Oscar>
      <Greet name="Denis" isLogin={false}/>
      </div>
  );
}

export default App;
