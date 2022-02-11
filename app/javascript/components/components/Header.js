import React, { Component } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props
    return (
        <>
            <div className='Header'>
                <div>This is the Header</div>
                <div className="link-div">
                    <NavLink to="/apartment-index" className="nav-button">
                        All Apartments
                    </NavLink>
                    </div>
                    <div className="link-div">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    </div>
                <div className="signInOrOut">
                {logged_in &&
                <a href={sign_out_route} >Sign Out</a>
                }
                {!logged_in &&
                <a href={sign_in_route} >Sign In</a>
                }
                <br/>
                {!logged_in &&
                <a href={new_user_route}>Sign Up</a>
                }
                </div>
            </div>
        </>
    )
  }
}
