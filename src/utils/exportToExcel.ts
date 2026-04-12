import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (data: any[]) => {
  if (!data || data.length === 0) return;

  // نعمل mapping للبيانات بشكل أنضف
  const formattedData = data.map((item) => ({
    Name: item.fullName,
    Email: item.email,
    Phone: item.phone,
    Level: item.level,
    Experience: item.hasExperience ? "Yes" : "No",
    Goal: item.goal,
    Source: item.source,
    Status: item.status,
    ReviewedBy: item.reviewedBy || "-",
    CreatedAt: new Date(item.createdAt).toLocaleString(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });

  saveAs(file, "course-applicants.xlsx");
};
