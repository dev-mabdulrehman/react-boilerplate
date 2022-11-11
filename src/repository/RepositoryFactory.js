const repositories = {};

export const RepositoryFactory = {
	get: name => repositories[name],
};
