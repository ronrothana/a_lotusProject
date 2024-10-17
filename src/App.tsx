import { useMemo, useState } from "react";
import Chance from "chance";
import "./style.css";
import Image0 from "./Rumdoul.jpg";
import Image1 from "./Lotus.jpg";
import Image2 from "./champa.jpg";
import Image3 from "./champey.jpg";
import Image4 from "./Tuberose.jpg";
import Image5 from "./Waterlilies.jpg";

import { FaRegComment } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { log } from "console";

export default function App() {
  const chance = new Chance();

  //for buu click, reply, retweet, heart (random 0-10)

  const [numReply, setNumReply] = useState(Math.floor(Math.random() * 10));
  const [numRetweet, setNumRetweet] = useState(Math.floor(Math.random() * 10));
  const [numHeart, setNumHeart] = useState(Math.floor(Math.random() * 10));


  //use array for loop pf, names, description
  const profiles = [Image0, Image1, Image2, Image3, Image4, Image5, Image0, Image1, Image2, Image3, Image4, Image5];
  const names = ['Rumduol Flower', 'Lotus Flower', 'Champa Flower', 'Champey Flower', 'Tuberose Flower', 'WaterLilies Flower', 'Rumduol Flower', 'Lotus Flower', 'Champa Flower', 'Champey Flower', 'Tuberose Flower', 'WaterLilies Flower'];
  const descriptions = [
    "The rumdul flower is the national flower of Cambodia. This flower is recognized for its striking appearance and distinctive floral fragrance.",
    "The lotus Flower has long been revered for its ability to remain unsullied and pure, despite its muddy and murky environment.",
    "The Champa flowers are a symbol of love, new beginnings or immortality. it can used to decorate Hindu and Buddhist temples and for religious ceremonies.",
    "The Compey flowers symbolizebeauty, charm, and grace. They represent spring, new life, new beginning, or birth. it's stands for both, creation and recreation.",
    "The Tuberose stands for purity, peace and innocence. It also protects against evil spirits an excellent reason for tucking a sprig of the flower into your buttonhole.",
    "The Waterlilies are symbolic of rebirth because the flowers close at night and come back in the morning.",
    "The rumdul flower is the national flower of Cambodia. This flower is recognized for its striking appearance and distinctive floral fragrance.",
    "The lotus Flower has long been revered for its ability to remain unsullied and pure, despite its muddy and murky environment.",
    "The Champa flowers are a symbol of love, new beginnings or immortality. it can used to decorate Hindu and Buddhist temples and for religious ceremonies.",
    "The Compey flowers symbolizebeauty, charm, and grace. They represent spring, new life, new beginning, or birth. it's stands for both, creation and recreation.",
    "The Tuberose stands for purity, peace and innocence. It also protects against evil spirits an excellent reason for tucking a sprig of the flower into your buttonhole.",
    "The Waterlilies are symbolic of rebirth because the flowers close at night and come back in the morning."
  ];
  const link = [
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!",
    "Link to Google!"
  ];


  const [color1, setColor1] = useState("gray");
  const [color2, setColor2] = useState("gray");

  // const postArray = useMemo(() => new Array(6).fill(null).map(
  //   (val, index) => {
  //     const profileWidth = Math.floor(Math.random() * 10 + 100);
  //     const profileheight = Math.floor(Math.random() * 10 + 100);


  const clickRetweet = () => {
    if (color1 === "gray") {
      setColor1("red");
      setNumRetweet((value) => value + 1);

    } else {
      setColor1("gray");
      setNumRetweet((value) => value - 1);
    }
  };
  const clickHeart = () => {
    console.log(color2, "before")
    if (color2 === "gray") {
      setColor2("red");

      setNumHeart((value) => value + 1);

    } else {
      setColor2("gray");
      setNumHeart((value) => value - 1);
    }
  };

  //  for header
  return (
    <div className="body">
      <h1 className="welcome w-100">
        <button className="btn">
          <div className="wrapper">
            <p className="text "><h4 className="texth4 w-100" >Welcome to Cambodia's flowers!</h4></p>

            <div className="flower flower1">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower2">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower3">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower4">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower5">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower6">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
          </div>
        </button>
      </h1>

      {/* sign in */}
      <div className="bigBox m-auto w-50 ">

        <div className="sign mt-1">
          <h1 className="m-auto">Sign in</h1>
        </div>
        <div className="section">
          <div className="label">Name:</div>
          <input className="input" placeholder="Enter Your name" />
        </div>

        <div className="section">
          <div className="label">Email: </div>
          <input className="input" placeholder="Enter Your Email" />
        </div>

        <div className="section">
          <div className="label">Password: </div>
          <input className="input" type="password"></input>
        </div>
        <button className="enter">Enter</button>
      </div>
      <div>


        {/* for click and all */}
        <div className="all">
          <div className="bigbox mt-5">
            {names.map((name, index) => (
              <div className="item" key={index}>
                <div className="img">
                  <img src={profiles[index]} />
                </div>
                <div className="text">
                  <h1>{name}</h1>
                  <p>{descriptions[index]}</p>
                  ~<a href={`https://www.google.com/search?q=${encodeURIComponent(name)}`}>{link[index]}</a>
                </div>
                <div className="buu">
                  <div className="reply">
                    <h1>
                      <span style={{ color: "gray" }}>
                        <FaRegComment />
                        {numReply}
                      </span>
                    </h1>
                  </div>
                  <div className="retweet">
                    <h1>
                      <span onClick={clickRetweet}>
                        <FaShareFromSquare style={{ color: color1 }} />
                        {numRetweet}
                      </span>
                    </h1>
                  </div>
                  <div className="retweet">
                    <h1>
                      <span onClick={clickHeart}>
                        <FaHeart style={{ color: color2 }} />
                        {numHeart}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* for thank you */}
      <h1 className="welcome w-100">
        <button className="btn">
          <div className="wrapper">
            <p className="text "><h4 className="texth4 w-100 " >Thank You for Watching Our Website. Have a Good Day!!</h4></p>

            <div className="flower flower1">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower2">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower3">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower4">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower5">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
            <div className="flower flower6">
              <div className="petal one"></div>
              <div className="petal two"></div>
              <div className="petal three"></div>
              <div className="petal four"></div>
            </div>
          </div>
        </button>

      </h1>
    </div>

  );
}
