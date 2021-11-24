import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Test() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="App">
      <h2>Basic Data Loading</h2>
      <p>use id: {data.userid}</p>
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
      <p>completed: {data.completed ? "True" : "False"}</p>
    </div>
  );
}

export default Test;

// Dependent Fetching

// Conditional Fetching

// Multiple Arguments

// https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/react-swr-485b8e41ef78
