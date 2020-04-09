import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<Fragment>
			{/* Navigation */}
			<nav className='blue darken-4 white-text'>
				<div className='container'>
					<div className='nav-wrapper'>
						<Link to='/' className='brand-logo left'>
							RESTAPI
						</Link>
						<ul className='right hide-on-med-down'>
							<li>
								<NavLink
									to='/'
									activeClassName='active'
									title='Accueil'
								>
									<i class='fas fa-home left'></i>
									Accueil
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/documentation'
									activeClassName='active'
									title='Documentation'
								>
									<i class='fas fa-book left'></i>
									Documentation
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/edition'
									activeClassName='active'
									title='Edition'
								>
									<i class='fas fa-pen-alt left'></i>
									Edition
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default Nav;
