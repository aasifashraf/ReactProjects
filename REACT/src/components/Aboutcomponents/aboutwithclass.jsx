import React from "react";

class DevInfoClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  componentDidMount() {}
  render() {
    const { name, job, address } = this.props;
    const { count } = this.state;
    return (
      <div className="main">
        <h3>{name}</h3>
        <p>{job}</p>
        <p>{address}</p>
        {/* <button
          onClick={() => {
                       //NEVER UPDATE STATE VARIABLE DIREACTLY--
            this.setState({
              count: count + 1,
            });
          }}>
          count: {count}
        </button> */}
      </div>
    );
  }
}

export default DevInfoClass;
