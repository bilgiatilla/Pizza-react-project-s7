import MenuCards from "./MenuCard";

export default function MenuSection () {
    return(
        <> 
    <section className="bottom-content">
      <h3>en çok paketlenen menüler</h3>
      <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
      <nav className="menu-list">
        <a href="#"><img src="/assets/iteration-2/icons/1.svg"/>Ramen</a>
        <a href="#"><img src="/assets/iteration-2/icons/2.svg"/>Pizza</a>
        <a href="#"><img src="/assets/iteration-2/icons/3.svg"/>Burger</a>
        <a href="#"><img src="/assets/iteration-2/icons/4.svg"/>French fries</a>
        <a href="#"><img src="/assets/iteration-2/icons/5.svg"/>Fast food</a>
        <a href="#"><img src="/assets/iteration-2/icons/6.svg"/>Soft drinks</a>
      </nav>
    </section>
        <MenuCards/>
        </>
    )
}