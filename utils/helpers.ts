export function truncateString(str: string, limit?: number) {
  if (limit !== undefined) {
    // if shorter or equal, return as-is
    if (str.length <= limit) {
      return str;
    }
    // else truncate + ellipsis
    return str.substring(0, limit) + "...";
  }

  // no explicit limit means default to 30
  if (str.length <= 30) {
    return str;
  }
  return str.substring(0, 30) + "...";
}
