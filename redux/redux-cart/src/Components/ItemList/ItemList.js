import Item from "./Item"
const DUMMY_DATA = [
    {
        itemId: 'i1',
        itemName: 'Item1',
        itemPrice: 450,
        itemQuantity: 0
    },
    {
        itemId: 'i2',
        itemName: 'Item2',
        itemPrice: 350,
        itemQuantity: 0
    }
]

function ItemList() {
    return (
        <ul>
            {DUMMY_DATA.map((item) => {
                return <Item key={item.itemId} item={item} />
            })}
        </ul>
    )
}

export default ItemList