class App extends React.Component {
    state = {
            item: '',
            brand: '',
            units: '',
            quantity: 0,
    }
}

itemChange = (event) => {
    this.ListeningStateChangedEvent({
        [event.target.id]: event.target.value
    })
}

submit = (event) => {
    event.preventDefault()
    console.log("submit");
    const item = {
        item: this.state.item,
        brand: this.state.brand,
        units: this.state.units,
        quantity: 1,
        isPurchased: false
    } this.ListeningStateChangedEvent({
        groceries: [
            item, ...this.state.groceries
        ],
        item: "",
        brand: "",
        units: ""
    })
}

render() {
    return (<div>
        <form onSubmit={this.submit}>
            <input id="item" onChange={this.itemChange} type='text' value={this.state.item}></input>
            <input id="brand" onChange={this.itemChange} type='text' value={this.state.brand}></input>
            <input id="units" onChange={this.itemChange} type='text' value={this.state.units}></input>
            <input id="quantity" onChnge={this.itemChange} type='number' value={this.state.units}></input>
            <button>Submit</button>
        </form>

        <div>
            <ul>
                {       this.state.groceries.map(
                        (grocery) => !grocery.isPurchased
                        ? <li>{grocery.item}</li>: "")
                }
            </ul>
        </div>
    </div>)
}


ReactDOM.render(
    <App/>,
    document.querySelector('#container')
)