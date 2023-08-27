import { gql } from '@apollo/client';

export const STUDENT_MUTATIONS = gql`
  # Create a new student
  mutation createStudent(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createStudent(
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
      createdAt
      updatedAt
    }
  }

  # Update an existing student
  mutation updateStudent($id: String!, $data: UserUpdateInput!) {
    updateStudent(id: $id, data: $data) {
      id
      email
      firstName
      lastName
      role
      createdAt
      updatedAt
    }
  }

  # Delete a student by ID
  mutation deleteStudent($id: String!) {
    deleteStudent(id: $id) {
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
