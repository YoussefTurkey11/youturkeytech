import {
  courseApiResponse,
  coursePayload,
  courseStatus,
  updateCourseStatusPayload,
} from "@/types/courseType";
import { api } from "../baseApi";

export const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Courses Application
    getAllCoursesApplication: builder.query<courseApiResponse, number>({
      query: (page = 1) => `/api/v1/course-applications?page=${page}`,
      providesTags: [{ type: "Courses", id: "LIST" }],
    }),

    // Get All Courses Application (Stats)
    getAllCoursesApplicationStats: builder.query<courseApiResponse, void>({
      query: () => `/api/v1/course-applications?limit=1000`,
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
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: [{ type: "Courses", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllCoursesApplicationQuery,
  useGetAllCoursesApplicationStatsQuery,
  useCreateCourseApplicationMutation,
  useUpdateCourseApplicationStatusMutation,
} = courseApi;
