import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'
import Loader from '../../components/loader/Loader'
import getAllWeapons from '../../thunks/getAllWeapons';
import WeaponContainer from '../weaponContainer/WeaponContainer'

export class App extends Component {

  componentDidMount() {
    this.props.getAllWeapons('https://mhw-db.com/weapons')
  }

  render() {
    return (
      <div className='app'>
      <img src={'https://i.imgur.com/4kh8sCT.png'} />
        {
          !this.props.isLoading ?
          <WeaponContainer />
          :
          <Loader />
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  weapons: state.weapons,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  getAllWeapons: (url) => dispatch(getAllWeapons(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

