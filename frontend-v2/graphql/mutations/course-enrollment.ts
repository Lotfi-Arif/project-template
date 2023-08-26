import { gql } from '@apollo/client';

export const CREATE_COURSE_ENROLLMENT = gql`
  mutation createCourseEnrollment($data: CourseEnrollmentCreateInput!) {
    createCourseEnrollment(data: $data) {
      id
      courseId
      studentId
      enrollmentDate
    }
  }
`;

export const UPDATE_COURSE_ENROLLMENT = gql`
  mutation updateCourseEnrollment(
    $id: String!
    $data: CourseEnrollmentUpdateInput!
  ) {
    updateCourseEnrollment(id: $id, data: $data) {
      id
      courseId
      studentId
      enrollmentDate
    }
  }
`;

export const DELETE_COURSE_ENROLLMENT = gql`
  mutation deleteCourseEnrollment($id: String!) {
    deleteCourseEnrollment(id: $id) {
      id
      courseId
      studentId
      enrollmentDate
    }
  }
`;
