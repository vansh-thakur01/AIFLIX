import { BasicBgWithHeader } from "./BasicBgWithHeader";
import Header from "./Header";

const Home = () => {
    return (
      <BasicBgWithHeader
        Header={()=><Header signin={true}/>}
        shade={20}
      />
    );
}

export default Home;

