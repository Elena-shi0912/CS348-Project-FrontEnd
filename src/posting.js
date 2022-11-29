import React, {useState,  useEffect} from "react";
import { Link } from "react-router-dom";
import './posting.css';
import Axios from "axios";
import Post from "./post.js";

export default function Posting() {
    const [isLoading, setLoading] = useState(false);
    const [getposts, setGetposts] = useState([
      {
        post_id: "abc123",
        pickup_location: "waterloo",
        dropoff_location: "toronto",
        pickup_time: "2022-10-11T22:00:00.000Z",
        available_seats: 2,
        price_per_seat: 33
      }
    ]);


    /*useEffect(() => {
      Axios.get("http://localhost:3001/api/dbinfo").then((response) => 
      { 
        setGetposts(response.data)
        setLoading(false)
      });
     }, []);  */

    //console.log(getposts);
    const email=localStorage.getItem("email");
    const password=localStorage.getItem("password");

    if (isLoading) {
      return <div> Still Loading... </div>
    }

  return (
    <div className="posting">
      <Link to="../profile"> My Profile</Link>
      <hr/>
        {
          getposts.map((item)=>{
            return <Post
             post_id={item.post_id}
             pickup_location={item.pickup_location}
             dropoff_location={item.dropoff_location}
             pickup_time={item.pickup_time}
             available_seats={item.available_seats}
             price_per_seat={item.price_per_seat}
             additional_info={item.additional_info}
            />
          })}
    </div>
  );
}