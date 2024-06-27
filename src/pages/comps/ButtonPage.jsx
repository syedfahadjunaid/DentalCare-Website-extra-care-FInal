import Button from '../components/Button';
import {
  GoBell,
  GoCloudDownload,
  GoCode,
  GoBookmark,
  GoFlame,
} from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('CLick!');
  };
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button className="mb-5" secondary>
          <GoBookmark />
          See deal!!
        </Button>
      </div>
      <div>
        <Button className="mb-5" success>
          <GoCloudDownload />
          Hide ads!!
        </Button>
      </div>
      <div>
        <Button className="mb-5" warning>
          <GoCode />
          Buy now!!
        </Button>
      </div>
      <div>
        <Button className="mb-5" danger rounded outline>
          <GoFlame />
          Cancel it!!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
