import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() => {
      document.title = `${title} - Tour`;
   }, [title])
};

export default useTitle;