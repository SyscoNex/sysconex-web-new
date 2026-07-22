import { Metadata } from "next";
import { ReactElement } from "react";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";
import BlogSection from "@/components/AiAgency/Blog/BlogSection";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import Header from "@/components/AiAgency/Header";
import Footer from "@/components/AiAgency/Footer";

// all data
import blogData from "@/constant/AiAgency/blog/blogData";

export const metadata: Metadata = {
  title: "Blog & Insights | Tech News & Updates by Sysconex",
  description: "Read the latest insights on software engineering, web development trends, and digital innovation from the expert team at Sysconex in Sri Lanka.",
  keywords: [
    "Sysconex",
    "Software Development in Sri Lanka",
    "Digital Agency Sri Lanka",
    "Software Company Colombo",
    "Web Development Negombo",
    "Web Design Sri Lanka",
    "Mobile App Development",
    "IT Consulting",
    "Custom Software Solutions",
    "Tech Agency",
    "Tech Blog Sri Lanka",
    "Software Engineering News",
    "Web Development Tips",
    "Tech Trends"
],
  creator: "sysconex",
  openGraph: {
    images: ['/assets/images/logo.png']
  },
  other: {
    developer: "sysconex",
  },
};

type Props = {
  searchParams: Promise<{ search?: string }>;
};

const Home = async ({ searchParams }: Props): Promise<ReactElement> => {
  const { search } = await searchParams;
  
  const filteredData = search 
    ? blogData.filter(blog => 
        blog.title.toLowerCase().includes(search.toLowerCase()) || 
        blog.text.toLowerCase().includes(search.toLowerCase())
      )
    : blogData;

  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="BLOGS"
            subTitle="Knowledge Hub"
            pageName="ALL BLOGS"
          />
          <BlogSection data={filteredData}/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
