import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { ILoginForm } from "../../models/auth.model";
import axios from "axios";
import { baseUrl, endPoints } from "../../constants/Apis";
import "./LoginPage.css";
import type { IUserData } from "../../models/login.model";
import { useAuth } from "../../hooks/useAuth";
const LoginPage = () => {
  const [formLogin, setFormLogin] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    console.log(e);
    e.preventDefault();
    try {
      const res = await axios.post(baseUrl + endPoints.login, formLogin);

      console.log(res.data);
      if (res?.data?.result) {
        const token = res?.data?.access_token;
        const user: IUserData = res?.data?.user;
        console.log("token", token);
        console.log("user", user);

        auth.login(token, user);
        navigate("/dashboard");
      } else {
        console.log(res?.data?.message || "Error Fetch Data");
        //   toast
        alert(res?.data?.message || "Error Fetch Data");
      }
    } catch (error) {
      console.log("error server", error);
    }
  };
  return (
    <div
      className="login-form bg-blue-1
      00 h-screen overflow-x-clip antialiased flex  justify-center items-center">
      <div className="w-1/3 bg-white flex flex-col justify-center items-center rounded-lg ring-2 ring-blue-500/50  shadow-md p-6">
        <h1 className="my-2 text-3xl font-bold text-blue-500">Login Form</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full">
          <div className="flex flex-col justify-center items-center  ">
            <div className="mt-3 flex flex-col justify-center items-start w-full">
              <label className="text-sm font-semibold">Your Email:</label>
              <input
                className="w-full text-sm p-2 rounded-md ring ring-blue-500"
                type="text"
                name="email"
                placeholder="Your Email"
                value={formLogin.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3 flex flex-col justify-center items-start w-full">
              <label className="text-sm font-semibold">Your Password:</label>
              <input
                className="w-full text-sm p-2 rounded-md ring ring-blue-500"
                type="password"
                name="password"
                placeholder="Your Password"
                value={formLogin.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="login-btn w-full rounded-md mt-3 px-3 py-2 shadow-md text-base text-md font-semibold">
              Login
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
