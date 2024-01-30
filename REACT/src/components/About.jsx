import DevInfoFn from "./Aboutcomponents/aboutwithfn";
import DevInfoClass from "./Aboutcomponents/aboutwithclass";
import React from "react";

// const About = () => {
//   return (
//     <div className="about">
//       <h1> About</h1>
//       {/* <DevInfoFn /> */}
//       <DevInfoClass name={"Aasif Ashraf"} job={"Web Dev"} />
//     </div>
//   );
// };

// export default About;

//class based component

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GitUserapi: {
        html_url: "GitHub URL string",
        login: "username",
        name: "Name",
      },
    };
  }
  async componentDidMount() {
    const fetchGituserapi = await fetch(
      "https://api.github.com/users/aasifashraf"
    );
    const Json = await fetchGituserapi.json();
    console.log(Json);
    this.setState({ GitUserapi: Json });
  }

  render() {
    const { html_url, login, name } = this.state.GitUserapi;
    return (
      <div className="about">
        <h1> About</h1>
        {/* <DevInfoFn /> */}
        <div className="children">
          <div className="main">
            <div className="profile">
              <i className="fa-solid fa-user"></i>
              <h3>{name}</h3>
            </div>
            <div className="gitusername">
              <i className="fa-brands fa-github"></i>
              <p>{login}</p>
            </div>
            <div className="giturl">
              <i className="fa-solid fa-code-branch"></i>
              <p>{html_url}</p>
            </div>
          </div>

          {/* <DevInfoClass
            name={"Aasif Ashraf"}
            job={"Web Dev"}
            address={"Zero floor Srinagar Jammu and Kashmir ,190001"}
          /> */}
          {/* <DevInfoClass
            name={"Elon Musk"}
            job={"CEO"}
            address={"Zero floor Chicago United States ,100101"}
          /> */}
        </div>
      </div>
    );
  }
}

//in single child class components works in this way

// -Parent Constructor
// -Render
//    -Child constructor
//    -Child Render
//    -childComponentDidMount
// -Parent ComponentDidMount

// but in two or more children class components

// -Parent Constructor
// -Render
//    -first Child constructor
//    -first Child Render

//    -second Child constructor
//    -second Child Render

//    -first ComponentDidMount
//    -second ComponentDidMount
// -Parent ComponentDidMount

// URL FOR DIAGRAM https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

export default About;
