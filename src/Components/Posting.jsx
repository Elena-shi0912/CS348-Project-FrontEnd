import React, {useState,  useEffect} from "react";
import './Posting.css';
import Axios from "axios";
import Post from "./Post.jsx";

export default function Posting() {
    const [isLoading, setLoading] = useState(true);
    const [getposts, setGetposts] = useState([]);


    useEffect(() => {
      Axios.get("http://localhost:3001/api/dbinfo").then((response) => 
      { 
        setGetposts(response.data)
        setLoading(false)
      });
     }, []);  

    if (isLoading) {
      return <div> Still Loading... </div>
    }

  return (
    <div className="posting">
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
