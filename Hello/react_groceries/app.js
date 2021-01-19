class App extends React.Component {
    state = {
        groceries,
        item: "",
        brand: "",
        units: "",
        quantity: ""
    }

    itemChange = (event) => {
        this.setState({
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
            quantity: this.state.quantity,
            isPurchased: false
        } 
        this.setState({
            groceries: [
                item, ...this.state.groceries
            ],
            item: "",
            brand: "",
            units: "",
            quantity: "",
        })
    }

    render() {
        return (<div className="list">
            <form onSubmit={this.submit}>
                <input id="item" onChange={this.itemChange} type='text' value={this.state.item}></input><br/>
                <input id="brand" onChange={this.itemChange} type='text' value={this.state.brand}></input><br/>
                <input id="units" onChange={this.itemChange} type='text' value={this.state.units}></input><br/>
                <input id="quantity" onChange={this.itemChange} type='number' value={this.state.quantity}></input><br/>
                <button>Submit</button>
            </form>
            
                <ul>
                    {this.state.groceries.map((grocery) => 
                        !grocery.isPurchased? <li>
                            <ul>Item: {grocery.item}</ul><br/>
                            <ul>Brand: {grocery.brand}</ul><br/>
                            <ul>Units: {grocery.units}</ul><br/>
                            <ul>Quantity: {grocery.quantity}</ul><br/>
                        </li> :"")}                                                                                         
               </ul>
            
        </div>)
    }
}

const groceries = [
    {
        item: 'Soda',
        brand: 'Sprite',
        units: '2 liters',
        quantity: 1,
        isPurchased: false
    }, {
        item: 'Chips',
        brand: 'Pringles',
        units: '3 oz',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Cookies',
        brand: 'Thin Oreos',
        units: '16 oz',
        quantity: 1,
        isPurchased: true
    }
]


ReactDOM.render(
    <App/>, 
    document.querySelector('.container'))