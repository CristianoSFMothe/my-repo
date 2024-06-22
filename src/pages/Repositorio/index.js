import React, { useState, useEffect } from "react";
import { Container, Owner, Loading, BackButton, IssuesList } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import api from "../services/api";

const Repositorio = ({ match }) => {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const nameRepo = decodeURIComponent(match.params.repositorio);

      const [repositoryData, issueData] = await Promise.all([
        api.get(`/repos/${nameRepo}`),
        api.get(`/repos/${nameRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(issueData.data);
      setLoading(false);
    };

    load();
  }, [match.params.repositorio]);

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/" className="back_button">
        <FaArrowLeft size={30} color="#000" />
      </BackButton>
      <Owner>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} className="profile_owner_issue" />

            <div>
              <strong>
                <a href={issue.html_url} className="issue_url">{issue.title}</a>

                <br />
                <br />

                {issue.labels.map((label) => (
                  <span key={String(label.id)} className="issue">{label.name}</span>
                ))}
              </strong>
                
                <p className="owner_issue">{issue.user.login}</p>

            </div>
          </li>
        ))}
      </IssuesList>
    </Container>
  );
};

export default Repositorio;
