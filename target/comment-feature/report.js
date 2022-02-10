$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/comment/comment.feature");
formatter.feature({
  "line": 1,
  "name": "Потребител прави коментар",
  "description": "",
  "id": "потребител-прави-коментар",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Потребител прави коментар",
  "description": "",
  "id": "потребител-прави-коментар;потребител-прави-коментар",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя започва да пише коментар",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Пише коментар: \"\u003cкоментар\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Натисне бутона за изпращане на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение: \"\u003cСъобщение\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "потребител-прави-коментар;потребител-прави-коментар;",
  "rows": [
    {
      "cells": [
        "коментар",
        "Съобщение"
      ],
      "line": 10,
      "id": "потребител-прави-коментар;потребител-прави-коментар;;1"
    },
    {
      "cells": [
        "",
        "Неуспешно изпращане"
      ],
      "line": 11,
      "id": "потребител-прави-коментар;потребител-прави-коментар;;2"
    },
    {
      "cells": [
        "demo komentar",
        "Успешно изпращане"
      ],
      "line": 12,
      "id": "потребител-прави-коментар;потребител-прави-коментар;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Потребител прави коментар",
  "description": "",
  "id": "потребител-прави-коментар;потребител-прави-коментар;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя започва да пише коментар",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Пише коментар: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Натисне бутона за изпращане на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение: \"Неуспешно изпращане\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommentSteps.userOpensCommentSection()"
});
formatter.result({
  "duration": 127285000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "CommentSteps.userSetsComment(String)"
});
formatter.result({
  "duration": 1375300,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.userClicksButton()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешно изпращане",
      "offset": 18
    }
  ],
  "location": "CommentSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 1115400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Потребител прави коментар",
  "description": "",
  "id": "потребител-прави-коментар;потребител-прави-коментар;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя започва да пише коментар",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Пише коментар: \"demo komentar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Натисне бутона за изпращане на коментар",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение: \"Успешно изпращане\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommentSteps.userOpensCommentSection()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo komentar",
      "offset": 16
    }
  ],
  "location": "CommentSteps.userSetsComment(String)"
});
formatter.result({
  "duration": 60500,
  "status": "passed"
});
formatter.match({
  "location": "CommentSteps.userClicksButton()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно изпращане",
      "offset": 18
    }
  ],
  "location": "CommentSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
});