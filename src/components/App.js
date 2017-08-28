import React, { Component } from 'react';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

	addReminder(){
		console.log('this state ', this.state);
	}

	render(){
		return(
			<div className="App">
				<div className="title">
					Reminder Pro
				</div>	
				<div className="form-inline">
					<div className="form-group">
						<input className="form-controll"  onChange = { event => this.setState({text: event.target.value})} placeholder="i have to.." />
					</div>
					<button className="btn btn-success" onClick = { () => this.addReminder()} > Add Reminder</button>
				</div>
			</div>
		);
	}
}

export default App;