import { MAIN_BG_IMG } from "../utils/constants";

export const BasicBgWithHeader = ({ Header, shade }) => {
  return (
    <div className="retilive">
      <div className="absolute z-7 top-0 left-1/2 -translate-x-1/2">
        {Header && <Header />}
      </div>
      <div className="relitive ">
        <div className="absolute inset-0 bg-red-800" />
        <img
          src={MAIN_BG_IMG}
          className="h-dvh w-[95%] m-auto block border-x-5 border-red-500 border-b-8 absolute inset-0"
        ></img>
        <div
          className="absolute inset-0 pointer-events-none z-6"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,0.8), transparent ${
                shade + 40
              }% ),
              linear-gradient(to bottom, rgba(0,0,0,0.8), transparent ${shade}% ),
              linear-gradient(to left, rgba(0,0,0,0.8), transparent ${shade}% ),
              linear-gradient(to right, rgba(0,0,0,0.8), transparent ${shade}% )
              `,
            backgroundBlendMode: "multiply",
          }}
        />
      </div>
    </div>
  );
};
