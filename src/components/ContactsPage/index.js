import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import ContactsForm from './ContactsForm';
import ContactsPageTitle from './ContactsPageTitle';
import ContactsSideBar from './ContactsSideBar';
import Partners from '../common/Partners';

const MainContent = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="row row--grid">
          <BreadCrumb
            active="Home"
            nonActive="Contact"
            link="/"
          />
          <ContactsPageTitle title={"Contacts"} />
        </div>
        <div className='row row--grid'>
          <div className='col-12 col-lg-7 col-xl-8'>
            <ContactsForm onSend={(data) => console.log(data)} />
          </div>
          <div className='col-12 col-md-6 col-lg-5 col-xl-4'>
            <ContactsSideBar />
          </div>
        </div>
        <Partners />
      </div>
    </main>
  );
}


export default MainContent;