import {
  coursePayload,
  courseStatus,
  updateCourseStatusPayload,
} from "@/types/courseType";
import { api } from "../baseApi";

export const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Courses Application
    getAllCoursesApplication: builder.query({
      query: () => `/api/v1/course-applications`,
      providesTags: [{ type: "Courses", id: "LIST" }],
    }),

    // Create Course Application
    createCourseApplication: builder.mutation<courseStatus, coursePayload>({
      query: (body) => ({
        url: `/api/v1/course-applications`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Courses", id: "LIST" }],
    }),

    // Update Course Application Status
    updateCourseApplicationStatus: builder.mutation<
      courseStatus,
      updateCourseStatusPayload
    >({
      query: ({ id, status }) => ({
        url: `/api/v1/course-applications/status/${id}`,
        method: "POST",
        body: { status },
      }),
      invalidatesTags: [{ type: "Courses", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllCoursesApplicationQuery,
  useCreateCourseApplicationMutation,
  useUpdateCourseApplicationStatusMutation,
} = courseApi;
