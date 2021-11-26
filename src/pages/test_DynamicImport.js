import _ from "lodash";
import { isEmpty, debounce, throttle } from "lodash-es";

const DynamicImport = () => {
  const handleClick = () => {
    isEmpty(null);
    const Bo = debounce(() => console.log(123), 1000);
    Bo();
  };

  return (
    <div>
      <div onClick={handleClick}>Click Me !</div>
    </div>
  );
};

export default DynamicImport;
