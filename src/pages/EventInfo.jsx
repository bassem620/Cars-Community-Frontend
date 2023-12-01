import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import axios from "axios";

const EventInfo = () => {
  const [eventInfo, setEventInfo] = useState([]);

  useEffect((_) => {
    axios
      .get(
        "https://cars-community-backend.onrender.com/events/656689d90b7e386339f52db3"
      )
      .then((res) => setEventInfo(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const [imageUrl1, setImageUrl1] = useState(
    "https://www.avpartners.com/wp-content/uploads/2016/11/Resized-copy-1.jpg"
  );
  const [imageUrl2, setImageUrl2] = useState(
    "https://www.avpartners.com/wp-content/uploads/2016/11/Resized-copy-1.jpg"
  );
  const [counterOn, setCounterOn] = useState(false);

  const [numOfLikes, setNumOfLikes] = useState("100");
  console.log(eventInfo);
  return (
    <div className="eventInfo">
      <div className="imageContainer">
        <h1 className="titleOfEventFant">{eventInfo.title}</h1>
        <h1 className="titleOfEvent">{eventInfo.title}</h1>
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
      <div className="aboutEvent p-3">
        <h2 className="aboutTitle p-3">Details</h2>
        <p className="details p-3 rounded text-center">{eventInfo.desc}</p>
        <div className="imageAndCounter">
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="likesCount eventCounterLocation">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#3E59FF"
                      class="bi bi-hand-thumbs-up-fill"
                      viewBox="0 0 16 20"
                    >
                      <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={numOfLikes}
                        duration={2}
                        delay={0}
                      />
                    )}
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#FF3636"
                      class="bi bi-geo-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                      />
                    </svg>
                    Location : 
                    {" "+eventInfo.location}
                  </h2>
                </ScrollTrigger>
              </div>
            </div>
            <img src={imageUrl2} alt="123" className="m-2 float-end col" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
