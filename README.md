# A correctly setup TypeScript dual (ESM+CJS) package

After I finished this, I found this is ridiculously (the symlink part) complex to make it correct (if I'm wrong plz tell me!).

Some notes:

-   This setup type check the project in two passes (ESM pass and CJS pass), which means:
    -   Import a named export from a CommonJS package _might_ (because it should have a type error but I cannot get it) be a type error in ESM pass.
    -   Import a pure ESM module is a type error in CommonJS pass.
-   You need to have a symlink (on Windows, it is directory junction) from `./src` to `./cjs/src` in order to have the two passes work.
-   Don't write this, this is broken. See <https://github.com/microsoft/TypeScript/issues/50466>

```json
{
    "exports": {
        ".": {
            "type": "./esm/index.d.ts",
            "import": "./esm/index.js",
            "require": "./cjs/dist/index.js"
        }
    }
}
```
