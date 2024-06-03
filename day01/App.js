import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Multiple from './component/multiinputs';
import { Para } from './component/props1';
import Multii1 from './component/multii1';
import Student from './component/clscompomulti';
import Student1 from './component/classcmpodefprops';
import Animal from './component/imageclasscompo';
import Studentttt from './component/twocompo';


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
        Welcome / >
        <
        Multiple name = "srihariesh"
        rollno = "234" / >
        <
        Para name = "Thanusss" / >
        <
        Multii1 / >
        <
        Student name = "mithun"
        dept = "CSE" / >
        <
        Student1 / >
        <
        Animal / >
        <
        Studentttt name = "kavyasree      "
        rollno = "  54  "
        total = '450        '
        grade = "A " / >

        <
        /header> < /
        div >
    );
}

export default App;