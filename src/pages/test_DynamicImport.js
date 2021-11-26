// 即便使用者沒有點擊按鈕也會載入
import Modal from "../components/Modal";
import { useState } from "react";

const DynamicImport = () => {
  const [display, setDisplay] = useState();

  return (
    <div>
      <h1>Title</h1>
      {/* 這裡可以使用 dynamic import */}
      {display && <Modal />}
      <button onClick={() => setDisplay(true)}>Open Modal</button>
      <p> Page content</p>
    </div>
  );
};

export default DynamicImport;

// Modal、Drawer ... 等不是每個使用者都會用到的 component 可以使用 dynamic import 簡煥載入過多資源的負擔
