import React, {Component} from 'react'
import User from './User';
import InstaService from "../services/instaservice";
import ErrorMessage from './ErrorMessage';


export default class Users extends Component{
   InstaService = new InstaService();

   state = {
        users: [],
        error: false
   }

   componentDidMount(){
       this.updateUsers();
   }

   updateUsers(){
       this.InstaService.getAllUsers()
       .then(this.onShowUsers)
       .cath(this.onError)      
   }
   
   onShowUsers = (users) => {
       this.setState({
           users,
           error: false
       })
   }

   onError = () => {
       this.setState({
           error: true
       })
   }

   renderItems(arr){
       return arr.map(item => {
           return (
               <div key = {item.id}>
                <User 
                    src = {item.src}
                    alt = {item.altname}
                    name = {item.name}
                    min
                />
               </div>
           )
       })
   }
   
   render(){
       const {error, users} = this.state;
       if(error){
           return <ErrorMessage/>
       }
       const items = this.renderItems(users);
       return(
           <div className = "right">
                 {items}
                <div className = "users__block">
                    {items}
                </div>
           </div>
       )
   }
   
    /*
    return(
        <div className = "right">
            <User
                src = "https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                alt = "prince"
                name = "Harry"
                min/>
            <div className = "users__block">
            <User
                src = "https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                alt = "prince"
                name = "Harry"
                min/>


            </div>
        </div>
    )
    */
}
