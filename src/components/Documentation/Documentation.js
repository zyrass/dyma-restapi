import React, { Component, Fragment } from 'react';
import { NavLink, Switch, Route, Redirect, Link } from 'react-router-dom';
import Styles from './Documentation.module.scss';

class Documentation extends Component {
	render() {
		return (
			<Fragment>
				<div className='row'>
					<div className='col s12 m5'>
						<div
							className={
								'container ' + Styles.documentation__options
							}
						>
							<ul className='collection with-header blue darken-4'>
								<li className='collection-header'>
									<h4>Options possible</h4>
								</li>
								<NavLink
									to='/documentation/routes_avec_id_mongo'
									className='collection-item'
									activeClassName='active'
								>
									Routes avec optionnellement un id mongo{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/filtres'
									className='collection-item'
									activeClassName='active'
								>
									Filtres{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Options'
									className='collection-item'
									activeClassName='active'
								>
									Options{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Sort'
									className='collection-item'
									activeClassName='active'
								>
									Sort{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Opérateur_de_comparaison'
									className='collection-item'
									activeClassName='active'
								>
									Opérateur de comparaison{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Générateur'
									className='collection-item'
									activeClassName='active'
								>
									Générateur{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/paramètres_obligatoires'
									className='collection-item'
									activeClassName='active'
								>
									Paramètres obligatoires{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Noms_et_emails_aléatoires'
									className='collection-item'
									activeClassName='active'
								>
									Noms et emails aléatoires{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Nombres_aléatoires'
									className='collection-item'
									activeClassName='active'
								>
									Nombres aléatoires{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Dates_aléatoires'
									className='collection-item'
									activeClassName='active'
								>
									Dates aléatoires{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Valeurs_aléatoires_depuis_une_collection'
									className='collection-item'
									activeClassName='active'
								>
									Valeurs aléatoires depuis une collection{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Paragraphes_aléatoires'
									className='collection-item'
									activeClassName='active'
								>
									Paragraphes aléatoires{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Phrase_aléatoire'
									className='collection-item'
									activeClassName='active'
								>
									Phrase aléatoire{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Images_aléatoires'
									className='collection-item'
									activeClassName='active'
								>
									Images aléatoires{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Photos_de_profil_aléatoires'
									className='collection-item'
									activeClassName='active'
								>
									Photos de profil aléatoires{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/exemple_pour_les_articles_de_blog_du_projet'
									className='collection-item'
									activeClassName='active'
								>
									Exemple pour les articles de blog du projet{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Sauvegarde_temporaire_de_fichiers'
									className='collection-item'
									activeClassName='active'
								>
									Sauvegarde temporaire de fichiers{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
								<NavLink
									to='/documentation/Delay'
									className='collection-item'
									activeClassName='active'
								>
									Delay{' '}
									<i class='fas fa-arrow-right right'></i>
								</NavLink>
							</ul>
						</div>
					</div>
					<div className='col s12 m7'>
						<Switch>
							<Route
								exact
								path='/documentation'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Bienvenue sur la documentation
										</h3>
										<p className='flow-text grey-text'>
											Sélectionner une Options pour voir
											son fonctionnement.
											<br />
											<br />
											Si vous rencontrez un quelconque
											problèmes, n'hésitez pas à nous
											contacter sur le chat discord. Nous
											vous répondrons dans les plus brefs
											délais
										</p>
									</div>
								)}
							/>
							<Route
								path='/documentation/routes_avec_id_mongo'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Routes avec un ID mongoDB
											<br />
											<small>(optionnellement)</small>
										</h3>
										<p className='white-text'>
											Attention à bien utiliser du JSON
											pour POST/PUT/PATCH !
										</p>
										<code>
											<span className='grey-text'>
												// POST
											</span>
											https://resapi.fr/api/posts
											<br />
											<br />
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/posts/id?
											<br />
											<br />
											<span className='grey-text'>
												// PUT
											</span>
											https://resapi.fr/api/posts/id?
											<br />
											<br />
											<span className='grey-text'>
												// PATCH
											</span>
											https://resapi.fr/api/posts/id?
											<br />
											<br />
											<span className='grey-text'>
												// DELETE
											</span>
											https://resapi.fr/api/posts/id?
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Filtres'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>Filtres</h3>
										<code>
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/posts?title=test&author=paul
											<br />
											<br />
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/posts?id=mongodid
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Options'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>Options</h3>
										<p className='white-text'>
											Vous pouvez utiliser skip et limit
											pour paginer vos data.
										</p>
										<code>
											<span className='grey-text'>
												// GET avec Limit
											</span>
											https://resapi.fr/api/posts?limit=20
											<br />
											<br />
											<span className='grey-text'>
												// GET avec Skip
											</span>
											https://resapi.fr/api/posts?skip=20&limit=20
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Sort'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>Sort</h3>
										<p className='white-text'>
											Vous pouvez utiliser sort et
											spécifier l'ordre avec "asc ou 1
											<br />
											ou bien "desc ou -1" (ascending ou
											descending).
										</p>
										<code>
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/posts?sort=createdAt:-1
											<br />
											<br />
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/posts?sort=createdAt:asc
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Opérateur_de_comparaison'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Opérateur de comparaison
										</h3>
										<p className='white-text'>
											Vous pouvez utiliser les opérateurs
											de comparaison MongoDB suivant :
											$gte, $gt, $lte, $lt.
										</p>
										<code>
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/authors?likes=$gte:10;
											<br />
											<br />
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/authors?likes=$lt:20;
										</code>
										<p className='white-text'>
											Nous supportons les dates mais au
											format ISO
											<br />(
											<Link to='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toISOString'>
												&nbsp;ISO 8601 Extended
												Format&nbsp;
											</Link>
											)
										</p>
										<code>
											<span className='grey-text'>
												// GET
											</span>
											https://resapi.fr/api/authors?createdAt=$gte:2020-01-03T17:17:01.097Z
											<br />
											<br />
											<span className='grey-text'>
												- Les{' '}
												<strong>timestamps</strong>{' '}
												seront interprétés comme des{' '}
												<strong>nombres</strong> et les{' '}
												<strong>DateStrings</strong> ne
												fonctionneront pas.
											</span>
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Générateur'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Générateur
										</h3>
										<p className='white-text'>
											Vous pouvez utilisez une route pour
											générer des données pertinentes et
											les rendre disponibles très
											facilement.
										</p>
										<code>
											<span className='grey-text'>
												// POST
											</span>
											https://restapi.fr/generator
											<br />
											<span className='grey-text'>
												<br />- Le body doit être en{' '}
												<strong>JSON</strong>.
												<br />- Le nombre maxmimal de
												documents générés et insérés est
												de 50.
											</span>
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Paramètres_obligatoires'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Paramètres obligatoires
										</h3>
										<p className='white-text'>
											Vous devez préciser le nom de votre
											collection avec "resourceName".
										</p>
										<code>
											<span className='grey-text'>
												- Vous devez préciser le nombre
												d'éléments avec{' '}
												<strong>times</strong>.
											</span>
											<br />
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Noms_et_emails_aléatoires'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Noms et emails aléatoires
										</h3>
										<p className='white-text'>
											Il est très simple de générer des
											noms complets, prénoms, noms et
											emails.
										</p>
										<code>
											<span className='grey-text'>
												- Utilisez respectivement{' '}
												<strong>name</strong>,{' '}
												<strong>firstName</strong>,{' '}
												<strong>lastName</strong> ou{' '}
												<strong>email</strong>.
											</span>
											<br />
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"nomComplet": "name",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"prenom": "firstname",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"nom": "lastname",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"email": "email"`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Nombres_aléatoires'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Nombres aléatoires
										</h3>
										<p className='white-text'>
											Cette API permet de générer des
											nombres entiers aléatoirement très
											simplement.
											<br />
											<br />
											Il faut utiliser un objet avec
											"type: number" et passer un interval
											avec range: [min, max].
										</p>
										<code>
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"age": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "number",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"range": [18,99]`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Dates_aléatoires'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Dates aléatoires
										</h3>
										<p className='white-text'>
											Pour générer des dates
											aléatoirement, il faut utiliser un
											objet avec{' '}
											<strong>type: date</strong> et
											passer un interval avec{' '}
											<strong>range: [min, max]</strong>.
											<br />
											<br />
											Où min est la date limite inférieure
											et max la date limite supérieure.
											<br />
											Les limites doivent être des dates
											JavaScript valides par exemple au
											format ISOString.
										</p>
										<code>
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"date": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"range": [`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											{`"2019-01-04T15:55:21.229Z",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											{`"2020-01-04T15:55:21.229Z",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`],`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "date"`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Valeurs_aléatoires_depuis_une_collection'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Valeurs aléatoires depuis une
											collection
										</h3>
										<p className='white-text'>
											Pour générer des valeurs aléatoires
											depuis une collection de valeurs,
											<br />
											il faut utiliser un objet avec{' '}
											<strong>type: collection</strong> et
											passer un tableau de valeurs avec{' '}
											<strong>
												values: [val1, val2, etc...]
											</strong>{' '}
											et préciser si les valeurs doivent
											être uniques ou non avec{' '}
											<strong>unique: true</strong>.
										</p>
										<code>
											<span className='grey-text'>
												- Si <strong>unique</strong>{' '}
												vaut <strong>true</strong>,{' '}
												chaque valeur dans le tableau
												passé à <strong>values</strong>{' '}
												sera <strong>unique</strong> en
												sortie.
												<br />- Il faut alors que{' '}
												<strong>values</strong>{' '}
												contienne suffisamment
												d'éléments.
												<br />- Si{' '}
												<strong>
													unique
												</strong> vaut{' '}
												<strong>false</strong> il pourra
												y avoir plusieurs fois la même
												valeur en sortie.
											</span>
											<br />
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 4,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"likes": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "collection",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"values": [22, 56, 12, 46],`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"unique": true,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Paragraphes_aléatoires'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Paragraphes aléatoires
										</h3>
										<p className='white-text'>
											Pour générer des paragraphes lorem
											aléatoirement,
											<br /> il faut utiliser un objet
											avec{' '}
											<strong>type: paragraph</strong> et
											de passer un interval avec{' '}
											<strong>range: [min, max]</strong>.
											<br />
											Où min est le nombre minimal de
											paragraphes et max le nombre
											maximal.
										</p>
										<code>
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"content": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "paragraph",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"range": [3, 6, 4, 15],`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Phrase_aléatoire'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Phrase aléatoire
										</h3>
										<p className='white-text'>
											Pour générer une phrase lorem
											aléatoirement, il faut utiliser un
											objet avec{' '}
											<strong>type: sentence</strong> et
											de passer un interval avec{' '}
											<strong>range: [min, max]</strong>.
											<br />
											<br /> Où min est le nombre minimal
											de mots dans la phrase et max le
											nombre maximal.
										</p>
										<code>
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"title": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "sentence",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"range": [3, 12]`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Images_aléatoires'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Images aléatoires
										</h3>
										<p className='white-text'>
											Pour générer des liens d'images
											aléatoires. Il faut utiliser un
											objet avec{' '}
											<strong>type: image</strong> et
											passer également une hauteur avec{' '}
											<strong>height</strong>, une largeur
											avec <strong>width</strong>et un
											thème avec theme{' '}
											<strong>
												[le thème doit être en anglais,
												ex cats]
											</strong>
											.
										</p>
										<code>
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"image": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "image",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"theme": "fruit",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"height": 1000,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"width": 500`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Photos_de_profil_aléatoires'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Photos de profil aléatoires
										</h3>
										<p className='white-text'>
											Pour générer des photos de profils
											aléatoires. Il faut utiliser un
											objet avec{' '}
											<strong>
												type: profilePicture
											</strong>{' '}
											et passer également un genre avec
											<strong>gender</strong>.
										</p>
										<code>
											<span className='grey-text'>
												- Les valeurs possibles de
												gender sont : <br />
												&nbsp;&nbsp;&nbsp;&nbsp;{' '}
												<strong>f</strong>
												&nbsp;&nbsp;&nbsp;&nbsp; pour
												female,
												<br />
												&nbsp;&nbsp;&nbsp;&nbsp;{' '}
												<strong>m</strong>
												&nbsp;&nbsp;&nbsp;&nbsp; pour
												male,
												<br />
												&nbsp;&nbsp;&nbsp;&nbsp;{' '}
												<strong>mix</strong>.
											</span>
											<br />
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 2,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "articles",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"profile": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "profilePicture",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"gender": "m",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Exemple_pour_les_articles_de_blog_du_projet'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Ex: pour les articles de blog{' '}
											<span className='white-text'>
												Réalisé dans le projet
												javascript
											</span>
										</h3>
										<code>
											{`{`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"times": 20,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"resourceName": "article",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"author": "name",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"img": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "profilePicture",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"gender": "m",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"category": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "collection",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"values": ["Histoire", "Technologie", "Nature", "Espace"],`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"unique": false,`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"title": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "sentence",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"range": [5,12],`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"content": {`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"type": "paragraph",`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
											{`"range": [3,6],`}
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp; {`},`}
											<br />
											{`}`}
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Sauvegarde_temporaire_de_fichiers'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>
											Sauvegarde temporaire de fichiers
										</h3>
										<p className='white-text'>
											Vous pouvez stocker des fichiers
											pendant 24h pour vos tests en
											utilisant des formulaires HTML et
											des objets FormData.
										</p>
										<code>
											<span className='grey-text'>
												// POST avec
												multipart/form-data.
											</span>
											https://restapi.fr/upload <br />
											<br />
											<span className='grey-text'>
												Les limites sont :{' '}
												<span className='red-text'>
													10 fichiers de 4Mb maximum
													par envoi
												</span>
												.
											</span>
											<br />
											<span className='grey-text'>
												Vous recevrez en retour un
												tableau contenant les liens
												publiques des fichiers que vous
												pourrez utiliser.
											</span>
										</code>
									</div>
								)}
							/>
							<Route
								path='/documentation/Delay'
								render={() => (
									<div
										className={
											'container ' +
											Styles.documentation__explication
										}
									>
										<h3 className='amber-text'>Delay</h3>
										<p className='white-text'>
											Si vous voulez simuler une requête
											qui prend du temps (tests de vos
											timeouts et loaders) :
											<br />
											<br />
											Ajoutez simplement une query avec un
											delay en secondes.
										</p>
										<code>
											<span className='grey-text'>
												// GET
											</span>
											https://restapi.fr/api/blog/5e16e37846e3e328c19cb656?delay=3
										</code>
									</div>
								)}
							/>
							<Redirect to='/documentation' />
						</Switch>
					</div>
				</div>
				{/* end row 1 */}
			</Fragment>
		);
	}
}

export default Documentation;
