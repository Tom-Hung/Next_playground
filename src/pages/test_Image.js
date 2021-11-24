import Image from "next/image";

function Test_Image({ test }) {
  return (
    <>
      {/* <div style={{ width: "300px", height: "300px", position: "relative" }}>
        <Image
          src="https://picsum.photos/200/300.jpg"
          alt="test"
          layout="fill"
          objectFit="contain"
          objectPosition="top right"
        />
      </div> */}
      {test}
      <div style={{ width: "300px", height: "300px", display: "block" }}>
        <Image
          src="https://picsum.photos/200/300"
          alt="test1"
          width={200}
          height={300}
          layout="responsive"
          sizes="(min-width: 800px) 600px"
        />
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: { test: 10 },
  };
};

export default Test_Image;

// Dependent Fetching

// Conditional Fetching

// Multiple Arguments

// https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/react-swr-485b8e41ef78
