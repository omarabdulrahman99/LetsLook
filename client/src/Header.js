import React from 'react';
import {ContextOne} from './ContextOne';


function Header(){



let {state,dispatch} = React.useContext(ContextOne);

console.log(state.user)


	


	return(

		<header className="header">
			<nav className="headernav">
				<div className="headernavh1">
					LetsMeme
				</div>
				  <a href="#" id="toggleMenu">
				  	<div></div>
				  	<div></div>
				  	<div></div>
				  </a>	
				   <ul className="headernavul">	


						{
						  state.user ? 
							<li>
							<a href="/profile">Profile</a>						
							<a href="/auth/logout" >Log Out</a>
							<a href="">About</a>
							<a href="">Services</a>
							<a href="">LL Plus</a>
							<a href="">Journal</a>
							<a href="">Contact</a>
							</li>
						  :

						  	<li>					
							<a href="/login" >Log In</a>
							<a href="">About</a>
							<a href="">Services</a>
							<a href="">LL Plus</a>
							<a href="">Journal</a>
							<a href="">Contact</a>
							</li>




						}







					</ul>
			</nav>
		</header>



		)

}

export default Header;