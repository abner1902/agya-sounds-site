import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Pastas de backup/histórico — não são código de produção
    ".backups/**",
    "backups-agya/**",
    ".tmp/**",
    "scripts/**",
  ]),
]);

export default eslintConfig;