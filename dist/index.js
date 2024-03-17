"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const chracters_json_1 = __importDefault(require("../api/characters/chracters.json"));
const Akasuki_json_1 = __importDefault(require("../api/characters/Akasuki.json"));
const Kara_json_1 = __importDefault(require("../api/characters/Kara.json"));
const keke_genka_json_1 = __importDefault(require("../api/characters/keke_genka.json"));
const taildedbeasts_json_1 = __importDefault(require("../api/characters/taildedbeasts.json"));
const teams_json_1 = __importDefault(require("../api/characters/teams.json"));
const Clans_json_1 = __importDefault(require("../api/clans/Clans.json"));
const villages_json_1 = __importDefault(require("../api/clans/villages.json"));
const fastify = (0, fastify_1.default)({ logger: false });
fastify.get("/api/characters", async function handler(request, reply) {
    return chracters_json_1.default;
});
fastify.get("/api/character/id=:id", async function handler(req, reply) {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    console.log(id);
    if (!id) {
        return { message: "Id required ", status: "404" };
    }
    const filteredCharacters = chracters_json_1.default.filter((char) => char.id === Number(id));
    if (filteredCharacters.length === 0) {
        return { message: `Character with id '${id}' not found`, status: "404" };
    }
    return filteredCharacters;
});
fastify.get("/api/characterss/search=:search", async function handler(req, reply) {
    var _a;
    const searchTerm = (_a = req.params) === null || _a === void 0 ? void 0 : _a.search;
    if (searchTerm === null) {
        return { message: "Search term required", status: "400" };
    }
    const filteredCharacters = chracters_json_1.default.filter((char) => { var _a; return (_a = char.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchTerm === null || searchTerm === void 0 ? void 0 : searchTerm.toLowerCase()); });
    if (filteredCharacters.length === 0) {
        return {
            message: `No characters found matching search term '${searchTerm}'`,
            status: "404",
        };
    }
    return filteredCharacters;
});
fastify.get("/api/akatsuki", async function handler(request, reply) {
    return Akasuki_json_1.default;
});
fastify.get("/api/kara", async function handler(request, reply) {
    return Kara_json_1.default;
});
fastify.get("/api/keke_genkai", async function handler(request, reply) {
    return keke_genka_json_1.default;
});
fastify.get("/api/tailedbeasts", async function handler(request, reply) {
    return taildedbeasts_json_1.default;
});
fastify.get("/api/teams", async function handler(request, reply) {
    return teams_json_1.default;
});
fastify.get("/api/clans", async function handler(request, reply) {
    return Clans_json_1.default;
});
fastify.get("/api/clan/search=:search", async function handler(req, reply) {
    var _a;
    const searchTerm = (_a = req.params) === null || _a === void 0 ? void 0 : _a.search;
    if (!searchTerm) {
        return { message: "Search term required", status: "400" };
    }
    const filteredClans = Clans_json_1.default.clans.filter((char) => { var _a; return (_a = char.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchTerm === null || searchTerm === void 0 ? void 0 : searchTerm.toLowerCase()); });
    if (filteredClans.length === 0) {
        return {
            message: `No clan found matching search term '${searchTerm}'`,
            status: "404",
        };
    }
    return filteredClans;
});
fastify.get("/api/villages", async function handler(request, reply) {
    return villages_json_1.default;
});
const start = async () => {
    var _a;
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server is now listening on ${(_a = fastify.server.address()) === null || _a === void 0 ? void 0 : _a.port}`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
