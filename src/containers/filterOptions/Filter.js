import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Filter extends Component {
  render() {
    let categoryNames = this.props.categories.map( category => {
      return <h2 key={category} className='categoryName'>{category.toUpperCase()}</h2>
    })
    return (
      <div>
        {categoryNames}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  categories: state.categories
})

export default connect(mapStateToProps)(Filter)