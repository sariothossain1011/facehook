import ProfileImage from "../../assets/images/avatars/avatar_1.png";
import EditImage from "../../assets/icons/edit.svg";
import Avater from "../../assets/images/avatars/avatar_1.png";
import TimeImage from "../../assets/icons/time.svg";
import ThreeDotImage from "../../assets/icons/3dots.svg";
import DeleteImage from "../../assets/icons/delete.svg";
import PosterImage from "../../assets/images/poster.png";
import LikeImage from "../../assets/icons/like.svg";
import CommentImage from "../../assets/icons/comment.svg";
import ShareImage from "../../assets/icons/share.svg";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import { actions } from "../../actions";
import ProfleInfo from "./ProfleInfo";
import MyPostsInfo from "./MyPostsInfo";

const Profile = () => {
  const { state, dispatch } = useProfile();

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: err.message,
        });
      }
    };

    fetchProfile();
  }, []);
  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <ProfleInfo />

<MyPostsInfo/>
      </div>
    </main>
  );
};

export default Profile;
