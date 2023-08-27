import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation register($data: UserCreateInput!) {
    register(data: $data) {
      id
      email
      firstName
      lastName
      role
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
