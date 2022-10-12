import EmployeeListItem from './EmployeeListItem';
import data from './Data';

function EmployeeList() {
    return (
        <div id="employee-list">
            
            {data.map((employee, i) => {
                return (
                    <EmployeeListItem key={i} oneEmployee={employee}/>
                )
            })}
        </div>
    )
}

export default EmployeeList;