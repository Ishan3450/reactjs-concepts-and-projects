import Course from "./Course";
import "./TopCourses.css";

function TopCourses({ coursesData, category, likedCourses, setLikedCourses }) {
  return (
    <div className="all-courses">
      {category === "All"
        ? Object.values(coursesData).map((category) => {
            return category.map((course) => {
              return (
                <Course
                  key={course.id}
                  courseInfo={course}
                  likedCourses={likedCourses}
                  setLikedCourses={setLikedCourses}
                />
              );
            });
          })
        : coursesData[category].map((course) => {
            return (
              <Course
                key={course.id}
                courseInfo={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
              />
            );
          })}
    </div>
  );
}

export default TopCourses;
