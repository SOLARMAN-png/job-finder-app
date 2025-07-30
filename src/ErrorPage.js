import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="errorPage">
      <h1 className="errorPage-title">ERROR!</h1>
      <h2 className="errorPage-note">404 - Page Not Found</h2>
      <p className="errorPage-solutionNote">
        Click{" "}
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          here
        </a>{" "}
        to go back to the homepage
      </p>
    </div>
  );
};

export default ErrorPage;
