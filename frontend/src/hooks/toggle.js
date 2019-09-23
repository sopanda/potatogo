import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggle];
};
