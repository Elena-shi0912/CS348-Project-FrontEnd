import React, { useState, useEffect } from "react";
import "./Posting.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function Posting() {
    const [isLoading, setLoading] = useState(true);
    const [getposts, setGetposts] = useState([
        {
            pickup_location: "Waterloo",
            dropoff_location: "Toronto",
            pickup_time: "2022/11/16",
            available_seats: "4",
            price_per_seat: "40",
            additional_info: "",
        },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        loadPosts();
    };

    const loadPosts = () => {
        Axios.post("http://localhost:3001/api/dbinfo", {
            info: "I need post",
        }).then((response) => {
            setGetposts(response);
            setLoading(false);
        });
    };

    const posts = getposts.map((item) => {
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
        );
    });

    return <div className="posting"></div>;
}
