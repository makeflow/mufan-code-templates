# Mufan Code Templates

## Usage

```bash
npm install --global magicspace makeflow/mufan-code-templates
```

### Initialize magicspace

After making the initial commit, create magicspace template config `.magicspace/template.json`:

```json
{
  "extends": ["@mufan/code-templates/general"],
  "options": {
    "project": {
      "name": "awesome-project",
      "author": "Chengdu Mufan Technology Co., Ltd.",
      "license": "MIT",
      "packages": [
        {
          "name": "@mufan/awesome-empty-project"
        }
      ]
    }
  }
}
```

> Options are defined by templates.

```bash
magicspace init --force # force to skip clean working directory assertion
```

Review changes, resolve conflicts (if any) and commit the merge.

### Update magicspace

Update installed templates.

```bash
npm install --global makeflow/mufan-code-templates
```

Update magicspace. If you want to modify some template config before update, you can also add `--force` option if you do not want to commit that change first.

```bash
magicspace update
```

Review changes, resolve conflicts (if any) and commit the merge.

## License

MIT License.
