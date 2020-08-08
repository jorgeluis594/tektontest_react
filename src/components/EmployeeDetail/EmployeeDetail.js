import React, {useEffect, useState} from "react";
import Container from '../Container'
import {ContainerDetail, DetailItem, Subornidate, SubornidatesContainer} from "./EmployeeDetailStyles";
import {getEmployee} from "../../services/employeeServices";
import {Link} from "react-router-dom";
export default function EmployeeDetail({match}){
    const [employee, setEmployee] = useState({});
    useEffect(()=>{
        (async ()=>{
            try {
                setEmployee(await getEmployee(match.params.id));
            }
            catch (e) {
                console.error(e.message)
            }
        })()
    }, [match]);
    console.log(employee)
    return (
        <Container>
            <ContainerDetail>
                <DetailItem>
                    <span>Name: </span>
                    <span>{employee.name}</span>
                </DetailItem>
                <DetailItem>
                    <span>Birth Date: </span>
                    <span>{employee.birth_date}</span>
                </DetailItem>
                <DetailItem>
                    <span>Position: </span>
                    <span>{employee.position}</span>
                </DetailItem>
                <DetailItem>
                    <span>Email: </span>
                    <span style={{textTransform: "none"}}>{employee.email}</span>
                </DetailItem>
                { employee.manager && <DetailItem>
                    <span>Manager: </span>
                    <Link to={`/employees/${employee.manager.id}`}><span>{employee.manager.name}</span></Link>
                </DetailItem> }
                { employee.subordinates?.length > 0 && (
                <DetailItem>
                    <span>Subordinates</span>
                    <SubornidatesContainer>
                        {employee.subordinates.map(subordinate=>(
                            <Link key={subordinate.id} to={`/employees/${subordinate.id}`}>
                                <Subornidate>{subordinate.name}</Subornidate>
                            </Link>
                        ))}
                    </SubornidatesContainer>
                </DetailItem>)}

            </ContainerDetail>
        </Container>
    );
}