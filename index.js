const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const miError = valor => {
    if (valor < 10) {
        return "Está en rango";
    }
    throw new Error("Está fuera de rango");
}

try {
    const miValor = miError(12);
} catch (e) {
    console.error(`Èl valor de e es: $(e)`);
}
