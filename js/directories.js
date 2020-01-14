'use strict';
let createDir = require('create-dir')

const Directories = async conf => {

    const { projectName, dir } = conf

    await createDir(projectName)

    // create subdir
    await dir.forEach(subDir => {
        createDir(`${projectName}/${subDir}`)
        console.log(`Created subDir -> ${projectName}/${subDir}`);
    });


}

module.exports = Directories