import { ReactElement } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import BlogSingle from "@/components/AiAgency/Blog/BlogSingle";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data 
import blogData from "@/constant/AiAgency/blog/blogData";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = blogData.find(b => b.id === slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} || Averto - Creative Digital Agency`,
    description: blog.seoDescription,
    keywords: blog.tags,
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
