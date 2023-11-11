import "./App.css";
import Error404 from "./components/Error404";
import Filters from "./components/Filters";
import Loader from "./components/Loader";
import NoDataFound from "./components/NoDataFound";
import TopCourses from "./components/TopCourses";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // courses data based on filter selected currently
  const [courses, setCoursesData] = useState({});
  const [isLoadingEnabled, setLoading] = useState(true);
  const [currCategoryName, setCategoryName] = useState("All");
  const [likedCourses, setLikedCourses] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAllData() {
    setLoading(true);
    try {
      const fetchedData = await fetch(apiUrl);
      const parsedData = await fetchedData.json();
      setCoursesData(parsedData.data);
    } catch (error) {
      toast.error("Something went wrong");
      setError(true);
    }
    setLoading(false);
  }

  function changeCategory(categoryName) {
    setCategoryName(categoryName);

    // on selection of liked courses filter we have to add the curr liked courses array in the main courses data
    if (categoryName === "Liked") {
      courses["Liked"] = likedCourses;
      setCoursesData(courses);
    }
  }

  // initial api call using useEffect
  useEffect(() => fetchAllData, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Top Courses</h2>
      </header>
      <div className="container">
        <Filters
          filterData={filterData}
          activeCategory={currCategoryName}
          changeCategory={changeCategory}
        />

        {error ? (
          <Error404 />
        ) : courses.length === 0 ? (
          <NoDataFound />
        ) : isLoadingEnabled ? (
          <Loader />
        ) : (
          <TopCourses
            coursesData={courses}
            category={currCategoryName}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        )}
      </div>
      <ToastContainer
        newestOnTop={true}
        toastStyle={{ backgroundColor: "#22242a" }}
      />
    </div>
  );
}

export default App;
