import React, { useState, useEffect } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

export default function Post(props) {
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
                <Link
                    to={{
                        pathname: "/makeReview",
                        state: {
                            From: props.pickup_location,
                            To: props.dropoff_location,
                            Time: props.pickup_time,
                            Seats: props.available_seats,
                            Price: props.price_per_seat,
                            Info: props.additional_info,
                            id: props.post_id,
                        },
                    }}
                    class="btn btn-info"
                >
                    Add review
                </Link>
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
