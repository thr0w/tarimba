System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "components/jquery": "github:components/jquery@2.1.4",
    "jquery": "github:components/jquery@2.1.4",
    "lodash-node": "npm:lodash-node@3.10.0",
    "ramohenrique": "npm:underscore@1.8.3",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash-node@3.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

