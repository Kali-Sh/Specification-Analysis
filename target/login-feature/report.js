$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/login/login.feature");
formatter.feature({
  "line": 1,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userOpensLoginScreen()"
});
formatter.result({
  "duration": 119051700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Вход в системата с валидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-валидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Въведе потребителска парола: \"asdf123!\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Успешно влизане!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "LoginSteps.userAddsUsername(String)"
});
formatter.result({
  "duration": 2128400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 30
    }
  ],
  "location": "LoginSteps.userAddsPassword(String)"
});
formatter.result({
  "duration": 61200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksLoginButton()"
});
formatter.result({
  "duration": 2298800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно влизане!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userChecksMessage(String)"
});
formatter.result({
  "duration": 1405600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userOpensLoginScreen()"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Вход в системата без парола",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Натисне бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Вижда съобщение: \"Въведете име и парола!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "LoginSteps.userAddsUsername(String)"
});
formatter.result({
  "duration": 84100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksLoginButton()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име и парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userChecksMessage(String)"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userOpensLoginScreen()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Вход в системата без потребителско име",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-потребителско-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Въведе потребителска парола: \"asdf123!\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Натисне бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Вижда съобщение: \"Въведете име и парола!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 30
    }
  ],
  "location": "LoginSteps.userAddsPassword(String)"
});
formatter.result({
  "duration": 95900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksLoginButton()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име и парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userChecksMessage(String)"
});
formatter.result({
  "duration": 41500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userOpensLoginScreen()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Вход в системата без потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Натисне бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Вижда съобщение: \"Въведете име и парола!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userClicksLoginButton()"
});
formatter.result({
  "duration": 15200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име и парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userChecksMessage(String)"
});
formatter.result({
  "duration": 42800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userOpensLoginScreen()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Вход в системата с невалидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-невалидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Въведе потребителско име: \"Кирилчо\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Въведе потребителска парола: \"asdf123!\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Натисне бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Вижда съобщение: \"Грешни данни!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилчо",
      "offset": 27
    }
  ],
  "location": "LoginSteps.userAddsUsername(String)"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 30
    }
  ],
  "location": "LoginSteps.userAddsPassword(String)"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksLoginButton()"
});
formatter.result({
  "duration": 46500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешни данни!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userChecksMessage(String)"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userOpensLoginScreen()"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Вход в системата с невалидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-невалидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Въведе потребителска парола: \"Wrong password!\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Натисне бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Вижда съобщение: \"Грешни данни!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOpensLoginScreen()"
});
formatter.result({
  "duration": 11600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "LoginSteps.userAddsUsername(String)"
});
formatter.result({
  "duration": 58800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong password!",
      "offset": 30
    }
  ],
  "location": "LoginSteps.userAddsPassword(String)"
});
formatter.result({
  "duration": 36900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksLoginButton()"
});
formatter.result({
  "duration": 56000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешни данни!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userChecksMessage(String)"
});
formatter.result({
  "duration": 60300,
  "status": "passed"
});
});