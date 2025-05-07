
import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const execAsync = promisify(exec);

async function build() {
  console.log('🚀 Starting build process...');

  try {
    const distPath = path.resolve('dist');
    
    // Clean dist directory if it exists
    if (fs.existsSync(distPath)) {
      console.log('🧹 Cleaning dist directory...');
      fs.rmSync(distPath, { recursive: true, force: true });
    }

    // Run Vite build for client
    console.log('📦 Building client...');
    await execAsync('npm run build:client');

    // Run TypeScript compilation for server
    console.log('🔧 Building server...');
    await execAsync('npm run build:server');

    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
