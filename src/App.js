import React from "react";
import "./App.css";
import ProfilPhotoImg from "./ProfilePhoto.jpg";
class App extends React.Component {
  state = {
    fullName: "arwa khifi",
    bio: "full stack js developer",
    imgSrc: ProfilPhotoImg,
    profession: "developer",
    show: false,
    date: 0,
  };
  handleClick = () => this.setState({ show: true });

  componentDidMount() {
    setInterval(() => {
      var dateTime = new Date();
      dateTime = dateTime.getHours() + ":" + dateTime.getMinutes();
      this.setState({ date: dateTime });
    }, 1000);
  }
  render() {
    return (
      <>
        {this.state.show && (
          <>
            <p className="name" style={{ fontWeight: 700, fontSize: 14 }}>
              name: {this.state.fullName}
            </p>
            <p style={{ fontWeight: 700, fontSize: 14 }}>
              bio: {this.state.bio}
            </p>
            <p>
              <img
                src={this.state.imgSrc}
                style={{ width: 300, height: 200 }}
              ></img>
            </p>
            <p style={{ fontWeight: 700, fontSize: 14 }}>
              profession: {this.state.profession}
            </p>
            <p style={{ fontWeight: 700, fontSize: 24 }}>{this.state.date}</p>
          </>
        )}
        <p>
          <button className="button" onClick={this.handleClick}>
            update state
          </button>
        </p>
      </>
    );
  }
}

export default App;
