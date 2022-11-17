import React, {useState,  useEffect} from "react";
import './post.css';

export default function Post(props) {

  return (
    <div className="post">
        <h4>{props.post_id}</h4>
        <h2>From {props.pickup_location} to {props.dropoff_location} at {props.pickup_time.substring(0, 10)} {props.pickup_time.substring(11, 16)}</h2>
        <h3>{props.available_seats} seats remain and ${props.price_per_seat} per seat</h3>
        <h4>{props.additional_info}</h4>
        <hr/>
    </div>
  );
}
