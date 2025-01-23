import "./index.css";
import classicWhiteShirtImg from "./items/classic-white-tshirt.jpg";
import denimJacketImg from "./items/denim-jacket.jpg";
import floralSummerDressImg from "./items/floral-summer-dress.jpg";
import blackSkinnyJeansImg from "./items/black-skinny-jeans.png";
import casualPoloShirtImg from "./items/casual-polo-shirt.png";
import redMidiSkirtImg from "./items/red-midi-skirt.png";
import graphicTShirtImg from "./items/graphic-tshirt.png";
import leatherJacketImg from "./items/leather-jacket.png";
import cozyHoodieImg from "./items/cozy-hoodie.png";
import cottonTankTopImg from "./items/cotton-tank-top.png";
import formalBlazerImg from "./items/formal-blazer.png";
import pleatedMaxiSkirtImg from "./items/pleated-maxi-skirt.png";
import chinoPantsImg from "./items/chino-pants.png";
import sweaterVestImg from "./items/sweater-vest.png";
import athleticJoggersImg from "./items/athletic-joggers.png";
import stripedLongSleeveImg from "./items/striped-long-sleeve.png";
import highWaistedShortsImg from "./items/high-waisted-shorts.png";
import cargoPantsImg from "./items/cargo-pants.png";
import knittedCardiganImg from "./items/knitted-cardigan.png";
import baseballCapImg from "./items/baseball-cap.png";
import { useState } from "react";

const clothes = [
  {
    id: 1,
    name: "Classic White Shirt",
    type: "shirt",
    sex: "unisex",
    price: 25.99,
    image: classicWhiteShirtImg,
  },
  {
    id: 2,
    name: "Denim Jacket",
    type: "jacket",
    sex: "male",
    price: 49.99,
    image: denimJacketImg,
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    type: "dress",
    sex: "female",
    price: 35.99,
    image: floralSummerDressImg,
  },
  {
    id: 4,
    name: "Black Skinny Jeans",
    type: "jeans",
    sex: "female",
    price: 29.99,
    image: blackSkinnyJeansImg,
  },
  {
    id: 5,
    name: "Casual Polo Shirt",
    type: "shirt",
    sex: "male",
    price: 19.99,
    image: casualPoloShirtImg,
  },
  {
    id: 6,
    name: "Red Midi Skirt",
    type: "skirt",
    sex: "female",
    price: 27.99,
    image: redMidiSkirtImg,
  },
  {
    id: 7,
    name: "Graphic T-Shirt",
    type: "shirt",
    sex: "unisex",
    price: 15.99,
    image: graphicTShirtImg,
  },
  {
    id: 8,
    name: "Leather Jacket",
    type: "jacket",
    sex: "male",
    price: 79.99,
    image: leatherJacketImg,
  },
  {
    id: 9,
    name: "Cozy Hoodie",
    type: "hoodie",
    sex: "unisex",
    price: 34.99,
    image: cozyHoodieImg,
  },
  {
    id: 10,
    name: "Cotton Tank Top",
    type: "tank top",
    sex: "female",
    price: 12.99,
    image: cottonTankTopImg,
  },
  {
    id: 11,
    name: "Formal Blazer",
    type: "blazer",
    sex: "male",
    price: 59.99,
    image: formalBlazerImg,
  },
  {
    id: 12,
    name: "Pleated Maxi Skirt",
    type: "skirt",
    sex: "female",
    price: 31.99,
    image: pleatedMaxiSkirtImg,
  },
  {
    id: 13,
    name: "Chino Pants",
    type: "pants",
    sex: "male",
    price: 26.99,
    image: chinoPantsImg,
  },
  {
    id: 14,
    name: "Sweater Vest",
    type: "vest",
    sex: "unisex",
    price: 23.99,
    image: sweaterVestImg,
  },
  {
    id: 15,
    name: "Athletic Joggers",
    type: "pants",
    sex: "unisex",
    price: 29.99,
    image: athleticJoggersImg,
  },
  {
    id: 16,
    name: "Striped Long Sleeve",
    type: "shirt",
    sex: "female",
    price: 18.99,
    image: stripedLongSleeveImg,
  },
  {
    id: 17,
    name: "High-Waisted Shorts",
    type: "shorts",
    sex: "female",
    price: 22.99,
    image: highWaistedShortsImg,
  },
  {
    id: 18,
    name: "Cargo Pants",
    type: "pants",
    sex: "male",
    price: 33.99,
    image: cargoPantsImg,
  },
  {
    id: 19,
    name: "Knitted Cardigan",
    type: "cardigan",
    sex: "female",
    price: 39.99,
    image: knittedCardiganImg,
  },
  {
    id: 20,
    name: "Baseball Cap",
    type: "accessory",
    sex: "unisex",
    price: 14.99,
    image: baseballCapImg,
  },
];

function App() {
  const [filters, setFilters] = useState({
    sex: "All",
    type: "All",
    price: "All",
  });

  function handleFilterChange(newFilters) {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }

  const filteredClothes = clothes.filter((clothe) => {
    const matchesSex =
      filters.sex === "All" ||
      clothe.sex.toLowerCase() === filters.sex.toLowerCase();
    const matchesType =
      filters.type === "All" ||
      clothe.type.toLowerCase() === filters.type.toLowerCase();
    const matchesPrice =
      filters.price === "All" ||
      (filters.price === "under30" && clothe.price < 30) ||
      (filters.price === "under50" && clothe.price < 50) ||
      (filters.price === "under70" && clothe.price < 70) ||
      (filters.price === "under100" && clothe.price < 100);

    return matchesSex && matchesType && matchesPrice;
  });

  return (
    <>
      <Header />
      <Main clothes={filteredClothes} onFilterChange={handleFilterChange} />
    </>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h4>Trendy Threads</h4>
        <ul className="navItems">
          <li>home</li>
          <li>shop</li>
          <li>products</li>
        </ul>
      </nav>
      <div className="title">
        <h1>Trendy Threads</h1>
        <h2>Style for Every Story</h2>
      </div>
    </header>
  );
}

function Main({ clothes, onFilterChange }) {
  return (
    <main>
      <div className="mainFilter">
        <h3>Shop</h3>
        <Filters onFilterChange={onFilterChange} />
      </div>

      <div className="clotheItems">
        {clothes.map((clothe) => (
          <div key={clothe.id} className="item">
            <img src={clothe.image} alt={clothe.name} />
            <p className="itemTitle">{clothe.name}</p>
            <p>$ {clothe.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function Filters({ onFilterChange }) {
  const [sex, setSex] = useState("All");
  const [type, setType] = useState("All");
  const [price, setPrice] = useState("All");

  function handleSelectSex(e) {
    const value = e.target.value;
    setSex(value);
    onFilterChange({ sex: value });
  }

  function handleSelectType(e) {
    const value = e.target.value;
    setType(value);
    onFilterChange({ type: value });
  }

  function handleSelectPrice(e) {
    const value = e.target.value;
    setPrice(value);
    onFilterChange({ price: value });
  }

  return (
    <div className="filters">
      <p className="filterTitle">Filter by</p>
      <div>
        <label>Sex</label>
        <select value={sex} onChange={handleSelectSex}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>
      <div>
        <label>Type</label>
        <select value={type} onChange={handleSelectType}>
          <option value="All">All</option>
          <option value="shirt">Shirt</option>
          <option value="dress">Dress</option>
          <option value="jeans">Jeans</option>
          <option value="tank-top">Tank Top</option>
          <option value="pants">Pants</option>
          <option value="skirt">Skirt</option>
          <option value="cardigan">Cardigan</option>
          <option value="shorts">Shorts</option>
          <option value="accessory">Accessories</option>
        </select>
      </div>
      <div>
        <label>Price</label>
        <select value={price} onChange={handleSelectPrice}>
          <option value="All">All</option>
          <option value="under30">Under $30</option>
          <option value="under50">Under $50</option>
          <option value="under70">Under $70</option>
          <option value="under100">Under $100</option>
        </select>
      </div>
    </div>
  );
}
