import { gql } from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      username
      email
      bookCount
      savedBooks {
        title
        image
        authors
        bookId
        description
        link
      }
    }
  }
`;
