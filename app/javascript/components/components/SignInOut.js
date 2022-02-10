import React, { Component } from 'react'

class SignInOut extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        <p>{sign_in_route}</p>
        <p>{sign_out_route}</p>
        <p>{new_user_route}</p>

        <p>{logged_in}</p>
      </>
    )
  }
}

export default SignInOut