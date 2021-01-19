class Sidebar extends React.Component {
  render () {
    return (
      <ul className='sidebar'>
        <a href="#dashboard">Dashboard</a>
        <a href="#widget">Widget</a>
        <a href="#review">Reviews</a>
        <a href="#customer">Customers</a>
        <a href="#analysis">Online Analysis</a>
        <a href="#settings">Settings</a>
      </ul>
    )
  }
}

class Reviews extends React.Component {
  render () {
    return (
      <div className="review">
      <h2>Reviews</h2>
      <p>20,391</p>
      </div>
    )
  }
}

class Rating extends React.Component {
  render () {
    return (
      <div className="rating">
      <h2>Average Rating</h2>
      <p>4.9</p>
      </div>
    )
  }
}

class Sentiment extends React.Component {
  render () {
    return (
      <div className="sentiment">
      <h2>Sentiment Analysis</h2>
      <p>895</p>
      <p>205</p>
      <p>452</p>
      </div>
    )
  }
}

class Visitors extends React.Component {
  render () {
    return (
      <div className="visitors">
      <h2>Website Visitors</h2>
      <p>932</p>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Sidebar/>
        <Reviews/>
        <Rating/>
        <Sentiment/>
        <Visitors/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
  )
