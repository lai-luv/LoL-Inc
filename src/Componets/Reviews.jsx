import reviewsData from "./reviewsData.js";

const Reviews = () => {
  return (
    <>
      <h1>Reviewhhhhs</h1>
      {reviewsData.map((review) => {
        return <p key={review.id}>{review.name}{review.comment}</p>;
      })}

      
      
    </>
  );
};

export default Reviews;
