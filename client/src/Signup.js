import React, {useState, useEffect} from 'react';
import axios from 'axios';
import  {withRouter} from 'react-router-dom';


function Signup(props){



	//978x760img size resize
	const [urls, setUrl] = useState(["https://i.imgur.com/JEN5oso.jpg","https://i.imgur.com/tgWfDxg.jpg", "https://i.imgur.com/fEM2PmU.jpg","https://i.imgur.com/47EtD88.png"]);
	const [counter, setCounter] = useState(0);
	const [fullname,setFullName] = useState('');
	const [username,setUserName] = useState("");
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");


	function setNewUrl (surls){
		let style = {
			background:"url(" + urls[counter]+ ")"
		};
		return style;
	}


	useEffect(()=>{

		const urlinterval = setInterval(()=>{

			if(counter+1>=urls.length){

				setCounter(0);
				setNewUrl(urls);
				
			}else{
				setNewUrl(urls);
				setCounter(counter+1);
			}


		},5000);

		return ()=>{clearInterval(urlinterval)}

	})



	async function submitForm(e){
		e.preventDefault();
		const subres = await axios.post('/auth/signup', {fullname,username,email,password});
		console.log(subres.data.user)
		const userobj = subres.data.user;

		if(userobj){
			props.history.push("/")
		}


	}


	function onChangeInput(e) {

		let id = e.currentTarget.id;
		switch(id){
			case "sFN":
				setFullName(e.currentTarget.value);
				break;
			case "sEmail":
				setEmail(e.currentTarget.value);
				break;
			case "sUser":
				setUserName(e.currentTarget.value);
				break;
			case "sPass":
				setPassword(e.currentTarget.value);
				break;

		}

	}




	return(


		<div className="signupcontainer">
			<div className="signupbgimg" style={setNewUrl(urls)}></div>
			<div className="signup">
				<div className="signupinner">
					<div className="signuptitle">
					Signup
					</div>
					<div className="loginbborder"></div>
					<form>
						<input id="sFN" className="signupuser" type="text" placeholder="Full Name" maxLength="25" required value={fullname} onChange={onChangeInput}></input>
						<input id="sEmail" className="signuppass" type="email" placeholder="Email" maxLength="40" required value={email} onChange={onChangeInput}></input>
						<input id="sUser" className="signuppass" type="text" placeholder="Username" maxLength="40" required value={username} onChange={onChangeInput}></input>
						<input id="sPass" className="signuppass" type="password" placeholder="Password" maxLength="40" required value={password} onChange={onChangeInput}></input>
						<button className="signupbtn" onClick={submitForm}>Sign up</button>
					</form>
				</div>
			</div>
		</div>




		)






}


export default withRouter(Signup);