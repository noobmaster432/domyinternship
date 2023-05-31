import Banner from "./Banner"
import Browse from "./Browse"
import LatestBlogs from "./LatestBlogs"
import LatestInternship from "./LatestInternship"
import StudentStories from "./StudentStories"
import TopCompanies from "./TopCompanies"

const Home = () => {
  return (
    <div>
        <Banner />
        <LatestInternship />
        <Browse />
        <StudentStories />
        <TopCompanies />
        <LatestBlogs />
    </div>
  )
}

export default Home