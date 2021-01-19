class App extends React.Component {
    //creates the placeholder for retrieval of information
    state = {
		score: 0,
		category: '',
		points: 0,
		clue: '',
        answer: '',
        default: 0,
		isRevealed: false
    }
    
	getQuestion = () => {
		//retrieves info from url as a string
		this.state.score
		fetch('http://jservice.io/api/random')
			// .then(function that relies on fetch)
			.then((response) => {
				return response.json();
			}) //retrieves the info from the json object
			.then((json) => {
				// json[0] is the object we are targetting
				console.log(json[0]);
				const data = json[0];
				this.setState({
					category: data.category.title,
					points: data.value,
					clue: data.question,
					answer: data.answer
				})
			})
    }
    
	render() {
		return (
			<div className="frame">
				<h1> Welcome to Jeopardy </h1>

				<h2> Score: </h2>

				<div className="button">
					<button onClick={this.state.points}> Decrease </button>
					<button onClick={this.state.points}> Increase </button>
					<button onClick={this.state.default}> Reset </button>
				</div>

				<h2> Let's Play </h2>
				<button onClick={this.getQuestion}> Get Question </button>

				<h2> Category: {this.state.category} </h2>
				<h3> Points: {this.state.points} </h3>
				<h3> Answer: {this.state.clue} </h3>
                
				<button className="answer"> Click to Reaveal Question </button>
				{this.state.isRevealed ?<h3> Question: {this.state.answer} </h3>: ''}
			</div>
			)
	}
}
// check to make sure your target div matches the selector
ReactDOM.render(<App/>, document.getElementById('root'));