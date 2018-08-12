CREATE TABLE IF NOT EXISTS users(
	id serial PRIMARY KEY,
	username text,
	password text,
	profilePicUrl text,
	description text,
	friends text[]
)