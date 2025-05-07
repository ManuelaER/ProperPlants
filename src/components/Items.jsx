function Items ({ items, addItems, removeItems }) {
    return (
        <>
          <h2>Cart</h2>

          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
            <div className="cart">
              {items.map((item) => {
                return (
                  <div key={item.id}>
                    <span>
                      {item.image} {item.name} <br />
                    </span>{" "}
                    <button
                      onClick={() => {
                        removeItems(item);
                      }}
                      style={{ color: "red" }}
                    >
                      -
                    </button>{" "}
                    <span>{item.quantity}</span>{" "}
                    <button
                      onClick={() => addItems(item)}
                      style={{ color: "darkgreen" }}
                    >
                      +
                    </button>
                  </div>
                );
              })}
              </div>
            </>
          )}
        </>
    );
}

export default Items;