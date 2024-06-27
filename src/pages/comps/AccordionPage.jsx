import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'A00001',
      label: 'can i use react on a project',
      content:
        'you can use react on any project, you can use react on any project, you can use react on any project',
    },
    {
      id: 'A00002',
      label: 'can i use c++ on a project',
      content:
        'you can use c++ on any project, you can use c++ on any project, you can use c++ on any project',
    },
    {
      id: 'A00003',
      label: 'can i use python on a project',
      content:
        'you can use python on any project, you can use python on any project, you can use python on any project',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
