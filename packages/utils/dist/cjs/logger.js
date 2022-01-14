"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const winston_1 = (0, tslib_1.__importDefault)(require("winston"));
const logging_winston_1 = require("@google-cloud/logging-winston");
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.Console(),
        new logging_winston_1.LoggingWinston(),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map