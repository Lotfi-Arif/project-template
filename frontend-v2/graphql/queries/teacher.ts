import { gql } from '@apollo/client';

export const GET_TEACHER = gql`
  query GetTeacher($id: String!) {
    teacher(id: $id) {
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

export const GET_TEACHERS = gql`
  query GetTeachers($skip: Int!, $take: Int!) {
    teachers(skip: $skip, take: $take) {
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
