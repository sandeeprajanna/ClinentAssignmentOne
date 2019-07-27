import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDataApi } from '../../redux/actions/user';
import { Container } from '../../components/common/styles';
import UserPage from '../../components/userPage';

class index extends Component {
    componentDidMount() {
        this.props.dispatch(getUserDataApi());
    }
    render() {
        const { userRepo } = this.props;
        console.log('homepage ', this.props);
        return (
            <Container>
               {
                   userRepo.userRepoData ? 
                        <UserPage repo={userRepo.userRepoData} /> : ''
               }
            </Container>    
        )
    }
}
const mapStateToProps = ({ userRepo }) => {
    return { userRepo }
}

export default connect(mapStateToProps)(index)