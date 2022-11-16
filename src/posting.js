import React, {useState,  useEffect} from "react";
import './posting.css';
import Axios from "axios";
import Post from "./post.js";

export default function Posting() {
    const [isLoading, setLoading] = useState(true);
    const [getposts, setGetposts] = useState();
    useEffect(() => {
      Axios.get("http://localhost:3001/api/dbinfo").then(response => {
        setGetposts(response.data);
        setLoading(false);
      });
    }, []);

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

    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }

  return (
    <div className="posting">
        {posts}
    </div>
  );
}
