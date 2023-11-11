import "./Course.css";
import { AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Course({ courseInfo, likedCourses, setLikedCourses }) {
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    if (likedCourses.includes(courseInfo)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [likedCourses]);

  function likeTheCourse() {
    const idxInLikedList = likedCourses.indexOf(courseInfo);
    if (idxInLikedList === -1) {
      // like the course
      toast.success("Course Liked");
      likedCourses.push(courseInfo);
      console.log("added ", courseInfo.title, likedCourses);
      setLiked(true);
    } else {
      // dislike the course
      toast.info("Course disliked");
      likedCourses.splice(idxInLikedList, 1);
      setLikedCourses(likedCourses);
      console.log("removed ", courseInfo.title, likedCourses);
      setLiked(false);
    }
    setLikedCourses(likedCourses);
  }

  return (
    <div className="course-card">
      <div className="image-section">
        <button className="btn-like" onClick={likeTheCourse}>
          {isLiked ? (
            <AiFillHeart fontSize="1.3rem" color="red" />
          ) : (
            <AiFillHeart fontSize="1.3rem" color="pink" />
          )}
        </button>

        <img src={courseInfo?.image?.url} alt={courseInfo?.image?.alt} />
      </div>
      <div className="course-info-section">
        <div className="course-name">{courseInfo?.title}</div>

        <div className="course-description">
          {courseInfo?.description.substring(0, 100)}...
        </div>
      </div>
    </div>
  );
}

export default Course;
