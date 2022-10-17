import React from "react";
import moment from "moment";
import Link from "next/link";



const PostCard = ({ post }) => {
  console.log(post.slug);
  return (
        
    <Link key={post._id} href={`/post/${post.slug}`}>
   
   <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img 
              className="h-60 w-full object-cover group-hover:scale-105 
              transition-transform duration-200 ease-in-out" 
              src={post.featuredImage.url} alt="" />

              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {" "}
                    {post.description} by {post.author.name}{" "}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={post.author.photo.url}
                  alt=""
                />
              </div>
            </div>
  </Link>
  );
};

export default PostCard;
