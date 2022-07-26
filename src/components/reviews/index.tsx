import { Neutral } from 'components/groupBtnState/style';
import Progress from 'components/progress';
import { ChatIcon, PersonIcon, ReviewsStyle } from './style';

const Reviews = () => {
  return (
    <ReviewsStyle>
      <div className="detail-reviews-left">
        <span>
          <Neutral /> Mixed
        </span>
        <span>&nbsp;4&nbsp;&nbsp; Member Ratings</span>
        <span>
          <PersonIcon /> 23 Members have this game in their library!
        </span>
        <div className="detail-review-pop">
          <span>
            <ChatIcon /> 0 Reviews
          </span>
          <span>&#8595; 31%Popularity</span>
        </div>
      </div>
      <div className="detail-reviews-right">
        <Progress />
      </div>
    </ReviewsStyle>
  );
};

export default Reviews;
