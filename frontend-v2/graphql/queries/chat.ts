import { gql } from '@apollo/client';

export const GET_CHATS = gql`
  query chats($skip: Int, $take: Int) {
    chats(skip: $skip, take: $take) {
      id
      userId1
      userId2
      createdAt
      updatedAt
    }
  }
`;

export const GET_CHAT = gql`
  query chat($id: String!) {
    chat(id: $id) {
      id
      userId1
      userId2
      createdAt
      updatedAt
    }
  }
`;
