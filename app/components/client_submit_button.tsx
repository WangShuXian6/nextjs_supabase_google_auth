'use client';

import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "./loading_spinner";

export default function ClientSubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        bg-blue-500 text-white px-4 py-2 rounded
        hover:bg-blue-700 transition duration-300
        flex items-center space-x-2
        ${pending ? "opacity-70 cursor-not-allowed" : ""}
      `}
    >
      {pending ? (
        <>
          <LoadingSpinner />
          <span>登录中...</span>
        </>
      ) : (
        "Google Login"
      )}
    </button>
  );
}