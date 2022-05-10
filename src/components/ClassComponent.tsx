import React from 'react'

type MyProps = {
  // using `interface` is also ok
  message?: string
  name: string
}
type MyState = {
  count: number // like this
}
class Welcome extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  }

  onClick = (e: React.MouseEvent): void => {
    debugger
    this.setState({ ...this.state, count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h1>Hello, {this.props.name}</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.onClick}>++++</button>
      </>
    )
  }
}

export { Welcome }
