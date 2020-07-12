module.exports = {
  "testEnvironment": "node",
  "roots": [
    "<rootDir>"
  ],
  "preset": 'ts-jest',
  "setupFilesAfterEnv": ["<rootDir>/tests/setupTests.ts"],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileMocks.js"
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "testPathIgnorePatterns": ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],

  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  "globals": {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.jest.json"
    }
  }
}