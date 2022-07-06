import { useDidMount } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'services/firebase';

const useUser1 = (id) => {
  // get and check if user1 exists in store
  const storeUser1 = useSelector((state) => state.users1.items.find((item) => item.id === id));

  const [user1, setUser1] = useState(storeUser1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!user1 || user1.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleUser1(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setUser1(data);
              setLoading(false);
            }
          } else {
            setError('User1 not found.');
          }
        }
      } catch (err) {
        if (didMount) {
          setLoading(false);
          setError(err?.message || 'Something went wrong.');
        }
      }
    })();
  }, [id]);

  return { user1, isLoading, error };
};

export default useUser1;

// okay
