import { GameDetails } from 'types';
import { Container, Item } from './style';
type Props = {
  item?: GameDetails;
};

const SystemRequirements = (props: Props) => {
  const { item } = props;
  return (
    <Container className="row mb-3">
      <div className="col-sm-6">
        <Item>
          <span className="configuration-title">OS</span>
          <span>{item?.minimum_system_requirements?.os}</span>
        </Item>
        <Item>
          <span className="configuration-title">Processor</span>
          <span>{item?.minimum_system_requirements?.processor}</span>
        </Item>
        <Item>
          <span className="configuration-title">Memory</span>
          <span>{item?.minimum_system_requirements?.memory}</span>
        </Item>
      </div>
      <div className="col-sm-6">
        <Item>
          <span className="configuration-title">Graphics</span>
          <span>{item?.minimum_system_requirements?.graphics}</span>
        </Item>
        <Item>
          <span className="configuration-title">Storage</span>
          <span>{item?.minimum_system_requirements?.storage}</span>
        </Item>
        <Item>
          <span className="configuration-title">Additional Notes</span>
          <span>{item?.platform}</span>
        </Item>
      </div>
    </Container>
  );
};

export default SystemRequirements;
