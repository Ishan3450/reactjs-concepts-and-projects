import './ExpiryDate.css'

function ExpiryDate(props){
    const {day, month, year} = props.expiryDate;

    return(
        <div className="dateContainer">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="day">{day}</div>
        </div>
    );
}

export default ExpiryDate;