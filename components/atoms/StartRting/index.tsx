import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { typeRating } from "@/components/molecules/Card/interface";
import { FC, memo } from "react";

export const StarRating: FC<typeRating> = ({ rate, count }) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="rating-tooltip">{`${rate} de 5 (${count} reseñas)`}</Tooltip>
      }
    >
      <div
        className="d-flex align-items-center gap-1 text-warning"
        role="img"
        aria-label={`${rate} estrellas`}
      >
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
        <small className="text-muted ms-1">({count})</small>
      </div>
    </OverlayTrigger>
  );
};

export default memo(StarRating);
