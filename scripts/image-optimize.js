const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

const SOURCE = path.resolve(__dirname, '../src/public/images/me.jpg')
const OUTPUT_DIR = path.resolve(__dirname, '../public/images')
const BASE_NAME = 'me'
const sizes = [320, 480, 640]
const formats = [
  { name: 'avif', options: { quality: 60 } },
  { name: 'webp', options: { quality: 70 } },
  { name: 'jpeg', options: { quality: 80 } },
]

async function build() {
  try {
    await fs.access(SOURCE)
  } catch (error) {
    console.error(`Source image not found at ${SOURCE}. Please place your image there or update the path.`)
    process.exit(1)
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true })

  const tasks = []
  for (const size of sizes) {
    for (const format of formats) {
      const outputFileName = `${BASE_NAME}-${size}.${format.name}`
      const outputPath = path.join(OUTPUT_DIR, outputFileName)
      tasks.push(
        sharp(SOURCE)
          .resize(size, size, { fit: 'cover' })
          .toFormat(format.name, format.options)
          .toFile(outputPath)
          .then(() => console.log(`Generated ${outputFileName}`))
      )
    }
  }

  await Promise.all(tasks)
  console.log('Image optimization complete. Files written to public/images/')
}

build().catch((error) => {
  console.error(error)
  process.exit(1)
})
