import React, {useEffect, useState} from "react";
import  Container  from "../Container"
import {
    EmployeesContainer,
} from "./EmployeeListStyles";
import Employee from "./Employee";
import {listEmployees} from "../../services/employeeServices";

export default  function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        (async ()=>{
            try {
                setEmployees(await listEmployees());
            }
            catch (e) {
                console.error(e.message)
            }
        })()
    }, []);
    console.log(employees)
    return(
        <Container>
            <EmployeesContainer>
                {employees.map(employee=><Employee key={employee.id} employee={employee}/>)}
            </EmployeesContainer>
        </Container>
    );
}