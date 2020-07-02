import React, { Component } from "react";
import axios from 'axios';  //library for connecting backend to frontend

export default class CreateUser extends Component {
                 constructor(props) {
                   super(props);
                   //deefining this
                   this.onChangeUsername = this.onChangeUsername.bind(this);
                   this.onSubmit = this.onSubmit.bind(this);

                   this.state = {
                     username: "",
                   };
                 }

                 onChangeUsername(e) {
                   this.setState({
                     username: e.target.value,
                   });
                 }

                 onSubmit(e) {
                   e.preventDefault(); //prevents the default html behaviour from taking place
                   const user = {
                     username: this.state.username,
                   };

                   console.log(user);
                   //posting the user to the db
                   axios.post('http://localhost:4000/users/add', user)
                     .then(res => console.log(res.data));
                     this.setState({
                         username: ""
                     })
                   //window.location = "/";
                 }
                 render() {
                   return (
                     <div>
                       <form onSubmit={this.onSubmit}>
                         <div className="form-group">
                           <label>Username</label>
                           <input
                             type="text"
                             required
                             className="form-control"
                             value={this.state.username}
                             onChange={this.onChangeUsername}
                           />
                         </div>
                         <div className="form-group">
                           <input
                             type="submit"
                             value="Create User"
                           className = " btn btn-primary" />

                         </div>
                       </form>
                     </div>
                   );
                 }
               }
