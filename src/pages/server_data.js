const Server_Data = ({ test }) => {
  return <div>{test}</div>;
};

export const getServerSideProps = async (context) => {
  return {
    props: { test: "123" },
  };
};

export default Server_Data;
