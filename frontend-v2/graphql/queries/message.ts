import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      id
      content
      senderId
      chatId
      createdAt
    }
  }
`;

export const GET_MESSAGE_BY_ID = gql`
  query message($id: String!) {
    message(id: $id) {
      id
      content
      senderId
      chatId
      createdAt
    }
  }
`;
