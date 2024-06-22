import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus } from "react-icons/fa";

import { Container, Form, SubmitButton } from "./styles";

import api from "../services/api";

const Main = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const submit = async () => {
      const response = await api.get(`repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      setRepositories([...repositories, data]);
      setNewRepo("");
    }

    submit()

  }, [newRepo, repositories]);

  const handleInputChange = (event) => {
    setNewRepo(event.target.value);
  };

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar Repositório"
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton>
          <FaPlus size={14} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;
