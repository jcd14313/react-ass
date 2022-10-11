// Lib
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

// Context
import { useMain } from "../../context/main-context";

// Utils
import { getErrors } from "../../utils";

// Components
import FormInput from "../../components/form-input";

// Styles
import * as SC from "./styled";

const CreateStudentPage = () => {
  const { createStudentService } = useMain();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });

  const handleBack = () => {
    navigate("/dashboard/students");
  };

  const handleCreate = (payload) => {
    const resp = createStudentService(payload);

    if (resp.hasError) {
      const error = getErrors(resp.errors);
      toast.error(error);
      return;
    }

    toast.success("Student successfully Created");
    navigate("/dashboard/students");
  };

  return (
    <div className="container mx-auto">
      <SC.Form onSubmit={handleSubmit(handleCreate)}>
        <FormInput
          {...register("id", { required: "ID is required" })}
          name="id"
          id="id"
          label="ID"
          labelFor="id"
          error={errors?.id?.message}
        />

        <FormInput
          {...register("firstName", { required: "First Name is required" })}
          name="firstName"
          id="firstName"
          label="First Name"
          labelFor="firstName"
          error={errors?.firstName?.message}
        />

        <FormInput
          {...register("lastName", { required: "Last Name is required" })}
          name="lastName"
          id="lastName"
          label="Last Name"
          labelFor="lastName"
          error={errors?.lastName?.message}
        />

        <FormInput
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          name="email"
          id="email"
          label="Email"
          labelFor="email"
          error={errors?.email?.message}
        />

        <SC.FieldContainer>
          <SC.Label htmlFor="dob" className="form-label">
            DOB
          </SC.Label>
          <Controller
            control={control}
            name="dob"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={onChange}
                className="form-control"
              />
            )}
          />
          {errors?.dob && <div>{errors?.dob.message}</div>}
        </SC.FieldContainer>

        <SC.ButtonContainer>
          <input type="submit" value="save" className="btn btn-primary mx-2" />
          <input
            type="button"
            onClick={handleBack}
            value="cancel"
            className="btn btn-warning"
          />
        </SC.ButtonContainer>
      </SC.Form>
    </div>
  );
};

export default CreateStudentPage;
