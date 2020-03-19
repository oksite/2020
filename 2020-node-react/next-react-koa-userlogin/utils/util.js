export function isFormDataInstance(obj) {
  return !!(obj && obj.getHeaders);
}