import { gql } from '@apollo/client';

export const CREATE_COURSE = gql`
  mutation createCourse($data: CourseCreateInput!) {
    createCourse(data: $data) {
      id
      name
      description
      teacherId
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation updateCourse($id: String!, $data: CourseUpdateInput!) {
    updateCourse(id: $id, data: $data) {
      id
      name
      description
      teacherId
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation deleteCourse($id: String!) {
    deleteCourse(id: $id) {
      id
      name
      description
      teacherId
      createdAt
      updatedAt
    }
  }
`;
