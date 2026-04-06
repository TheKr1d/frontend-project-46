### Hexlet tests and linter status:
[![Actions Status](https://github.com/TheKr1d/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/TheKr1d/frontend-project-46/actions)

## CI
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-highlight.svg)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-46)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=TheKr1d_frontend-project-46&metric=bugs)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-46)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=TheKr1d_frontend-project-46&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-46)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=TheKr1d_frontend-project-46&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=TheKr1d_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=TheKr1d_frontend-project-46)

Description
This project implements a gendiff utility that finds differences between two nested files [JSON, YML] using an immutable functional approach without using classes. Only constants and pure functions are used. diff is created by comparing the parsed data (not the lines of the file). Changed fields are displayed side by side: first removed (-), then added (+). Unchanged keys do not have a sign.


Example input:
file1.json
```
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
```

file2.json
```
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
```
---

Example output:
```text
gendiff file1.json file2.json
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```

Installation
```bash
make install
make link
```

Demo:

[![asciicast](https://asciinema.org/a/xVc74cDAJEA0bl57.svg)](https://asciinema.org/a/xVc74cDAJEA0bl57)

Tests:

```bash
make test
```