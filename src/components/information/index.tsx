import { Container, Item } from './style';
import { GameDetails } from 'types';

type Props = {
  item?: GameDetails;
};

const Information = (props: Props) => {
  const { item } = props;
  return (
    <Container className="row mb-3">
      <Item className="col-6 col-md-4">
        <span className="configuration-title">Title</span>
        <span>{item?.title}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">Developer</span>
        <span>{item?.developer}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">Publisher</span>
        <span>{item?.publisher}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">Release Date</span>
        <span>{item?.release_date}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">Genre</span>
        <span>{item?.genre}</span>
      </Item>
      <Item className="col-6 col-md-4">
        <span className="configuration-title">Platform</span>
        <span>{item?.platform}</span>
      </Item>
    </Container>
  );
};

export default Information;
