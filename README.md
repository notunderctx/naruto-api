# API Documentation

## Characters

### Get All Characters

- **URL:** `/api/characters`
- **Method:** `GET`
- **Description:** Retrieves all characters.
- **Response:** Returns an array of all characters.

### Get Character by ID

- **URL:** `/api/character/id=:id`
- **Method:** `GET`
- **Description:** Retrieves a character by its ID.
- **Parameters:**
  - `id`: ID of the character to retrieve.
- **Response:** Returns the character object with the specified ID.

### Search Characters

- **URL:** `/api/characterss/search=:search`
- **Method:** `GET`
- **Description:** Searches characters by name.
- **Parameters:**
  - `search`: Search term to match against character names.
- **Response:** Returns an array of characters matching the search term.

## Groups

### Akatsuki

- **URL:** `/api/akatsuki`
- **Method:** `GET`
- **Description:** Retrieves information about the Akatsuki group.
- **Response:** Returns Akatsuki group data.

### Kara

- **URL:** `/api/kara`
- **Method:** `GET`
- **Description:** Retrieves information about the Kara group.
- **Response:** Returns Kara group data.

### Teams

- **URL:** `/api/teams`
- **Method:** `GET`
- **Description:** Retrieves information about various teams.
- **Response:** Returns data of different teams.

## Clans

### Get All Clans

- **URL:** `/api/clans`
- **Method:** `GET`
- **Description:** Retrieves all clans.
- **Response:** Returns an array of all clans.

### Search Clans

- **URL:** `/api/clan/search=:search`
- **Method:** `GET`
- **Description:** Searches clans by name.
- **Parameters:**
  - `search`: Search term to match against clan names.
- **Response:** Returns an array of clans matching the search term.

## Villages

### Get All Villages

- **URL:** `/api/villages`
- **Method:** `GET`
- **Description:** Retrieves all villages.
- **Response:** Returns an array of all villages.

## Entities

### Tail Beasts

- **URL:** `/api/tailedbeasts`
- **Method:** `GET`
- **Description:** Retrieves information about the Tail Beasts.
- **Response:** Returns data of all Tail Beasts.

### Keke Genkai

- **URL:** `/api/keke_genkai`
- **Method:** `GET`
- **Description:** Retrieves information about the Keke Genkais.
- **Response:** Returns data of all Keke Genkais.
