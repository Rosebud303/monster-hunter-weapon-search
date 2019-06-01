import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAllWeapons from '../../thunks/getAllWeapons';
import WeaponContainer from '../weaponContainer/WeaponContainer'

export class App extends Component {

  componentDidMount() {
    this.props.getAllWeapons('https://mhw-db.com/weapons')
  }

  render() {
    return (
      <div>
        <WeaponContainer />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  weapons: state.weapons
});

export const mapDispatchToProps = (dispatch) => ({
  getAllWeapons: (url) => dispatch(getAllWeapons(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

