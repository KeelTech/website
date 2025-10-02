import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  console.log('🚀 Starting image optimization...');
  
  // Create optimized directory
  const optimizedDir = 'public/assets-optimized';
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  try {
    // Optimize PNG files to WebP
    console.log('📸 Converting PNG files to WebP...');
    await imagemin(['public/assets/**/*.png'], {
      destination: optimizedDir,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });

    // Optimize JPG files to WebP
    console.log('📸 Converting JPG files to WebP...');
    await imagemin(['public/assets/**/*.jpg', 'public/assets/**/*.jpeg'], {
      destination: optimizedDir,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });

    // Also create optimized versions of original formats
    console.log('📸 Creating optimized PNG files...');
    await imagemin(['public/assets/**/*.png'], {
      destination: optimizedDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });

    console.log('📸 Creating optimized JPG files...');
    await imagemin(['public/assets/**/*.jpg', 'public/assets/**/*.jpeg'], {
      destination: optimizedDir,
      plugins: [
        imageminMozjpeg({
          quality: 80
        })
      ]
    });

    console.log('✅ Image optimization completed!');
    console.log('📁 Optimized images saved to:', optimizedDir);
    
    // Show size comparison
    const originalSize = getDirectorySize('public/assets');
    const optimizedSize = getDirectorySize(optimizedDir);
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`📊 Size comparison:`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Savings: ${savings}%`);

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(itemPath) {
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      files.forEach(file => {
        calculateSize(path.join(itemPath, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  calculateSize(dirPath);
  return totalSize;
}

optimizeImages();
