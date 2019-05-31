import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weapon from '../../components/weapon/Weapon'


export class WeaponContainer extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export mapStateToProps = (state) => ({
  weapons: state.weapons
})
