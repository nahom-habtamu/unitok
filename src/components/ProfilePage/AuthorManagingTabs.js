import React from 'react';
import AuthorPageTabs from '../../constants/AuthorPageTabs';

const AuthorManagingTabs = () => {
    const buildTabItems = () => {
        return AuthorPageTabs.map(e => <li className="nav-item">
            <a className={`nav-link ${e.active ? 'active' : ''}`}
                data-toggle="tab"
                href={`#${e.id}`}
                role="tab"
                aria-controls={e.id}
                aria-selected={e.active}>
                {e.text}
            </a>
        </li>
        );
    };

    return (
        <div className="profile">
            <ul
                className="nav nav-tabs profile__tabs"
                id="profile__tabs"
                role="tablist">
                {buildTabItems()}
            </ul>
        </div>
    );
};

export default AuthorManagingTabs;