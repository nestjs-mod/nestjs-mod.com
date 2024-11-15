const fg = require("fast-glob");
const normalizePath_ = require("normalize-path");

import { promises as fsPromises, rmdir, rmdirSync, rmSync } from "node:fs";
import { basename, dirname } from "node:path";
import { join } from "path";
import * as writeFileAtomic from "write-file-atomic";

function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

export async function replaceInFiler(
  filePaths: string[],
  {
    find,
    replacement,
    ignoreCase,
  }: {
    find: (string | RegExp)[];
    replacement: string[];
    ignoreCase?: boolean;
  }
) {
  filePaths = [filePaths].flat();

  if (filePaths.length === 0) {
    return;
  }

  if (find?.length === 0) {
    throw new Error("Expected at least one `find` pattern");
  }

  if (replacement === undefined) {
    throw new Error("The `replacement` option is required");
  }

  // Replace the replacement string with the string unescaped (only one backslash) if it's escaped
  replacement = replacement.map((r) =>
    r.replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t")
  );

  filePaths = await fg.glob(filePaths);

  find = find?.map((element) => {
    const iFlag = ignoreCase ? "i" : "";

    if (typeof element === "string") {
      return new RegExp(escapeStringRegexp(element), `g${iFlag}`);
    }

    return new RegExp(
      element.source,
      `${element.flags.replace("i", "")}${iFlag}`
    );
  });

  await Promise.all(
    filePaths.map(async (filePath) => {
      try {
        const string = await fsPromises.readFile(filePath, "utf8");
        const lines = string.split("\n");
        let firstLine = lines[0].split("# ")[1] || lines[0].split("## ")[1];
        if (firstLine[firstLine.length - 1] === ".") {
          firstLine = firstLine.slice(0, -1);
        }

        let newString = string;
        for (let index = 0; index < find.length; index++) {
          const pattern = find[index];
          newString = newString.replace(pattern, replacement[index]);
        }

        const firstLineDate = firstLine.split("]")[0].split("[")[1];
        const firstLineText = firstLine.split("]").splice(1).join("]").trim();

        await writeFileAtomic(
          join(filePath, "..", "..", `${firstLineDate}.md`),
          [
            `# ${firstLineText}`,
            ...newString
              .split("\n")
              .filter((s, i, a) =>
                (i === a.length - 1 && !s) || s.includes("Предыдущая статья:")
                  ? false
                  : true
              )
              .slice(1),
            ` #${firstLineDate}`,
          ].join("\n")
        );
        rmSync(dirname(filePath), { recursive: true, force: true });
      } catch (err) {
        console.error(err, err.stack);
      }
    })
  );
}

async function main() {
  await replaceInFiler(
    [
      join(__dirname, "../docs/en-posts/fullstack/**"),
      join(__dirname, "../docs/ru-posts/fullstack/**"),
    ],
    {
      find: [
        "{% endspoiler %}",
        "{% spoiler ",
        " %}",
        '<spoiler title="',
        '">',
        "</spoiler>",
      ],
      replacement: ["</spoiler>", '<spoiler title="', '">', "_", "_", ""],
    }
  );
  await writeFileAtomic(
    join(__dirname, "..", "docs/ru-posts/fullstack/_category_.json"),
    `{
  "label": "Fullstack",
  "position": 1,
  "collapsed": false,
  "link": {
    "type": "generated-index",
    "description": "Шаблон для создания fullstack-приложения на NestJS и Angular."
  }
}`
  );
  await writeFileAtomic(
    join(__dirname, "..", "docs/en-posts/fullstack/_category_.json"),
    `{
  "label": "Fullstack",
  "position": 1,
  "collapsed": false,
  "link": {
    "type": "generated-index",
    "description": "Boilerplate for creating a fullstack application on NestJS and Angular."
  }
}`
  );
}

main();
