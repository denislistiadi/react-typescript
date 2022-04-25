import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Denis',
    last: 'Listiadi'
  }

  const personList = [
    {
      first: 'Denis',
      last: 'Listiadi'
    },
    {
      first: 'Ahmad',
      last: 'Saputra'
    },
    {
      first: 'Zaskia',
      last: 'Saputri'
    }
  ]
  
  return (
    <div className="App">
      <Greet name="Denis" messageCount={40} isLogin={false}/>
      <Person name={personName}/>
      <PersonList names={personList} />
    </div>
  );
}

export default App;
