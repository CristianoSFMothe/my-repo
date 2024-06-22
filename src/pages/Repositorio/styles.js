import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background: var(--text-color);
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  imag {
    width: 150px;
    border-radius: 20%;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 1.875rem;
    color: var(--primary-color);
  }

  p {
    margin-top: 5px;
    font-size: 1.125rem;
    color: var(--description-color);
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding: 30px;
  border-top: var(--border);
  list-style-type: none;

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin: 12px;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
    }

    div {
      flex: 1;
      margin-left: 12px;

      p {
        margin-top: 15px;
        font-size: var(--font-size-small);
        color: #000;
      }
    }

    strong {
      font-size: 1.125rem;

      a {
        text-decoration: nome;
        color: #222;
        transition: 0.3s;

        &:hover {
          color: var(--secondary-color);
        }
      }

      span {
        background: #222;
        color: var(--text-color);
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 5px 7px;
        margin-left: 10px;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: 0;
    border: 0;
    background: #222;
    color: var(--text-color);
    padding: 10px 15px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-size: 1.5rem;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      background: #222;
    }

    &:not(:disabled):hover {
      background: #555; 
    }
  }
`;

export const FilterList = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    outline: 0;
    border: 0;
    padding: 8px;
    border-radius: 4px;
    margin: 0 3px;
    font-size: var(--font-size-media);

    &:nth-child(${props => props.active + 1}) {
      background: var(--secondary-color);
      color: var(--text-color);
    }
  }
`;