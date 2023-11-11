import Filter from "./Filter";
import "./Filters.css";

function Filters(props) {
  return (
    <div className="filters">
      {props.filterData.map((filter) => {
        return filter.title === props.activeCategory ? (
          <Filter className="btn-filter active" key={filter.id} filter={filter} changeCategory={props.changeCategory}/>
        ) : (
          <Filter className="btn-filter" key={filter.id} filter={filter} changeCategory={props.changeCategory}/>
        );
      })}
    </div>
  );
}

export default Filters;
