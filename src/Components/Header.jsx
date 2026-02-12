export default function Header (props) {
    const {setActivePage} = props;
    return (
    <>
        <header>
        <div className="head-content">
        <h1 className="brand">Teknolojik Yemekler</h1>
        <p className="firsat">fırsatı kaçırma</p>
        <h2 className="soylem">Kod Acıktırır Pizza, Doyurur</h2>
        <button className="head-button btn" onClick={() => setActivePage("order")}>Acıktım</button>
        </div>
        </header>
    </>
    )
}