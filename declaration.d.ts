declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

//css module for Typescript - https://jaketrent.com/post/typescript-cannot-find-css-module/
//대체 왜? - https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module