/**
 * Formats a date string for display in documentation metadata
 * @param dateString - ISO date string or undefined
 * @returns Formatted date like "February 1, 2026" or default
 */
export const formatDate = (dateString?: string): string => {
  if (!dateString) {
    return "February 2026";
  }

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "February 2026";
  }
};
