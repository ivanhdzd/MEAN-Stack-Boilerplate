# Angular Client

To keep this project organized, all Angular modules was be moved to `src/app/modules` directory, it can cause some errors when you try to create a component/directive/pipe because `app.module.ts` is allocated in `src/app/modules` directory. To create any Angular component/directive/pipe, you need to define in what module will be declared by `--module modules/app` flag:

- For page components (Creating it inside `pages` directory):
```shell
\client> ng generate component page/your-page --module modules/app
```

- For components (Creating it inside `components` directory):
```shell
\client> ng generate component components/your-component --module modules/app
```

- For directives (Creating it inside `directives` directory):
```shell
\client> ng g d directives/your-directive/your-directive --module modules/app
```

- For pipes (Creating it inside `pipes` directory):
```shell
\client> ng g p pipes/your-pipe/your-pipe --module modules/app
```

- For services (Creating it inside `services` directory):
```shell
\client> ng g p services/your-service/your-service
```

- For guards (Creating it inside `guards` directory):
```shell
\client> ng g p guards/your-guard/your-guard
```