import { Metadata } from "next";
import { ReactElement } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import BlogSingle from "@/components/AiAgency/Blog/BlogSingle";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data 
import blogData from "@/constant/AiAgency/blog/blogData";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "";
  const formattedSlug = slug.replace(/-/g, ' ');
  const displayTitle = formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1);
  return {
    title: `${displayTitle} | Sysconex`,
    description: `Read this in-depth tech article by Sysconex, leading experts in software development and IT solutions in Sri Lanka.`,
    keywords: [
      "Sysconex",
      "Software Development in Sri Lanka",
      "Digital Agency Sri Lanka",
      "Software Company Colombo",
      "Web Development Negombo",
      "IT Consulting",
      ...["Sysconex Blog Article","Tech Insights Sri Lanka"],
      formattedSlug
    ],
    creator: "sysconex",
    openGraph: {
      images: ['/assets/imgs/logo/logo-dark.webp']
    },
    other: {
      developer: "sysconex",
    },
  };
};

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogDetailsPage = async ({ params }: Props): Promise<ReactElement> => {
  const { slug } = await params;
  const blog = blogData.find((item) => item.id === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="BLOGS"
            subTitle="Details"
            pageName="BLOGS DETAILS"
          />
          <BlogSingle post={blog} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default BlogDetailsPage;
