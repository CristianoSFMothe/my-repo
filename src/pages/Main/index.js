/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useCallback, useEffect} from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import {Container, Form, SubmitButton, List, DeleteButton} from './styles';

import api from '../services/api';

export default function Main(){

  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null)

  // Buscar
  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');

    if(repoStorage) {
      setRepositories(JSON.parse(repoStorage));
    }
  }, [])

  //  Salvar alterações
  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositories))
  }, [repositories])


  const handleSubmit = useCallback((event)=>{
    event.preventDefault();

     const submit = async() => {
      setLoading(true);
      setAlert(null);
      try{

        if(newRepo === '') {
          throw new Error('Você precisa informar o nome do repositório');
        }

        const hasRepo = repositories.find(repo => repo.name === newRepo);

        if(hasRepo) {
          throw new Error('Repositório duplicado');
        }

        const response = await api.get(`repos/${newRepo}`);
  
        const data = {
          name: response.data.full_name,
        }
    
        setRepositories([...repositories, data]);
        setNewRepo('');
      }catch(error){
        setAlert(true)
        console.log(error);
      }finally{
        setLoading(false);
      }

    }

    submit();

  }, [newRepo, repositories]);

  const handleInputChange = (event) => {
    setNewRepo(event.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback((repo)=> {
    const find = repositories.filter(r => r.name !== repo);
    setRepositories(find);
  }, [repositories]);


  return(
    <Container>
      
      <h1>
        <FaGithub size={25}/>
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input 
        type="text" 
        placeholder="Adicionar Repositórios"
        value={newRepo}
        onChange={handleInputChange}
        className='searchRepo'
        />

        <SubmitButton loading={loading ? 1 : 0} className='addNewRepo'>
          {loading ? (
            <FaSpinner color="#FFF" size={14}/>
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>

      </Form>

      <List>
         {repositories.map(repo => (
           <li key={repo.name}>
             <span className='listRepo'> 
             <DeleteButton className='deleteRepo' onClick={()=> handleDelete(repo.name)  }>
                <FaTrash size={14}/>
             </DeleteButton>  
             {repo.name}
             </span>
             <a href="" className='optionsRepo'>
               <FaBars size={20}/>
             </a>
           </li>
         ))} 
      </List>

    </Container>
  )
}