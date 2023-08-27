import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
      role
      createdAt
      updatedAt
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers($skip: Int!, $take: Int!) {
    users(skip: $skip, take: $take) {
      id
      email
      firstName
      lastName
      role
      createdAt
      updatedAt
    }
  }
`;
