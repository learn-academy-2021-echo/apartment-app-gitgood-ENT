import React from "react"
import Header from "./components/Header"


class App extends React.Component {
  render () {
    return (
      <>  
        <Header />
        <h1 className="welcomeTo">Find the perfect apartment</h1>
      </>
    );
  }
}

export default App
