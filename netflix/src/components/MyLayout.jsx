import NavBar from "./Navbar";
import MyFooter from "./MyFooter";


const MyLayout = (props)=>{

    return(
        <>
       <NavBar showSearchResult ={props.showSearchResult}/>
        {props.children}
       <MyFooter />
        </>
    )
}

export default MyLayout