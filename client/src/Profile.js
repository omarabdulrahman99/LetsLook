import React from 'react';
import {ContextOne} from "./ContextOne";




function Profile(){


let {state,dispatch} = React.useContext(ContextOne);
console.log(state)
//full name
//username
//about
//#images posted
//totalpoints
//joindate

//favimagesgallery
//imagespostedgallery




	return (
		<div className="profileCont">
			<div className="profileouter">
			</div>
			<div className="profileinner">
			</div>
			<div className="profilecard">
			</div>
			<div className="heroButton">
				  <span className="button__mask" />
	                <span className="button__text">Follow Her Memes </span>
	                <span className="button__text button__text--bis">
	                  Follow her memes
	               </span>
	        </div>
			<div className="profileimgcont">
				<img className="profileimg" src="https://i.imgur.com/KrFeMSi.jpg"></img>
			</div>
			<div className="profilename">
				Emma
			</div>
			<div className="profilename2">
				Watson
			</div>
		</div>
		)






}

export default Profile;