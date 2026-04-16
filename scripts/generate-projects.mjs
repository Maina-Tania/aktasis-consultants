import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the root directory (parent of scripts folder)
const rootDir = path.resolve(__dirname, '..');
const projectsDir = path.join(rootDir, 'public/projects');
const outputFile = path.join(rootDir, 'src/data/projects.ts');

// Helper function to create URL-safe slug
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[,\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Helper function to infer category from folder name
function inferCategory(folderName) {
  const lowerName = folderName.toLowerCase();
  
  // Residential keywords
  if (/house|villa|apartment|maisonette|residence|home|bungalow|flats/i.test(lowerName)) {
    return 'Residential';
  }
  
  // Commercial keywords
  if (/office|commercial|business|centre|center|plaza|mall|restaurant|hotel/i.test(lowerName)) {
    return 'Commercial';
  }
  
  // International keywords
  if (/juba|south sudan|uganda|tanzania|rwanda|ethiopia/i.test(lowerName)) {
    return 'International';
  }
  
  // Sustainable keywords
  if (/sustainable|green|eco/i.test(lowerName)) {
    return 'Sustainable';
  }
  
  return 'Mixed Use';
}

// Helper function to check if file is an image
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
}

// Main function to generate projects data
function generateProjectsData() {
  try {
    // Check if projects directory exists
    if (!fs.existsSync(projectsDir)) {
      console.error(`Projects directory not found: ${projectsDir}`);
      process.exit(1);
    }

    // Read all subdirectories
    const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    console.log(`Found ${folders.length} project folders`);

    // Generate project data
    const projects = folders.map(folderName => {
      const folderPath = path.join(projectsDir, folderName);
      
      // Read all image files in the folder
      const files = fs.readdirSync(folderPath);
      const imageFiles = files.filter(isImageFile);

      if (imageFiles.length === 0) {
        console.warn(`Warning: No images found in ${folderName}`);
        return null;
      }

      // Create image paths (relative to public folder)
      const images = imageFiles.map(img => `/projects/${folderName}/${img}`);

      return {
        id: createSlug(folderName),
        name: folderName,
        category: inferCategory(folderName),
        coverImage: images[0],
        images: images,
        imageCount: images.length
      };
    }).filter(Boolean); // Remove null entries

    // Sort projects by name
    projects.sort((a, b) => a.name.localeCompare(b.name));

    // Generate TypeScript file content
    const tsContent = `// Auto-generated file - Do not edit manually
// Generated on: ${new Date().toISOString()}
// Total projects: ${projects.length}

export interface ProjectData {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'International' | 'Sustainable' | 'Mixed Use';
  coverImage: string;
  images: string[];
  imageCount: number;
}

export const projects: ProjectData[] = ${JSON.stringify(projects, null, 2)};

export const categories = [
  'All',
  ...Array.from(new Set(projects.map(p => p.category))).sort()
] as const;

export type Category = typeof categories[number];
`;

    // Ensure the data directory exists
    const dataDir = path.dirname(outputFile);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(outputFile, tsContent, 'utf8');

    console.log(`✅ Successfully generated ${outputFile}`);
    console.log(`📊 Total projects: ${projects.length}`);
    
    // Print category breakdown
    const categoryCount = projects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n📁 Projects by category:');
    Object.entries(categoryCount).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count}`);
    });

  } catch (error) {
    console.error('Error generating projects data:', error);
    process.exit(1);
  }
}

// Run the script
generateProjectsData();

// Made with Bob
