import { useEffect, useState } from "react";

const Test_liveData = () => {
  const [data, setData] = useState();
  console.log(data);

  const API =
    "https://data.taipei/api/v1/dataset/da80764b-f2b3-4171-935d-c48a02514a03?scope=resourceAquire";

  const callAPI = async (API) => {
    const response = await fetch(API);
    const res_data = await response.json();

    setData(res_data);
  };

  useEffect(() => {
    // callAPI(API);
  }, [data]);

  return <div>132</div>;
};

export default Test_liveData;
