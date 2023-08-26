import { gql } from '@apollo/client';

export const GET_COURSE_BY_ID = gql`
  query getCourseById($id: String!) {
    getCourseById(id: $id) {
      id
      name
      description
      teacherId
      createdAt
      updatedAt
    }
  }
`;

export const GET_COURSES = gql`
  query getCourses($skip: Int, $take: Int) {
    getCourses(skip: $skip, take: $take) {
      id
      name
      description
      teacherId
      createdAt
      updatedAt
    }
  }
`;
