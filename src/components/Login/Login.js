"use client";
import React from "react";
import Link from "next/link";
import styles from "./Login.module.css";

// Form components
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import FormProvider from "../Form_Components/FormProvider";
import RHFTextField from "../Form_Components/RHFTextField";

const Login = () => {
  //yup
  const Schema = yup.object().shape({
    email: yup.string().required("Este campo debe estar lleno"),
    pass: yup.string().required("Este campo debe estar lleno"),
  });

  // react-hook-form
  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: "",
      pass: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = methods;

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);
    reset();
  };

  const buttonStyle = {
    fontSize: "1.6rem",
    backgroundColor: "var(--primary-red)",
    color: "white",
    width: "100%",
    borderRadius: "15px",
    "&: hover": {
      backgroundColor: "var(--secondary-red)",
    },
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.container_cover}>
        <p className={styles.title}>Bienvenido a la <span className={styles.title_cute}>Pokédex </span></p>
        <img
          alt="pokedex.png"
          src="/general_media/pokedex.png"
          className={styles.image}
        />
      </div>
      <div className={styles.container_from}>
        <p className={styles.title}>Ingresa a tu Pokédex</p>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInputs}>
            <RHFTextField name="email" label="Correo" />
            <RHFTextField name="pass" label="Contraseña" />

            <LoadingButton
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={buttonStyle}
            >
              Enviar
            </LoadingButton>
          </div>
        </FormProvider>
        <div className={styles.container_options}>
          <p> ¿Olvidaste tu contraseña? </p>
          <Link href={"/sing_up"}> Crear cuenta </Link>
        </div>
        <img alt= "pokebola.png" src="/general_media/pokebola.png" className={styles.image_opacity}/>
      </div>
    </div>
  );
};

export default Login;
