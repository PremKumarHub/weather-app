function List (){
    const fruits=['apple','banana','guava']
    const listitems=fruits.map(fruit=><li>{fruit}</li>)

    return (<ol>{listitems}</ol>);
}
export default List