import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById, updateShow } from "../services/shows";
import FormularioEvento from "./FormularioEvento";
import ModalError from "./ModalError";
import ModalExito from "./ModalExito";

export const ActualizarEvento = (props) => {
  const { id } = useParams();
  const initialValues = {
    name: "",
    seat: "",
    dateShow: "",
    amount: "",
  };
  const [shows, setShow] = useState(initialValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  useEffect(() => {
    const getShow = async () => {
      try {
        const response = await getShowById(id);
        setShow(response);
      } catch (error) {
        setError(true);
      }
    };
    getShow();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { name, seat, dateShow, amount } = values;
      const response = await updateShow(name, seat, dateShow, amount, id);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrorForm(true);
    }
  };

  return (
    <>
      {!error ? (
        <FormularioEvento
          initialValues={shows}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
      ) : (
        <h1>No existe ese Evento</h1>
      )}
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"El evento ha sido actualizado correctamente"}
        />
      )}

      {errorForm && (
        <ModalError
          open={errorForm}
          setOpen={setErrorForm}
          message={{
            title: "Ha ocurrido un error",
            description: "Faltan campos, o ya existen",
          }}
        />
      )}
    </>
  );
};
