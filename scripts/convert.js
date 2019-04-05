const { transliterate } = require(`@digitallinguistics/transliterate`);
const yamljs            = require(`yamljs`);

const {
  readFile,
  writeFile,
} = require(`fs`).promises;

const [,,input] = process.argv;

async function convert(input) {
  const yaml          = await readFile(`transliteration.yml`, `utf8`);
  const substitutions = yamljs.parse(yaml);
  const output        = transliterate(input, substitutions);
  await writeFile(`output.txt`, output, `utf8`);
}

convert(input);
