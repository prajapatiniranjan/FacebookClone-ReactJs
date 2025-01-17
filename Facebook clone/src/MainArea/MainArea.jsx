import React from "react";
import "./MainArea.css";
import {
  FaFontAwesomeFlag,
  FaMedrt,
  FaFacebookMessenger,
  FaAngleDown,
  FaUserFriends,
} from "react-icons/fa";

function MainArea() {
  return (
    <div className="Main">
      <div className="Rside">
        <div className="Profile">
          <img src="" alt="Dp" style={{ height: "30px", padding: "1rem" }} />
          Mr.Max
        </div>
        <div className="Pro">
          <FaFontAwesomeFlag color="green" fontSize="2rem" />
          <div>Pages</div>
        </div>
        <div className="Pro">
          <FaMedrt color="blue" fontSize="2rem" />
          <div>FSD Java Information</div>
        </div>
        <div className="Pro">
          <FaFacebookMessenger color="green" fontSize="2rem" />
          <div>Messenger for Kids</div>
        </div>
        <div className="Pro">
          <FaUserFriends color="blue" fontSize="2rem" />
          <div>Friends</div>
        </div>
        <div className="Pro">
          <FaAngleDown color="green" fontSize="2rem" />
          <div>See More</div>
        </div>
        <br />
        <br />
        <div className="Profiles">
          <img src="" alt="logo" style={{ height: "35px", padding: "1rem" }} />
           React Developer
        </div>
        <div className="Profiles">
          <img src="" alt="logo" style={{ height: "35px", padding: "1rem" }} />
          Java Developer
        </div>
        <div className="Profiles">
          <img src="" alt="logo" style={{ height: "35px", padding: "1rem" }} />
          MERN Developer
        </div>
        <div className="Profiles">
          <img src="" alt="logo" style={{ height: "35px", padding: "1rem" }} />
          MEAN Developer
        </div>
        <div className="Pross">
          <FaAngleDown color="Blue" fontSize="2rem"/>
          <div>See More</div>
        </div>
      </div>

      <div className="MainArea">Middle</div>

      <div className="Lside">Lside</div>
    </div>
  );
}

export default MainArea;
