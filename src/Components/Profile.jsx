import React, { useEffect, useState } from "react";
import "./Profile.css";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBTypography,
    MDBIcon,
} from "mdb-react-ui-kit";
import Axios from "axios";

export default function PersonalProfile() {
    const [profile, setProfile] = useState();

    useEffect(() => {
        Axios.post("http://localhost:3001/api/accountinfo").then((response) => {
            setProfile(response.date);
        });
    }, []);

    function rating() {
        if (profile.rating != null) {
            return (
                <div>
                    <MDBTypography tag="h6">Rating</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                        <MDBCol size="12" className="mb-3">
                            <MDBCardText className="text-center">
                                {profile.rating} / 5
                            </MDBCardText>
                        </MDBCol>
                    </MDBRow>
                </div>
            );
        } else {
            return (
                <div>
                    <MDBRow className="pt-1">
                        <MDBCol size="12" className="mb-5">
                            <MDBCardText className="text-center"></MDBCardText>
                        </MDBCol>
                    </MDBRow>
                </div>
            );
        }
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
                                    href="/driverPosting"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/feedback">
                                    My Feedback
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/profile">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="6" className="mb-4 mb-lg-0">
                            <MDBCard
                                className="mb-3"
                                style={{ borderRadius: ".5rem" }}
                            >
                                <MDBRow className="g-0">
                                    <MDBCol
                                        md="4"
                                        className="gradient-custom text-center text-white"
                                        style={{
                                            borderTopLeftRadius: ".5rem",
                                            borderBottomLeftRadius: ".5rem",
                                        }}
                                    >
                                        <MDBCardImage
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar"
                                            className="my-5"
                                            style={{ width: "80px" }}
                                            fluid
                                        />
                                        <MDBTypography tag="h5">
                                            {profile.name}
                                        </MDBTypography>
                                        <MDBIcon far icon="edit mb-5" />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <MDBCardBody className="p-4">
                                            <MDBTypography tag="h6">
                                                Information
                                            </MDBTypography>
                                            <hr className="mt-0 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol
                                                    size="6"
                                                    className="mb-3"
                                                >
                                                    <MDBTypography tag="h6">
                                                        Email
                                                    </MDBTypography>
                                                    <MDBCardText className="text-muted">
                                                        {profile.email}
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol
                                                    size="6"
                                                    className="mb-3"
                                                >
                                                    <MDBTypography tag="h6">
                                                        Phone
                                                    </MDBTypography>
                                                    <MDBCardText className="text-muted">
                                                        {profile.phone}
                                                    </MDBCardText>
                                                </MDBCol>
                                            </MDBRow>

                                            {rating()}

                                            <div className="d-flex justify-content-start">
                                                <a href="#!">
                                                    <MDBIcon
                                                        fab
                                                        icon="facebook me-3"
                                                        size="lg"
                                                    />
                                                </a>
                                                <a href="#!">
                                                    <MDBIcon
                                                        fab
                                                        icon="twitter me-3"
                                                        size="lg"
                                                    />
                                                </a>
                                                <a href="#!">
                                                    <MDBIcon
                                                        fab
                                                        icon="instagram me-3"
                                                        size="lg"
                                                    />
                                                </a>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    );
}
