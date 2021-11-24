export default function Home({ test }) {
  return <div>132</div>;
}

export const getStaticProps = async (context) => {
  console.log("12");
  return {
    props: { test: "123" },
  };
};
