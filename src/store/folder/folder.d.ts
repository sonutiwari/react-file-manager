interface IFile {
  name: string;
  parent: IFolder | string;
}

interface IFolder {
  name: string;
  parent: IFolder | string | null;
  children: Array<IFile | IFolder>;
}

interface IFileFolderAction {
  type: string;
  payload: IFile | IFolder;
}

type IFolderState = {
  root: IFolder;
};

type DispatchType = (args: IFileFolderAction) => IFileFolderAction;
