import React from 'react';
import AuthorManagingTabs from './AuthorManagingTabs';
import TabContents from './TabContents';

const ManageAuthor = () => {
    return (
        <div className="col-12 col-xl-9">
            <AuthorManagingTabs/>
            <TabContents/>
        </div>
    );
};


export default ManageAuthor;