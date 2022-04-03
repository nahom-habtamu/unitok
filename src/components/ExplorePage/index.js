import React from 'react';
import BreadCrumb from '../common/BreadCrumb';
import ExploreTitle from './ExploreTitle';
import FilterByKeywordAndDropDown from '../common/FIlterByKeywordAndDropDown';
import Auction from '../common/Auction';
import Paginator from '../common/Paginator';

const MainContent = () => {

  const buildExploreItems = () => {
    const items = [];
    for (let i = 0; i < 8; i++) {
        items.push(
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <Auction/>
            </div>
        );
    }
    return items;
  }

  return (
    <main className='main'>
        <div className='container'>
            <div className='row row--grid'>
                <BreadCrumb
                    active="Home"
                    link="/"
                    nonActive="Explore"
                />
                <ExploreTitle 
                    title={"Explore Exclusive Digital Assets"}
                />
                <FilterByKeywordAndDropDown
                    placeholder="Search..."
                    dropDownOneItems={["Buy Now", "New", "On Auction","Has Offers"]}
                    dropDownTwoItems={[
                        "All Categories", 
                        "Art",
                        "Photography",
                        "Games",
                        "Metaverses",
                        "Music",
                        "Domains",
                        "Memes",
                    ]}
                    onFilterChanged={(value) => console.log(value)}
                />
            </div>
            <div className='row row--grid'>
                {
                    buildExploreItems()
                }
                <Paginator
                    initialActivePage={1}
                    pageSize={8}
                    totalElements={50}
                />
            </div>
        </div>
    </main>
  );
}

export default MainContent;