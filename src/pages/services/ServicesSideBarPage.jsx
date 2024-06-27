// import Route from '../components/Route';
// import AccordionPage from './AccordionPage';
// import DropdownPage from './DropdownPage';
// import Sidebar from '../components/Sidebar';
// import ButtonPage from './ButtonPage';
// import ModalPage from './ModalPage';
// import TablePage from './TablePage';
// import CounterPage from './CounterPage';

import Route from '../../components/Route';
import Sidebar from '../../components/Sidebar';

function ServicesSideBarPage() {
  return (
    <div className="container mx-auto mt-4 grid grid-cols-6 gap-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/services/cosmeticdentistry"></Route>
      </div>
    </div>
  );
}

export default ServicesSideBarPage;
