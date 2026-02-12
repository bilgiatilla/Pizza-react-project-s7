import "./OrderSize.css";

export function OrderSize() {
  return (
    <form>
      <section className="order-radio-button">
        <h2>Boyut Seç</h2>
        <label htmlFor="bigSize">
          <input id="bigSize" type="radio" name="size" value="Büyük" />
          Büyük
        </label>
        <label htmlFor="middleSize">
          <input id="middleSize" type="radio" name="size" value="Orta" />
          Orta
        </label>
        <label htmlFor="smallSize">
          <input id="smallSize" type="radio" name="size" value="Küçük" />
          Küçük
        </label>
      </section>
    </form>
  );
}
