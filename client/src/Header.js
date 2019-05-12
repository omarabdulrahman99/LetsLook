import React from 'react';



function Header(){






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
						<li>	
							<a href="/login">Log In</a>
							<a href="">About</a>
							<a href="">Services</a>
							<a href="">LL Plus</a>
							<a href="">Journal</a>
							<a href="">Contact</a>
						</li>
					</ul>
			</nav>
		</header>



		)

}

export default Header;