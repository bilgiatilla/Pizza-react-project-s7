import BannerCards from "./Components/BannerCards"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MenuSection from "./Components/MenuSection"
import NavCategories from "./Components/Nav-Categories"
import OrderInputForm from "./Components/OrderInputForm"
import { useState } from "react"

export default function App () {
const [activePage, setActivePage] = useState("home");

  return (
    <>
      {activePage === "home" ? (
      <>
        <Header setActivePage={setActivePage}/>
        <NavCategories/>
        <BannerCards/>
        <MenuSection/>
        <Footer/>
      </>
    ) : (
      <>
        <OrderInputForm setActivePage={setActivePage}/>
      </>
    )}
    </>
  );
}