import { gql } from '@apollo/client';

export const CREATE_TEACHER = gql`
  mutation CreateTeacher(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    createTeacher(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      email
      firstName
      lastName
      role
    }
  }
`;

export const UPDATE_TEACHER = gql`
  mutation UpdateTeacher($id: String!, $data: UserUpdateInput) {
    updateTeacher(id: $id, data: $data) {
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

export const DELETE_TEACHER = gql`
  mutation DeleteTeacher($id: String!) {
    deleteTeacher(id: $id) {
      id
      email
      role
    }
  }
`;
