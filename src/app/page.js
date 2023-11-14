import Chart from "@/components/home/chart/Chart";
import FeaturedInfo from "@/components/home/featuredInfo.jsx/FeaturedInfo";
import WidgetLeft from "@/components/home/widgetLeft/WidgetLeft";
import WidgetRight from "@/components/home/widgetRight/WidgetRight";
import Sidebar from "@/components/home/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="ml-72 px-5 py-10 max-[818px]:ml-2 max-[818px]:pt-28">
        <FeaturedInfo />
        <Chart />
        <div className="flex mt-10 gap-5 max-[1339px]:flex-col ">
          <WidgetRight />
          <WidgetLeft />
        </div>
      </div>
    </div>
  );
}
