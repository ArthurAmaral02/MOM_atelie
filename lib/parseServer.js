import Parse from "parse/node";

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APP_ID,
  process.env.NEXT_PUBLIC_PARSE_JS_KEY,
);

Parse.serverURL = "https://parseapi.back4app.com";

export default Parse;
