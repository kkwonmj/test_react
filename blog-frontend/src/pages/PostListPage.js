import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import NavBarTest from '../components/NavBarTest';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <NavBarTest />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
