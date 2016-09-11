.DELETE_ON_ERROR:
.PHONY: clean all

all: test

test: examples.ts
	tsc
examples.ts: lodash/ extract-examples.js  prefix.ts
	jsdoc lodash/lodash.js  -X | node extract-examples.js > $@
extract-examples.js: extract-examples.ts
	tsc $<
lodash/:
	git clone https://github.com/lodash/lodash
RESULTS.txt: examples.ts
	tsc --pretty |sed -r "s/\x1B\[[0-9;]*[JKmsu]//g" > $@
clean:
	rm -rf examples.{ts,js}

