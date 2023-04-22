/* eslint-disable react/no-unescaped-entities */
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Heading from "@/ui/Heading";
import Meta from "@/ui/Meta";
import Button from "@/ui/button/Button";

import { IEmailPassword } from "@/store/user/user.interface";

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import Field from "@/ui/input/Field";
import { validEmail } from "./valid-email";
import Loader from "@/ui/Loader";
import { useAuthRedirect } from "./useAuthRedirect";

const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();

  const { login, register } = useActions();

  const [type, setType] = useState<"signin" | "signup">("signin");

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === "signin") {
      login(data);
    } else {
      register(data);
    }
    reset();
  };

  return (
    <Meta title="Auth">
      <section className="flex h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white shadow-sm p-8 m-auto"
        >
          <Heading className={"capitalize text-center mb-4"}>{type}</Heading>

          {isLoading ? (
            <div className="flex justify-center">
               <Loader />
            </div>
          ) : (
            <>
              <Field
                {...formRegister("email", {
                  required: "Email is required",
                  pattern: {
                    value: validEmail,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Email"
                error={errors.email?.message}
              />
              <Field
                {...formRegister("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Min length should more 5 symbols",
                  },
                })}
                type="password"
                placeholder="Password"
                error={errors.password?.message}
              />
              <div className="flex justify-between">
                <Button className="mt-3" type="submit" variant="orange">
                  Let's go!
                </Button>

                <Button
                  size="md"
                  type="button"
                  className="inline-block opacity-50 mt-3 text-sm"
                  onClick={() =>
                    setType(type === "signin" ? "signup" : "signin")
                  }
                >
                  {type === "signin" ? "Sign up" : "Sign In"}
                </Button>
              </div>
            </>
          )}
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
