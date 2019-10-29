import { WebShellApp } from "@websh/web-shell-app";
import manifest from "../app-manifest.json";

WebShellApp.manifest(manifest);

WebShellApp.command("file-new", function () {
  editor.value = ""
})

WebShellApp.command("file-open", function ({ format, content, type, extension }) {
  // you can do different things here based on the type, format and extansion

  if (type === "text/html") {
    this.throw("file-bad-file", {
      reason: "This is not a HTML editor."
    })
  }

  editor.value = content
})

WebShellApp.command("file-save", async function ({ format }) {
  // you can do different things here based on the format 
  // we dont't really need async/await here, we're just using 
  // it to demonstrate 
  return await { content: editor.value };
})
