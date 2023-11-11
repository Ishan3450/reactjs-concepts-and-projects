import './Filter.css'

function Filter(props) {
    // function updateCategory(name) {
    //     props.changeCategory(name);
    // }

    return (
        <button className={props.className} onClick={() => {props.changeCategory(props.filter.title)}}>{props.filter.title}</button>
    )
}

export default Filter;