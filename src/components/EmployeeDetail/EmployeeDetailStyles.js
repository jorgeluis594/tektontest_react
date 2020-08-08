import styled from "@emotion/styled";

export const ContainerDetail = styled.main`
    width: 70%;
    margin: 80px auto;
    padding: 15px;
    text-align: center;
`;

export const DetailItem = styled.div`
    width: 100%;
    margin: 20px 0;
    span:first-of-type{
        display: block;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        color: #3C366B;
    }
    span:last-of-type{
        display: block;
        text-transform: capitalize;
        font-size: 14px;
        color: #3C366B;
        margin: 7px 0;
    }
`;

export const SubornidatesContainer = styled.ul`
    width: 50%;
    margin: 15px auto;
    list-style: none;
    text-align: left;
`;

export const Subornidate = styled.li`
     text-transform: capitalize;
     font-size: 14px;
     color: #3C366B;
     margin: 7px 0;
`;