import { SignUp } from "@clerk/clerk-react";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <SignUp />
    </div>
  );
}

export default Register;
