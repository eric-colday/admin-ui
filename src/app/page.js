import FeaturedInfo from "@/components/home/featuredInfo.jsx/FeaturedInfo";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <FeaturedInfo />
    </div>
  );
}
