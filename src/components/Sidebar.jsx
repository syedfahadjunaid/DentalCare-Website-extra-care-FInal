import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Cosmetic Dentistry', path: '/services/cosmeticdentistry' },
    { label: 'Crown & Bridges', path: 'services/crown&bridges' },
    { label: 'Root Canal Treatments', path: '/services/rootcanaltreatments' },
    { label: 'Orthodontics', path: '/services/orthodontics' },
    { label: 'Teeth Whitening', path: '/services/teethwhitening' },
    { label: 'Dental Implants', path: '/services/dentalimplants' },
    { label: 'Gum Treatments', path: '/services/gumtreatments' },
    { label: 'Pediatric Dental Care', path: '/services/pediatricdentalcare' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  // className="sticky top-0 flex flex-col overflow-y-scroll items-start"  ---- css to add scrolling
  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
