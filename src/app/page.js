import Chart from "@/components/home/chart/Chart";
import FeaturedInfo from "@/components/home/featuredInfo.jsx/FeaturedInfo";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="ml-72 px-5 py-10 max-[768px]:ml-2 max-[768px]:pt-28">
        <FeaturedInfo />
        <Chart />
      </div>
    </div>
  );
}
