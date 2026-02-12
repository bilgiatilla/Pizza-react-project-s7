import { useState } from "react";
import "./Additional.css";
import toppingData from "./Topping.json";

export function Additional () {

    const [selectedTopping, setSelectedTopping] = useState([]);
    const maxSelection = 10;
    const minSelection = 4;

    const handleChange = (topping) => {

     if (selectedTopping.includes(topping)) {
        setSelectedTopping(
        selectedTopping.filter(item => item !== topping)
      );
     } else {
        if (selectedTopping.length >= maxSelection) {
            alert("En fazla 10 malzeme seçebilirsiniz!");
            return;
        }
        setSelectedTopping([...selectedTopping, topping]);
        }
    };
        const handleSubmit = (e) => {
            e.preventDefault();

            if (selectedTopping.length < minSelection) {
                alert("En az 4 malzeme seçmelisiniz!");
                return;
            }
        }
        console.log("Seçilenler:", selectedTopping)

    return (
        <div>
        <h3>Ek Malzemeler</h3>
        <p>En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺</p>

        <form onSubmit={handleSubmit}>
        {toppingData.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            checked={selectedTopping.includes(item.name)}
            value={item.name}
            onChange={() => handleChange(item.name)}
          />
          {item.name}
        </label>
      ))}
        <button type="submit">Onayla</button>
        </form>
        <p>Seçilen Malzeme Sayısı: {selectedTopping.length}</p>
        </div>
    );
}