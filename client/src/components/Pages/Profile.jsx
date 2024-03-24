// SOME OF THIS IS A TEMPLATE AND WILL BE UPDATED. I have added my own code as well!
import React, { useState } from 'react';
import './Profile.css';

import TextTruncate from '../TextTruncate/index'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [birthday, setBirthday] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState("");
  const [favoriteMusic, setFavoriteMusic] = useState("");
  const [hobbies, setHobbies] = useState("");
  return (
    <section>
      <MDBContainer className="py-5">
        {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
  <MDBBtn style={{ backgroundColor: '#ac2bac', boxShadow: 'none', width: '100px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', disableRipple: true }}>Follow</MDBBtn>
  <MDBBtn style={{ backgroundColor: '#fafafa', boxShadow: 'none', width: '100px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', disableRipple: true }}outline className="ms-1">Message</MDBBtn>
</div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setIsEditing(!isEditing);
                }}>
                  <div>
                    <label>Name: {""}
                      {isEditing ? (
                        <input
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }} />
                      ) : (
                        <b>{name}</b>
                      )}
                    </label>
                  </div>
                  <div>
                    <label>Country: {""}
                      {isEditing ? (
                        <input
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }} />
                      ) : (
                        <b>{country}</b>
                      )}
                    </label>
                  </div>
                  <div>
                    <label>Birthday: {""}
                      {isEditing ? (
                        <input
                          value={birthday}
                          onChange={(e) => {
                            setBirthday(e.target.value);
                          }} />
                      ) : (
                        <b>{birthday}</b>
                      )}
                    </label>
                  </div>
                  <div>
                    <label>Favorite Movies: {""}
                      {isEditing ? (
                        <input
                          value={favoriteMovies}
                          onChange={(e) => {
                            setFavoriteMovies(e.target.value);
                          }} />
                      ) : (
                        <b>{favoriteMovies}</b>
                      )}
                    </label>
                  </div>
                  <div>
                    <label>Favorite Music: {""}
                      {isEditing ? (
                        <input
                          value={favoriteMusic}
                          onChange={(e) => {
                            setFavoriteMusic(e.target.value);
                          }} />
                      ) : (
                        <b>{favoriteMusic}</b>
                      )}
                    </label>
                  </div>
                  <div>
                    <label>Hobbies: {""}
                      {isEditing ? (
                        <input
                          value={hobbies}
                          onChange={(e) => {
                            setHobbies(e.target.value);
                          }} />
                      ) : (
                        <b>{hobbies}</b>
                      )}
                    </label>
                  </div>
                  <div>
                    <MDBBtn outline className="ms-1" type="submit"style={{ backgroundColor: '#fafafa', boxShadow: 'none', width: '100px', height: '50px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', disableRipple: true }}>{isEditing ? "Update" : "Edit"} Profile</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush="true" className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBCardText style={{ color: '#111111' }}className="lead fw-normal mb-0">Recent Art</MDBCardText>
              <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
            </div>
            <MDBRow>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
            </MDBRow>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBCardText style={{ color: '#111111' }}className="lead fw-normal mb-0 ">Recent Favorites</MDBCardText>
              <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
            </div>
            <MDBRow>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
              <MDBCol className="mb-2">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3" />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}