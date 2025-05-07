export default function Plant({ plant, addItems }) {
    return (
        <div className="individual">
            <b>{plant.name}</b> <br />
            <b className="display">{plant.image}</b> <br />{" "}
            <button onClick={() => addItems(plant)}>Add to cart</button>
        </div>
    );
}