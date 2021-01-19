import React,{Component} from 'react';
import playlist from './data.js'
console.log(playlist)

class App extends Component {
  constructor () {
    super()
    this.state = {
      playlist: playlist
    }
  }

  handleChange(e) {
    this.setState( {[e.target.id]: e.target.value} )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }

    const newSongArray = [newSong, ...this.state.playlists.songs]
    this.setState([
      playlists= {
        created: this.state.playlists.created,
        title: this.state.playlists.title,
        songs: newSongArray
      },
      title= '',
      artist= '',
      time=''
    ])
  }

  render() {
    <div className="playlist">
      <header>
        <h1>Tunr App</h1>
        <h2>Playlist on Demand</h2>
        <Playlist/>
      </header>
      <h1>{this.state.playlist.title}</h1>
      <div className="songs">
        {this.state.playlist.songs.map (song =>{ 
          return(
            <div className="song">
            <h1>{songs.title}</h1>
            <h2>{songs.artist}</h2>
            <h3>{songs.time}</h3>
            </div>
          )
        })}
        <div className="song">
          <h1>{this.state.playlist.songs[0].title}</h1>
          <h2>{this.state.playlist.songs[0].artist}</h2>
          <h3>{this.state.playlist.songs[0].time}</h3>
        </div>
      </div>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor='title'>title</label>
        <input type="text" value={this.state.title} onChange={this.handleChange} id="title"/>
        <label htmlFor='artist'>title</label>
        <input type="text" value={this.state.artist} onChange={this.handleChange} id="artist"/>
        <label htmlFor='time'>time</label>
        <input type="text" value={this.state.time} onChange={this.handleChange} id="time"/>
      </form>

    </div>
  }
}

export default App;
