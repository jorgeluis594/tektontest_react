import styled from "@emotion/styled";
import { Link } from 'react-router-dom'

export const EmployeesContainer = styled.main`
    width: 100%;
    padding: 15px;
`;


export const EmployeeContainer = styled.div`
    width: 100%;
    padding: 12px;
    display: grid;
    grid-template: repeat(2,26px) / 6fr 3fr 3fr 2fr 2fr;
    border-bottom: 1px solid #434190;
    column-gap: 24px;
`;
export const TitleContainer = styled.div`
    display: flex;
    align-items: flex-end;
    &.amount{
        justify-content: flex-end !important;
    }
`;
export const Title = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #1A202C;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Subtitle = styled.span`
    font-size: 14px;
    line-height: 19px;
    color: #4A5568;
`;

export const EmployeeLink = styled(Link)`
    display: block;
    &:hover {
        background-color: #EBF4FF;
    }
`;