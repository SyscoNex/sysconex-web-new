"use client";

import { popularTags } from "@/constant/AiAgency/blog/sidebarData";
import blogData from "@/constant/AiAgency/blog/blogData";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BlogSidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/ai-agency/blog?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push(`/ai-agency/blog`);
    }
  };

  const recentBlogs = blogData.slice(0, 3);

  return (
    <div className="blog-sidebar">
      {/* Search Bar Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Search bar</h3>
        <div className="search-wrapper">
          <form onSubmit={handleSearch} className="search-form">
            <div className="input-field">
              <input
                type="text"
                placeholder="Search anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Recent Blogs Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Recent blogs</h3>
        <div className="blogs-wrapper">
          {recentBlogs.map((blog) => (
            <article className="blog" key={blog.id}>
              <div className="thumb">
                <Link href={blog.url}>
                  <img src={blog.image} alt="Recent Blog" style={{ width: "95px", height: "95px", objectFit: "cover" }} />
                </Link>
              </div>
              <div className="content-wrapper">
                <div className="content">
                  <div className="meta">
                    <span className="date">{blog.date}</span>
                  </div>
                  <h2 className="title">
                    <Link href={blog.url}>{blog.title}</Link>
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Popular Tags Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Popular tags</h3>
        <div className="tags-wrapper">
          {popularTags.map((tag: string, idx: number) => (
            <Link href={`/ai-agency/blog?search=${encodeURIComponent(tag)}`} key={idx}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
