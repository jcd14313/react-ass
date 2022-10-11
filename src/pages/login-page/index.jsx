// Lib
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Context
import { useAuth } from "../../context/auth-context";

// Components
import FormInput from "../../components/form-input";

// Styles
import * as SC from "./styled";

const LoginPage = () => {
  const [apiError, setApiError] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { verifyLogin, loginService } = useAuth();

  useEffect(() => {
    if (verifyLogin()) {
      navigate("/dashboard/students");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async ({ email, password }) => {
    const errors = await loginService(email, password);
    if (errors) {
      setApiError(errors);
      return;
    }

    navigate("/dashboard/students");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        {apiError && (
          <SC.ErrorAlert className="alert alert-danger">
            {apiError}
          </SC.ErrorAlert>
        )}

        <FormInput
          {...register("email", { required: "Email is required" })}
          name="email"
          id="email"
          label="Email"
          labelFor="email"
          error={errors?.email?.message}
        />
        <FormInput
          {...register("password", { required: "Password is required" })}
          name="password"
          id="password"
          label="Password"
          labelFor="password"
          formType="password"
          error={errors?.password?.message}
        />
        <input
          type="submit"
          value="login"
          disabled={!formState.isValid}
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default LoginPage;
