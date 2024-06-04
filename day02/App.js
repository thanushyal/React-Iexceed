import logo from './logo.svg';
import './App.css';
import Usehookk from './components/usehookk';
import Demohook from './components/demohook';
import Electronicsss from './components/Electronicsss';
import Myapp from './components/Myapp';
import Restruct1 from './components/Restruct1';
import Restruct2 from './components/Restruct2';
import Event1 from './components/Event1';
import Event from './components/Event2';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        Usehookk / >
        <
        Demohook / >

        <
        Electronicsss / >
        <
        Myapp / >
        <
        Restruct1 bankname = "KVB"
        amount = "9000" / >
        <
        Restruct2 name = "thanu"
        rollno = "20304" / >
        <
        Event1 / >
        <
        Event / >


        <
        /header> < /
        div >
    );
}

export default App;