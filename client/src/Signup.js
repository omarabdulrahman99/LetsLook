import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {ContextOne} from "./ContextOne";

function Signup(props) {
	//978x760img size resize
	let {state,dispatch} = React.useContext(ContextOne);
	const [urls, setUrl] = useState([
		"https://i.imgur.com/JEN5oso.jpg",
		"https://i.imgur.com/tgWfDxg.jpg",
		"https://i.imgur.com/fEM2PmU.jpg",
		"https://i.imgur.com/47EtD88.png"
	]);
	const [counter, setCounter] = useState(0);
	const [fullname, setFullName] = useState("");
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//errormsgs
	const [errFN, setErrFN] = useState([""]);
	const [errUser, setErrUser] = useState([""]);
	const [errEmail, setErrEmail] = useState([""]);
	const [errPass, setErrPass] = useState([""]);

	var errFNL = [];
	var errUserL = [];
	var errEmailL = [];
	var errPassL = [];

	function setNewUrl(surls) {
		let style = {
			background: "url(" + urls[counter] + ")"
		};
		return style;
	}

	useEffect(() => {
		const urlinterval = setInterval(() => {
			if (counter + 1 >= urls.length) {
				setCounter(0);
				setNewUrl(urls);
			} else {
				setNewUrl(urls);
				setCounter(counter + 1);
			}
		}, 5000);

		return () => {
			clearInterval(urlinterval);
		};
	});

	//usernames/passwords/names
	function alphanumeric(value) {
		if (/^[a-z0-9]+$/i.test(value)) {
			return true;
		} else {
			return "Choose only letters and numbers.";
		}
	}

	function minlength(min, value) {
		if (value.length < min) {
			return "Minimum length is " + min + "";
		} else {
			return true;
		}
	}

	function maxlength(max, value) {
		if (value > max) {
			return "Maximum length is " + max + "";
		} else {
			return true;
		}
	}

	function emailCheck(value) {
		if (
			/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(value)
		) {
			return true;
		} else {
			return "Invalid email address";
		}
	}

	function finalcheck() {
		let postdata = true;
		//fullnamechecks
		let alphanumres = alphanumeric(fullname);
		let maxres = maxlength(40, fullname);
		let minres = minlength(6, fullname);
		if (typeof alphanumres === "string") {
			if (errFNL.indexOf(alphanumres) === -1) {
				errFNL = [...errFNL, alphanumres];
			}

			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errFNL];
			let n = temparr.indexOf(alphanumres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errFNL = [...temparr];
			}
		}

		if (typeof maxres === "string") {
			if (errFNL.indexOf(maxres) === -1) {
				errFNL = [...errFNL, maxres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errFNL];
			let n = temparr.indexOf(maxres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errFNL = [...temparr];
			}
		}

		if (typeof minres === "string") {
			if (errFNL.indexOf(minres) === -1) {
				errFNL = [...errFNL, minres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errFNL];
			let n = temparr.indexOf(minres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errFNL = [...temparr];
			}
		}

		setErrFN([...errFNL]);

		//usernamechecks
		alphanumres = alphanumeric(username);
		maxres = maxlength(40, username);
		minres = minlength(6, username);
		if (typeof alphanumres === "string") {
			if (errUserL.indexOf(alphanumres) === -1) {
				errUserL = [...errUserL, alphanumres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errUserL];
			let n = temparr.indexOf(alphanumres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errUserL = [...temparr];
			}
		}
		if (typeof maxres === "string") {
			if (errUserL.indexOf(maxres) === -1) {
				errUserL = [...errUserL, maxres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errUserL];
			let n = temparr.indexOf(maxres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errUserL = [...temparr];
			}
		}
		if (typeof minres === "string") {
			if (errUserL.indexOf(minres) === -1) {
				errUserL = [...errUserL, minres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errUserL];
			let n = temparr.indexOf(minres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errUserL = [...temparr];
			}
		}

		setErrUser([...errUserL]);

		//passwordchecks
		alphanumres = alphanumeric(password);
		maxres = maxlength(40, password);
		minres = minlength(6, password);
		if (typeof alphanumres === "string") {
			if (errPassL.indexOf(alphanumres) === -1) {
				errPassL = [...errPassL, alphanumres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errPassL];
			let n = temparr.indexOf(alphanumres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errPassL = [...temparr];
			}
		}
		if (typeof maxres === "string") {
			if (errPassL.indexOf(maxres) === -1) {
				errPassL = [...errPassL, maxres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errPass];
			let n = temparr.indexOf(maxres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errPassL = [...temparr];
			}
		}
		if (typeof minres === "string") {
			if (errPassL.indexOf(minres) === -1) {
				errPassL = [...errPassL, minres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errPass];
			let n = temparr.indexOf(minres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errPassL = [...temparr];
			}
		}

		setErrPass([...errPassL]);

		//email
		let emailres = emailCheck(email);
		maxres = maxlength(40, email);
		minres = minlength(6, email);
		if (typeof emailres === "string") {
			if (errEmailL.indexOf(emailres) === -1) {
				errEmailL = [...errEmailL, emailres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errEmail];
			let n = temparr.indexOf(emailres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errEmailL = [...temparr];
			}
		}
		if (typeof maxres === "string") {
			if (errEmailL.indexOf(emailres) === -1) {
				errEmailL = [...errEmailL, maxres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errEmail];
			let n = temparr.indexOf(maxres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errEmailL = [...temparr];
			}
		}
		if (typeof minres === "string") {
			if (errEmailL.indexOf(emailres) === -1) {
				errEmailL = [...errEmailL, minres];
			}
			postdata = false;
		} else {
			postdata = true;
			let temparr = [...errEmail];
			let n = temparr.indexOf(minres);
			if (n !== -1) {
				temparr.splice(n, 1);
				errEmailL = [...temparr];
			}
		}

		setErrEmail([...errEmailL]);

		return postdata;
	}

	async function submitForm(e) {
		e.preventDefault();

		let postdata = finalcheck();

		if (postdata) {
			const subres = await axios.post("/auth/signup", {
				fullname,
				username,
				email,
				password
			});

			const userobj = subres.data.user;
			console.log(userobj)
			dispatch({type:"setuser", payload:userobj})

			if (userobj) {
				props.history.push("/login");
			}
		}
	}

	function onChangeInput(e) {
		let id = e.currentTarget.id;
		let val = e.currentTarget.value;

		switch (id) {
			case "sFN":
				setFullName(val.toString());

				break;
			case "sEmail":
				setEmail(val.toString());

				break;
			case "sUser":
				setUserName(val.toString());

				break;
			case "sPass":
				setPassword(val.toString());
				break;
		}
	}

	return (
		<div className="signupcontainer">
			<div className="signupbgimg" style={setNewUrl(urls)} />
			<div className="signup">
				<div className="signupinner">
					<div className="signuptitle">Signup</div>
					<div className="loginbborder" />
					<form>
						<input
							id="sFN"
							className="signupuser"
							type="text"
							placeholder="Full Name"
							maxLength="25"
							value={fullname}
							onChange={onChangeInput}
						/>
						<div className="inputErr">{errFN}</div>
						<input
							id="sEmail"
							className="signuppass"
							type="email"
							placeholder="Email"
							maxLength="40"
							required
							value={email}
							onChange={onChangeInput}
						/>
						<div className="inputErr">{errEmail}</div>
						<input
							id="sUser"
							className="signuppass"
							type="text"
							placeholder="Username"
							maxLength="40"
							required
							value={username}
							onChange={onChangeInput}
						/>
						<div className="inputErr">{errUser}</div>
						<input
							id="sPass"
							className="signuppass"
							type="password"
							placeholder="Password"
							maxLength="40"
							required
							value={password}
							onChange={onChangeInput}
						/>
						<div className="inputErr">{errPass}</div>
						<button
							type="submit"
							className="signupbtn"
							onClick={submitForm}
						>
							Sign up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Signup);
