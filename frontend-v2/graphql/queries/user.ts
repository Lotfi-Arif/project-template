import { gql } from '@apollo/client';

export const GETUSER = gql`
  query getUser($id: String!) {
    user(id: $id) {
      id
    }
  }
`;
