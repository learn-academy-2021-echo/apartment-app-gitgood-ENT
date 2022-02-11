import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class ApartmentShow extends Component {
  render() {
      const {apartment} = this.props
    return (
        <>
            <h3 className='apartmentShowh3'>{`${apartment.street} ${apartment.city}`}</h3>
            <p>Here is a short description of the apartment, maybe I will add this to my table later and then just render it along with all the other info. 🤔</p>
            <p>I want to be able to add images to the apartment so that they will appear here and they won't just be lists like they are now.</p>
            <ul className='apartmentInfoList'>
                <li className='apartmentInfoLI'>{`Manager: ${apartment.manager}`}</li>
                <li className='apartmentInfoLI'>{`Bedrooms: ${apartment.bedrooms}`}</li>
                <li className='apartmentInfoLI'>{`Bathrooms: ${apartment.bathrooms}`}</li>
                <li className='apartmentInfoLI'>{`Pets: ${apartment.pets}`}</li>
                <li className='apartmentInfoLI'>{`Monthly rent: ${apartment.price}`}</li>
                <li className='apartmentInfoLI'>{`Contact the manager at: ${apartment.email}`}</li>
            </ul>
            <NavLink to="/apartment-index">Back to all</NavLink>
        </>
    )
  }
}
