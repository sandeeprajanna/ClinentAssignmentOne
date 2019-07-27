import styled from 'styled-components';

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    // border: 1px solid red;
    margin : 25px auto;

    @media (min-width: 768px) {
        max-width: 750px;
    }
    @media (min-width: 992px) {
        max-width: 970px;
    }
    @media (min-width: 1200px) {
        max-width: 1170px;
    }
`;

export const Button = styled.button`
    width: ${props => props.width ? props.width : '100%'};
    background-image: linear-gradient(#fafbfc,#eff3f6);
    border: 1px solid #ddd;
    border-radius: 3px;
    text-align: center;
    font-size: 15px;
    padding: 9px 7px;
    font-weight: 500;
    margin: 0 0 15px;
    outline: 0;
    &: hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px 0px;
        cursor: pointer;
    }
    &: focus {
        outline: none;
    }
`;

export const H1 = styled.h1`
    font-size: 25px;
    margin: 0 0 3px;
    font-weight: normal;
`;

export const H2 = styled.h2`
    font-size: 18px;
    font-weight: 300;
    color: #585858;
    margin: 0 0 15px;
`;

export const P = styled.p`
    font-size: 14px;
    margin: 0 0 4px;
`;

export const Pimage = styled(P)`
    &: before {
        content: "";
        display: { props => props.beforeIcon ? 'block' : 'none'}
        background: ${props => props.beforeIcon ? `url(${props.beforeIcon})` : 'none'};
        background-repeat: no-repeat;
        background-size: contain;
        width: 17px;
        height: 20px;
        float: left;
        margin: 0 6px 0 0;
    }
`;

export const A = styled.a`
    font-size: 14px;
    color: #5353c3;
    text-decoration: none;
    background-color: transparent;
    margin: 0 0 4px;
    &: hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const Aiamge = styled(A)`
    &: before {
        content: "";
        display: { props => props.beforeIcon ? 'block' : 'none'}
        background: ${props => props.beforeIcon ? `url(${props.beforeIcon})` : 'none'};
        background-repeat: no-repeat;
        background-size: contain;
        width: 17px;
        height: 20px;
        float: left;
        margin: 5px 6px 0 0;
    }
`;