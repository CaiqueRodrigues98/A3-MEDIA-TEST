import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  contentApiUrlOverride: "/api/tina/gql",
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "paginatemplate1",
        label: "Página Template 1",
        path: "content/paginatemplate1",
        format: "json",
        fields: [
          { name: "numero", type: "number", label: "Número da Página" },
          { name: "conteudo", type: "string", label: "Conteúdo" }
        ]
      },
      {
        name: "paginatemplate2",
        label: "Página Template 2",
        path: "content/paginatemplate2",
        format: "json",
        fields: [
          { name: "numero", type: "number", label: "Número da Página" },
          { name: "conteudo", type: "string", label: "Conteúdo" }
        ]
      }
    ],
  },
});
