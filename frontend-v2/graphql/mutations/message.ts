import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation createMessage(
    $content: String!
    $senderId: String!
    $chatId: String!
  ) {
    createMessage(content: $content, senderId: $senderId, chatId: $chatId) {
      id
      content
      senderId
      chatId
      createdAt
    }
  }
`;

export const UPDATE_MESSAGE = gql`
  mutation updateMessage($id: String!, $content: String!) {
    updateMessage(id: $id, content: $content) {
      id
      content
      senderId
      chatId
      createdAt
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation deleteMessage($id: String!) {
    deleteMessage(id: $id) {
      id
      content
      senderId
      chatId
      createdAt
    }
  }
`;
