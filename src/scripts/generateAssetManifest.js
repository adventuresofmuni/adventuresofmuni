// scripts/generateAssetManifest.js
const fs = require('fs')
const path = require('path')

const baseDir = path.join(__dirname, '../components') // Your assets root in source

// Recursively retrieve all file paths within a directory
function getFilesRecursive(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursive(filePath))
    } else {
      results.push(filePath)
    }
  })
  return results
}

const allFiles = getFilesRecursive(baseDir)
// Filter for png and gif files (case insensitive)
const assetFiles = allFiles.filter((file) => /\.(png|gif)$/i.test(file))

// Convert absolute paths to relative URL paths.
// For each file, compute the relative path from the baseDir and prefix with '/components'
const assetPaths = assetFiles.map((file) => {
  const relativePath = path.relative(baseDir, file) // e.g., 'CLOUD/5A/Page_5A_eng.png'
  return `/components/${relativePath.replace(/\\/g, '/')}` // Ensure URL-friendly format
})

// Write the manifest (adjust the output path as needed)
fs.writeFileSync(
  path.join(__dirname, '../assetsManifest.json'),
  JSON.stringify(assetPaths, null, 2)
)

console.log('Asset manifest generated successfully.')
