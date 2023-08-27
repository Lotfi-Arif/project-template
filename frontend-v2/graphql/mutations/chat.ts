import { gql } from '@apollo/client';

export const CREATE_CHAT = gql`
  mutation createChat($data: ChatCreateInput!) {
    createChat(data: $data) {
      id
      userId1
      userId2
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CHAT = gql`
  mutation deleteChat($id: String!) {
    deleteChat(id: $id) {
      id
      userId1
      userId2
      createdAt
      updatedAt
    }
  }
`;
