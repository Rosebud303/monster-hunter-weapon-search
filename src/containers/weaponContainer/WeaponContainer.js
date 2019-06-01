import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weapon from '../../components/weapon/Weapon'
import './WeaponContainer.scss'


export class WeaponContainer extends Component {
  render() {

    let displayCards = this.props.weapons.map(weapon => {
      console.log(weapon)
      return <Weapon weapon={weapon} key={weapon.id} />
    })
    return (
      <div className='weapon-container'>
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  weapons: state.weapons
})

export default connect(mapStateToProps)(WeaponContainer)