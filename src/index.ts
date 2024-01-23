import { directoryImport } from 'directory-import'

const imports = directoryImport({
  targetDirectoryPath: './dir',
});
console.log('imports', imports)
