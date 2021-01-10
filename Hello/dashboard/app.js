
import Sidebar from './components/sidebar.js';

ReactDOM.render(
  <App/>
  document.getElementById('root')
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar/>
      </div>
    )
  }
}
