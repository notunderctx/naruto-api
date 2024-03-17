import Fastify from "fastify";
import characters from "../api/characters/chracters.json";
import aks from "../api/characters/Akasuki.json";
import kara from "../api/characters/Kara.json";
import keke from "../api/characters/keke_genka.json";
import tailbeasts from "../api/characters/taildedbeasts.json";
import teams from "../api/characters/teams.json";
import clans from "../api/clans/Clans.json";
import villages from "../api/clans/villages.json";

const fastify = Fastify({ logger: false });

fastify.get("/api/characters", async function handler(request, reply) {
  return characters;
});
fastify.get("/api/character/id=:id", async function handler(req, reply) {
  const id = req?.params?.id;
  console.log(id);

  if (!id) {
    return { message: "Id required ", status: "404" };
  }

  const filteredCharacters = characters.filter(
    (char) => char.id === Number(id)
  );
  if (filteredCharacters.length === 0) {
    return { message: `Character with id '${id}' not found`, status: "404" };
  }

  return filteredCharacters;
});
fastify.get(
  "/api/characterss/search=:search",
  async function handler(req, reply) {
    const searchTerm: string = req.params?.search;
    if (searchTerm === null) {
      return { message: "Search term required", status: "400" };
    }
    const filteredCharacters = characters.filter((char) =>
      char.name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    if (filteredCharacters.length === 0) {
      return {
        message: `No characters found matching search term '${searchTerm}'`,
        status: "404",
      };
    }
    return filteredCharacters;
  }
);

fastify.get("/api/akatsuki", async function handler(request, reply) {
  return aks;
});
fastify.get("/api/kara", async function handler(request, reply) {
  return kara;
});
fastify.get("/api/keke_genkai", async function handler(request, reply) {
  return keke;
});
fastify.get("/api/tailedbeasts", async function handler(request, reply) {
  return tailbeasts;
});
fastify.get("/api/teams", async function handler(request, reply) {
  return teams;
});
fastify.get("/api/clans", async function handler(request, reply) {
  return clans;
});
fastify.get("/api/clan/search=:search", async function handler(req, reply) {
  const searchTerm = req.params?.search;
  if (!searchTerm) {
    return { message: "Search term required", status: "400" };
  }
  const filteredClans = clans.clans.filter((char) =>
    char.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  if (filteredClans.length === 0) {
    return {
      message: `No clan found matching search term '${searchTerm}'`,
      status: "404",
    };
  }
  return filteredClans;
});
fastify.get("/api/villages", async function handler(request, reply) {
  return villages;
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(
      `Server is now listening on ${fastify.server.address()?.port}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
