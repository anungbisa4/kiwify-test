import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ username: null, password: null });

  const handleSubmit = () => {
    if (data?.password === null) {
      setData({ ...data, password: "" });
    }
    if (data?.username === null) {
      setData({ ...data, username: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            src="/images/kiwify-images.png"
            alt="Workflow"
            width={165.52}
            height={48}
            className="mx-auto h-12 w-auto"
          />{" "}
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>{" "}
          <p className="mt-2 text-center text-base leading-[1.25rem] ">
            <span className="text-gray-600">Ou </span>
            <Link href="/signup?redirect=%2Fsignup%C2%A0-">
              <a className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                fazer cadastro
              </a>
            </Link>
          </p>
        </div>{" "}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-[1.25rem] mb-1 text-gray-700"
              >
                E-mail
              </label>{" "}
              <div>
                {/**/}{" "}
                <input
                  type="text"
                  autoComplete="username"
                  name="email"
                  className={`textfield focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-[1.25rem] ${
                    !data.username & (data.username !== null)
                      ? "warning-text"
                      : ""
                  }`}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      return setData({ ...data, username: null });
                    }

                    setData({ ...data, username: e.target.value });
                  }}
                  onBlur={() => {
                    if (!data.username || data.username === null) {
                      setData({ ...data, username: "" });
                    }
                  }}
                />{" "}
                {/**/}
              </div>{" "}
              {/**/}
            </div>{" "}
            <div>
              <div className="text-red-500 text-xs mt-1">
                {!data.username & (data.username !== null)
                  ? "Esse campo é obrigatório"
                  : ""}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-[1.25rem] text-gray-700"
              >
                Senha
              </label>{" "}
              <div>
                {/**/}{" "}
                <input
                  type="password"
                  autoComplete="current-password"
                  name="password"
                  className={`textfield focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-[1.25rem] ${
                    !data.password & (data.password !== null)
                      ? "warning-text"
                      : ""
                  }`}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      return setData({ ...data, password: null });
                    }

                    setData({ ...data, password: e.target.value });
                  }}
                  onBlur={() => {
                    if (!data.password || data.password === null) {
                      setData({ ...data, password: "" });
                    }
                  }}
                />{" "}
                {!data.password & (data.password !== null) ? (
                  <div className="text-red-500 text-xs mt-1">
                    <div>Esse campo é obrigatório</div>
                  </div>
                ) : (
                  ""
                )}
                {/**/}
              </div>
            </div>{" "}
            <div className="mt-2 flex items-center justify-end">
              <div className="text-sm leading-[1.25rem]">
                <Link href="/reset-password">
                  <a className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Esqueceu a senha?
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/**/}{" "}
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  {/**/} Entrar
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
