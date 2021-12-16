import React, {Component} from "react";
import HomePage from "./components/HomePage/HomePage"
import { Routes, Route, Link } from "react-router-dom";
import jwtDecode from 'jwt-decode'
import SearchBar from './components/SearchBar/SearchBar'
// import PageLayout from "./components/PageLayout/PageLayout";

class App extends Component {
    constructor(props){
        super(props);
        const jwt=localStorage.getItem('token');
        try{
          const decodedUser= jwtDecode(jwt);
            this.state = {
                user:decodedUser,
            }
        }catch{
            this.state = {
                user:null,
            }
        }

    }

    componentDidMount(){
        /// JWT maybe set other than null
        const jwt=localStorage.getItem('token');
        try{
          const decodedUser= jwtDecode(jwt);
          this.setState({user: decodedUser});
        }catch{
          
        }
    }
render() {
    return (
        <div className="App">
        <SearchBar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/" exact render={(props) => {
                if(!this.state.user){
                    return <Redirect to='/login' />
                } else {
                    return <HomePage {...props} />
                }
            }}/> */}
           </Routes>
        </div>
    )
}
}
export default App;