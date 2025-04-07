import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-full overflow-y-hidden">
      <SignIn />
    </div>
  );
}

export default Login;
