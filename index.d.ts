/**
 * These options make up the bulk of TypeScript’s configuration and it covers how the language should work.
 */
export declare interface ICompilerOptions {
  // # Type checking

  /**
   * When:
   *
   * - undefined (default) provide suggestions as warnings to editors
   * - true unreachable code is ignored
   * - false raises compiler errors about unreachable code
   *
   * These warnings are only about code which is provably unreachable due to the use of JavaScript syntax, for example:
   *
   */
  allowUnreachableCode?: boolean;
  /**
   * When:
   *
   * - undefined (default) provide suggestions as warnings to editors
   * - true unused labels are ignored
   * - false raises compiler errors about unused labels
   *
   * Labels are very rare in JavaScript and typically indicate an attempt to write an object literal:
   */
  allowUnusedLabels?: boolean;

  /**
   * Ensures that your files are parsed in the ECMAScript strict mode, and emit “use strict” for each source file.
   *
   * ECMAScript strict mode was introduced in ES5 and provides behavior tweaks to the runtime of the JavaScript engine to improve performance, and makes a set of errors throw instead of silently ignoring them.
   */
  alwaysStrict?: boolean;

  /**
   * With exactOptionalPropertyTypes enabled, TypeScript applies stricter rules around how it handles properties on type or interfaces which have a ? prefix.
   *
   * For example, this interface declares that there is a property which can be one of two strings: ‘dark’ or ‘light’ or it should not be in the object.
   *
   * ```ts
   * interface UserDefaults {
   *   // The absence of a value represents 'system'
   *   colorThemeOverride?: "dark" | "light";
   * }
   * ```
   *
   * Without this flag enabled, there are three values which you can set colorThemeOverride to be: “dark”, “light” and undefined.
   *
   * Setting the value to undefined will allow most JavaScript runtime checks for the existence to fail, which is effectively falsy. However, this isn’t quite accurate; colorThemeOverride: undefined is not the same as colorThemeOverride not being defined. For example, "colorThemeOverride" in settings would have different behavior with undefined as the key compared to not being defined.
   */
  exactOptionalPropertyTypes?: boolean;
  noFallthroughCasesInSwitch?: boolean;
  noImplicitAny?: boolean;
  noImplicitOverride?: boolean;
  noImplicitReturns?: boolean;
  noImplicitThis?: boolean;
  noPropertyAccessFromIndexSignature?: boolean;
  noUncheckedIndexedAccess?: boolean;
  noUnusedLocals?: boolean;
  noUnusedParameters?: boolean;
  strict?: boolean;
  strictBindCallApply?: boolean;
  strictFunctionTypes?: boolean;
  strictNullChecks?: boolean;
  strictPropertyInitialization?: boolean;
  useUnknownInCatchVariables?: string;

  // Modules
  allowArbitraryExtensions?: boolean;
  allowImportingTsExtensions?: boolean;
  allowUmdGlobalAccess?: boolean;
  baseUrl?: string;
  customConditions?: string[];
  module?: TModule;
  moduleResolution?: TModuleResolution;
  moduleSuffixes?: boolean;
  noResolve?: boolean;
  paths?: IPathObject;
  resolveJsonModule?: boolean;
  resolvePackageJsonExports?: boolean;
  resolvePackageJsonImports?: boolean;
  rootDir?: string;
  rootDirs?: string[];
  typeRoots?: string[];
  types?: string[];

  // Emit
  declaration?: boolean;
  declarationDir?: string;
  declarationMap?: boolean;
  downlevelIteration?: boolean;
  emitBOM?: boolean;
  emitDeclarationOnly?: boolean;
  importHelpers?: boolean;
  importsNotUsedAsValues?: boolean;
  inlineSourceMap?: boolean;
  inlineSources?: boolean;
  mapRoot?: string;
  newLine?: boolean;
  noEmit?: boolean;
  noEmitHelpers?: boolean;
  noEmitOnError?: boolean;
  outDir?: string;
  outFile?: string;
  preserveConstEnums?: boolean;
  preserveValueImports?: boolean;
  removeComments?: boolean;
  sourceMap?: boolean;
  sourceRoot?: string;
  stripInternal?: boolean;

  // JavaScript Support
  allowJs?: boolean;
  checkJs?: boolean;
  maxNodeModuleJsDepth?: number;

  // Editor Support
  disableSizeLimit?: boolean;
  plugins?: IPluginObject[];

  // Interop Constraints
  allowSyntheticDefaultImports?: boolean;
  esModuleInterop?: boolean;
  forceConsistentCasingInFileNames?: boolean;
  isolatedModules?: boolean;
  preserveSymlinks?: boolean;
  verbatimModuleSyntax?: boolean;

  // Backwards Compatibility
  charset?: string;
  keyofStringsOnly?: boolean;
  noImplicitUseStrict?: boolean;
  noStrictGenericChecks?: boolean;
  out?: boolean;
  suppressExcessPropertyErrors?: boolean;
  suppressImplicitAnyIndexErrors?: boolean;

  // Language and Environment
  emitDecoratorMetadata?: boolean;
  experimentalDecorators?: boolean;
  jsx?: TJsx;
  jsxFactory?: string;
  jsxFragmentFactory?: string;
  jsxImportSource?: string;
  lib?: TLib[];
  moduleDetection?: TModuleDetection;
  noLib?: boolean;
  reactNamespace?: string;
  target?: TTarget;
  useDefineForClassFields?: boolean;

  // Compiler Diagnostics
  diagnostics?: boolean;
  explainFiles?: boolean;
  extendedDiagnostics?: boolean;
  generateCpuProfile?: boolean;
  listEmittedFiles?: boolean;
  listFiles?: boolean;
  traceResolution?: boolean;

  // Projects
  composite?: boolean;
  disableReferencedProjectLoad?: boolean;
  disableSolutionSearching?: boolean;
  disableSourceOfProjectReferenceRedirect?: boolean;
  incremental?: boolean;
  tsBuildInfoFile?: boolean;

  // Output Formatting
  noErrorTruncation?: boolean;
  preserveWatchOutput?: boolean;
  pretty?: boolean;

  // Completeness
  skipDefaultLibCheck?: boolean;
  skipLibCheck?: boolean;

  // Command Line

  // Watch Options
  assumeChangesOnlyAffectDirectDependencies?: boolean;
}

export declare interface IPathObject {
  [k: string]: string[];
}

export declare interface IPluginObject {
  name: string;
}

declare interface IReference {
  path: string;
}

declare interface ITypeAcquisition {
  enable?: boolean;
  include?: string[];
  exclude?: string[];
  disableFilenameBasedTypeAcquisition?: boolean;
}

export declare enum IWatchFileStrategy {
  /**
   * Check every file for changes several times a second at a fixed interval.
   */
  fixedPollingInterval = "fixedPollingInterval",
  /**
   * Check every file for changes several times a second, but use heuristics to check certain types of files less frequently than others.
   */
  priorityPollingInterval = "priorityPollingInterval",
  /**
   * Use a dynamic queue where less-frequently modified files will be checked less often.
   */
  dynamicPriorityPolling = "dynamicPriorityPolling",
  /**
   * (the default): Attempt to use the operating system/file system’s native events for file changes.
   */
  useFsEvents = "useFsEvents",
  /**
   * Attempt to use the operating system/file system’s native events to listen for changes on a file’s parent directory
   */
  useFsEventsOnParentDirectory = "useFsEventsOnParentDirectory",
}

export declare enum IWatchDirectoryStrategy {
  /**
   * Check every directory for changes several times a second at a fixed interval.
   */
  fixedPollingInterval = "fixedPollingInterval",
  /**
   * Use a dynamic queue where less-frequently modified directories will be checked less often.
   */
  dynamicPriorityPolling = "dynamicPriorityPolling",
  /**
   * (the default): Attempt to use the operating system/file system’s native events for directory changes.
   */
  useFsEvents = "useFsEvents",
}

export declare enum IFallbackPollingStrategy {
  /**
   * Check every file for changes several times a second at a fixed interval.
   */
  fixedPollingInterval = "fixedPollingInterval",
  /**
   * Check every file for changes several times a second, but use heuristics to check certain types of files less frequently than others.
   */
  priorityPollingInterval = "priorityPollingInterval",
  /**
   * Use a dynamic queue where less-frequently modified files will be checked less often.
   */
  dynamicPriorityPolling = "dynamicPriorityPolling",
  /**
   * Disable deferred watching on directories. Deferred watching is useful when lots of file changes might occur at once (e.g. a change in node_modules from running npm install), but you might want to disable it with this flag for some less-common setups.
   */
  synchronousWatchDirectory = "synchronousWatchDirectory",
}

export declare interface IWatchOptions {
  watchFile?: keyof typeof IWatchFileStrategy;
  watchDirectory?: keyof typeof IWatchDirectoryStrategy;
  fallbackPolling?: keyof typeof IFallbackPollingStrategy;
  synchronousWatchDirectory?: boolean;
  excludeDirectories?: string[];
  excludeFiles?: string[];
}

export declare type TFiles = string[];

export declare type TImportsNotUsedAsValues = "remove" | "preserve" | "error";

export declare type TJsx =
  | "preserve"
  | "react"
  | "react-jsx"
  | "react-jsxdev"
  | "react-native";

export declare type TLib =
  | "ES5"
  | "ES6"
  | "ES2015"
  | "ES2015.Collection"
  | "ES2015.Core"
  | "ES2015.Generator"
  | "ES2015.Iterable"
  | "ES2015.Promise"
  | "ES2015.Proxy"
  | "ES2015.Reflect"
  | "ES2015.Symbol.WellKnown"
  | "ES2015.Symbol"
  | "ES2016"
  | "ES2016.Array.Include"
  | "ES2017"
  | "ES2017.Intl"
  | "ES2017.Object"
  | "ES2017.SharedMemory"
  | "ES2017.String"
  | "ES2017.TypedArrays"
  | "ES2018"
  | "ES2018.AsyncGenerator"
  | "ES2018.AsyncIterable"
  | "ES2018.Intl"
  | "ES2018.Promise"
  | "ES2018.Regexp"
  | "ES2019"
  | "ES2019.Array"
  | "ES2019.Intl"
  | "ES2019.Object"
  | "ES2019.String"
  | "ES2019.Symbol"
  | "ES2020"
  | "ES2020.BigInt"
  | "ES2020.Promise"
  | "ES2020.String"
  | "ES2020.Symbol.WellKnown"
  | "ESNext"
  | "ESNext.Array"
  | "ESNext.AsyncIterable"
  | "ESNext.BigInt"
  | "ESNext.Intl"
  | "ESNext.Promise"
  | "ESNext.String"
  | "ESNext.Symbol"
  | "DOM"
  | "DOM.Iterable"
  | "ScriptHost"
  | "WebWorker"
  | "WebWorker.ImportScripts"
  | "Webworker.Iterable"
  | "ES7"
  | "ES2021"
  | "ES2020.SharedMemory"
  | "ES2020.Intl"
  | "ES2021.Promise"
  | "ES2021.String"
  | "ES2021.WeakRef"
  | "ESNext.WeakRef"
  | "es2021.intl"
  | "ES2022"
  | "ES2022.Array"
  | "ES2022.Error"
  | "ES2022.Intl"
  | "ES2022.Object"
  | "ES2022.String";

export declare type TModule =
  | "CommonJS"
  | "AMD"
  | "System"
  | "UMD"
  | "ES6"
  | "ES2015"
  | "ES2020"
  | "ESNext"
  | "None"
  | "ES2022"
  | "Node16"
  | "NodeNext";

export declare enum ModuleDetection {
  /**
   * (default) - TypeScript will not only look for import and export statements, but it will also check whether the "type" field in a package.json is set to "module" when running with module: nodenext or node16, and check whether the current file is a JSX file when running under jsx: react-jsx.
   */
  "auto" = "auto",
  /**
   * - The same behavior as 4.6 and prior, usings import and export statements to determine whether a file is a module.
   */
  "legacy" = "legacy",
  /**
   * - Ensures that every non-declaration file is treated as a module.
   */
  "force" = "force",
}

export declare type TModuleDetection = keyof typeof ModuleDetection;

export declare enum ModuleResolution {
  "classic" = "classic",
  "node" = "node",
  "node16" = "node16",
  "nodenext" = "nodenext",
  "bundler" = "bundler",
}

export declare type TModuleResolution = keyof typeof ModuleResolution;

export declare enum Target {
  "ES3" = "ES3",
  "ES5" = "ES5",
  "ES6" = "ES6",
  "ES2015" = "ES2015",
  "ES2016" = "ES2016",
  "ES2017" = "ES2017",
  "ES2018" = "ES2018",
  "ES2019" = "ES2019",
  "ES2020" = "ES2020",
  "ES2021" = "ES2021",
  "ES2022" = "ES2022",
  "ES2023" = "ES2023",
  "ESNext" = "ESNext",
}

export declare type TTarget = keyof typeof Target;

export declare interface ITSConfigJson {
  files?: TFiles;
  extends?: string | string[];
  include?: string[];
  exclude?: string[];
  references?: IReference[];
  watchOptions?: IWatchOptions;
  compilerOptions?: ICompilerOptions;
  typeAcquisition?: ITypeAcquisition;
  "ts-node"?: Record<string, any>;
}

export {};
