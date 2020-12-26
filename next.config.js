const nextEnv = require('next-env');
const dotEnvLoad = require('dotenv-load');
const {default: next} = require('next');

dotEnvLoad();

const withNextEnv = nextEnv();
module.exports = withNextEnv();