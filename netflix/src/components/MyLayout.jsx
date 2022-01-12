import NavBar from "./Navbar";
import MyFooter from "./MyFooter";


const MyLayout = ({showSearchResult})=>{

    return(
        <>
       <NavBar showSearchResult ={showSearchResult}/>
        [props.children]
       <MyFooter />
        </>
    )
}

export default MyLayout