import React from "react";
import "main.css";
 
class App extends React.Component {
  render() {
    return (
      <div>
      <Sidebar/>,
      <Reviews/>,
      <AverageRating/>,
      <SentimentAnalysis/>,
      <BottomBlockInside/>
      </div>
    )
  }
}
class Sidebar extends React.Component {
  render() {
      return (
          <div className='sidebar'>
            <ul>
              <li>Dashboard</li>
              <li>Widget</li>
              <li>Reviews</li>
              <li>Customers</li>
              <li>Online Analysis</li>
              <li>Settings</li>
            </ul>
          </div>
      )
  }
}
​​
class Reviews extends React.Component {
  render() {
      return (
          <div className='reviews'>
           <h3>Reviews</h3>
          </div>
      )
  }
}
​
class AverageRating extends React.Component {
  render() {
      return (
          <div className='ratings'>
            <h3>Average Rating</h3>
          </div>
      )
  }
}
​
class SentimentAnalysis extends React.Component {
  render() {
      return (
          <div className='sentiment'>
            <h3>Sentiment Analysis</h3>
          </div>
      )
  }
}
​
class BottomBlockInside extends React.Component {
  render() {
      return (
          <div className='bottom-inside'>
            <h3>Website Visitors</h3>
          </div>
      )
  }
}

ReactDOM.render(
  <App/>,
  <h1>Commence Dashboard Creation!</h1>, 
  document.querySelector('.container')
  )

// ReactDOM.render(
//   <App/>,
//   document.querySelector('container')
// )
