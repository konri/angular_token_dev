const {resolve, relative} = require('path');
const {writeFileSync} = require('fs-extra');

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('Wrong number of parameters! Check if you put token properly!');
}

const token = args[0];

const file = resolve(__dirname, '..', 'src', 'local-development', 'local-token.ts');
writeFileSync(
  file,
  `
/**
 * IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT!
 * THIS FILE HAS TOKEN FOR LOCAL DEVELOPMENT PURPOSE.
 * THAT FILE SHOULD NOT BE PUT FOR GITHUB AND PRODUCTION ENV.
 */
/* tslint:disable */
export const localToken = '${token}';
/* tslint:enable */
`,
  {encoding: 'utf-8'}
);

console.log(`You create file with your token ${relative(resolve(__dirname, '..'), file)}`);
