import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
  slug: "settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
      defaultValue: "Appricotsoft",
    },
    {
      name: "siteDescription",
      type: "textarea",
      localized: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "favicon",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "contact",
      type: "group",
      fields: [
        {
          name: "email",
          type: "email",
        },
        {
          name: "phone",
          type: "text",
        },
        {
          name: "address",
          type: "textarea",
        },
      ],
    },
    {
      name: "social",
      type: "group",
      fields: [
        {
          name: "twitter",
          type: "text",
        },
        {
          name: "linkedin",
          type: "text",
        },
        {
          name: "github",
          type: "text",
        },
        {
          name: "instagram",
          type: "text",
        },
      ],
    },
    {
      name: "footer",
      type: "group",
      fields: [
        {
          name: "copyright",
          type: "text",
          localized: true,
          defaultValue: "© 2024 Appricotsoft. All rights reserved.",
        },
      ],
    },
  ],
};
