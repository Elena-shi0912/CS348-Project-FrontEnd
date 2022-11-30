import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";
import "./MakeReview.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function MakeReview() {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(5);
    const location = useLocation();
    const state = location.state;

    console.log(location);
    console.log(state);

    function submit() {
        var currentdate = new Date();
        var datetime =
            currentdate.getFullYear() +
            "-" +
            (currentdate.getMonth() + 1) +
            "-" +
            currentdate.getDate() +
            " " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();
        Axios.post("http://localhost:3001/api/addReview", {
            post_id: state.post_id,
            comment: comment,
            rating: rating,
            datetime:datetime,
        }).then((response) => {
            alert(response.data);
        });
        window.location.href = "userReview";
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Find Ride
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="/userPosting"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/reservation">
                                    My Reservation
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/userReview">
                                    Review
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="Review">
                <h1 />
                <Post
                    pickup_location={state.pickup_location}
                    dropoff_location={state.dropoff_location}
                    pickup_time={state.pickup_time}
                    available_seats={state.available_seats}
                    price_per_seat={state.price_per_seat}
                    additional_info={state.additional_info}
                    post_id={state.post_id}
                    book={""}
                />
                <h1 />
                <div class="row g-3">
                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">
                            Comment:
                        </label>
                        <textarea
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            rows="3"
                            class="form-control"
                        ></textarea>
                    </div>
                    <div class="col-5">
                        <label for="customRange2" class="form-label">
                            Rating
                        </label>
                        <input
                            type="range"
                            class="form-range"
                            min="0"
                            max="5"
                            onChange={(e) => {
                                setRating(e.target.value);
                            }}
                            id="customRange2"
                        />
                    </div>
                    <div class="col-4"></div>
                    <div class="col-3 d-md-flex justify-content-md-end">
                        <button
                            type="submit"
                            onClick={submit}
                            class="btn btn-primary"
                        >
                            Submit Review!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
