'use client';
import React from "react";
import Link from "next/link";
import styles from "./LoginBox.module.css";
import { Box } from "@mui/material";

// Form components
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import FormProvider from "../Form_Components/FormProvider";
import RHFTextField from "../Form_Components/RHFTextField";



const LoginBox = () => {

  //yup
  const Schema = yup.object().shape({
    email: yup.string().required("Este campo debe estar lleno"),
    pass: yup.string().required("Este campo debe estar lleno"),
    pass_c: yup.string().required("Este campo debe estar lleno"),
    name: yup.string().required("Este campo debe estar lleno"),
    last_name: yup.string().required("Este campo debe estar lleno"),
  });

  // react-hook-form
  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: "",
      pass: "",
      pass_c: "",
      name: "",
      last_name: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset
  } = methods;

  const onSubmit = async (data) => {
    console.log("Datos del registro:", data);
    reset();
  };

  const buttonStyle = {
    fontSize:'1.6rem',
    backgroundColor:'var(--primary-red)',
    color:'white',
    width:'100%',
    borderRadius:'15px',
    "&: hover":{
        backgroundColor:"var(--secondary-red)"
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_separator}>
        <div className={styles.container_form}>

          <div className={styles.title}>
            Pokedex
          </div>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInputs}>
            <RHFTextField name="email" label="Correo" />
            <RHFTextField name="pass" label="Contraseña" />
            <RHFTextField name="pass_c" label="Confirmar Contraseña" />
            <RHFTextField name="name" label="Nombre" />
            <RHFTextField name="last_name" label="Apellido" />

            <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={buttonStyle}>
              Enviar
            </LoadingButton>
          </div>
          </FormProvider>

          <div className={styles.item}>
            asd
          </div>

          <div className={styles.item}>
            asd
          </div>

          <div className={styles.item}>
            asd
          </div>

          <div className={styles.button}>
            Sing Up
          </div>

        </div>
      </div>

      <div className={styles.container_separator}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1920.000000pt"
          height="1080.000000pt"
          viewBox="0 0 1920.000000 1080.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M10426 10573 c-9 -33 -35 -187 -51 -308 -60 -450 -56 -1040 10 -1480
124 -818 484 -1499 1020 -1932 89 -72 112 -87 118 -76 2 5 -3 56 -11 116 -9
59 -13 110 -9 113 3 4 28 -10 55 -30 48 -34 68 -45 59 -28 -3 4 -8 52 -12 107
-4 55 -9 104 -13 109 -3 5 0 6 6 2 6 -3 36 -47 68 -96 31 -49 60 -88 64 -85 7
4 7 20 -5 195 -21 318 -112 813 -216 1181 -205 727 -503 1378 -913 1994 -127
191 -164 238 -170 218z"
            />
            <path
              d="M18578 8005 c-2 -1 -60 -5 -129 -9 -150 -8 -171 -10 -409 -42 -998
-135 -1859 -526 -2491 -1132 -59 -57 -146 -147 -192 -200 -87 -100 -201 -252
-194 -259 3 -2 91 30 197 72 106 41 194 74 196 72 2 -2 -44 -63 -102 -137 -83
-107 -102 -136 -88 -139 10 -2 60 -1 111 1 51 2 93 1 93 -3 0 -3 -25 -61 -55
-127 -30 -67 -55 -126 -55 -132 0 -7 11 -10 28 -6 15 3 56 8 92 11 117 12 412
74 572 120 881 252 1837 860 2666 1694 101 101 188 193 193 203 10 18 3 19
-210 17 -121 0 -221 -2 -223 -4z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LoginBox;
