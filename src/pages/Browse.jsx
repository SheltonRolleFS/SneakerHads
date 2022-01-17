import { currentDrops, upcomingDrops } from "../Data/items";

import Item from "../components/item";

function Browse() {
  return (
    <>
      <div className="container">
        <section id="browse-content">
          <div id="current-drops">
            <h1 className="header">This Weeks Drops</h1>
            <div id="current-drops__items">
              {currentDrops.map((drop) => {
                return (
                  <Item
                    key={drop.id}
                    name={drop.name}
                    price={drop.price}
                    image={drop.image}
                  />
                );
              })}
            </div>
          </div>
          <div id="upcoming-drops">
            <h1 className="header">Upcoming Drops</h1>
            {upcomingDrops.map((drop) => {
              return (
                <Item
                  key={drop.id}
                  name={drop.name}
                  price={drop.price}
                  image={drop.image}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Browse;
