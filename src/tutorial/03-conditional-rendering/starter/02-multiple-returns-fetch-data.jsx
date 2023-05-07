import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>An error occured!</h2>;
  }

  return (
    <div>
      <img
        src={user.avatar_url}
        style={{ width: "150px", borderRadius: "15px" }}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>Works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
