import ModalExito from "./ModalExito";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Formu() {
  const [contactoOk, setContactoOk] = useState(false);

  return (
    <>
      <div className="sm:mt-0 p-4">
        {contactoOk && (
          <ModalExito
            open={contactoOk}
            setOpen={setContactoOk}
            message="Formulario enviado correctamente"
          />
        )}
        <div className="md:mt-0 md:col-span-2 ">
          <form>
            <div className="shadow overflow-hidden rounded-lg ">
              <div className="px-4 py-5 bg-[#ffffffd8] sm:p-6">
                <h1 className="font-bold text-center text-3xl mb-5 text-[#000000cb]">
                  Contactese con nosotros
                </h1>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mensaje
                    </label>

                    <textarea
                      type="about"
                      name="about"
                      id="about"
                      autoComplete="street-address"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="text-right pt-4">
                  <button
                    to="#"
                    onClick={() => {
                      setContactoOk(true);
                    }}
                    type="button"
                    className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00adad] hover:bg-[#00adad86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
