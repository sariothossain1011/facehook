import EditImage from "../../assets/icons/edit.svg";
import Avater from "../../assets/images/avatars/avatar_1.png";
import TimeImage from "../../assets/icons/time.svg";
import ThreeDotImage from "../../assets/icons/3dots.svg";
import DeleteImage from "../../assets/icons/delete.svg";
import PosterImage from "../../assets/images/poster.png";
import LikeImage from "../../assets/icons/like.svg";
import CommentImage from "../../assets/icons/comment.svg";
import ShareImage from "../../assets/icons/share.svg";

const PostList = () => {
  return (
    <>
      
      <article className="card mt-6 lg:mt-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={Avater}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">Sumit Saha</h6>
              <div className="flex items-center gap-1.5">
                <img src={TimeImage} alt="time" />
                <span className="text-sm text-gray-400 lg:text-base">
                  12 min ago
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <button>
              <img src={ThreeDotImage} alt="3dots of Action" />
            </button>

            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={EditImage} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
                <img src={DeleteImage} alt="Delete" />
                Delete
              </button>
            </div>
          </div>
        </header>

        <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
          <div className="flex items-center justify-center overflow-hidden">
            <img className="max-w-full" src={PosterImage} alt="poster" />
          </div>
          <p>
            Grateful for the incredible experience of serving as the President
            of the Grand Jury board for this year's Digital Marketing Award
            organized by Bangladesh Brand Forum. Judging the best digital
            marketing campaigns was not just a responsibility but a journey of
            appreciation for innovation and creativity. The judging process,
            ensuring transparency, brought to light so many beautiful campaigns.
            Cheers to the dynamic world of digital marketing! sdfasd asdca sdfa
            sdca sdfa
          </p>
        </div>
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
          <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src={LikeImage} alt="Like" />
            <span>Like</span>
          </button>
          <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
            <img src={CommentImage} alt="Comment" />
            <span>Comment(2)</span>
          </button>

          <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src={ShareImage} alt="Share" />
            <span>Share</span>
          </button>
        </div>

        <div>
          <div className="flex-center mb-3 gap-2 lg:gap-4">
            <img
              className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
              src={Avater}
              alt="avatar"
            />

            <div className="flex-1">
              <input
                type="text"
                className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                name="post"
                id="post"
                placeholder="What's on your mind?"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="text-gray-300 max-md:text-sm">
              All Comment ▾
            </button>
          </div>
          <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
            <div className="flex items-center gap-3 pt-4">
              <img
                className="max-w-6 max-h-6 rounded-full"
                src={Avater}
                alt="avatar"
              />
              <div>
                <div className="flex gap-1 text-xs lg:text-sm">
                  <span>Tapas Adhikari: </span>
                  <span>Great Sumit Saha dada ❤</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <img
                className="max-w-6 max-h-6 rounded-full"
                src={Avater}
                alt="avatar"
              />
              <div>
                <div className="flex gap-1 text-xs lg:text-sm">
                  <span>Sumit Saha: </span>
                  <span>Great Sumit Saha dada ❤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="card mt-6 lg:mt-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={Avater}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">Sumit Saha</h6>
              <div className="flex items-center gap-1.5">
                <img src={TimeImage} alt="time" />
                <span className="text-sm text-gray-400 lg:text-base">
                  12 min ago
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <button>
              <img src={ThreeDotImage} alt="3dots of Action" />
            </button>

            <div className="action-modal-container hidden">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={EditImage} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
                <img src={DeleteImage} alt="Delete" />
                Delete
              </button>
            </div>
          </div>
        </header>
        <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
          <div className="flex items-center justify-center overflow-hidden">
            <img className="max-w-full" src={PosterImage} alt="poster" />
          </div>
        </div>
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
          <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src={LikeImage} alt="Like" />
            <span>Like</span>
          </button>

          <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
            <img src={CommentImage} alt="Comment" />
            <span>Comment(2)</span>
          </button>
          <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src={ShareImage} alt="Share" />
            <span>Share</span>
          </button>
        </div>
        <div>
          <div className="flex-center mb-3 gap-2 lg:gap-4">
            <img
              className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
              src={Avater}
              alt="avatar"
            />

            <div className="flex-1">
              <input
                type="text"
                className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                name="post"
                id="post"
                placeholder="What's on your mind?"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="text-gray-300 max-md:text-sm">
              All Comment ▾
            </button>
          </div>

          <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
            <div className="flex items-center gap-3 pt-4">
              <img
                className="max-w-6 max-h-6 rounded-full"
                src={Avater}
                alt="avatar"
              />
              <div>
                <div className="flex gap-1 text-xs lg:text-sm">
                  <span>Tapas Adhikari: </span>
                  <span>Great Sumit Saha dada ❤</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <img
                className="max-w-6 max-h-6 rounded-full"
                src={Avater}
                alt="avatar"
              />
              <div>
                <div className="flex gap-1 text-xs lg:text-sm">
                  <span>Sumit Saha: </span>
                  <span>Great Sumit Saha dada ❤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default PostList
