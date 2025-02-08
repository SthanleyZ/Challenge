import React, { useState } from 'react';
import styles from './FirmFactCard.module.scss';
import Button from '../Button/Button';

const FirmFactCard = ({ variant, buttonVariant, label, rowCard, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define hover styles based on the row --- only if button is not disabled.
  const hoverStyle =
    !disabled && isHovered
      ? rowCard === 'top'
        ? { backgroundColor: '#07C06A', border: '1px solid #FFFFFF' } // Top row - background + border.
        : { backgroundColor: '#07C06A', border: 'none' } // Bottom row - background only.
      : {}; // No styles if button is disabled or card is not hovered.

  return (
    <div
      className={`${styles.card} ${styles[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        variant={buttonVariant}
        label={label}
        disabled={disabled}
        rowCard={rowCard}
        hoverStyle={hoverStyle}
      />
    </div>
  );
};

export default FirmFactCard;