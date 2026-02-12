export default function MenuCard () {
    return(
        <>
        <section className="product-list">
      <div className="product terminal-pizza">
        <img className="product-img" src="/assets/iteration-2/pictures/food-1.png" alt="terminal-pizza"/>
        <h3>Terminal Pizza</h3>
        <h5>4.9</h5>
        <p>(200)</p>
        <h4>60₺</h4>
      </div>
      <div className="product position-pizza">
        <img className="product-img" src="/assets/iteration-2/pictures/food-2.png" alt="position-pizza"/>
        <h3>Position Absolute Acı Pizza</h3>
        <h5>4.9</h5>
        <p>(200)</p>
        <h4>60₺</h4>
      </div>
      <div className="product effect-burger">
        <img className="product-img" src="/assets/iteration-2/pictures/food-3.png" alt="effect-burger"/>
        <h3>useEffect Tavuklu Burger</h3>
        <h5>4.9</h5>
        <p>(200)</p>
        <h4>60₺</h4>
      </div>
    </section>
        </>
    )
}