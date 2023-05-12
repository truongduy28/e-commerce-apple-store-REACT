import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../services/toast";
import axios from "axios";
import { API } from "../ENV_KEY";

const LoginPage = () => {
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/users/login`, dataLogin);
      console.log(res);
      if (res.status == 200) {
        showSuccessToast("Đăng Nhập thành công !!!");
        setDataLogin({
          email: "",
          password: "",
        });

        console.log(res?.data?.user?.role);

        localStorage.setItem("user-e-commerce", JSON.stringify(res.data));
        navigate("/");
      } else {
        console.log("lỗi");
      }
    } catch (error) {
      showErrorToast(error.response.data.msg);
    }
  };

  return (
    <div className="half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage:
            "url('https://www.pickfu.com/blog/wp-content/uploads/2019/09/e-commerce-product-images.jpg')",
        }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="form-block">
                <div className="text-center mb-5">
                  <h3>
                    Login to <strong>Colorlib</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form onSubmit={(e) => handleSubmitLogin(e)}>
                  <div className="form-group first">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your-email@gmail.com"
                      id="username"
                      value={dataLogin.email}
                      onChange={(e) =>
                        setDataLogin({ ...dataLogin, email: e.target.value })
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
                      value={dataLogin.password}
                      onChange={(e) =>
                        setDataLogin({ ...dataLogin, password: e.target.value })
                      }
                    />
                  </div>

                  <div className="d-sm-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-3 mb-sm-0">
                      <Link to="/register" className="forgot-pass">
                        Create a new account
                      </Link>
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-block btn-primary"
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

export default LoginPage;
