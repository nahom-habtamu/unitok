import GetStartedTabHeader from "./GetStartedTabHeader";
import GetStartedTabItem from "./GetStartedTabItem";
import tabItems from '../../constants/GetStatertedTabItems';

const GetStartedTab = () => {
    const buildTabItems = () => {
        return tabItems.map((e,index) => <GetStartedTabItem item={{...e, index : index}}/>)
    }

    return <section className='row row--grid'>
      <GetStartedTabHeader/>
      {
          buildTabItems()
      }
    </section>;
}

export default GetStartedTab;