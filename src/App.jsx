import React, {Component} from "react";
import HomePage from "./components/Pages/HomePage/HomePage"
import { Switch, Route, Link, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode'
import SearchBar from './components/SearchBar/SearchBar'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import MainFeedPage from "./components/Pages/MainFeedPage/MainFeedPage";
import Profile from "./components/Pages/Profile/Profile";
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
        console.log(this.state)
    }
render() {
    return (
        <div className="App">
        <SearchBar/>
        <Switch>
            <Route path="/home" component={HomePage}/> 
            <Route path="/"exact render={(props)=>{
                if(!this.state.user){
                    return<Redirect to='/home'/>}
                else{
                        return <MainFeedPage {...props}/>
                    }}}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/mainfeed" component={MainFeedPage}/>
            {/* <Route path ="/profile" component={Profile}/> */}
            <Route path="/profile"exact render={(props)=>{
                if(!this.state.user){
                    return<Redirect to='/login'/>}
                else{
                        return <Profile {...props}/>
                    }}}/>
            {/* <Route path="/" element={<Login/>}/> */}
            {/* <Route path="/" exact render={(props) => {
                if(!this.state.user){
                    return <Redirect to='/login' />
                } else {
                    return <HomePage {...props} />
                }
            }}/> */}
           </Switch>
        </div>
    )
}
}
export default App;