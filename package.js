Package.describe({
  name: "gwendall:email-watch",
  summary: "Watch sent emails",
  version: "0.1.0",
  git: "https://github.com/gwendall/meteor-email-watch"
});

Package.on_use(function (api, where) {

  api.use([
    "email",
    "underscore"
  ], "server");

  api.add_files([
    "email.js"
  ], "server");

  api.export("Email", "server");

});
