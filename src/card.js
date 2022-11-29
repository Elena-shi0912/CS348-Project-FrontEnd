import React, { useState, useEffect } from "react";
import "./card.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Card(props) {
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
                </div>
            </div>
        </div>
    );
}