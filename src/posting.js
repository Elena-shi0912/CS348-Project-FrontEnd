import React, {useState,  useEffect} from "react";
import './posting.css';
import Axios from "axios";
import Post from "./post.js";

function Posting() {
    let getposts;
    Axios.post("http://localhost:3001/api/dbinfo", 
    {info: "I need post"}).then((response) => { getposts=response })

    const posts = getposts.map(item => {
      return (
        <Post
        post_id={item.post_id}
        pickup_location={item.pickup_location}
        dropoff_location={item.dropoff_location}
        pickup_time={item.pickup_time}
        available_seats={item.available_seats}
        price_per_seat={item.price_per_seat}
        additional_info={item.additional_info}
        />
      )
    })

  return (
    <div className="posting">
        {posts}
    </div>
  );
}

export default Posting