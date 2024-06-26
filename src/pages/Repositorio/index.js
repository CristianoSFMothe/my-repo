import React, { useState, useEffect } from "react";
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
  FilterList,
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import api from "../services/api";

const Repositorio = ({ match }) => {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([
    { label: "Todas", state: "all", active: true },
    { label: "Abertas", state: "open", active: false },
    { label: "Fechadas", state: "closed", active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0)

  useEffect(() => {
    const load = async () => {
      const nameRepo = decodeURIComponent(match.params.repositorio);

      const [repositoryData, issueData] = await Promise.all([
        api.get(`/repos/${nameRepo}`),
        api.get(`/repos/${nameRepo}/issues`, {
          params: {
            state: filters.find(filter => filter.active).state,
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

  useEffect(() => {
    const loadIssue = async () => {
      const nameRepo = decodeURIComponent(match.params.repositorio);

      const response = await api.get(`/repos/${nameRepo}/issues`, {
        params: {
          state: filters[filterIndex].state,
          per_page: 5,
          page,
        },
      });

      setIssues(response.data);
    };

    loadIssue();
  }, [filterIndex, filters, match.params.repositorio, page]);

  const handlePage = (action) => {
    setPage(action === "back" ? page - 1 : page + 1);
  };

  const handleFilter = (index) => {
    setFilterIndex(index);
  }

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

      <FilterList active={filterIndex}>
        {filters.map((filter, index) => (
          <button
            type="button"
            key={filter.label}
            onClick={() => handleFilter(index)}
          >
            {filter.label}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img
              src={issue.user.avatar_url}
              alt={issue.user.login}
              className="profile_owner_issue"
            />

            <div>
              <strong>
                <a href={issue.html_url} className="issue_url">
                  {issue.title}
                </a>

                <br />
                <br />

                {issue.labels.map((label) => (
                  <span key={String(label.id)} className="issue">
                    {label.name}
                  </span>
                ))}
              </strong>

              <p className="owner_issue">{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button
          type="button"
          className="btn_return"
          onClick={() => handlePage("back")}
          disabled={page < 2}
        >
          Voltar
        </button>
        <button
          type="button"
          className="btn_next"
          onClick={() => handlePage("next")}
        >
          Próxima
        </button>
      </PageActions>
    </Container>
  );
};

export default Repositorio;
