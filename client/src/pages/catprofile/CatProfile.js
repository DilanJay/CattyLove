import React from "react";
import Commentbox from "../../component/commentbox/Commentbox";
import StyleHeding from "../../component/honeheader/StyleHeding";
import StylishButton from "../../component/stylishButton/StylishButton";
import "./CatProfile.css";

function CatProfile() {
  return (
    <div className="container emp-profile">
      <StyleHeding name="Cat Profile"></StyleHeding>
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                className="img-fluid img-thumbnail shadow"
                src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
              {/* <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>abc01</h5>
              <h6>Munchkin cat</h6>
              <p className="proile-rating">
                LIKES : <span>10</span>
              </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div> */}
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <h4>You have liked</h4>
              <StylishButton btnName="Add to Wishlist +"></StylishButton>
              <StylishButton btnName="Rm from Wishlist"></StylishButton>
              <StylishButton btnName="Like 👍"></StylishButton>
              <StylishButton btnName="Dis-Like 👎"></StylishButton>
            </div>
            {/* <div className="profile-work">
              <p>WORK LINK</p>
              <a href="http/google.com">Website Link</a>
              <br />
              <a href="http/google.com">Bootsnipp Profile</a>
              <br />
              <a href="http/google.com">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="http/google.com">Web Designer</a>
              <br />
              <a href="http/google.com">Web Developer</a>
              <br />
              <a href="http/google.com">WordPress</a>
              <br />
              <a href="http/google.com">WooCommerce</a>
              <br />
              <a href="http/google.com">PHP, .Net</a>
              <br />
            </div> */}
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Cat Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>62658dbe9c03fd4c20f56349</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>abc01</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Birth Year</label>
                  </div>
                  <div className="col-md-6">
                    <p>2020</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Vacsinated</label>
                  </div>
                  <div className="col-md-6">
                    <p>Yes</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Gender</label>
                  </div>
                  <div className="col-md-6">
                    <p>Female</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Adress</label>
                  </div>
                  <div className="col-md-6">
                    <p>Kurunegla, Srilanka</p>
                  </div>
                </div>
              </div>
              {/* <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=kurunegala&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="aaaa"
          ></iframe>
          {/* <a href="https://fmovies-online.net"></a> */}
          <br />
        </div>
      </div>
      <br />
      <Commentbox></Commentbox>
    </div>
  );
}

export default CatProfile;

//{
/* <div classNameName="container bootstrap snippets bootdey">
      <br /> <br /> <br /> <br />
      <div classNameName="row">
        <div classNameName="profile-nav col-md-3">
          <div classNameName="panel">
            <div classNameName="user-heading round">
              <a>
                <img
                  src={"https://bootdey.com/img/Content/avatar/avatar3.png"}
                  alt=""
                />
              </a>
              <h1>Camila Smith</h1>
              <p>deydey@theEmail.com</p>
            </div>

            <ul classNameName="nav nav-pills nav-stacked">
              <li classNameName="active">
                <a>
                  {" "}
                  <i classNameName="fa fa-user"></i> Profile
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <i classNameName="fa fa-calendar"></i> Recent Activity{" "}
                  <span classNameName="label label-warning pull-right r-activity">
                    9
                  </span>
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <i classNameName="fa fa-edit"></i> Edit profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div classNameName="profile-info col-md-9">
          <div classNameName="panel">
            <form>
              <textarea
                placeholder="Whats in your mind today?"
                rows="2"
                classNameName="form-control input-lg p-text-area"
              ></textarea>
            </form>
            <footer classNameName="panel-footer">
              <button classNameName="btn btn-warning pull-right">Post</button>
              <ul classNameName="nav nav-pills">
                <li>
                  <a>
                    <i classNameName="fa fa-map-marker"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i classNameName="fa fa-camera"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i classNameName=" fa fa-film"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i classNameName="fa fa-microphone"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
          <div classNameName="panel">
            <div classNameName="bio-graph-heading">
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla
              fringilla ut vel ispum. Aliquam ac magna metus.
            </div>
            <div classNameName="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div classNameName="row">
                <div classNameName="bio-row">
                  <p>
                    <span>First Name </span>: Camila
                  </p>
                </div>
                <div classNameName="bio-row">
                  <p>
                    <span>Last Name </span>: Smith
                  </p>
                </div>
                <div classNameName="bio-row">
                  <p>
                    <span>Country </span>: Australia
                  </p>
                </div>
                <div classNameName="bio-row">
                  <p>
                    <span>Birthday</span>: 13 July 1983
                  </p>
                </div>
                <div classNameName="bio-row">
                  <p>
                    <span>Occupation </span>: UI Designer
                  </p>
                </div>
                <div classNameName="bio-row">
                  <p>
                    <span>Email </span>: jsmith@flatlab.com
                  </p>
                </div>
                <div classNameName="bio-row">
                  <p>
                    <span>Mobile </span>: (12) 03 4567890
                  </p>
                </div>
                <div classNameName="bio-row">
                  <p>
                    <span>Phone </span>: 88 (02) 123456
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div classNameName="row">
              <div classNameName="col-md-6">
                <div classNameName="panel">
                  <div classNameName="panel-body">
                    <div classNameName="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          classNameName="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="35"
                          data-fgcolor="#e06b7d"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: "-77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(224, 107, 125)",
                            padding: "0px",
                            webkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div classNameName="bio-desk">
                      <h4 classNameName="red">Envato Website</h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="col-md-6">
                <div classNameName="panel">
                  <div classNameName="panel-body">
                    <div classNameName="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          classNameName="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="63"
                          data-fgcolor="#4CC5CD"
                          data-bgcolor="#e8e8e8"
                          //style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(76, 197, 205); padding: 0px; -webkit-appearance: none; background: none;"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: "-77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(224, 107, 125)",
                            padding: "0px",
                            webkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div classNameName="bio-desk">
                      <h4 classNameName="terques">ThemeForest CMS </h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="col-md-6">
                <div classNameName="panel">
                  <div classNameName="panel-body">
                    <div classNameName="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          classNameName="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="75"
                          data-fgcolor="#96be4b"
                          data-bgcolor="#e8e8e8"
                          //style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(150, 190, 75); padding: 0px; -webkit-appearance: none; background: none;"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: "-77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(224, 107, 125)",
                            padding: "0px",
                            webkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div classNameName="bio-desk">
                      <h4 classNameName="green">VectorLab Portfolio</h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="col-md-6">
                <div classNameName="panel">
                  <div classNameName="panel-body">
                    <div classNameName="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          classNameName="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="50"
                          data-fgcolor="#cba4db"
                          data-bgcolor="#e8e8e8"
                          //style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(203, 164, 219); padding: 0px; -webkit-appearance: none; background: none;"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: "-77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(224, 107, 125)",
                            padding: "0px",
                            webkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div classNameName="bio-desk">
                      <h4 classNameName="purple">Adobe Muse Template</h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
//}
