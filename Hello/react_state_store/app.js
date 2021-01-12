console.table(products)

class App extends React.Component {

    state = {
        products: products,
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value }),
        () => console.log('callback');
        // console.log(this.state.value);
    }

    render () {
        return (
            <div>
                <h1>Big Time Shopping!</h1>
                <form>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
                <ul>
                    {this.state.products.map(product => <li>{product.name}</li>)}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
)