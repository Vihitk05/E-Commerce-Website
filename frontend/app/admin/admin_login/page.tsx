import React from "react";
import AdminLoginForm from "./adminLoginAuthForm";

const AdminLogin = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="w-1/2 bg-black"></div>
        <div className="w-1/2 p-20 mb-[8%] mt-[7%] flex justify-center">
          <AdminLoginForm />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
