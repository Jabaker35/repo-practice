class App extends React.Component {
    //creates the placeholder for retrieval of information
    state = {
		score: 0,
		category: '',
		points: 0,
		clue: '',
        answer: '',
        isRevealed: false
    }
    
	getQuestion = () => {
		//retrieves info from url as a string
		fetch('http://jservice.io/api/random')
			// .then(function that relies on fetch)
			.then((response) => {
				return response.json();
			}) //retrieves the info from the json object
			.then((json) => {
				// json[0] is the object we are targetting
				console.log(json[0]);
				const data = json[0];
				//targets the specific data of json to the specific areas within state
				this.setState({
					category: data.category.title,
					points: data.value,
					clue: data.question,
					answer: data.answer
				})
			})
	}
	
    // decreases the score by the point value of the question
    decreaseScore = () => {
        this.setState({
            score: this.state.score - this.state.points,
        })
	}
	
    // increases the score by the point value of the question
    increaseScore = () => {
        this.setState({
            score: this.state.score + this.state.points,
        })
	}
	
    // reset the total score to zero
    resetScore = () => {
        this.setState({
            score: 0,
        })
	}
	
    // reveals the answer by changing isRevealed to true but it also hides it after it is clicked again
    getAnswer = () => {
        this.setState({
            isRevealed: !this.state.isRevealed,
        })
	}
	
    // controls the html elements
	render() {
		return (
			<div className="frame">
				<h1> Welcome to Jeopardy!</h1>

				<h2> Score: {this.state.score}</h2>

				<div className="points">
					<button className="down" onClick={this.decreaseScore}> Decrease </button>
					<button className="up" onClick={this.increaseScore}> Increase </button>
					<button className="reset" onClick={this.resetScore}> Reset </button>
				</div>

				<h2> Let's Play </h2>
				<button className="question" onClick={this.getQuestion}> Get Question </button>

				<h2> Category: {this.state.category} </h2>
				<h3> Points: {this.state.points} </h3>
				<h3> Clue: <p>{this.state.clue}</p> </h3>
                
				<button className="answer" onClick={this.getAnswer}> Click to Reveal Answer </button>
				{this.state.isRevealed ? <h3> Answer: <p>{this.state.answer}</p> </h3> : ''}
			</div>
			)
	}
}

// check to make sure your target div matches the selector
ReactDOM.render(<App/>, document.getElementById('root'));