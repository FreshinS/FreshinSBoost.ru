run:
	npx vite

install: deps-install
	npx simple-git-hooks

deps-install:
	npm ci --legacy-peer-deps