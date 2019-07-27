import styled from 'styled-components';

export const RepoPageLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`;

export const RepoContainer = styled.div`
    box-sizing: border-box;
    width: 48%;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 3px;
`;

export const TopContainer = styled.div`
    height: 70%;
`;

export const BottomContainer = styled.div`
    height: 30%;
    display: flex;
    padding: 15px;
    margin: 0;
    font-size: 14px;
    width: 100%;
    color: #717171;
`;

export const LangContainer = styled.div`
    display: flex;
    margin-right: 10px;
    // width: 33%;
`;

export const Acontainer = styled.div`
    margin-bottom: 20px;
`;

export const LangColor = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px 5px 0 0;
    background-color: ${props => props.bgcolor};
`;

export const Language = styled.p`

`;

