export default function Footer () {
    return(
        <>
        <footer>
              <div className="footer-container">
      <section className="adress-content">
        <h2>Teknolojik Yemekler</h2>
        <div className="adress">
        <img className="icon" src="/assets/iteration-2/footer/icons/icon-1.png"/>
        <p>341 Londonderry Road, Istanbul Türkiye</p>
        </div>
        <div className="mail">
        <img className="icon" src="/assets/iteration-2/footer/icons/icon-2.png"/>
        <p>aciktim@teknolojikyemekler.com</p>
        </div>
        <div className="telephone">
        <img className="icon" src="/assets/iteration-2/footer/icons/icon-3.png"/>
        <p>+90 216 123 45 67</p>
        </div>
      </section>
      <section className="hot-menu">
        <h3>Hot Menu</h3>
        <h4>Terminal Pizza</h4>
        <h4>5 Kişilik Hackathlon Pizza</h4>
        <h4>useEffect Tavuklu Pizza</h4>
        <h4>Beyaz  Console Frosty</h4>
        <h4>Testler Geçti Mutlu Burger</h4>
        <h4>Position Absolute Acı Burger</h4>
      </section>
      <section className="instagram">
        <h3>Instagram</h3>
          <img src="/assets/iteration-2/footer/insta/li-0.png"/>
          <img src="/assets/iteration-2/footer/insta/li-1.png"/>
          <img src="/assets/iteration-2/footer/insta/li-2.png"/>
          <img src="/assets/iteration-2/footer/insta/li-3.png"/>
          <img src="/assets/iteration-2/footer/insta/li-4.png"/>
          <img src="/assets/iteration-2/footer/insta/li-5.png"/>
      </section>
      </div>
      <section className="copyright">
        <p>© 2023 Teknolojik Yemekler.</p>
        <i className="fa-brands fa-twitter"></i>
      </section>
      </footer>
        </>
    )
}