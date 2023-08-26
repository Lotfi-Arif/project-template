import { gql } from '@apollo/client';

export const GET_COURSE_ENROLLMENTS = gql`
  query courseEnrollments($skip: Int, $take: Int) {
    courseEnrollments(skip: $skip, take: $take) {
      id
      courseId
      studentId
      enrollmentDate
    }
  }
`;

export const GET_COURSE_ENROLLMENT_BY_ID = gql`
  query courseEnrollment($id: String!) {
    courseEnrollment(id: $id) {
      id
      courseId
      studentId
      enrollmentDate
    }
  }
`;
