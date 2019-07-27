import styled from 'styled-components';

export const TabContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-inline-start: 0;
    margin-block-end: 0;
    width: 100%;
    // justify-content: space-between;
`;

export const Li = styled.li`
    font-size: 14px;
    margin: 0 7px 0 0;
    padding: 10px 5px;
    cursor: pointer;
    padding-bottom: 1.5em;
    border-bottom: ${props => props.active ? '2px solid red' : '2px solid white'};
    &: hover {
        border-bottom: 2px solid #ddd;
    }
    span {
        background: #ddd;
        border-radius: 30px;
        padding: 1px 6px;
        font-size: 12px;
        font-weight: 500;
        margin: 0 0 0 5px;
    }
`;

