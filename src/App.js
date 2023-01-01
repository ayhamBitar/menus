import "./App.css";
import React from "react";
import menu from "./data";
import Menus from "./Menus";

function App() {
  const [menuList, setMenuList] = React.useState(menu);
  const [filteredList, setFilterList] = React.useState(menuList);
  const availableCategories = [
    "all",
    ...new Set(menu.map((item) => item.category)),
  ];
  const filterMenus = (cat) => {
    if (cat === "all") {
      setFilterList(menuList);

      return;
    }
    const newList = menuList.filter((item) => item.category === cat);
    setFilterList(newList);
  };
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Our Menu</h1>
          <div className="category-btn-cont"></div>
        </header>
        <div className="btns-container">
          {availableCategories.map((avlCat, index) => (
            <button
              key={index}
              type="button"
              onClick={() => filterMenus(avlCat)}
            >
              {avlCat[0].toLocaleUpperCase() + avlCat.slice(1)}
            </button>
          ))}
        </div>
        <main>
          <Menus menuList={filteredList} />
        </main>
      </div>
    </div>
  );
}

export default App;
