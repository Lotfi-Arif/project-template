import { gql } from '@apollo/client';

export const STUDENT_QUERIES = gql`
  # Fetch a single student by ID
  query student($id: String!) {
    student(id: $id) {
      id
      email
      firstName
      lastName
      role
      createdAt
      updatedAt
    }
  }

  # Fetch multiple students with optional pagination
  query students($skip: Int, $take: Int) {
    students(skip: $skip, take: $take) {
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
