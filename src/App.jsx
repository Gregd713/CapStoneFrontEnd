import React, {Component} from "react";
import HomePage from "./components/Pages/HomePage/HomePage"
import { Switch, Route, Link, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode'
import SearchBar from './components/SearchBar/SearchBar'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import MainFeedPage from "./components/Pages/MainFeedPage/MainFeedPage";
import Profile from "./components/Pages/Profile/Profile";
import Register from "./components/Pages/Register/Register";
import Messages from "../src/components/Pages/Messages/Messages";
import MyPlan from "../src/components/Pages/MyPlan/MyPlan";
import Groups from "../src/components/Pages/Groups/Groups";
import Bookmarks from "../src/components/Pages/Bookmarks/Bookmarks";
//import Questions from "../src/Components/Pages/Questions/Questions";
//import Jobs from "../src/Components/Pages/Jobs/Jobs";
//import Events from "../src/Components/Pages/Events/Events";
//import Courses from "../src/Components/Pages/Courses/Courses";

class App extends Component {
    constructor(props){
        super(props);
        // const [user,setUser]=useState();
        // const [file,setFile]=useState();
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
            <Route path="/register" component={Register}/>
            <Route path="/profile"exact render={(props)=>{
                if(!this.state.user){
                    return<Redirect to='/login'/>}
                else{
                        return <Profile {...props}/>
                    }}}/>
            <Route path="/messages"exact render={(props)=>{
                if(!this.state.user){
                    return<Redirect to='/login'/>}
                else{
                        return <Messages {...props}/>
                    }}}/>
            <Route path="/myplan"exact render={(props)=>{
                if(!this.state.user){
                    return<Redirect to='/login'/>}
                else{
                        return <MyPlan {...props}/>
                    }}}/>
            <Route path="/groups"exact render={(props)=>{
                if(!this.state.user){
                    return<Redirect to='/login'/>}
                else{
                        return <Groups {...props}/>
                    }}}/>
            <Route path="/bookmarks"exact render={(props)=>{
                if(!this.state.user){
                    return<Redirect to='/login'/>}
                else{
                        return <Bookmarks {...props}/>
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