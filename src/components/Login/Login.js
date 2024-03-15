"use client";
import React, {useState} from "react";
import Link from "next/link";
import styles from "./Login.module.css";
import { IconButton, InputAdornment } from '@mui/material';
import { Icon } from "@iconify/react";
// Form components
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import FormProvider from "../Form_Components/FormProvider";
import RHFTextField from "../Form_Components/RHFTextField";

import useTest from "./hook/useTest";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const params = {
    semana_id: "10",
    seccion_id: "A1",
  }

  const {data}= useTest(params);
  
  //yup
  const Schema = yup.object().shape({
    email: yup
      .string()
      .email("El email debe ser válido")
      .required("Este campo debe estar lleno"),
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
        <p className={styles.title}>
          Bienvenido a la <span className={styles.title_cute}>Pokédex </span>
        </p>
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
            <RHFTextField
              name="pass"
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Icon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

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
        <img
          alt="pokebola.png"
          src="/general_media/pokebola.png"
          className={styles.image_opacity}
        />
      </div>
    </div>
  );
};

export default Login;
