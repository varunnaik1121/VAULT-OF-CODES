import React, { useState } from 'react';
import { createImgUrl } from '../services/movieServices';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { UserAuth } from '../context/AuthContext';

const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const { title, backdrop_path, poster_path } = movie;

  const markFavShow = async () => {
    const userEmail = user?.email;
    if (userEmail) {
      const userDoc = doc(db, 'users', userEmail);
      setLike(!like);
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...movie }),
      });
    } else {
      alert('Login to save a movie...');
    }
  };

  return (
    <div className="relative w-[160px] rounded-md sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block  overflow-hidden cursor-pointer m-1 transition-all hover:scale-125 hover:z-[10000] ">
      <img
        className="w-full rounded-md h-full m-3 auto block object-cover transition-transform "
        src={createImgUrl(poster_path ?? backdrop_path, 'w500')}
        alt={title}
      />

      <p
        onClick={markFavShow}
        className="cursor-pointer m-4 absolute top-6 left-4"
      >
        {like ? (
          <FaHeart size={26} className="absolute top-2 text-red-700" />
        ) : (
          <FaRegHeart size={26} className="absolute top-2 text-gray-300" />
        )}
      </p>
    </div>
  );
};

export default MovieItem;
