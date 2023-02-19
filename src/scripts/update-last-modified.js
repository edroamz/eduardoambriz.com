/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs').promises;
const matter = require('gray-matter');
const formatISO = require('date-fns/formatISO');

const updateLastModified = async () => {
  const [, , ...mdFilePaths] = process.argv;

  mdFilePaths.forEach(async (path) => {
    const file = matter.read(path);
    const { data: currentFrontmatter } = file;

    if (currentFrontmatter.published === true) {
      const updatedFrontmatter = {
        ...currentFrontmatter,
        lastModified: formatISO(new Date(), { representation: 'date' })
      };
      file.data = updatedFrontmatter;
      const updatedFileContent = matter.stringify(file);
      fs.writeFile(path, updatedFileContent);
    }
  });
};

updateLastModified();
