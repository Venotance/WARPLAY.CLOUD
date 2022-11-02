# WARPLAY.CLOUD
[Getting Started](#getting-started) 

[Linting](#linting) 

[Architecture](#architecture)

[Imports](#imports) 

[Environment variables](#environment-variables)

[Макет проекта](#figma-layout)


## Getting Started


First, run the development server:

```shell
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.



## Linting

Для обеспечения качества кода и коммитов в проект добавлены линтеры:

* [ESLint](https://eslint.org/) — качество JavaScript/TypeScript кода;
* [Commitlint](https://commitlint.js.org/) — качество и консистентность коммитов. В качестве конфига используется стандартный конфиг [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional);
* [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks#readme) и [lint-staged](https://github.com/okonet/lint-staged) — линтинг кода перед коммитом.

Чтобы запустить линтинг проекта, достаточно ввести команду:

```shell
$ yarn lint
```

Если нужно запустить линтинг с авто-исправлением ошибок:

```shell
$ yarn lint --fix
```



## Architecture

В проекте используется архитектура [feature-sliced](https://feature-sliced.design/). 
Рекомендую придерживаться её для удобной поддержки и масштабируемости проекта.

Компоненты нужно писать **строго** в функциональном стиле.
Экспорты функций/переменных **строго** должны быть [именованными](https://learn.javascript.ru/import-export/). Например:

```tsx
export const exampleObj = { ... };

export const ComponentName: FC = ({ ...restProps }) => {
  return (
    <div>
      <p>test component</p>
    </div>
  );
};
```

> Экспорт по умолчанию допускается **только** для страниц (`src/pages/*`), т.к. это требование парсера Next.js.



## Imports

В проекте настроены алиасы для часто запрашиваемых мест:

* `~assets` — `./src/assets`
* `~entities` — `./src/entities`
* `~features` — `./src/features`
* `~pages` — `./src/pages`
* `~processes` — `./src/pages`
* `~shared` — `./src/shared`
* `~widgets` — `./src/widgets`

> Алиасы настраиваются в `tsconfig.json` и в `babel.config.json`



## Environment variables

В корне проекта можно заметить 2 файла: .env.development .env.production

Подробнее прочитать про переменные разных окружений можно прочитать в [документации Next.js](https://nextjs.org/docs/basic-features/environment-variables/).



## Figma layout

Макет был взят из открытых источников. 
Ссылка на макет: макет [WARPLAY.CLOUD](https://www.figma.com/file/HblzMfgzEdJesUOs5g1taz/Warplaycloud?node-id=2%3A2)