import React from "react";
import EventCard from "@/app/components/community/event-card";
import {events} from "@/app/utils/data";
import {WorkspaceBooking} from "@/app/components/community/workspace-booking"; // Ensure correct import path
import {MentorBooking} from "@/app/components/community/mentor-booking"; // Ensure correct import path
import PartnerCarousel from "@/app/components/community/partner-carousel";
import PartnerLogos from "@/app/components/community/partner-carousel";
import ContactPartnersForm from "@/app/components/community/partner-form";
import Jobs from "@/app/components/community/jobs";

const CommunityPage = () => {
  // Placeholder data for WorkspaceBooking and MentorBooking components
  const workspaces = [
    {
      id: 1,
      title: "Workspace 1",
      imageUrl:
        "https://www.datocms-assets.com/96294/1700784188-220602_au_modernworkplace_blog_image.png",
    },
    {
      id: 2,
      title: "Workspace 2",
      imageUrl:
        "https://www.loffler.com/hs-fs/hubfs/Blog%20Images/Modern%20Workplace.jpg?height=420&name=Modern%20Workplace.jpg",
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "Mentor 1",
      imageUrl:
        "https://www.phillymag.com/wp-content/uploads/sites/3/2018/03/mentor-relationship-istock-900x600.jpg",
    }, // Update with real image URLs
    {
      id: 2,
      name: "Mentor 2",
      imageUrl:
        "https://assets-global.website-files.com/631037bf5f2c0608d41555c4/63103f32df75a645a30c6094_63058344423a973f2480722f_AugBlogHeader.png",
    }, // Update with real image URLs
  ];

  const partnerLogos = [
    "https://logowik.com/content/uploads/images/forbes-black5112.logowik.com.webp",
    "https://i.pinimg.com/originals/b2/d9/06/b2d906c4b90768b63db1078cf365ca9f.jpg",
    "https://logowik.com/content/uploads/images/geberit.jpg",
    "https://logowik.com/content/uploads/images/ikea9726.jpg",
    "https://www.helvetia.com/content/dam/os/de/web/ueber-uns/blog-und-news/media/bilddatenbank/media/helvetia-logo_wei%C3%9F.jpg",
    // Add more logos as needed
  ];

  return (
    <div className="bg-[#f0f0f0] min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-10">Community Hub</h1>

      {/* Upcoming Events Section */}
      <section>
        <h2 className="text-4xl font-semibold mb-6">Upcoming Events</h2>
        <div className="flex flex-row justify-center items-center">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Workspace Booking Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-semibold mb-6">Book a Workspace</h2>
        <WorkspaceBooking workspaces={workspaces} />
      </section>

      {/* Mentor Booking Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-semibold mb-6">Book a Mentor Session</h2>
        <MentorBooking mentors={mentors} />
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-semibold mb-6">Jobs</h2>
        <Jobs />
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-semibold mb-6">Contact Partners</h2>
        <ContactPartnersForm />
      </section>

      {/* Partner Logos Carousel Section */}
      <section className="mt-10 m-[-32px]">
        <PartnerLogos logos={partnerLogos} />
      </section>
    </div>
  );
};

export default CommunityPage;
