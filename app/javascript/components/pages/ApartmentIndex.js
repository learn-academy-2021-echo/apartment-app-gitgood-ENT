import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <>
      <h3 className='apartmentIndexh3'>Available Apartments</h3>
      <p>This page is where the list of apartments is going to be and should have map loop for each apartment to show details and info as well as pictures.</p>
      <div className='allApartments'>
        {apartments.map(apartment => {
          return(
            <section key={apartment.id} className='apartmentListing'>
              <NavLink to={`/apartment-show/${apartment.id}`} className='address'>{
                `${apartment.street} ${apartment.city}, ${apartment.state} ${apartment.price}`
              }</NavLink>
            </section>

          )
        })}

      </div>
      </>
    )
  }
}
