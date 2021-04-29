import  React from 'react';
import App from '../App';
/*function Greet(){
    return <h1> Hello Mohan</h1>
}*/
 const Greet=(props)=> {
 console.log(props);
 return <h1> Hello {props.name}a.k.a {props.heroname}</h1>
 }
 export default Greet;
