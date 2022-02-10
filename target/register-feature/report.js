$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/register/register.feature");
formatter.feature({
  "line": 1,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"\u003cпотребителско име\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"\u003cпарола\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"\u003cпарола2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"\u003cимейл\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"\u003cСъобщение\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;",
  "rows": [
    {
      "cells": [
        "потребителско име",
        "парола",
        "парола2",
        "имейл",
        "Съобщение"
      ],
      "line": 13,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;1"
    },
    {
      "cells": [
        "Кирилка",
        "asdf123!",
        "asdf123!",
        "kirilka@abv.bg",
        "Успешна регистрация!"
      ],
      "line": 14,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;2"
    },
    {
      "cells": [
        "Кирилка",
        "asdf123!",
        "kakobyrkataqparola1",
        "kirilka@abv.bg",
        "Въведете еднакви пароли!"
      ],
      "line": 15,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;3"
    },
    {
      "cells": [
        "Кирилка",
        "kakobyrkataqparola1",
        "asdf123!",
        "kirilka@abv.bg",
        "Въведете еднакви пароли!"
      ],
      "line": 16,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;4"
    },
    {
      "cells": [
        "",
        "asdf123!",
        "asdf123!",
        "kirilka@abv.bg",
        "Въведете име!"
      ],
      "line": 17,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;5"
    },
    {
      "cells": [
        "Ки",
        "asdf123!",
        "asdf123!",
        "kirilka@abv.bg",
        "Потребителското име трябва да е поне 4 символа!"
      ],
      "line": 18,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;6"
    },
    {
      "cells": [
        "Кирилка",
        "asdf123!",
        "asdf123!",
        "kirilka",
        "Въведете валиден имейл!"
      ],
      "line": 19,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;7"
    },
    {
      "cells": [
        "Кирилка",
        "asdf123!",
        "asdf123!",
        "",
        "Въведете валиден имейл!"
      ],
      "line": 20,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;8"
    },
    {
      "cells": [
        "Кирилка",
        "",
        "asdf123!",
        "kirilka@abv.bg",
        "Въведете парола!"
      ],
      "line": 21,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;9"
    },
    {
      "cells": [
        "Кирилка",
        "asdf123!",
        "",
        "kirilka@abv.bg",
        "Въведете парола!"
      ],
      "line": 22,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;10"
    },
    {
      "cells": [
        "Кирилка",
        "",
        "",
        "kirilka@abv.bg",
        "Въведете парола!"
      ],
      "line": 23,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"asdf123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"asdf123!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Успешна регистрация!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 131965800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 1310800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 135100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 99600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 790700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешна регистрация!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 1437100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"asdf123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"kakobyrkataqparola1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете еднакви пароли!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 70600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 50500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kakobyrkataqparola1",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 50700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете еднакви пароли!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 66800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"kakobyrkataqparola1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"asdf123!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете еднакви пароли!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kakobyrkataqparola1",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 15600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете еднакви пароли!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"asdf123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"asdf123!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете име!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 52300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 103200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Ки\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"asdf123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"asdf123!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Потребителското име трябва да е поне 4 символа!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ки",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Потребителското име трябва да е поне 4 символа!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"asdf123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"asdf123!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете валиден имейл!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 64400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете валиден имейл!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"asdf123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"asdf123!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете валиден имейл!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 40900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 109100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете валиден имейл!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"asdf123!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете парола!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете парола!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"asdf123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете парола!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 49800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdf123!",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 171400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете парола!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за регистрация на нов потребител",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе потребителско име: \"Кирилка\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе парола: \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе втора парола: \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе електронна поща: \"kirilka@abv.bg\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натисне бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение: \"Въведете парола!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userOpensRegisterScreen()"
});
formatter.result({
  "duration": 40800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Кирилка",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userReEntersPassword(String)"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kirilka@abv.bg",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.userEntersEmail(String)"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClicksButton()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете парола!",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userSeesMessage(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
});