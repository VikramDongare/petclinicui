const log4js = require('log4js');
log4js.configure('./logConfig/log4js.json');

exports.default = log4js.getLogger('file');