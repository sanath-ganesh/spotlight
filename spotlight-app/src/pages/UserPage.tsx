import React from 'react';
import UserDetialsContainer from '../components/UserDetailsContainer';
import IssuesByUserContainer from '../components/IssuesByUserContainer';
import CommentsByUserContainer from '../components/CommentsByUserContainer';

function UserPage() {
    return (
        <div style={{
            display: 'flex',
            gap: "1em",
            flexDirection: 'column',
            gridColumn: '2',
            gridRow: '2',
        }}>
            <UserDetialsContainer />
            <IssuesByUserContainer />
            <CommentsByUserContainer />
        </div>
    );
}

export default UserPage;