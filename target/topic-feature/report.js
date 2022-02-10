$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/topic/topic.feature");
formatter.feature({
  "line": 1,
  "name": "Регистриран потребител трие тема",
  "description": "",
  "id": "регистриран-потребител-трие-тема",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Регистриран потребител трие тема",
  "description": "",
  "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря тема",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натисне бутона за изтриване на тема с роля: \"\u003cроля\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобение: \"\u003cСъобщение\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;",
  "rows": [
    {
      "cells": [
        "роля",
        "Съобщение"
      ],
      "line": 10,
      "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;;1"
    },
    {
      "cells": [
        "admin",
        "Успешно изтрихте темата"
      ],
      "line": 11,
      "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;;2"
    },
    {
      "cells": [
        "user",
        "Нямате администраторски права за това действие"
      ],
      "line": 12,
      "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;;3"
    },
    {
      "cells": [
        "",
        "Само регистрирани потребители имат права за това действие"
      ],
      "line": 13,
      "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Регистриран потребител трие тема",
  "description": "",
  "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря тема",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натисне бутона за изтриване на тема с роля: \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобение: \"Успешно изтрихте темата\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopicSteps.userOpensTopic()"
});
formatter.result({
  "duration": 119455900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 57
    }
  ],
  "location": "TopicSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 1369300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "Регистриран потребител трие тема",
  "description": "",
  "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря тема",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натисне бутона за изтриване на тема с роля: \"user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобение: \"Нямате администраторски права за това действие\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopicSteps.userOpensTopic()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 57
    }
  ],
  "location": "TopicSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "Регистриран потребител трие тема",
  "description": "",
  "id": "регистриран-потребител-трие-тема;регистриран-потребител-трие-тема;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря тема",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Потребителя натисне бутона за изтриване на тема с роля: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобение: \"Само регистрирани потребители имат права за това действие\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopicSteps.userOpensTopic()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "TopicSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});