import React, { Fragment } from 'react';
import Styles from './Presentation.module.scss';

const Presentation = () => {
	return (
		<Fragment>
			<div className={'container ' + Styles.container__presentation}>
				<div className='row'>
					<div className='col s12'>
						<h1>REST API</h1>
						<h3 className='blue-text darken-4'>
							instant tester (zero config)
						</h3>
						<p className='flow-text grey-text center'>
							La plateforme Dyma.fr{' '}
							<span className='amber-text'>
								réputé pour ces nombreux cours portant sur les
								langages de type Javascript
							</span>
							, met à disposition de tout le monde,
							<span className='amber-text'>
								{' '}
								une API REST
							</span>{' '}
							qui nous permet de tester son propre{' '}
							<span className='amber-text'>"frontend"</span> sans
							utiliser un quelconque{' '}
							<span className='amber-text'>"backend"</span>.
						</p>
					</div>
					{/* end col s12 */}
				</div>
				{/* end row 1 */}

				<div className='row'>
					<fieldset>
						<legend className='blue-text darken-4'>
							Comment ça marche
						</legend>
						<span className='amber-text flow-text'>
							https://resapi.fr/api/{' '}
							<span className='blue-text darken-4'>
								+ collection
							</span>
						</span>
						<br />
						<span class='white-text flow-text'>
							Où collection correspond au nom de votre ressource,
							par exemple users, messages etc.
						</span>
					</fieldset>
				</div>
				{/* end row 2 */}
				<div className='row'>
					<p className='red-text lighten-4'>
						Si vous avez besoin de plus de fonctionnalités, demandez
						le nous sur discord.
					</p>
				</div>
			</div>
			{/* end container */}
		</Fragment>
	);
};

export default Presentation;
