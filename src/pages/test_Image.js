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

// 使用重點 :
//------------------------------------------------------------------
// Image src 用 import 不用定義 width / height
// Image src 參考路徑 要明確定義 width / height
//------------------------------------------------------------------
// 此處 responsive 指的是一張圖有多種解析度 ( srcset ) 版本而非寬與高

// - 需要 responsive 效果用 => responsive / fill
//   -> responsive 的 width / height 指的是圖片比例
//   -> 清楚比例使用 res，不清楚使用 fill
//   -> fill 要在父層加入 position:relative

// - 不需要 responsive 效果用 => intrinsic / fixed
//   -> intrinsic 依然可以拉伸圖片寬高，但沒有 responsive
//------------------------------------------------------------------
//  LCP 問題 => priority={true} 相當於 preload
