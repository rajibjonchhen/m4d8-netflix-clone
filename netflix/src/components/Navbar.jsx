import { useState } from "react";
import { Navbar, Nav, InputGroup, FormControl, Image } from "react-bootstrap";
import brand from '../brand.png';
import user from '../user.png';
import { Link } from "react-router-dom";
const NavBar =({showSearchResult}) => {
  
const[searchString ,setSearchString]=useState("")
const[ display,setDisplay]=useState(false)

 const searchHandler = (e) => {
    if (e.keyCode === 13) {
      showSearchResult(searchString);
    } else {
      setSearchString(e.currentTarget.value);
    }
  };

 
    return (
                    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "black" }}>
                        <Navbar.Brand href="/">
                        <Image src={brand} style={{ width: "100px" }} fluid /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to='/'>
                            <div active className="nav-link font-weight-bold">
                            Home</div>
                            </Link>

                            <Link to='/TvShow'>
                            <div className="nav-link font-weight-bold">
                            TV Shows</div>
                            </Link>
                            <Link to='/movies'>
                            <div className="nav-link font-weight-bold"> Movies </div>
                            </Link>
                            <Link to='/Recent'>
                            <div className="nav-link font-weight-bold">Recently Added</div>
                            </Link>
                            <Link to='/MyList'>
                            <div className="nav-link font-weight-bold">My List</div>
                            </Link>
                        </Nav>
                        <span className="d-flex align-items-center">
                            <FormControl
                                placeholder="Search and press enter"
                                aria-label="search"
                                aria-describedby="basic-addon1"
                                style={{display:display? "block":"none",borderRadius:"25px",height:"30px"}}
                                onKeyDown={searchHandler}
                                onChange={searchHandler}
                                value={searchString}
                            />
                            <div  onClick={()=>setDisplay(!display)}><i className="text-white bi bi-search"></i></div>
                            <div  className="text-white">KIDS</div>
                            <div ><i className=" text-white bi bi-bell-fill"></i> </div>
                            <div ><Image src={user} width="40px" /></div>
                        </span>
                        </Navbar.Collapse>
                    </Navbar>
    );
 
}

export default NavBar;

