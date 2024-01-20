module.exports = {
    HOST: process.env['HOST'] || 'localhost',
    PORT: process.env['PORT'] || 2352,
    DB_DATABASE: process.env['DB_DATABASE'] || 'test',
    DB_USER: process.env['DB_USER'] || 'root',
    DB_PASSWORD: process.env['DB_PASSWORD'] || 'root',
    DB_HOST: process.env['DB_HOST'] || 'localhost',
    DB_PORT: process.env['DB_PORT'] || 8889,
    REQUIRE_AUTH: !!process.env["REQUIRE_AUTH"] || true,
    JWT_SECRET: process.env['JWT_SECRET'] || 'secret'
}