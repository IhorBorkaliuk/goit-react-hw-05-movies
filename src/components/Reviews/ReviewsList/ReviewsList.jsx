import { ReviewsItem } from "./ReviewsListStyled";

export default function ReviewsList({ movieReviews }) {
  const results = movieReviews.map(({ id, author, content }) => {
    return (
      <ReviewsItem key={id}>
        <h4>author: {author ? author : 'no_info'}</h4>
        <p>{content ? content : 'no_info'}</p>
      </ReviewsItem>
    );
  });

  return <ul>{results}</ul>;
}