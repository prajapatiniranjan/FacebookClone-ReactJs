import React from "react";
import "./MainArea.css";

import {
  FaFontAwesomeFlag,
  FaMedrt,
  FaFacebookMessenger,
  FaAngleDown,
  FaUserFriends,
  FaSearch,
  FaGrin,
} from "react-icons/fa";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";
import {AiFillFileImage} from "react-icons/ai"
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
          <FaAngleDown color="Blue" fontSize="2rem" />
          <div>See More</div>
        </div>
      </div>
      <div className="MainArea">
        <div className="addStory">
          <div className="Story">
            <img
              src=""
              alt="IMG"
              style={{ height: "60px", width: "50%", borderRadius: "60%" }}
            />
            <div className="StoryName">Jai Shree Shyaam</div>
          </div>

          <div className="Story">
            <img
              src=""
              alt="IMG"
              style={{ height: "60px", width: "50%", borderRadius: "60%" }}
            />
            <div className="StoryName">Dwayne Johnson</div>
          </div>

          <div className="Story">
            <img
              src=""
              alt="IMG"
              style={{ height: "60px", width: "50%", borderRadius: "60%" }}
            />
            <div className="StoryName">Niranjan Prajapati</div>
          </div>

          <div className="Story">
            <img
              src=""
              alt="IMG"
              style={{ height: "60px", width: "50%", borderRadius: "60%" }}
            />
            <div className="StoryName">Mrs. Mahi</div>
          </div>

          <div className="Story">
            <img
              src=""
              alt="IMG"
              style={{ height: "60px", width: "50%", borderRadius: "60%" }}
            />
            <div className="StoryName">Bipin</div>
            <div className="message">
        <div className="Post">
            <img src="" alt="PIC" />
            <input type="Mind" placeholder="What's on your mind, Niranjan" />
        </div>
        <div className="Call">
            <div className="ico">
                <div className="icone">
                    <MdVideoCall fontSize="2rem" color="red" />
                    <div>Live Video</div>
                </div>
                <div className="icone">
                    <AiFillFileImage fontSize="2rem" color="green" />
                    <div>Photo/Video</div>
                </div>
                <div className="icone">
                    <FaGrin fontSize="2rem" color="orange" />
                    <div>Feeling/Activity</div>
                </div>
            </div>
        </div>
    </div>
          </div>
        </div>
      </div>

      <div className="Lside">
        <div className="Contact">
          <div className="Contacts">
            Contacts{" "}
            <div className="Chaticon">
              <div className="icons">
                <MdVideoCall fontSize="1.8rem" />
                <div className="icons">
                  <FaSearch fontSize="1.8rem" />
                </div>
                <div className="icons">
                  <MdMoreHoriz fontSize="1.8rem" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="concise">
          <div className="Profilee">
            <img
              src=""
              alt=""
              style={{ height: "35px", padding: "1rem", borderRadius: "50%" }}
            />
            Mr. Max Prajapati
          </div>
          <div className="Profilee">
            <img
              src=""
              alt=""
              style={{ height: "35px", padding: "1rem", borderRadius: "50%" }}
            />
            Mr. Max Prajapati
          </div>
          <div className="Profilee">
            <img
              src=""
              alt=""
              style={{ height: "35px", padding: "1rem", borderRadius: "50%" }}
            />
            Mr. Max Prajapati
          </div>
          <div className="Profilee">
            <img
              src=""
              alt=""
              style={{ height: "35px", padding: "1rem", borderRadius: "50%" }}
            />
            Mr. Max Prajapati
          </div>
          <div className="Profilee">
            <img
              src=""
              alt=""
              style={{ height: "35px", padding: "1rem", borderRadius: "50%" }}
            />
            Mr. Max Prajapati
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
