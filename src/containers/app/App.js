import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'
import Header from '../header/Header'
import Loader from '../../components/loader/Loader'
import getAllWeapons from '../../thunks/getAllWeapons';
import WeaponContainer from '../weaponContainer/WeaponContainer'
import * as actions from '../../actions';

export class App extends Component {

  componentDidMount() {
    this.props.getAllWeapons('https://mhw-db.com/weapons')
  }

  render() {
    return (
      <div className='app'>
        <Header />
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
  getAllWeapons: (url) => dispatch(getAllWeapons(url)),
  getCategoryTitles: (array) => dispatch(actions.getCategoryTitles(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

