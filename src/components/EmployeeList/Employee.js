import React from "react";
import {
    EmployeeContainer, Subtitle, SubtitleContainer,
    Title,
    TitleContainer,
    EmployeeLink
} from "./EmployeeListStyles";
export default function Employee({employee}){
    console.log(employee)
    return (
        <EmployeeLink to={`/employees/${employee.id}`}>
        <EmployeeContainer>
            <TitleContainer><Title>{employee.name}</Title></TitleContainer>
            <TitleContainer><Title>{employee.dni}</Title></TitleContainer>
            <TitleContainer><Title>{employee.email}</Title></TitleContainer>
            <TitleContainer><Title>{employee.birth_date}</Title></TitleContainer>
            <TitleContainer><Title style={{textTransform: "capitalize"}}>{employee.position}</Title></TitleContainer>
            <SubtitleContainer><Subtitle>Name</Subtitle></SubtitleContainer>
            <SubtitleContainer><Subtitle>Dni</Subtitle></SubtitleContainer>
            <SubtitleContainer><Subtitle>Email</Subtitle></SubtitleContainer>
            <SubtitleContainer><Subtitle>Birth Date</Subtitle></SubtitleContainer>
            <SubtitleContainer><Subtitle>Position</Subtitle></SubtitleContainer>
        </EmployeeContainer>
        </EmployeeLink>
    );
}