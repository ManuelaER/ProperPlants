import Plant from "./Plant";

function Plants({ plants, addItems }) {
    return (
      <>
        <h1>Proper Plants</h1>
        <h2>Available plants</h2>
        <>
          <div className="available">
            {plants.map((plant) => (
              <Plant key={plant.id} plant={plant} addItems={addItems} />
            ))}
          </div>
        </>
      </>
    );
}

export default Plants;