import React, { useState, useEffect } from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

export default function Post(props) {
    const navigate = useNavigate();

    function book() {
        Axios.post("http://localhost:3001/api/reserve", {
            post_id: props.post_id,
        }).then((response) => {
            alert(response.data);
            window.location.reload(false);
        });
    }

    function cancel() {
        Axios.post("http://localhost:3001/api/cancel", {
            post_id: props.post_id,
        }).then((response) => {
            alert(response.data);
            window.location.reload(false);
        });
    }

    const handleClick = () => {
        navigate("/makeReview", {
            state: {
                pickup_location: props.pickup_location,
                dropoff_location: props.dropoff_location,
                pickup_time: props.pickup_time,
                available_seats: props.available_seats,
                price_per_seat: props.price_per_seat,
                additional_info: props.additional_info,
                post_id: props.post_id,
            },
        });
    };

    function button() {
        if (props.button === "book") {
            return (
                <a onClick={book} class="btn btn-primary">
                    Book Now!
                </a>
            );
        } else if (props.button === "reserve") {
            return (
                <a onClick={cancel} class="btn btn-danger">
                    Cancel Reservation
                </a>
            );
        } else if (props.button === "review") {
            return (
                <a
                    // to="/makeReview"
                    // state={{
                    // pickup_location: props.pickup_location,
                    // dropoff_location: props.dropoff_location,
                    // pickup_time: props.pickup_time,
                    // available_seats: props.available_seats,
                    // price_per_seat: props.price_per_seat,
                    // additional_info: props.additional_info,
                    // post_id: props.post_id,
                    // }}
                    onClick={handleClick}
                    class="btn btn-info"
                >
                    Add review
                </a>
            );
        }
    }

    return (
        <div className="post">
            <div class="card text-center">
                <div class="card-header">
                    {props.pickup_time.substring(0, 10)}{" "}
                    {props.pickup_time.substring(11, 16)}
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        {props.pickup_location} to {props.dropoff_location}
                    </h5>
                    <p class="card-text">
                        {props.available_seats} seats available for $
                        {props.price_per_seat} each
                    </p>
                    <p class="card-text">{props.additional_info}</p>
                    {button()}
                </div>
            </div>
            <h1 />
        </div>
    );
}
