import React from "react";
import { getPosts } from "../utils/api";
import PostItem from "./PostItem";

class ListPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const posts = await getPosts(this.props.show, this.props.sort, this.props.page);
      this.setState({ posts, error: null });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error });
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.sort !== this.props.sort || prevProps.show !== this.props.show || prevProps.page !== this.props.page) {
      try {
        const posts = await getPosts(this.props.show, this.props.sort, this.props.page);
        this.setState({ posts, error: null });
      } catch (error) {
        console.error("Error fetching data:", error);
        this.setState({ error });
      }
    }
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p>Error fetching data. Please try again later.</p>;
    }

    return <div className="grid grid-cols-4 grid-rows-auto gap-5">{posts ? posts.map((post) => <PostItem key={post.id} title={post.title} publishedAt={post.published_at} img={post.medium_image[0]} />) : <p>No posts available, </p>}</div>;
  }
}

export default ListPost;
