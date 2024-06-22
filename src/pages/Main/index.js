/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useCallback} from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import {Container, Form, SubmitButton, List, DeleteButton} from './styles';

import api from '../services/api';

export default function Main(){

  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSubmit = useCallback((e)=>{
    e.preventDefault();

     const submit = async() => {
      setLoading(true);
      try{
        const response = await api.get(`repos/${newRepo}`);
  
        const data = {
          name: response.data.full_name,
        }
    
        setRepositories([...repositories, data]);
        setNewRepo('');
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }

    }

    submit();

  }, [newRepo, repositories]);

  const handleInputChange = (e) => {
    setNewRepo(e.target.value);
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

      <Form onSubmit={handleSubmit}>
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