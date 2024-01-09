import styles from "./page.module.css";
import MobileBottomNav from "@/components/mobilebottomnav/MobileBottomNav";
import Header from "@/components/header/Header";
import Slider from "@/components/banner/Slider";
import TopBar from "@/components/topcontent/TopBar";
import Deals from "@/components/deals/Deals";
import Footer from "@/components/footer/Footer";
import { DealsData } from "@/demodata/DealsDay";
import { NewArrivals } from "@/demodata/NewArrivals";

export default function Home() {
  return (
    <>
      <MobileBottomNav />
      <main className={styles.main}>
        <TopBar />
        <Header />
        <Slider />
        <Deals title={"TOP DEALS"} dealsData={DealsData}/>
        <Deals title={"NEW ARRIVALS"} dealsData={NewArrivals}/>
        <Footer />
      </main>
    </>
  );
}
