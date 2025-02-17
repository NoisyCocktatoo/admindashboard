import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartbox/ChartBox";
import { chartBoxUser, barData, barDataRevenue, areaData } from "../../data";
import RadarBox from "../../components/radarbox/RadarBox";
import BarBox from "../../components/barBox/BarBox";
import AreaChartBox from "../../components/areaChart/AreaChartBox";

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
        <RadarBox />
      </div>
      <div className="box box-5">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-6">Box 6</div>
      <div className="box box-7">
        <AreaChartBox {...areaData} />
      </div>
      <div className="box box-8">
        <BarBox {...barData} />
      </div>
      <div className="box box-9">
        <BarBox {...barDataRevenue} />
      </div>
    </div>
  );
};

export default Home;
