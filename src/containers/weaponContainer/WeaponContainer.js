import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
// import { getCurrentWeapon } from '../../actions'
import WeaponDetails from '../../components/weaponDetails/WeaponDetails'
import Weapon from '../../components/weapon/Weapon'
import './WeaponContainer.scss'


export class WeaponContainer extends Component {
  // findWeapon = (e) => {
  //   const currentWeapon = this.props.weapons.find( weapon => weapon.id == e.target.id)
  //   console.log(currentWeapon)
  //   this.props.getCurrentWeapon(currentWeapon.id)
  // }

  render() {
    let displayCards = this.props.weapons.map(weapon => {
      return <Weapon {...weapon} key={weapon.id}/>
    })
    return (
      <div className='weapon-container'>
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  weapons: state.weapons,
  currentWeapon: state.currentWeapon
})

// export const mapDispatchToProps = (dispatch) => ({
//   getCurrentWeapon: (weapon) => dispatch(getCurrentWeapon(weapon))
// })

export default connect(mapStateToProps)(WeaponContainer)