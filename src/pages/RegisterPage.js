import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../ENV_KEY";
import { showErrorToast, showSuccessToast } from "../services/toast";

const RegisterPage = () => {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmitRegiter = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/users/register`, dataRegister);
      console.log(res);
      if (res.status == 200) {
        showSuccessToast("Register Successfully! Directoring to Login...");
        setDataRegister({
          email: "",
          username: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        console.log("lỗi");
      }
    } catch (error) {
      showErrorToast(error.response.data.msg);
      // alert();
    }
  };
  return (
    <div className="half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage:
            "url('https://forums.macrumors.com/attachments/2082749/')",
        }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="form-block">
                <div className="text-center mb-5">
                  <h3>
                    Register to <strong>Apple Store</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form onSubmit={(e) => handleSubmitRegiter(e)}>
                  <div className="form-group first">
                    <label for="username">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your-email@gmail.com"
                      id="username"
                      value={dataRegister.email}
                      onChange={(e) =>
                        setDataRegister({
                          ...dataRegister,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group first">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      id="username"
                      value={dataRegister.username}
                      onChange={(e) =>
                        setDataRegister({
                          ...dataRegister,
                          username: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      id="password"
                      value={dataRegister.password}
                      onChange={(e) =>
                        setDataRegister({
                          ...dataRegister,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="d-sm-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-3 mb-sm-0">
                      <Link to="/login" className="forgot-pass">
                        Go to the Login
                      </Link>
                    </label>
                  </div>

                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-block btn-dark"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
