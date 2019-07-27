import React from 'react';
import { A, P, Pimage } from '../common/styles';
import { RepoContainer, LangContainer, TopContainer, BottomContainer, Acontainer, LangColor } from './styles';

import Fork from '../../static/user/fork.svg';
import Star from '../../static/user/star.svg';

export default (props) => {
    const { item } = props;
    console.log(item);  
    const color = {
        CSS: '#563d7c',
        JavaScript: '#f1e05a',
        HTML: '#e34c26'
    }
    return (
        <RepoContainer>
            <TopContainer>
                <Acontainer>
                    <A href={item.html_url}>{item.name}</A>
                </Acontainer>
                <P>{item.description}</P>
            </TopContainer>
            <BottomContainer>
                {
                    item.language != null ?
                    (
                        <LangContainer>
                            <LangColor bgcolor={color[item.language]}/>
                            <language>{item.language}</language>
                        </LangContainer>
                    ) :
                    ''
                }
                {
                    item.stargazers_count !== 0 ?
                    (
                            <Pimage beforeIcon={Star}>{item.stargazers_count}</Pimage>
                    ) :
                    ''
                }
                {
                    (item.fork && item.forks_count !== 0) ?
                        (
                            <Pimage beforeIcon={Fork}>{item.forks_count}</Pimage>
                        ) :
                        ''
                }
            </BottomContainer>
        </RepoContainer>
    )
}
