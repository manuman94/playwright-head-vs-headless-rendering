# Playwright rendering head VS headless

This project shows the differences between browser head and headless renderings. 

## Abstract

It consists on comparing a chart component screenshot made with headless option setted to `false` and setted to `true`. The project currently has snapshots with `headless` option setted to `false`, so if you set the `headless` parameter to `true` it should fail for chromium and webkit tests.

This shows that chromium and webkit rendering is different with this option enabled/disabled.

You can configure this option at the `playwright.config.ts` file at the project's root.

## Run the project
Clone this project, `cd` to the project path and run
```bash
npm install
npm playwright test
```

And tests will be running on your machine