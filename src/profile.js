import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./card.js";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

export default function Profile() {
    const [getinfo, setGetinfo] = useState([
        {post_id : "Abc",
         pickup_location : "waterloo",
         dropoff_location : "toronto",
         pickup_time : "2022-10-11T22:00:00.000Z", 
         available_seats : 3,
         price_per_seat : 22}]);
    const [name, setName] = useState("Michael");
    const [driver, setDriver] = useState(false);
    const [phone, setPhone] = useState("2498749244");
    const [rating, setRating] = useState(5);
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    useEffect(() => {
        Axios.post("http://localhost:3001/api/userinfo", {
            email : email,
            password : password
        }).then((response) => {
            setGetinfo(response.data);
        });
        Axios.post("http://localhost:3001/api/username", {
            email : email,
            password : password
        }).then((response) => {
            setName(response);
        });
        Axios.post("http://localhost:3001/api/isdriver", {
            email : email,
            password : password
        }).then((response) => {
            setDriver(response);
        });
        Axios.post("http://localhost:3001/api/phone", {
            email : email,
            password : password
        }).then((response) => {
            setPhone(response);
        });
        if (driver) {
            Axios.post("http://localhost:3001/api/rating", {
                email : email,
                password : password
            }).then((response) => {
                setRating(response);
            });
        }
    }, []);

    if (driver) {
        return (
            <div className="parent">
                <h1>{name}</h1>
                <h4>Email: {email}</h4>
                <h4>Phone Number: {phone}</h4>
                <h4>Am I a driver: True</h4>
                <h4>My overall rating: {rating} out of 5</h4>
                <hr/>
                <h3>My Posts </h3>
                <div className="reservations">
                    {getinfo.map((item) => {
                        return (
                            <Card
                                post_id={item.post_id}
                                pickup_location={item.pickup_location}
                                dropoff_location={item.dropoff_location}
                                pickup_time={item.pickup_time}
                                available_seats={item.available_seats}
                                price_per_seat={item.price_per_seat}
                                additional_info={item.additional_info}
                            />
                        );
                    })}
                </div>
                <hr/>
                <h3>Want to add post?</h3>
                <div className="addpost">

                </div>
                <hr/>
                <h3>Want to delete post?</h3>
                <div className="deletepost">

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="parent">
                <h1>{name}</h1>
                <h4>Email: {email}</h4>
                <h4>Phone Number: {phone}</h4>
                <h4>Am I a driver: False</h4>
                <hr/>
                <h3>My Reservations </h3>
                <div className="reservations">
                    {getinfo.map((item) => {
                        return (
                            <Card
                                post_id={item.post_id}
                                pickup_location={item.pickup_location}
                                dropoff_location={item.dropoff_location}
                                pickup_time={item.pickup_time}
                                available_seats={item.available_seats}
                                price_per_seat={item.price_per_seat}
                                additional_info={item.additional_info}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }
}