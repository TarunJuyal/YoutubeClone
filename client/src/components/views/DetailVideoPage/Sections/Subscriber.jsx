import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { Col,Row } from "antd";

function Subscriber(props) {
  const user = useSelector((state) => state.user);
  const userTo = props.userTo;
  const userFrom = props.userFrom;
  const subscriberNumberVariable = { userTo: userTo, userFrom: userFrom };
  const [SubscriberNumber, setSubsciberNumber] = useState(0);
  const [Subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    Axios.post(
      "/api/subscribe/subscriberNumber",
      subscriberNumberVariable
    ).then((response) => {
      if (response.data.success) {
        setSubsciberNumber(response.data.subscriberNumber);
      } else {
        alert("Failed to get subscriber number");
      }
    }, []);

    Axios.post("/api/subscribe/subscribed", subscriberNumberVariable).then(
      (response) => {
        if (response.data.success) {
          setSubscribed(response.data.subscribed);
        } else {
          alert("Failed to get subscribed info");
        }
      }
    );
  }, []);

  const onSubscibe = () => {
    if (user.userData && !user.userData.isAuth) {
      alert("Login first to subscribe");
    } else {
      if (Subscribed) {
        Axios.post("/api/subscribe/unSubscribe", subscriberNumberVariable).then(
          (response) => {
            if (response.data.success) {
              setSubsciberNumber(SubscriberNumber - 1);
              setSubscribed(!Subscribed);
            } else {
              alert("Failed to unsubscribe");
            }
          }
        );
      } else {
        Axios.post("/api/subscribe/subscribe", subscriberNumberVariable).then(
          (response) => {
            if (response.data.success) {
              setSubsciberNumber(SubscriberNumber + 1);
              setSubscribed(!Subscribed);
            } else {
              alert("Failed to subscribe");
            }
          }
        );
      }
    }
  };

  return (
    <>
      <Col>
        <Row>
        <button
          onClick={onSubscibe}
          style={{
            color: "white",
            padding: "10px 16px",
            fontWeight: "500",
            fontSize: "1rem",
            backgroundColor: `${Subscribed ? "#AAAAAA" : "#CC0000"}`,
            textTransform: "uppercase",
            borderRadius: "4px",
            border: "none",
          }}
        >
          {Subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </Row>
      <Row>
        <span style={{ fontSize: "1.1em", color: "gray" }}>
          {SubscriberNumber} subscribers
        </span>
      </Row>
      </Col>
    </>
  );
}

export default Subscriber;
