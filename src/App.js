

import './App.css';

import Header from './components/Header';
import Sidebar from './components/Siderbar';

import Main from './components/Main';

// import image from './images/1.jpg'


function App() {
const number=[10,20,30];
console.log(number.map((n)=>{return n}))
  return (
    <>
    <Header></Header>
    <Sidebar></Sidebar>
    <Main></Main>
  

   </>
  );
}

export default App;
