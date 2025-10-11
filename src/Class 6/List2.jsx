function List2(props)
{
     
    const category = props.category ?? "category";
    const itemlist = props.item ?? []; // empty array

    const listItem = itemlist.map(item => <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b>
                                        </li>);
    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-item">{listItem}</ol>
        </>)
}
export default List2