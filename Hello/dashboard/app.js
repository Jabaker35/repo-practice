class Sidebar extends React.Component {
  render () {
    return (
      <ul className='sidebar'>
        <a href="#dashboard">Dashboard</a>
        <a href="#widget">Widget</a>
        <a href="#review">Reviews</a>
        <a href="#customer">Customers</a>
        <a href="analysis">Online Analysis</a>
        <a href="settings">Settings</a>
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

const styles = {
  render() {
    return(
      app = {
        display: 'grid',
        gridTemplateAreas: 'sidebar reviews rating sentiment' 
                           'sidebar visitors visitors visitors'
                           'sidebar visitors visitors visitors',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'blue'
      },
      a = {
        display: 'block'
      },
      sidebar = {
        gridArea: 'sidebar',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100px',
        backgroundColor: 'rgba(97, 81, 81, 0.431)',
        border: '4px solid black',
        alignSelf: 'center',
        lineHeight: '35px',
        borderRadius: '10px',
      },
      reviews = {
        gridArea: 'reviews',
        display: 'flex',
        border: '4px solid black',
        width: '20%',
        height: '34%'
      },
      rating = {
        gridArea: 'rating',
        border: '4px solid black'
      },
      sentiment = {
        gridArea: 'sentiment',
        border: '1px solid black'
      },
      visitors = {
        gridArea: 'visitors',
        border: '1px solid black'
      },
    )
  }
}
    
  
  

ReactDOM.render(
  <App/>,
  document.querySelector('#container')
  )
