export function isFile(obj: any): obj is IFile {
  return !obj.children;
}

export function isFolder(obj: any): obj is IFolder {
  return obj.children;
}
