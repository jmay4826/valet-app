INSERT INTO parkingspace (location1, location2, location3, location4, location5, parkinglot_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;