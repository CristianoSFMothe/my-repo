import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #FFF;
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
    font-size: 0.875rem;
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
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
    }

    div {
      flex: 1;
      margin-left: 12px;

      p {
        margin-top: 15px;
        font-size: 0.75rem;
        color: #000;
      }
    }

    strong {
      font-size: 0.938rem;

      a {
        text-decoration: nome;
        color: #222;
        transition: 0.3s;

        &:hover {
          color: #0071db;
        }
      }

      span {
        background: #222;
        color: #FFF;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 5px 7px;
        margin-left: 10px;
      }
    }
  }
`;