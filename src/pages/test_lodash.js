// 載入非 es module 的套件，如 lodash 就無法讓 webpack tree shake，導致載入過多部必要的檔案
// 如何縮減 ?
// ---------------------------------------------------------------

// 1. 此種載入方式原始資料 500 kb，因為會把 lodash 全部載入後在解構
// import { isEmpty } from "lodash";

// ---------------------------------------------------------------

// 2. 此種載入方式原始資料 24 kb
// import isEmpty from "lodash/isEmpty";

// ---------------------------------------------------------------

// 3. 此種載入方式原始資料 24 kb，使用 lodash-es 套件
import { isEmpty } from "lodash-es";

// ---------------------------------------------------------------

// 4. 此種載入方式原始資料 24 kb，使用 babel 套件將方法 1 改成方法 2

// ---------------------------------------------------------------

const Test_lodash = ({ test }) => {
  return <>{isEmpty(test) ? test : ""}</>;
};

export default Test_lodash;

//　使用到的套件 :
// 1. lodash 函式庫 js
// 2. lodash-es 函式庫 js es 版本
// 3. babel-plugin-import 改變 import 方式
// 4. @next/bundle-analyzer 視覺化呈現打包後檔案大小
