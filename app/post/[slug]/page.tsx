'use client'

import { useEffect, useState } from 'react';
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Content from '@/components/content';
import { client } from '@/sanity/lib/client';
// p
const PostPage = () => {
  const { slug } = useParams(); 

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        // Fetch the post data based on the slug
        const data = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            heading,
            description,
            image{
              asset->{
                _id,
                url
              }
            },
            slug,
            
            "authorName": author->name,
            "authorBio": author->bio,
            "authorAvatar": author->avatar,
            additionalImages[] {
              image{
                asset->{
                  _id,
                  url
                }
              },
              description
            }
          }`,
          { slug }
        );

        if (!data) {
          notFound(); 
        }


        if (!Array.isArray(data.additionalImages)) {
          data.additionalImages = []; 
        }

        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        notFound(); 
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) return null; 

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-300">
        <Content post={post} />
      </div>
    </>
  );
};

export default PostPage;

