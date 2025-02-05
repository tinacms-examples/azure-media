import type { Collection } from "tinacms";

const PostCollection: Collection = {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};

export default PostCollection;
