import { useForm } from "react-hook-form";
import { Input } from "@core/components/input/Input";
import { Button } from "@/core/components";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@core/components"

import { organizationTypeOptions } from "../../types/interfaces/organizationType"

import { useSignUpMutation } from "@api/services/authApi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpMutation = useSignUpMutation();

  const registerSubmitHandler = async (data: any) => {
    try {
      console.log(data);
      await signUpMutation.mutateAsync(data);

      console.log("User registered successfully");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form
      className="w-10/12 md:w-8/12 mx-auto"
      onSubmit={handleSubmit(registerSubmitHandler)}
    >
      <h1 className="text-3xl">Register Your Organization into JamiiHub</h1>
      <div className="my-4">
        <Input
          label="First and Last Name"
          type="text"
          placeholder="Enter First and Last Name"
          {...register("FirstLastName", { required: "Field is required" })}
        />
        {errors.FirstLastName && (
          <p className="text-red-500">{errors.FirstLastName.message as ReactNode}</p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email address"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message as ReactNode}</p>
        )}
      </div>

      <div className="mb-4">
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message as ReactNode}</p>
        )}
      </div>

      <div className="mb-4">
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          {...register("confirm_password", { required: "Password is required" })}
        />
        {errors.confirm_password && (
          <p className="text-red-500">{errors.confirm_password.message as ReactNode}</p>
        )}
      </div>

      <div className="mb-4">
        <Input
          label="Organization Name"
          type="text"
          placeholder="Enter your organization name"
          {...register("organization_name", {
            required: "Organization name is required",
          })}
        />
        {errors.organization_name && (
          <p className="text-red-500">
            {errors.organization_name.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Company Address"
          type="text"
          placeholder="Enter your company address"
          {...register("company_address", {
            required: "Company address is required",
          })}
        />
        {errors.company_address && (
          <p className="text-red-500">
            {errors.company_address.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="industry">Select Organization Type</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Organization" />
          </SelectTrigger>
          <SelectContent>
            {organizationTypeOptions.map((option: any) => (
              <SelectItem key={option.optionId} value={option.name}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.industry && (
          <p className="text-red-500">{errors.industry.message as ReactNode}</p>
        )}
      </div>

      <div className="mb-4">
        <Input
          label="Contact Person Name"
          type="text"
          placeholder="Enter contact person name"
          {...register("contact_person_name", {
            required: "Contact person name is required",
          })}
        />
        {errors.contact_person_name && (
          <p className="text-red-500">
            {errors.contact_person_name.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Input
          label="Contact Email"
          type="email"
          placeholder="Enter contact email"
          {...register("contact_email", {
            required: "Contact email is required",
          })}
        />
        {errors.contact_email && (
          <p className="text-red-500">
            {errors.contact_email.message as ReactNode}
          </p>
        )}
      </div>

      <Button type="submit">
        {signUpMutation.isLoading ? "Registering..." : "Register"}
      </Button>
      {/* TODO: USE NOTIFICATION FOR REGISTRATION FAILURE, SUCCESS, etc */}

      <div className="my-3">
        Or <Link to="/login">Login instead</Link>
      </div>


    </form>
  );
}

export default Register;