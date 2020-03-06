import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'
import { Route, Switch } from 'react-router-dom'
import WeaponDetails from '../../components/weaponDetails/WeaponDetails'
import Header from '../header/Header'
import Loader from '../../components/loader/Loader'
import getAllWeapons from '../../thunks/getAllWeapons';
import WeaponContainer from '../weaponContainer/WeaponContainer'
import * as actions from '../../actions';
import FullImage from '../../components/fullImage/FullImage';
import Filter from '../../containers/filterOptions/Filter'

export class App extends Component {

  componentDidMount() {
    this.props.getAllWeapons('https://mhw-db.com/weapons')
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Filter />
        {
          !this.props.isLoading ?
          <Switch>
            <Route exact path='/' component={WeaponContainer} />
            <Route path='/weapons/:id' 
              render={({ match }) => {
                const weapon = this.props.weapons.find(weap => weap.id == parseInt(match.params.id));
                return <WeaponDetails {...weapon} />
              }} 
            />
            <Route path='/image/:name' 
              render={({ match }) => {
                const weapon = this.props.weapons.find(weap => weap.name == match.params.name);
                return <FullImage {...weapon} />
              }} 
            />
          </Switch>
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

