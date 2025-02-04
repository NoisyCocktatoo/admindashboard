import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartbox/ChartBox";
import { chartBoxUser } from "../../data";

const Home = () => {
  return (
    <div className="home">
      <div className="box box-1">
        <TopBox />
      </div>
      <div className="box box-2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-3">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-4">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-5">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-6">Box 6</div>
      <div className="box box-7">Box 7</div>
      <div className="box box-8">Box 8</div>
      <div className="box box-9">Box 9</div>
    </div>
  );
};

export default Home;
