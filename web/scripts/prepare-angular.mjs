import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webDir = path.resolve(__dirname, '..');
const angularDir = path.resolve(webDir, 'angular-widget');
const distDir = path.join(angularDir, 'dist', 'angular-widget', 'browser');
const targetDir = path.join(webDir, 'public', 'angular');

const args = new Map(
  process.argv
    .slice(2)
    .filter((arg) => arg.startsWith('--'))
    .map((arg) => {
      const [key, value = 'true'] = arg.replace(/^--/, '').split('=');
      return [key, value];
    })
);

const mode = args.get('mode') ?? 'production';

const run = (command, args, cwd) => {
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    env: process.env
  });
  if (result.status !== 0) {
    const commandString = [command, ...args].join(' ');
    throw new Error(`Command failed: ${commandString}`);
  }
};

const ensureAngularDeps = () => {
  if (!existsSync(path.join(angularDir, 'node_modules'))) {
    run('npm', ['install', '--include=dev'], angularDir);
  }
};

const buildAngular = () => {
  if (mode === 'dev') {
    run('npm', ['run', 'build:dev'], angularDir);
  } else {
    run('npm', ['run', 'build'], angularDir);
  }
};

const copyBuildOutput = () => {
  if (!existsSync(distDir)) {
    throw new Error(`Angular build output not found at ${distDir}`);
  }

  if (existsSync(targetDir)) {
    rmSync(targetDir, { recursive: true, force: true });
  }

  mkdirSync(targetDir, { recursive: true });
  cpSync(distDir, targetDir, { recursive: true });
};

ensureAngularDeps();
buildAngular();
copyBuildOutput();
