import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
      email
      role
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: String!, $data: UserUpdateInput) {
    updateUser(id: $id, data: $data) {
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

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
      email
      role
    }
  }
`;
