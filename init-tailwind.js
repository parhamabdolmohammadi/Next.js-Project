const { execSync } = require("child_process");
execSync("node_modules\\.bin\\tailwindcss.cmd init -p", { stdio: "inherit" });
