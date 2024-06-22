import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";

import { Container, Form, SubmitButton } from "./styles";

import api from "../services/api";

const Main = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const submit = async () => {
      setLoading(true)

      try{

        const response = await api.get(`repos/${newRepo}`);
  
        const data = {
          name: response.data.full_name,
        };
  
        setRepositories([...repositories, data]);
        setNewRepo("");
      }catch(error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
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

        <SubmitButton loading={loading ? 1 : 0 }>
          {
            loading ? (
              <FaSpinner size={14} color="#FFF" />  
            ) : (
              <FaPlus size={14} color="#FFF" />
            )
          }
          
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;
