import React from 'react';

import DummyAuthors from '../../constants/DummyAuthors';

import BreadCrumb from '../common/BreadCrumb';
import Authors from './Authors';
import AuthorsTitle from './AuthorsTitle';
import FilterByKeywordAndDropDown from './FIlterByKeywordAndDropDown';
import Paginator from '../common/Paginator';

const MainContent = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='row row--grid'>
                    <BreadCrumb active="Home" link="/" nonActive="Authors" />
                    <AuthorsTitle title="Authors" />
                    <FilterByKeywordAndDropDown
                        placeholder="Search Authors"
                        dropDownOneItems={["rating", "views", "popularity"]}
                        dropDownTwoItems={["All Authors", "Verified only"]}
                        onFilterChanged={(value) => console.log(value)}
                    />
                </div>
                <Authors authors={DummyAuthors} />
                <Paginator
                    totalElements={DummyAuthors.length}
                    initialActivePage={1}
                    pageSize={8} />
            </div>
        </main>
    );
}

export default MainContent;