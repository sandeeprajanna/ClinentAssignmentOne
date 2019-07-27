import styled from 'styled-components';

export const ApplicationDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

export const UserInfo = styled.div``;

export const ImageContainer = styled.div`
    width: 100%;
    @media (max-width: 768px) {
        width: 40%;
    }
`;

export const Img = styled.img`
    width: 100%;
    border-radius: 6px;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const ApplicationData = styled.div`

`;