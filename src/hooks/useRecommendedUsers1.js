import { useDidMount } from 'hooks';
import { useEffect, useState } from 'react';
import firebase from '../services/firebase';

const useRecommendedUsers1 = (itemsCount) => {
  const [recommendedUsers1, setRecommendedUsers1] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didMount = useDidMount(true);

  const fetchRecommendedUsers1 = async () => {
    try {
      setLoading(true);
      setError('');

      const docs = await firebase.getRecommendedUsers1(itemsCount);

      if (docs.empty) {
        if (didMount) {
          setError('No recommended users1 found.');
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setRecommendedUsers1(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError('Failed to fetch recommended users1');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (recommendedUsers1.length === 0 && didMount) {
      fetchRecommendedUsers1();
    }
  }, []);


  return {
    recommendedUsers1, fetchRecommendedUsers1, isLoading, error
  };
};

export default useRecommendedUsers1;