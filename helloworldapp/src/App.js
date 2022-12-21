import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Namaste from './components/Namaste';
import './components/name.css'

function App() {

const person_details=[{
name : "Sowmya",
age : "34 yrs",
phno :"9663269652",
add :"Vajarahalli"
},
// {
//   name : "Abhay",
//   age : "7 yrs",
//   phno :"9663269652",
//   add :"Vajarahalli"
//   },
//   {
//     name : "Abhinava",
//     age : "4 yrs",
//     phno :"9663269652",
//     add :"Vajarahalli"
//     },
//    {
//       name : "Ganesh Ram ",
//       age : "38 yrs",
//       phno :"9880169012",
//       add :"Vajarahalli"
//    }

]



  return (
    <div className="App">
      <Hello></Hello>
     {person_details.map(i=><Namaste name ={i.name} age={i.age} phno={i.phno} add={i.add}></Namaste>)} 
     
    </div>
  );
}

export default App;
