/***
 * A function to ease development and debug of custom components in the `core` folder. 
 * It concatenates the file path and the imported component's displayName to easily debug
 * @param displayName
 * 
 * 
 * Example:
 getAbsoluteFilePath("");
 */

export function getAbsoluteFilePath(displayName: string | undefined) {
  const path = "/src/core/components/";

  // Concatenate the file path and the imported component's displayName
  return `${path} :: ${displayName}`;
}
