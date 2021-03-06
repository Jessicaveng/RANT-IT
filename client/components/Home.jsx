// Logoloco & Vulpes/Vulpes
import React from 'react';
import { connect } from 'react-redux';
import { fetchRants } from '../actions/home';
import { Link, Route } from 'react-router-dom'
import AuthorView from './AuthorView';


// const rants =

const Home = (props) => {
	return (
    <div>           
    <Link to={'/rant-it'}>Write a rant</Link>
      <Route  path={`/author/:author`} component={AuthorView}/>
			{props.rants.reverse().map((rant) => {
        
				return (
					<div key={rant.id}>
						<h3>{rant.title}</h3>
						<p>{rant.rant}</p>
						<p>
							<Link to={`/author/${rant.author}`}  > {rant.author}</Link>
   
						</p>
					</div>
				);
			})}
		</div>
	);
};

function mapStateToProps(globalState) {
	fetchRants();
	return {
		userName: globalState.userName,
		rants: globalState.home,
	};
}

export default connect(mapStateToProps)(Home);
