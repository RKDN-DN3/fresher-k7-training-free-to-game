import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { CommentInput, Container, Textarea } from './style';
import SendIcon from '@mui/icons-material/Send';
const Comment = () => {
  return (
    <Container>
      <div className="comment-content">
        <span className="comment-title">
          What do you think about Fall Guys?
        </span>
        <div className="comment-face-state">
          <span>
            <SentimentVerySatisfiedIcon />2
          </span>
          <span>
            <SentimentNeutralIcon />0
          </span>
          <span>
            <MoodBadIcon />2
          </span>
        </div>
      </div>
      <CommentInput>
        <img
          src="https://www.freetogame.com/assets/images/avatars/default/default.png"
          alt=""
        />
        <Textarea placeholder="Write a review for Fall Guys! Share your thoughts with our community." />
        <button>
          <SendIcon />
        </button>
      </CommentInput>
    </Container>
  );
};

export default Comment;
