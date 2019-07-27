import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const UserDataLayout = styled.div`
    width: 25%;
    // border: 1px solid blue;
    padding: 15px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`;

export const UserTabRepoLayout = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    // border: 1px solid yellow;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

