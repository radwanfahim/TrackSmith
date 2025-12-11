import { FiLogIn, FiLogOut } from "solid-icons/fi";
import { AiOutlineEye } from "solid-icons/ai";
import { AiTwotoneEyeInvisible } from "solid-icons/ai";
import { createSignal } from "solid-js";
import Button from "../../../ui/Button";
import SigninGoogle from "./SigninGoogle";

const AuthCard = () => {
  const [showPassword, setShowPassword] = createSignal(false);
  const [confirmPassword, setConfirmPassword] = createSignal(false);
  const [isNewUser, setNewUser] = createSignal(false);
  const [isErr, setErr] = createSignal<string>("");

  // form handler
  const formHandler = async (e: any) => {
    e.preventDefault();

    // form data
    const formData = new FormData(e.target);

    // email password retype password
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const retypePassword = formData.get("retype password") as string;

    if (isNewUser() && password !== retypePassword) {
      return setErr("Passwords do not match");
    }

    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* box */}
      <div class="rounded-2xl shadow-xl p-10 border border-gray-100">
        {/* TODO logo here */}
        <div>
          <img src="" alt="" />
        </div>

        {/* text */}
        <div class="text-center">
          <h1 class="text-cyan-500 font-bold text-4xl">TrackSmith</h1>

          <h1 class="mt-1">
            {isNewUser() ? "Create a new account" : "Sign in to your account"}
          </h1>
        </div>

        {/* form */}
        <form onsubmit={formHandler} class="mt-3 w-[300px]">
          <fieldset class="fieldset">
            {/* name */}
            <div class="">
              <legend class="fieldset-legend text-gray-800">
                Email Address
              </legend>
              <input
                name="email"
                type="email"
                class="input"
                placeholder="user@mail.com"
                required
              />
            </div>

            {/* password */}
            <div>
              <legend class="fieldset-legend text-gray-800">Password</legend>
              <div class=" relative">
                <input
                  type={showPassword() ? "text" : "password"}
                  name="password"
                  class="input"
                  placeholder="Your Password"
                  required
                />
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {showPassword() ? (
                    <AiTwotoneEyeInvisible
                      class="text-xl text-red-600 cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <AiOutlineEye
                      class="text-xl text-green-600 cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* confirm password */}
            {isNewUser() && (
              <div>
                <legend class="fieldset-legend text-gray-800">
                  Confirm Password
                </legend>
                <div class=" relative">
                  <input
                    type={confirmPassword() ? "text" : "password"}
                    name="retype password"
                    class="input"
                    placeholder="Retype Your Password"
                    required
                  />
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {confirmPassword() ? (
                      <AiTwotoneEyeInvisible
                        class="text-xl text-red-600 cursor-pointer"
                        onClick={() => setConfirmPassword(false)}
                      />
                    ) : (
                      <AiOutlineEye
                        class="text-xl text-green-600 cursor-pointer"
                        onClick={() => setConfirmPassword(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SECTION button */}
            {(() => {
              const icon = isNewUser() ? FiLogIn : FiLogOut;
              const text = isNewUser() ? "Create New Account" : "sign in";
              return <Button icon={icon} text={text} />;
            })()}
          </fieldset>
        </form>

        {/* sign in with google */}
        <SigninGoogle />

        {/* error handler */}
        <div class="mt-3">
          <h1 class="text-red-500 text-center">{isErr()}</h1>
        </div>

        {/* new user */}
        <div class="mt-2 text-center">
          {
            <button
              class="cursor-pointer text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
              onclick={() => setNewUser(!isNewUser())}
            >
              {isNewUser()
                ? "Already have an account? Sign in"
                : "Don't have an account "}
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
