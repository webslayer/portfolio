import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';


class Index extends SuperComponent {

	static async getInitialProps() {
     let userData = {};
     try {
     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
     userData = response.data;

     } catch(err) {
     	console.error(err);
     }

		return {initialData: [1,2,3,4], userData};
	}

	constructor(props) {
		super(props);
		this.state = {
			title: 'I\'m Index Page'
		}
     console.log('constructor');
	}

	componentDidMount() {
     console.log('componentDidMount');
	}

    componentDidUpdate() {
     console.log('componentDidUpdate');
    }

    componentWillUnmount() {
    	console.log('componentWillUnmount');
    }
    
    updateTitle = () => {
    	this.setState({title:'I\'m Updated Index Page'});
    }

render() {
	const { title } = this.state;

	const {userData, initialData} = this.props;
	// const title = this.state.title;
	console.log('render');
	return(
		<BaseLayout>
		<h1>Im Index Page from class component</h1>
		<h2>{ title }</h2>
		<h2>{ userData.title }</h2>
		
		<button onClick={this.updateTitle}>Change Title</button>
		</BaseLayout>
		)
}
}


export default Index;








// Functional Component
//Dumb components
//Get data
//Return data

// const index = ()  => {
// return(
// 	<h1>HI</h1>
// 	)
// }

//Class component
//More functionality
//More Stuff
//User Lifecycle function


// <Header title={'I\'m a header component'}>
// 			<h1>I'm just a boy inside a man</h1>
// </Header>