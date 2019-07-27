import React from 'react';
import { P } from '../common/styles';
import { RepoPageLayout } from './styles';
import RepoLayout from './repoLayout';

export default (props) => {
    console.log(props);
    const { repo } = props;
    return (
        <React.Fragment>
            <P>Popular repositories</P>
            <RepoPageLayout>
                {
                    repo.length > 0 && repo.map(item =>
                        <RepoLayout item={item} />
                    )
                }
            </RepoPageLayout>
        </React.Fragment>
    )
}