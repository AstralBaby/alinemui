var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/picocolors/picocolors.browser.js
var require_picocolors_browser = __commonJS({
  "node_modules/picocolors/picocolors.browser.js"(exports, module) {
    var x = String;
    var create = function() {
      return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
    };
    module.exports = create();
    module.exports.createColors = create;
  }
});

// node_modules/tailwindcss/lib/util/log.js
var require_log = __commonJS({
  "node_modules/tailwindcss/lib/util/log.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      dim: function() {
        return dim;
      },
      default: function() {
        return _default;
      }
    });
    var _picocolors = /* @__PURE__ */ _interop_require_default(require_picocolors_browser());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var alreadyShown = /* @__PURE__ */ new Set();
    function log(type, messages, key) {
      if (typeof process !== "undefined" && process.env.JEST_WORKER_ID)
        return;
      if (key && alreadyShown.has(key))
        return;
      if (key)
        alreadyShown.add(key);
      console.warn("");
      messages.forEach((message) => console.warn(type, "-", message));
    }
    function dim(input) {
      return _picocolors.default.dim(input);
    }
    var _default = {
      info(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      },
      warn(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      },
      risk(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      }
    };
  }
});

// node_modules/tailwindcss/lib/public/colors.js
var require_colors = __commonJS({
  "node_modules/tailwindcss/lib/public/colors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _log = /* @__PURE__ */ _interop_require_default(require_log());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function warn({ version, from, to }) {
      _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        "Update your configuration file to silence this warning."
      ]);
    }
    var _default = {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617"
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712"
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b"
      },
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a"
      },
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a"
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407"
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03"
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
        950: "#422006"
      },
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
        950: "#1a2e05"
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16"
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22"
      },
      teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
        950: "#042f2e"
      },
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
        950: "#083344"
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b"
      },
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065"
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764"
      },
      fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
        950: "#4a044e"
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
        950: "#500724"
      },
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
        950: "#4c0519"
      },
      get lightBlue() {
        warn({
          version: "v2.2",
          from: "lightBlue",
          to: "sky"
        });
        return this.sky;
      },
      get warmGray() {
        warn({
          version: "v3.0",
          from: "warmGray",
          to: "stone"
        });
        return this.stone;
      },
      get trueGray() {
        warn({
          version: "v3.0",
          from: "trueGray",
          to: "neutral"
        });
        return this.neutral;
      },
      get coolGray() {
        warn({
          version: "v3.0",
          from: "coolGray",
          to: "gray"
        });
        return this.gray;
      },
      get blueGray() {
        warn({
          version: "v3.0",
          from: "blueGray",
          to: "slate"
        });
        return this.slate;
      }
    };
  }
});

// node_modules/tailwindcss/colors.js
var require_colors2 = __commonJS({
  "node_modules/tailwindcss/colors.js"(exports, module) {
    var colors2 = require_colors();
    module.exports = (colors2.__esModule ? colors2 : { default: colors2 }).default;
  }
});

// src/components/ListGroup.tsx
import React from "react";
import { Collapse, ListItemButton, ListItemText, ListItemIcon, List } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
function ListGroup({ label, children, Prepend, classes }) {
  const [expanded, setExpanded] = useState(false);
  const Append = expanded ? ExpandLess : ExpandMore;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ListItemButton, { onClick: () => setExpanded((v) => !v) }, Prepend && /* @__PURE__ */ React.createElement(Prepend, { className: "mr-2" }), /* @__PURE__ */ React.createElement(ListItemText, { primary: label, classes: { primary: classes?.label } }), /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Append, { className: "fill-gray-400" }))), /* @__PURE__ */ React.createElement(Collapse, { in: expanded }, /* @__PURE__ */ React.createElement(List, { disablePadding: true, className: "AlnListGroup" }, children)));
}

// src/components/Avatar.tsx
import React2 from "react";
import { Avatar as MuiAvatar } from "@mui/material";
function Avatar(props) {
  function getColor() {
    let colors2 = ["purple", "orange", "pink", "sky", "indigo"];
    return colors2[Math.floor(props.alt.length / colors2.length)];
  }
  const computedProps = {
    sx: {
      ...props.size && { width: props.size, height: props.size }
    },
    className: `bg-${getColor()}-600`,
    ...props.alt && { src: props.alt },
    ...props
  };
  return /* @__PURE__ */ React2.createElement(MuiAvatar, { ...computedProps });
}

// src/useTheme.ts
import { useEffect, useMemo, useState as useState2 } from "react";

// src/palette.ts
import { createTheme } from "@mui/material";

// tailwind.config.cjs
var tailwind_config_default = {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          accent: "#1d4ed8"
        }
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite"
      }
    }
  },
  // If a class is not found in any file specified in contents, will be removed, unless it is in the safelist.
  // Icons use the color palette at 400 and Chips use the color palette at 700.
  safelist: [
    {
      // Background for Badges and Chips
      pattern: /(bg)-(\w+)-(100|600)/
    },
    {
      // Icons for Lists and Buttons
      pattern: /fill-(\w+)-700/
    },
    {
      // TODO: Add state styles to all typography extended components: Danger, Success, Warning
      // Text color for Badges and Chips
      pattern: /text-(\w+)-600/
    }
  ]
};

// src/palette.ts
var import_colors = __toESM(require_colors2());
var { theme: { extend } } = tailwind_config_default;
var { palette: { augmentColor } } = createTheme();
var LightPalette = {
  mode: "light",
  primary: {
    main: extend.colors.primary.DEFAULT,
    light: extend.colors.primary.accent
  },
  secondary: {
    light: import_colors.default.gray[100],
    main: import_colors.default.gray[200],
    dark: import_colors.default.gray[300]
  },
  background: {
    default: import_colors.default.white,
    paper: import_colors.default.white
  },
  text: {
    primary: import_colors.default.gray[700],
    secondary: import_colors.default.gray[600]
  }
};
var DarkPalette = {
  mode: "dark",
  primary: {
    main: extend.colors.primary.DEFAULT,
    light: extend.colors.primary.accent,
    contrastText: import_colors.default.white
  },
  secondary: {
    light: import_colors.default.gray[600],
    main: import_colors.default.gray[800],
    dark: import_colors.default.gray[700],
    contrastText: import_colors.default.white
  },
  background: {
    default: import_colors.default.neutral[800],
    paper: import_colors.default.neutral[800]
  },
  text: {
    primary: import_colors.default.neutral[100],
    secondary: import_colors.default.neutral[200]
  }
};

// src/useTheme.ts
import { createTheme as createTheme2 } from "@mui/material";

// src/theme.ts
var theme = {
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    heading: { color: "black" },
    subheading: { color: "black" },
    article: { color: "black" },
    caption: {},
    blockquote: { color: "black" }
  },
  //custom theme overrides
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    },
    MuiPaper: {
      defaultProps: {
        square: false
      }
    },
    MuiButton: {
      // Fix for use with tailwind.
      styleOverrides: {
        root: ({ ownerState, theme: theme2 }) => {
          return ownerState.variant === "contained" && {
            "&:not(:hover)": {
              backgroundColor: theme2.palette[ownerState.color].main + " !important"
            }
          };
        }
      },
      defaultProps: {
        variant: "contained"
      }
    },
    MuiButtonBase: {
      defaultProps: {
        // color: "secondary"
      }
    },
    MuiInputBase: {
      defaultProps: {
        size: "small"
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true
      }
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: false
      }
    },
    MuiStepper: {
      defaultProps: {
        alternativeLabel: true
      }
    }
  }
};
var theme_default = theme;

// src/useTheme.ts
var useTheme = () => {
  const [mode, setMode] = useState2("light");
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark")
      root.classList.add("dark");
    else
      root.classList.remove("dark");
  }, [mode]);
  const theme2 = useMemo(() => createTheme2({
    palette: mode === "dark" ? DarkPalette : LightPalette,
    ...theme_default
  }), [mode]);
  return {
    mode,
    setMode,
    theme: theme2
  };
};
var useTheme_default = useTheme;
export {
  Avatar,
  ListGroup,
  useTheme_default as useTheme
};
