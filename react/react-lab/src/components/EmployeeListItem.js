

function EmployeeListItem(props) {
    return (
        <div className="employee">
            <h2>{props.oneEmployee.name}</h2>
            <h3>{props.oneEmployee.title}</h3>
        </div>
    )
}

export default EmployeeListItem;