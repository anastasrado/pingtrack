interface Config {
  mode: 'cloud' | 'local';
  aws?: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
  };
}

let config: Config | null = null;

export function saveConfig(newConfig: Config): void {
  config = newConfig;
  // TODO: Implement actual config saving logic (e.g., to a file)
}

export function loadConfig(): Config | null {
  return config;
  // TODO: Implement actual config loading logic
}

export function isConfigured(): boolean {
  return config !== null;
} 