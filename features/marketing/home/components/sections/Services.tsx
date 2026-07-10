import {
  MdApi,
  MdBookmarkAdded,
  MdCalendarMonth,
  MdCheck,
  MdDashboard,
  MdSearch,
} from "react-icons/md";
import ServicesCard from "../reusable/ServicesCard";

const Services = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="lg:text-4xl md:text-3xl text-lg tracking-wide text-primary font-bold">
        Empowering Your Academic Journey
      </h2>
      <p className="tracking-wide text-gray-500 md:w-150 w-100 text-center md:text-lg text-md">
        Everything you need to navigate the complex world of educational funding
        in one streamlined dashboard.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 w-full gap-4 p-4">
        <ServicesCard
          icon={MdSearch}
          title="Scholarships Search"
          body="Our intelligent search engine filters through thousands of grants, fellowships, and scholarships based on your unique profiile, major, and location."
        />
        <ServicesCard
          icon={MdCheck}
          title="Application Tracker"
          body="Monitor your process with a visual Kanban board. Know exactly which documents are missing and what stage you're in."
        />
        <ServicesCard
          icon={MdCalendarMonth}
          title="Deadline Calendar"
          body="Never miss a date. Sync scholarship deadlines with your personal calendar and receive smart reminders."
        />
        <ServicesCard
          icon={MdDashboard}
          title="Personalized Dashboard"
          body="A custom-tailored experience that highlights matches specifically for you. See Match Scores based on your academic profile and extracurriculars."
        />
        <ServicesCard
          icon={MdBookmarkAdded}
          title="Bookmarks Favorites"
          body="Save opportunities to review later with a single click. Keep your short-list organized and accessible."
        />
        <ServicesCard
          icon={MdApi}
          title="API Updates"
          body="Real-time data synchronization ensures you're always looking at the most current scholarship information."
        />
      </div>
    </div>
  );
};

export default Services;
