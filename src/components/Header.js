import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Movies from './Movies'
import SearchMovies from './SearchMovies';




function Header(){

const [on ,setOn] = useState(0);
const [name ,setName] =useState("");
const [cat,setCat] = useState("");
const handleClick =(e)=>{
  setOn(1);
  e.preventDefault();
}

function handleChange(e){
  console.log(e.target.value)
  setName(e.target.value)
  
 }
 function handleCat(e){
  setName(e.target.value)
 }

return (
<>    
<div className="header_class " >
<nav className="navbar nav-justified bg-light " style={{fontFamily:" Copperplate"}}>
<a className="navbar-brand" href="#"><img  className="logo-class" src="https://www.logolynx.com/images/logolynx/66/6627b95d1f7fc62c274242bb81e7e41d.jpeg"/></a>
<ul className="nav nav-pills ">
    <li className="nav-item active mr-5">
      <a className="nav-link font-weight-bolder text-dark" value="movies" style={{fontSize:30}} href="#" onClick={handleCat}>Movies</a>
    </li>
    <li className="nav-item active  mr-5">
      <a className="nav-link font-weight-bolder text-dark" style={{fontSize:30}} href="#">HollyWood</a>
    </li>
    <li className="nav-item active  mr-5">
      <a className="nav-link font-weight-bolder text-dark"style={{fontSize:30}} href="#">BollyWood</a>
    </li>
    <li className="nav-item active  mr-5">
      <a className="nav-link font-weight-bolder text-dark"  style={{fontSize:30}} href="#">Others</a>
    </li>
</ul>
  <form className="form-inline" >
    <input className="form-control mr-sm-2" type="text" placeholder="Movie name" onChange={handleChange} name ="name"/>
    <button className="btn btn-success bg-dark" type="submit"  onClick={handleClick}>Search</button>
  </form>
</nav>
{on ===0 &&  <Movies></Movies>}

{on ===1&& <SearchMovies m_name={name}></SearchMovies>}

{cat ==="movies" && <Movies></Movies>}
</div>
</>
)


}


export default Header;