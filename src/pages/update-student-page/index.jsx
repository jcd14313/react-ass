// Lib
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

// Context
import { useMain } from "../../context/main-context";

// Hooks
import useStudent from "../../hooks/useStudent";

// Utils
import { getErrors } from "../../utils";

// Components
import PageContainer from "../../components/page-container";
import ErrorAlert from "../../components/error-alert";
import FormInput from "../../components/form-input";

// styles
import * as SC from "./styled";

const UpdateStudentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: student, loading, error } = useStudent(id);
  const { updateStudentService } = useMain();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });

  const handleUpdate = async (payload) => {
    const _id = student._id;
    const resp = await updateStudentService(payload, _id);

    if (resp.hasError) {
      const error = getErrors(resp);
      toast.error(error);
      return;
    }

    toast.success("Student successfully updated");
  };

  const handleBack = () => {
    navigate("/dashboard/students");
  };

  if (loading) {
    return (
      <PageContainer>
        <p>
          <strong>Loading...</strong>
        </p>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorAlert msg="Unable to load this student" />
      </PageContainer>
    );
  }

  return (
    <div className="container mx-auto">
      <SC.Form onSubmit={handleSubmit(handleUpdate)}>
        <FormInput
          {...register("id", { required: "ID is required" })}
          name="id"
          id="id"
          label="ID"
          labelFor="id"
          defaultValue={student?.id}
          error={errors?.id?.message}
        />

        <FormInput
          {...register("firstName", { required: "First Name is required" })}
          name="firstName"
          id="firstName"
          label="First Name"
          labelFor="firstName"
          defaultValue={student?.firstName}
          error={errors?.firstName?.message}
        />

        <FormInput
          {...register("lastName", { required: "Last Name is required" })}
          name="lastName"
          id="lastName"
          label="Last Name"
          labelFor="lastName"
          defaultValue={student?.lastName}
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
          defaultValue={student?.email}
          error={errors?.email?.message}
        />

        <SC.FieldContainer>
          <SC.Label htmlFor="dob" className="form-label">
            DOB
          </SC.Label>
          <Controller
            control={control}
            name="dob"
            defaultValue={new Date(student?.dob)}
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
          <input
            type="submit"
            value="update"
            className="btn btn-primary btn btn-primary mx-2"
          />
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

export default UpdateStudentPage;
