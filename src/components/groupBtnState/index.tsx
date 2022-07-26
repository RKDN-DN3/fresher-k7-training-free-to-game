import { Container, Button, AddBox, Neutral, SadFace, Smile } from './style';

type Props = {
  like: string;
};

const GroupBtnState = (props: Props) => {
  const { like } = props;
  return (
    <Container>
      <Button>
        <Smile />
        <span>69</span>
        <span>{like}</span>
      </Button>
      <Button>
        <Neutral />
        <span>69</span>
        <span>{like}</span>
      </Button>
      <Button>
        <SadFace />
        <span>69</span>
        <span>{like}</span>
      </Button>
      <Button>
        <AddBox />
        <span>69</span>
        <span>{like}</span>
      </Button>
    </Container>
  );
};

export default GroupBtnState;
