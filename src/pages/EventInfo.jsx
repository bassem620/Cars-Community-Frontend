import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const EventInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://cars-community-backend.onrender.com/events/" +
        "656689d90b7e386339f52db3"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }, []);
  const [imageUrl1, setImageUrl1] = useState(
    "https://www.avpartners.com/wp-content/uploads/2016/11/Resized-copy-1.jpg"
  );
  const [imageUrl2, setImageUrl2] = useState(
    "https://www.avpartners.com/wp-content/uploads/2016/11/Resized-copy-1.jpg"
  );
  const [counterOn, setCounterOn] = useState(false);

  const [numOfLikes, setNumOfLikes] = useState("100");
  return (
    <div className="eventInfo">
      <div className="imageContainer">
        <h1 className="titleOfEventFant">{data.title}</h1>
        <h1 className="titleOfEvent">{data.title}</h1>
        <img src={imageUrl1} alt="imageTest" className="imageSize" />
        <div className="counter">
          <div className="d-flex justify-content-center">
            <div className="pe-2 d-flex flex-column border border-white border-start-0 border-top-0 border-bottom-0 border-4">
              <div className="ps-2">
                <h1 className="time">00</h1>
              </div>
              <div className="p">
                <h2 className="timeType">days</h2>
              </div>
            </div>
            <div className="pe-2 ps-2 d-flex flex-column border border-white border-start-0 border-top-0 border-bottom-0 border-4">
              <div className="ps-2">
                <h1 className="time">00</h1>
              </div>
              <div className="p">
                <h2 className="timeType">hours</h2>
              </div>
            </div>

            <div className="pe-2 ps-2 d-flex flex-column border border-white border-start-0 border-top-0 border-bottom-0 border-4">
              <div className="ps-1">
                <h1 className="time">00</h1>
              </div>
              <div className="p">
                <h2 className="timeType">min</h2>
              </div>
            </div>

            <div className="pe-2 ps-2 d-flex flex-column">
              <div className="ps-1">
                <h1 className="time">00</h1>
              </div>
              <div className="p">
                <h2 className="timeType">sec</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutEvent p-3 container text-center">
        <h2 className="aboutTitle p-3">Details</h2>
        <div class="row">
          <p className="details p-3 rounded col-md-6">{data.desc}</p>
          <div className="col-md-6 ps-5 container mt-4 position-relative">
            <img
              src={imageUrl2}
              alt="123"
              className="img-fluid imageBoarder rounded ms-3"
            />
            <div className="likesCount">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h2>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={numOfLikes}
                      duration={2}
                      delay={0}
                    />
                  )}
                </h2>
              </ScrollTrigger>
              <h2>likes</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
