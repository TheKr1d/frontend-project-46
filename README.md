### Hexlet tests and linter status:
[![Actions Status](https://github.com/TheKr1d/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/TheKr1d/frontend-project-46/actions)

Description
This project implements a gendiff utility that finds differences between two flat JSON files using an immutable, functional approach without classes. Only constants and pure functions are used. The diff is built by comparing parsed data (not file strings). Changed fields appear adjacent: removed (-) first, then added (+). Unchanged keys have no sign.


Example input:
file1.json
```
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

file2.json
```
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```
---

Example output:
```text
gendiff file1.json file2.json
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

Installation
```bash
make install
make link
```

Demo:

[![asciicast](https://asciinema.org/a/FdzJUKwz8hLxo1uy.svg)](https://asciinema.org/a/FdzJUKwz8hLxo1uy)

Tests:

```bash
make test
```