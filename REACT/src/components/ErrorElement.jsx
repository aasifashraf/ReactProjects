import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Opps !! </h1>
      <div>
        <h3>{err.status} :</h3>
        <p>{err.statusText} </p>
      </div>
    </div>
  );
};

export default ErrorElement;
