import React, { useCallback } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";

import LogoImg from "../assets/logo.svg";

import Input from "../components/Input";
import Button from "../components/Button";

import { Container, Content, Background } from "./styles";

const SignUp: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().min(6, "Mínimo 6 digitos "),
      });

      await schema.validate(data, {
        abortEarly: false, // pra retornar todos os erros de uma vez
      }); // dados q recebi do input
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={LogoImg} alt="Logo GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
