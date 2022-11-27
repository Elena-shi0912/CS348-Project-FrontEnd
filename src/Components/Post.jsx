import React, { useState, useEffect } from "react";
import "./Post.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Post(props) {
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
                    <a href="#" class="btn btn-primary">
                        Book Now!
                    </a>
                </div>
            </div>
            <h1 />
        </div>
    );
}
