import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const Comment = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="szyar"
          timeAgo="Today at 5:00PM"
          comment="Good Day"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="eve"
          timeAgo="Yesterday at 2:00AM"
          comment="So Good"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="iu"
          timeAgo="Today at 5:50PM"
          comment="Finally We Have A Good Day"
        />
      </ApprovalCard>
    </div>
  );
};

export default Comment;
