import React,{useState} from 'react';
import axios from 'axios';
import  { withRouter } from 'react-router-dom';

function Login(props){


	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');


	async function login(){
		const loginres = await axios.post('/auth/login',{username,password});
		const user = loginres.data.user;
		if(user){

			props.history.push("/")
		}

	}

	function onChange(e){

		let id = e.currentTarget.id;
		switch(id){
			case "user":
				setUsername(e.currentTarget.value)
				break;
			case "pass":
				setPassword(e.currentTarget.value)
				break;
		}
	}




	return(

		<div className="">
			<div className="logincontainer">
				<div className="logintitle">
					Login
				</div>
				<div className="loginbborder">
				</div>
				<div className="loginwelcome">
					Welcome back! Login to access the Sweet Meme Marketplace.  
					<span className="lwhighlight"><a className="textDec" href="">Did you forget your password?</a></span>
				</div>
				<input id="user" className="loginuser" type="text" placeholder="Username" value={username} onChange={onChange} required maxLength="25"></input>
				<input id="pass" className="loginpass" type="text" placeholder="Password" value={password} onChange={onChange} required maxLength="25"></input>
				<button className="btn-gradbrown" onClick={login}>Continue</button>
				<div className="loginwelcome">
					Not a member?  
					<span className="lwhighlight"><a className="textDec" href="/signup">Join now!</a></span>
				</div>
			</div>
		</div>



		)

}

export default withRouter(Login);