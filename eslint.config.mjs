import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends("prettier"), // Correct way to extend Prettier in Flat Config
  {
    plugins: {
      prettier: prettierPlugin, // Plugins must be objects in Flat Config
    },
    rules: {
      "prettier/prettier": "error", // Enable Prettier formatting errors
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "no-console": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-require-imports": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-key": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react/jsx-no-comment-textnodes": "off", // Disable JSX comment error
      "@typescript-eslint/no-empty-object-type": "off", // Allow empty interfaces
    },
  },
];

export default eslintConfig;

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   ...compat.extends("plugin:prettier/recommended"), // Extend Prettier
//   {
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/no-unused-vars": "off",
//       "react/no-unescaped-entities": "off",
//       "no-console": "off",
//       "@typescript-eslint/no-unused-expressions": "off",
//       "@typescript-eslint/no-require-imports": "off",
//       "react-hooks/rules-of-hooks": "off", // Ignore Hook rules
//       "react-hooks/exhaustive-deps": "off", // Ignore useEffect dependency warnings
//       "react/jsx-key": "off", // Ignore missing 'key' warnings
//       "prettier/prettier": "off", // Ignore Prettier formatting errors
//       "@typescript-eslint/ban-ts-comment": "off", // Allow @ts-ignore
//     },
//   },
// ];

// export default eslintConfig;
