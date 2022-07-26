import { Container, Button, AddBox, Neutral, SadFace, Smile } from './style';

const GroupBtnState = () => {
  return (
    <Container>
      <Button>
        <Smile />
        <span>69</span>
        <span>LIKE</span>
      </Button>
      <Button>
        <Neutral />
        <span>69</span>
        <span>LIKE</span>
      </Button>
      <Button>
        <SadFace />
        <span>69</span>
        <span>LIKE</span>
      </Button>
      <Button>
        <AddBox />
        <span>69</span>
        <span>LIKE</span>
      </Button>
    </Container>
  );
};

export default GroupBtnState;
