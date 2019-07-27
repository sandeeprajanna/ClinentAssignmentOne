import React from 'react';

import { TabContainer, Ul, Li } from './styles';

export default () => {
    return(
        <TabContainer>
            <Ul>
                <Li active={true}>Overview</Li>
                <Li>
                    Repositories
                    <span>12</span>
                </Li>
                <Li>
                    Projects
                    <span>0</span>
                </Li>
                <Li>
                    Stars
                    <span>7</span>
                </Li>
                <Li>
                    Followers
                    <span>4</span>
                </Li>
                <Li>
                    Following
                    <span>2</span>
                </Li>
            </Ul>
        </TabContainer>
    )
}