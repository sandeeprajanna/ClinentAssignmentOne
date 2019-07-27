import React from 'react';
import styled from 'styled-components';
import { H1, H2, Button, P, Pimage, Aiamge } from '../common/styles'
import { ApplicationDataContainer, ImageContainer,Img , UserInfo, ApplicationData } from './styles';
import UserIMage from '../../static/user/userImg.jpeg';
import Users from '../../static/user/users.svg';
import Location from '../../static/user/placeholder.svg';
import Mail from '../../static/user/mail.svg';

export default () => {
    return(
        <React.Fragment>
            <ApplicationDataContainer>
                <ImageContainer>
                    <Img src={UserIMage} />
                </ImageContainer>
                <ApplicationData>
                    <H1>Supreet Singh</H1>
                    <H2>supreetsingh247</H2>
                    <Button>Follow</Button>
                </ApplicationData>
            </ApplicationDataContainer>
            <UserInfo>
                <P>Front End Developer Since 1.5 years</P>
                <Pimage beforeIcon={Users}>Target Corporation</Pimage>
                <Pimage beforeIcon={Location}>India</Pimage>
                <Aiamge beforeIcon={Mail} href="mailto:supreetsingh.247@gmail.com">supreetsingh.247@gmail.com</Aiamge>
            </UserInfo>
        </React.Fragment>
    )
}