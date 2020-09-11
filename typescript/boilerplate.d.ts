/// <reference path="../general/boilerplate.d.ts" />

declare namespace Magicspace {
  interface BoilerplateOptions {
    tsProjects?: BoilerplateOptions.TypeScriptProjectOptions[];
  }

  namespace BoilerplateOptions {
    interface PackageOptions {
      tsProjects?: TypeScriptProjectOptions[];
    }

    interface TypeScriptProjectOptions extends TypeScriptProjectBaseOptions {}

    interface TypeScriptProjectBaseOptions {
      /**
       * TypeScript project name, defaults to 'program'.
       */
      name?: string;
      /**
       * Is this TypeScript project a library or program? Defaults to 'library'
       * if project name is 'library', otherwise 'program'.
       *
       * If the type is specified as 'script', the project will output to
       * '.bld-cache' instead of 'bld'.
       */
      type?: 'library' | 'program' | 'script';
      /**
       * Is this TypeScript project a development-time project? Defaults to
       * true if the project name is 'test', otherwise false.
       */
      dev?: boolean;
      /**
       * Parent directory, defaults to ''.
       */
      parentDir?: string;
      /**
       * Source directory, defaults to 'src'.
       */
      src?: string | false;
      /**
       * TypeScript project directory under source directory, defaults to
       * `name` option.
       */
      dir?: string;
      /**
       * Whether this project does not emit build artifact. If true, it will
       * set `outDir` as '.bld-cache' instead of 'bld'.
       */
      noEmit?: boolean;
    }
  }
}
