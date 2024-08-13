const StarRating = ({ rarity }: { rarity: string }) => {
  const filledStarSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      />
    </svg>
  );

  const emptyStarSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356l-.83 4.73zm4.905-2.767l-3.686 1.894l.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575l-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957l-3.686-1.894a.5.5 0 0 0-.461 0z"
      />
    </svg>
  );

  // 将 rarity 转换为数字
  const rating = parseInt(rarity, 10);
  // 确保 rating 在 0 和 5 之间
  const clampedRating = Math.max(0, Math.min(rating, 5));

  // 生成星星图标的数组
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < clampedRating ? filledStarSvg : emptyStarSvg);
  }

  return (
    <div className="">
      {stars.map((star, index) => (
        <span key={index} className="star-icon">
          {star}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
