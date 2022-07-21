import Recommend from 'components/recommend';
import { Container } from 'styles/components/style';

interface State {
  tittle: string;
}
const arr: State[] = [{ tittle: 'tien' }, { tittle: 'tien' }, { tittle: 'tien' }];

const Home = () => {
  return (
    <Container>
      <Recommend items={arr} />
    </Container>
  );
};

export default Home;
