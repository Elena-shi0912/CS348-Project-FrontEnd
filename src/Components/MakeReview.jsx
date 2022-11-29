import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MakeReview.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function MakeReview() {
    const [comment, setComment] = useState("");

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
                    pickup_location={this.props.location.From}
                    dropoff_location={this.props.location.To}
                    pickup_time={this.props.location.Time}
                    available_seats={this.props.location.Seats}
                    price_per_seat={this.props.location.Price}
                    additional_info={this.props.location.Info}
                    post_id={this.props.location.id}
                    book={""}
                />
                <h1 />
                <div class="row g-3">
                    <div class="col-12">
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
                        <div class="container">
                            <span id="rateMe1"></span>
                        </div>
                        <script src="js/addons/rating.js"></script>
                    </div>
                </div>
            </div>
        </div>
    );
}
