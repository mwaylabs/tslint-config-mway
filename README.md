## This is a DRAFT and is not FINAL yet

# TSLint Config M-Way

> A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) for M-Way Typescript Style Guide. Heavily inspired by [TSLint Config Airbnb](https://github.com/progre/tslint-config-airbnb)

## Installation

```sh
npm install tslint-config-mway --save-dev
```

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-mway"
}
```

### Rules

* [tslint](https://www.npmjs.com/package/tslint)
* [tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle)
* [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)
* [tslint-microsoft-contrib](https://www.npmjs.com/package/tslint-microsoft-contrib)

## Versioning

```
+----- Major version is synchronize with tslint's major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

MIT
