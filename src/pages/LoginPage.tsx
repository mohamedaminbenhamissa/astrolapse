import LoginInput from "@/components/LoginInputs";
import Logo from "../components/Logo";

const LoginPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(110deg, rgba(255,255,255,1) 50%, rgba(233,233,233,1) 50%)",
      }}
      className="flex w-full"
    >
      <div className="basis-[60%]">
        <Logo />
      </div>
      <div className="basis-[40%]  mt-[11%]">
        <LoginInput />
      </div>
    </div>
  );
};

export default LoginPage;
