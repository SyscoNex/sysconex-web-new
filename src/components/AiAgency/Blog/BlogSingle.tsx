"use client";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";
import { IBlog } from "@/constant/AiAgency/blog/blogData";

interface BlogSingleProps {
  post: IBlog;
}

const BlogSingle = ({ post }: BlogSingleProps) => {
  return (
    <section className="blog-area-7">
      <div className="container">
        <div className="work-area-7-inner section-spacing">
          <div className="section-content-wrapper">
            <div className="main-content">
              <div className="blog-details-wrapper fade-anim">
                <article className="blog-details">
                  <h2 className="title main">{post?.title}</h2>
                  <div className="meta">
                    <span className="date">{post?.date}</span>
                  </div>
                  <div className="text-wrapper">
                    <p className="text main">{post?.text}</p>
                  </div>
                  <div className="thumb main">
                    <span className="tag">{post?.tag}</span>
                    <img src={post?.image} alt="blog" />
                  </div>

                  {post?.sections.map((section, index) => (
                    <div className="details-info" key={index}>
                      <h3 className="title">{section?.title}</h3>
                      <div className="text-wrapper">
                        {section?.content.map((para, i) => (
                          <p className="text" key={i}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="tags-and-share">
                    <div className="tags-wrapper">
                      <span className="title">Tags:</span>
                      <div className="tags">
                        {post?.tags?.map((tag, index) => (
                          <Link key={index} href="#">
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="social-wrapper">
                      <p className="title">Share:</p>
                      <div className="social-links">
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </article>
              </div>
            </div>

            {/* Sidebar */}
            <BlogSidebar />
            {/* End Sidebar */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSingle;
