import React, { Component } from "react";

class AppContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  onSubmit(event) {
    // event.preventDefault();
    // custom form handling here
  }
  componentDidMount() {
    fetch("/live")
      .then((response) => {
        console.log(response, "yyyyyyyyyyyyy");
        return response.json();
      })
      .then((data) => {
        console.log(data, "xxxxxxxxxxxxxxx");
        return this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          action="http://localhost:5000/live"
          method="post"
          id="getOutput"
        >
          <input type="text" name="data" />
          <input type="submit" value="Submit" />
        </form>
        {data}
      </div>
    );
  }
}

export default AppContextProvider;
