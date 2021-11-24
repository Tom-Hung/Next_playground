import style from "./style.module.scss";
import SideBar from "../../components/SideBar";

const navs = ["最新消息", "聯絡我們", "查看物件"];

const LongContent = () => {
  return (
    <div>
      <div className={style.fake_banner}></div>
      <SideBar navs={navs} />
      <div className={style.fake_section_1}></div>
      <div className={style.fake_section_2}></div>
      <div className={style.fake_section_3}></div>
      <div className={style.fake_footer}></div>
    </div>
  );
};

export default LongContent;

// 監聽 scroll，當大於特定值時 sideBar 要動態跟隨
// 點擊 { SideBar 導覽 }
// 滑動 { 對應的頁面位置 }
