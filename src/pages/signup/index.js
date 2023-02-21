import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [Formtype, setformType] = useState("Physical");
  const [Name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [Email, setEmail] = useState("");
  const [CnicNumber, setCnicNumber] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [Courses, setCourses] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Gender, setGender] = useState("");
  const [ImgUrl, setImgUrl] = useState("");
  var match = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

  const SignUp = () => {
  // console.log(ImgUrl)
    if (Name === "") {
      setMessage("Please Enter your name");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (FatherName === "") {
      setMessage("Please enter your father's name");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (Email === "") {
      setMessage("Please enter your email");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (!Email.match(match)) {
      setMessage("Please Enter Correct Email Address");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (Password === "") {
      setMessage("Please enter your password");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (Password.length < 6) {
      setMessage("Please Enter 6 digit Password.");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (CnicNumber === "") {
      setMessage("Please enter your CNIC number");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (CnicNumber.length < 14) {
      setMessage("Please 14 character in cnic number");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (MobileNumber === "") {
      setMessage("Mobile Number Requied");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (MobileNumber.length < 11) {
      setMessage("Please Enter 11 digit Mobile No.");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (Courses === "") {
      setMessage("Please select any one course");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (Qualification === "") {
      setMessage("Please select your qualification");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (Gender === "") {
      setMessage("Please select your Gender");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (ImgUrl === "") {
      setMessage("Please upload your passport size photo");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setMessage(" .......");
      setMessage("success");
      setMessageType("success");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      const userData = {
        Name: Name,
        FatherName: FatherName,
        Email: Email,
        Password: Password,
        CnicNumber: CnicNumber,
        MobileNumber: MobileNumber,
        Formtype: Formtype,
        Courses: Courses,
        Qualification: Qualification,
        Gender:Gender,
        ImgUrl:ImgUrl,
      };
      console.log("userData", userData);
      setTimeout(() => {
        setName("");
        setFatherName("");
        setEmail("");
        setPassword("");
        setMobileNumber("");
        setCnicNumber("");
        setCourses("");
        setGender("");
        setImgUrl("");
        setQualification("")
      }, 500);
    }
  };

  return (
    <div className="maindivlogin">
      <div className="mainlogindiv">
        <div className="mainlogindiv-1">
          <p>Student Sign Up</p>
        </div>
        <div className="imglogoiskillers">
          <img src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/colorlogo-01.png?alt=media&token=27dd4249-7e3e-4a78-a1f7-814cb689d254" />
        </div>
        <div className="btn-primary-div">
          <div className="btnmain">
            <button
              className={Formtype === "Physical" ? "selectForm" : "form "}
              onClick={() => setformType("Physical")}
            >
              Physical
            </button>
            <button
              className={Formtype === "Online" ? "selectForm" : "form"}
              onClick={() => setformType("Online")}
            >
              Online
            </button>
          </div>
        </div>

        <div className="mm">
          <div className="m">
            <p>Apply form here for {Formtype} classes.</p>
          </div>
        </div>

        <div className="_inputDiv">
          <input
            type="text"
            className="_input"
            name="Name"
            placeholder="Name"
            value={Name}
            onChange={(Name) => setName(Name.target.value)}
          />
        </div>
        <div className="_inputDiv">
          <input
            type="text"
            className="_input"
            name="Father Name"
            placeholder="Father Name"
            value={FatherName}
            onChange={(FatherName) => setFatherName(FatherName.target.value)}
          />
        </div>
        <div className="_inputDiv">
          <input
            type="email"
            className="_input"
            name="Email"
            placeholder="Email"
            value={Email}
            onChange={(Email) => setEmail(Email.target.value)}
          />
        </div>
        <div className="_inputDiv">
          <input
            type="password"
            className="_input"
            name="Password"
            placeholder="Password"
            value={Password}
            onChange={(Password) => setPassword(Password.target.value)}
          />
        </div>
        <div className="_inputDiv">
          <input
            type="number"
            className="_input"
            name="CNIC Number"
            placeholder="CNIC Number"
            value={CnicNumber}
            onChange={(CnicNumber) => setCnicNumber(CnicNumber.target.value)}
          />
        </div>
        <div className="_inputDiv">
          <input
            type="number"
            className="_input"
            name="Mobile Number"
            placeholder="Mobile Number"
            value={MobileNumber}
            onChange={(MobileNumber) =>
              setMobileNumber(MobileNumber.target.value)
            }
          />
        </div>
        <select
          className="_select_Course"
          value={Courses}
          onChange={(e) => setCourses(e.target.value)}
          id={Formtype === "Online" ? "selectcourses" : "Coursedisply "}
        >
          <option id="select">Select Courses</option>
          <option>Wordpress</option>
          <option>Web Development &amp Web Designing</option>
          <option>Graphic Design</option>
          <option>Freelancing</option>
          <option>Mobile App Development</option>
        </select>
        <select
          className="_select_Course"
          value={Courses}
          onChange={(e) => setCourses(e.target.value)}
          id={Formtype === "Physical" ? "selectcourses" : "Coursedisply "}
        >
          <option id="select">Select Courses</option>
          <option>Graphic Design</option>
        </select>
        <select
          className="_select_Course"
          value={Qualification}
          onChange={(a) => setQualification(a.target.value)}
        >
          <option id="select">Select Qualification</option>
          <option>Matriculation</option>
          <option>Intermediate</option>
          <option>Graduate</option>
        </select>
        <select
          className="_select_Course"
          value={Gender}
          onChange={(a) => setGender(a.target.value)}
        >
          <option value="Select Gender" id="select">
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="_upload form-file">
          <label for="exampleFormControlFile3" className="form-file-label">
            Upload Photo
          </label>
          <input
            id="exampleFormControlFile3"
            type="file"
            className="form-control-file"
            accept="image/png,image/jpg,image/jpeg"
            onChange={(b) => setImgUrl(b.target.files)}
          />
        </div>
        <div className="mm">
          <div className="m">
            <p>Upload your passport size photo with blue background</p>
          </div>
        </div>

        <div className="n">
          <input type="checkbox" />
          <span className="_laptopTxt">I have laptop for classes</span>
        </div>

        <div className="nn">
          <div className="nnn">
            <p
              className="aaaa"
              style={{ color: messageType === "error" ? "red" : "green" }}
            >
              {message}
            </p>
          </div>
        </div>

        <div className="linkname">
          <div className="linkname2">
            <div className="_text e">Already a member?</div>
            <div className="-text">
              <a className="a" onClick={() => navigate("/Login")}>
                Sign In
              </a>
            </div>
          </div>
        </div>
        <div className="btndivlogin">
          <button className="btn" onClick={SignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
