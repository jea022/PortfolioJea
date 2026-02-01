
export interface ProjectImageStyle {
  objectFit?: string;
  objectPosition?: string;
  transform?: string;
  backgroundColor?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  technologies?: string[];
  driveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  imageStyle?: ProjectImageStyle;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  name: string;
  icon: React.ReactNode;
}

export interface SocialProfile {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
