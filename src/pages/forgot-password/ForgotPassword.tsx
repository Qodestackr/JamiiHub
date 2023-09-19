import { useForm } from "react-hook-form";
import { Input } from "@core/components/input/Input";
import { Button } from "@/core/components";

import { useSignUpMutation } from "@api/services/authApi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
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
    <section className="w-[40vw] mx-auto">
      <form
        className="w-[40vw] mx-auto"
        onSubmit={handleSubmit(registerSubmitHandler)}
      >
        <h1 className="text-3xl mb-2">Reset Password</h1>
        <div className="mb-4">
          <Input
            label="Phone/Email"
            type="text"
            placeholder="Enter phone or email"
            {...register("phoneOrEmail", { required: "This field is required" })}
          />
          {errors.phoneOrEmail && (
            <p className="text-red-500">{errors.phoneOrEmail.message as ReactNode}</p>
          )}
        </div>

        {/* TODO: USE NOTIFICATION FOR FORGOT PASSWORD FAILURE, SUCCESS, etc */}


        <Button type="submit">
          {signUpMutation.isLoading ? "..." : "Reset Password"}
        </Button>

        <div className="my-6">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </section>
  );
}
