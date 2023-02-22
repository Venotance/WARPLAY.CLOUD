import { RefObject, useEffect } from 'react';

interface UseClickOutsideInterface {
  refDrop: RefObject<HTMLDivElement>;
  refDropWrap?: RefObject<HTMLDivElement>;
  callback: () => void;
}

export const useClickOutside = ({ refDrop, callback, refDropWrap }: UseClickOutsideInterface) => {
  useEffect(() => {
    function checkOutside(event: any) {
      if (refDrop.current && refDropWrap && refDropWrap.current) {
        if (
          !refDrop.current.contains(event.target) &&
          !refDropWrap.current.contains(event.target)
        ) {
          callback();
        }
        return;
      }
      if (refDrop.current && !refDrop.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('click', checkOutside, true);
    return () => document.removeEventListener('click', checkOutside, true);
  }, [refDrop, callback]);
};
