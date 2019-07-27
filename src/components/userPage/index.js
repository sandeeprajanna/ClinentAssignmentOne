import React from 'react';
import UserInfo from '../userInfo';
import Tabs from '../tabs';
import UserRepo from '../userRepo';

import { PageContainer, UserDataLayout, UserTabRepoLayout } from './styles';

export default function UserPage(props) {
    // const { user } = this.props;
    console.log('in page', props);
    return (
        <PageContainer>
            <UserDataLayout>
                <UserInfo/>
            </UserDataLayout>
            <UserTabRepoLayout>
                <Tabs />
                <UserRepo repo={props.repo} />
            </UserTabRepoLayout>
        </PageContainer>
    )
}
