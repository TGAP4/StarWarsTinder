import React, { Fragment, Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Profile from './Profile';

class App extends Component {
  constructor() {
    super()
    this.state = {person: [], id: Math.floor(Math.random()*88+1)}
  }

  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.loadUser();
    } 
  }

  loadUser = () => {
    fetch('https://swapi.co/api/people/' + this.state.id)
      .then(response => response.json())
      .then(user => this.setState({person: user}))
      .then(() => {
        this.state.person.height === 'unknown' ?
          this.setState(Object.assign(this.state.person, {height: ' '})) :
          this.setState(Object.assign(this.state.person, {height: this.state.person.height+'cm'}))
        }
      )
      .then(() => {
        if (this.state.person.birth_year === 'unknown') {
          this.setState(Object.assign(this.state.person, {birth_year: ' '}))
        }
      })
      .catch(err => err);
  }

  swipe = event => {
    this.setState({id: Math.floor(Math.random()*88+1)})
  }

  render() {
    const {person} = this.state;
    return (person.length === 0) ?
      <div className='tc mt7 white f2'>Searching for people nearby...</div> :
      <Fragment>
        <div className='title tc'>TINDER</div>
        <div className='flex justify-center items-center'>
          <div className='w-50'>
            <Profile person = {person} />
            <Buttons refresh = {this.swipe} />
          </div>
        </div>
      </Fragment>
  }
}

export default App;
