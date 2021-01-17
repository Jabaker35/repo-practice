// console.table(products)

class App extends React.Component {

    state = {
        products: products,
        name: '',
        price: 0,
        description: 'Describe this item'
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value}),
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }
        this.setState({
            products: [ newItem, ...this.state.products],
            name:'',
            price: 0,
            description: 'Describe this item'
        })
    }

    render () {
        return (
            <div>
                <h1>Big Time Shopping!</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" value={this.state.name} onChange={this.handleChange id="name" placeholder='name of product'} />
                <br/>
                <label htmlFor="price"></label>
                <input type="text" value={this.state.name} onChange={this.handleChange id="price"} />
                <br/>
                <label htmlFor="description"></label>
                <input type="text" value={this.state.name} onChange={this.handleChange id="description"} />
                <input type="submit"/>
                </form>

                <div>
                    <h2>Preview our new item</h2>
                    <h3>{this.state.name}</h3>
                    <h4>{this.state.price}</h4>
                    <h5>{this.state.description}</h5>
                </div>

                <ul>
                    {/* {this.state.products.map(product => <li>{product.name}</li>)} */}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
)