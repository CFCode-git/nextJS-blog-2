import {GetStaticProps, NextPage} from 'next';
import React from 'react';
import {usePosts} from 'Hooks/usePosts';
import {getPosts} from 'lib/posts';
import Link from 'next/link';

type Props = {
  posts: Post[]
}

const PostsIndex: NextPage<Props> = (props) => {
  console.log(props.posts);
  const {posts} = props;
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(p => <div key={p.id}>
        <Link href={`/posts/${p.id}`}>
          <a>
            {p.id}
          </a>
        </Link>
      </div>)}
    </div>
  );
};

export default PostsIndex;

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};