export const basePermissions = [
  {
      "permission_id": "1",
      "permission_key": "organization_read",
      "name": "Чтение организации",
      "description": "Просматривайте организации и их атрибуты.",
      "global": true,
      "entity_type": "Организация",
      "operation": "Чтение",
      "dependent_permissions": [
          {
              "permission_id": "2",
              "permission_key": "organization_create",
              "name": "Создать организацию"
          },
          {
              "permission_id": "3",
              "permission_key": "organization_update",
              "name": "Обновлять организацию"
          },
          {
              "permission_id": "4",
              "permission_key": "organization_delete",
              "name": "Удалить организацию"
          }
      ]
  },
  {
      "permission_id": "2",
      "permission_key": "organization_create",
      "name": "Создать организацию",
      "description": "Создавать новые организации.",
      "global": true,
      "entity_type": "Организация",
      "operation": "Создание",
      "implied_permissions": [
          {
              "permission_id": "1",
              "permission_key": "organization_read",
              "name": "Чтение организации"
          }
      ]
  },
  {
      "permission_id": "3",
      "permission_key": "organization_update",
      "name": "Обновлять организацию",
      "description": "Редактируйте атрибуты организации, управляйте связанными проектами и правами доступа.",
      "global": true,
      "entity_type": "Организация",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "1",
              "permission_key": "organization_read",
              "name": "Чтение организации"
          }
      ]
  },
  {
      "permission_id": "4",
      "permission_key": "organization_delete",
      "name": "Удалить организацию",
      "description": "Удалить данные об организации из системы.",
      "global": true,
      "entity_type": "Организация",
      "operation": "Удаление",
      "implied_permissions": [
          {
              "permission_id": "1",
              "permission_key": "organization_read",
              "name": "Чтение организации"
          }
      ]
  },
  {
      "permission_id": "5",
      "permission_key": "project_create",
      "name": "Создание проекта",
      "description": "Создание новых проектов.",
      "global": true,
      "entity_type": "Проект",
      "operation": "Создание"
  },
  {
      "permission_id": "6",
      "permission_key": "project_read_basic",
      "name": "Чтение проекта, базовое",
      "description": "Просмотр базовых свойств и содержимого проекта. Разрешение «Чтение пользователя, базовое» позволяет просматривать участников команды проекта. Членство в группах, которым предоставлен доступ к сервисам, или разрешение «Чтение сервиса» позволяет просматривать список ресурсов для проекта.",
      "global": false,
      "entity_type": "Проект",
      "operation": "Чтение, базовое",
      "dependent_permissions": [
          {
              "permission_id": "7",
              "permission_key": "project_read",
              "name": "Чтение проекта, полное"
          },
          {
              "permission_id": "8",
              "permission_key": "read_issue",
              "name": "Чтение задачи"
          },
          {
              "permission_id": "9",
              "permission_key": "private_read_issue",
              "name": "Чтение закрытых полей задач"
          },
          {
              "permission_id": "10",
              "permission_key": "create_issue",
              "name": "Создание задачи"
          },
          {
              "permission_id": "11",
              "permission_key": "view_watchers",
              "name": "Просмотр списка наблюдателей"
          },
          {
              "permission_id": "12",
              "permission_key": "view_voters",
              "name": "Просмотр списка проголосовавших пользователей"
          },
          {
              "permission_id": "13",
              "permission_key": "read_article",
              "name": "Чтение статьи"
          }
      ]
  },
  {
      "permission_id": "7",
      "permission_key": "project_read",
      "name": "Чтение проекта, полное",
      "description": "Просмотр всех свойств и содержимого проектов. Разрешение «Чтение роли» позволяет просматривать роли, выданные команде проекта, и роли, присвоенные другим пользователям и группам в проекте. Членство в группах, которым предоставлен доступ к сервисам, или разрешение «Чтение сервиса» позволяют просматривать список ресурсов для проекта.",
      "global": false,
      "entity_type": "Проект",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "6",
              "permission_key": "project_read_basic",
              "name": "Чтение проекта, базовое"
          }
      ],
      "dependent_permissions": [
          {
              "permission_id": "14",
              "permission_key": "project_update",
              "name": "Обновление проекта"
          },
          {
              "permission_id": "15",
              "permission_key": "project_delete",
              "name": "Удаление проекта"
          }
      ]
  },
  {
      "permission_id": "14",
      "permission_key": "project_update",
      "name": "Обновление проекта",
      "description": "Изменение свойств и содержимого проектов, управление ресурсами и доступом.",
      "global": false,
      "entity_type": "Проект",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "7",
              "permission_key": "project_read",
              "name": "Чтение проекта, полное"
          }
      ]
  },
  {
      "permission_id": "15",
      "permission_key": "project_delete",
      "name": "Удаление проекта",
      "description": "Удаление проектов.",
      "global": false,
      "entity_type": "Проект",
      "operation": "Удаление",
      "implied_permissions": [
          {
              "permission_id": "7",
              "permission_key": "project_read",
              "name": "Чтение проекта, полное"
          }
      ]
  },
  {
      "permission_id": "16",
      "permission_key": "role_read",
      "name": "Чтение роли",
      "description": "Просмотр списка ролей и разрешений, назначенных каждой из ролей. Разрешение «Чтение проекта, полное» позволяет просматривать роли, назначенные команде проекта, и роли, назначенные другим пользователям и группам в проекте. Разрешение «Чтение сервиса» позволяет просматривать разрешения для отдельных сервисов.",
      "global": true,
      "entity_type": "Роль",
      "operation": "Чтение",
      "dependent_permissions": [
          {
              "permission_id": "17",
              "permission_key": "role_manage",
              "name": "Управление ролями"
          }
      ]
  },
  {
      "permission_id": "17",
      "permission_key": "role_manage",
      "name": "Управление ролями",
      "description": "Создание и удаление ролей. Изменение свойств роли. Изменение набора разрешений, выданных роли.",
      "global": true,
      "entity_type": "Роль",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "16",
              "permission_key": "role_read",
              "name": "Чтение роли"
          }
      ]
  },
  {
      "permission_id": "18",
      "permission_key": "profile_updateself",
      "name": "Обновление себя",
      "description": "Изменение данных собственного профиля.",
      "global": true,
      "entity_type": "Пользователь",
      "operation": "Обновление своих",
      "dependent_permissions": [
          {
              "permission_id": "19",
              "permission_key": "user_update",
              "name": "Обновление пользователя"
          }
      ]
  },
  {
      "permission_id": "20",
      "permission_key": "user_create",
      "name": "Создание пользователя",
      "description": "Создание новых пользовательских аккаунтов. Приглашение пользователей к самостоятельной регистрации аккаунтов.",
      "global": true,
      "entity_type": "Пользователь",
      "operation": "Создание"
  },
  {
      "permission_id": "21",
      "permission_key": "user_read_basic",
      "name": "Чтение пользователя, базовое",
      "description": "Просмотр списка зарегистрированных пользователей и чтение ID, логина, имени и аватара для каждого пользователя. Управление членством в группе при наличии разрешения «Обновление группы».",
      "global": true,
      "entity_type": "Пользователь",
      "operation": "Чтение, базовое",
      "dependent_permissions": [
          {
              "permission_id": "22",
              "permission_key": "user_read",
              "name": "Чтение пользователя, полное"
          }
      ]
  },
  {
      "permission_id": "22",
      "permission_key": "user_read",
      "name": "Чтение пользователя, полное",
      "description": "Просмотр всех свойств для всех зарегистрированных пользователей, включая данные авторизации.",
      "global": true,
      "entity_type": "Пользователь",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "21",
              "permission_key": "user_read_basic",
              "name": "Чтение пользователя, базовое"
          }
      ],
      "dependent_permissions": [
          {
              "permission_id": "19",
              "permission_key": "user_update",
              "name": "Обновление пользователя"
          },
          {
              "permission_id": "23",
              "permission_key": "user_delete",
              "name": "Удаление пользователя"
          }
      ]
  },
  {
      "permission_id": "19",
      "permission_key": "user_update",
      "name": "Обновление пользователя",
      "description": "Изменение данных пользовательского профиля. Блокирование, объединение и обезличивание пользовательских аккаунтов.",
      "global": true,
      "entity_type": "Пользователь",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "18",
              "permission_key": "profile_updateself",
              "name": "Обновление себя"
          },
          {
              "permission_id": "22",
              "permission_key": "user_read",
              "name": "Чтение пользователя, полное"
          }
      ]
  },
  {
      "permission_id": "23",
      "permission_key": "user_delete",
      "name": "Удаление пользователя",
      "description": "Удаление пользовательских аккаунтов.",
      "global": true,
      "entity_type": "Пользователь",
      "operation": "Удаление",
      "implied_permissions": [
          {
              "permission_id": "22",
              "permission_key": "user_read",
              "name": "Чтение пользователя, полное"
          }
      ]
  },
  {
      "permission_id": "24",
      "permission_key": "group_create",
      "name": "Создание группы",
      "description": "Создание новых групп.",
      "global": false,
      "entity_type": "Группа",
      "operation": "Создание"
  },
  {
      "permission_id": "25",
      "permission_key": "group_read",
      "name": "Чтение группы",
      "description": "Просмотр списка групп и чтение свойств групп. Просмотр подгрупп при наличии разрешения на чтение как родительской, так и дочерних групп. Просмотр списка участников при наличии разрешения «Чтение пользователя, базовое».",
      "global": false,
      "entity_type": "Группа",
      "operation": "Чтение",
      "dependent_permissions": [
          {
              "permission_id": "26",
              "permission_key": "group_update",
              "name": "Обновление группы"
          },
          {
              "permission_id": "27",
              "permission_key": "group_delete",
              "name": "Удаление группы"
          }
      ]
  },
  {
      "permission_id": "26",
      "permission_key": "group_update",
      "name": "Обновление группы",
      "description": "Изменение свойств групп. Управление подгруппами при наличии разрешения на изменение как родительской, так и дочерних групп. Обновление членства в группах при наличии разрешения «Чтение пользователя, базовое».",
      "global": false,
      "entity_type": "Группа",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "25",
              "permission_key": "group_read",
              "name": "Чтение группы"
          }
      ]
  },
  {
      "permission_id": "27",
      "permission_key": "group_delete",
      "name": "Удаление группы",
      "description": "Удаление групп.",
      "global": false,
      "entity_type": "Группа",
      "operation": "Удаление",
      "implied_permissions": [
          {
              "permission_id": "25",
              "permission_key": "group_read",
              "name": "Чтение группы"
          }
      ]
  },
  {
      "permission_id": "28",
      "permission_key": "low_level_read",
      "name": "Низкоуровневое администрирование: чтение",
      "description": "Доступ «только чтение» к административным действиям низкого уровня, в том числе к интеграциям со сторонними сервисами и метрикам.",
      "global": true,
      "entity_type": "Администрирование",
      "operation": "Администрирование",
      "dependent_permissions": [
          {
              "permission_id": "29",
              "permission_key": "low_level",
              "name": "Низкоуровневое администрирование: запись"
          }
      ]
  },
  {
      "permission_id": "29",
      "permission_key": "low_level",
      "name": "Низкоуровневое администрирование: запись",
      "description": "Управление административными действиями низкого уровня, в том числе интеграция со сторонними сервисами и резервное копирование баз данных. Требуется доступ на чтение для низкоуровневого администрирования.",
      "global": true,
      "entity_type": "Администрирование",
      "operation": "Администрирование",
      "implied_permissions": [
          {
              "permission_id": "28",
              "permission_key": "low_level_read",
              "name": "Низкоуровневое администрирование: чтение"
          }
      ]
  },
  {
      "permission_id": "30",
      "permission_key": "update_issue",
      "name": "Обновление задачи",
      "description": "Обновление открытых полей любой задачи",
      "global": false,
      "entity_type": "Задача",
      "operation": "Обновление",
      "dependent_permissions": [
          {
              "permission_id": "31",
              "permission_key": "private_update_issue",
              "name": "Обновление закрытых полей задачи"
          }
      ]
  },
  {
      "permission_id": "32",
      "permission_key": "delete_issue",
      "name": "Удаление задачи",
      "description": "Удаление задач",
      "global": false,
      "entity_type": "Задача",
      "operation": "Удаление"
  },
  {
      "permission_id": "33",
      "permission_key": "link_issue",
      "name": "Создание связей задач",
      "description": "Установка взаимосвязей между задачами",
      "global": false,
      "entity_type": "Задача",
      "operation": "Создание связи"
  },
  {
      "permission_id": "34",
      "permission_key": "apply_commands_silently",
      "name": "Применять команды без уведомлений",
      "description": "Применяйте команды к задачам без отправки уведомлений",
      "global": false,
      "entity_type": "Задача",
      "operation": "Обновление"
  },
  {
      "permission_id": "35",
      "permission_key": "update_watchers",
      "name": "Обновление списка наблюдателей",
      "description": "Назначение другого пользователя наблюдателем за задачей",
      "global": false,
      "entity_type": "Задача",
      "operation": "Обновление"
  },
  {
      "permission_id": "36",
      "permission_key": "create_attachment_issue",
      "name": "Добавление вложения",
      "description": "Добавление файлов и скриншотов к задачам",
      "global": false,
      "entity_type": "Вложение",
      "operation": "Создание"
  },
  {
      "permission_id": "37",
      "permission_key": "update_attachment_issue",
      "name": "Обновление вложения",
      "description": "Изменение файлов, прикрепленных к задаче, и изменение видимости вложений",
      "global": false,
      "entity_type": "Вложение",
      "operation": "Обновление"
  },
  {
      "permission_id": "38",
      "permission_key": "delete_attachment_issue",
      "name": "Удаление вложения",
      "description": "Удаление файлов, прикрепленных к задачам",
      "global": false,
      "entity_type": "Вложение",
      "operation": "Удаление"
  },
  {
      "permission_id": "39",
      "permission_key": "create_comment",
      "name": "Создание комментария к задаче",
      "description": "Добавление комментариев к задачам",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Создание"
  },
  {
      "permission_id": "40",
      "permission_key": "read_comment",
      "name": "Чтение комментария к задаче",
      "description": "Просмотр комментариев к задачам",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Чтение",
      "dependent_permissions": [
          {
              "permission_id": "41",
              "permission_key": "update_not_own_comment",
              "name": "Обновление чужого комментария к задаче"
          },
          {
              "permission_id": "42",
              "permission_key": "delete_not_own_comment",
              "name": "Удаление чужого комментария и окончательное удаление комментария"
          }
      ]
  },
  {
      "permission_id": "43",
      "permission_key": "update_comment",
      "name": "Обновление комментария к задаче",
      "description": "Редактирование собственных комментариев к задачам",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Обновление"
  },
  {
      "permission_id": "44",
      "permission_key": "delete_comment",
      "name": "Удаление комментария к задаче",
      "description": "Удаление комментариев других пользователей к задачам. Также позволяет удалять комментарии навсегда (как свои, так и других пользователей)",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Удаление"
  },
  {
      "permission_id": "45",
      "permission_key": "create_watch_folder",
      "name": "Создание тега или сохраненного поиска",
      "description": "Создание тега или сохраненного поиска",
      "global": false,
      "entity_type": "Отслеживаемая папка",
      "operation": "Создание"
  },
  {
      "permission_id": "46",
      "permission_key": "update_watch_folder",
      "name": "Изменение тега или сохраненного поиска",
      "description": "Позволяет редактировать общий тег или сохраненный поиск, если пользователь принадлежит к общей группе.",
      "global": false,
      "entity_type": "Отслеживаемая папка",
      "operation": "Обновление"
  },
  {
      "permission_id": "47",
      "permission_key": "delete_watch_folder",
      "name": "Удаление тега или сохраненного поиска",
      "description": "Удаление собственного тега или сохраненного поиска",
      "global": false,
      "entity_type": "Отслеживаемая папка",
      "operation": "Удаление"
  },
  {
      "permission_id": "48",
      "permission_key": "share_watch_folder",
      "name": "Публикация тега, сохраненного поиска, Agile-доски или диаграммы Ганта",
      "description": "Обновлять настройки, позволяющие другим пользователям просматривать, использовать и редактировать теги, сохраненные поисковые запросы, Agile-доски и диаграммы Ганта",
      "global": true,
      "entity_type": "Отслеживаемая папка",
      "operation": "Публикация"
  },
  {
      "permission_id": "49",
      "permission_key": "read_work_item",
      "name": "Чтение единицы работы",
      "description": "Просмотр единиц работы по задачам",
      "global": false,
      "entity_type": "Единица работы в задаче",
      "operation": "Чтение",
      "dependent_permissions": [
          {
              "permission_id": "50",
              "permission_key": "update_not_own_work_item",
              "name": "Обновление единицы работы другого пользователя"
          }
      ]
  },
  {
      "permission_id": "51",
      "permission_key": "update_work_item",
      "name": "Обновление единицы работы",
      "description": "Добавление и редактирование единиц работы",
      "global": false,
      "entity_type": "Единица работы в задаче",
      "operation": "Обновление",
      "dependent_permissions": [
          {
              "permission_id": "50",
              "permission_key": "update_not_own_work_item",
              "name": "Обновление единицы работы другого пользователя"
          }
      ]
  },
  {
      "permission_id": "52",
      "permission_key": "create_work_item",
      "name": "Создание единицы работы",
      "description": "Создание единиц работы",
      "global": false,
      "entity_type": "Единица работы в задаче",
      "operation": "Создание",
      "dependent_permissions": [
          {
              "permission_id": "53",
              "permission_key": "create_not_own_work_item",
              "name": "Создание единицы работы другого пользователя"
          }
      ]
  },
  {
      "permission_id": "54",
      "permission_key": "read_report",
      "name": "Чтение отчета",
      "description": "Чтение отчета",
      "global": false,
      "entity_type": "Отчет",
      "operation": "Чтение",
      "dependent_permissions": [
          {
              "permission_id": "55",
              "permission_key": "create_report",
              "name": "Создание отчета"
          },
          {
              "permission_id": "56",
              "permission_key": "share_report",
              "name": "Поделиться отчетом"
          }
      ]
  },
  {
      "permission_id": "8",
      "permission_key": "read_issue",
      "name": "Чтение задачи",
      "description": "Просмотр задачи (только открытые поля)",
      "global": false,
      "entity_type": "Задача",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "6",
              "permission_key": "project_read_basic",
              "name": "Чтение проекта, базовое"
          }
      ]
  },
  {
      "permission_id": "9",
      "permission_key": "private_read_issue",
      "name": "Чтение закрытых полей задач",
      "description": "Просмотр закрытых полей задач",
      "global": false,
      "entity_type": "Задача",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "6",
              "permission_key": "project_read_basic",
              "name": "Чтение проекта, базовое"
          }
      ],
      "dependent_permissions": [
          {
              "permission_id": "31",
              "permission_key": "private_update_issue",
              "name": "Обновление закрытых полей задачи"
          },
          {
              "permission_id": "57",
              "permission_key": "read_hidden_stuff",
              "name": "Подавление ограничений видимости"
          }
      ]
  },
  {
      "permission_id": "10",
      "permission_key": "create_issue",
      "name": "Создание задачи",
      "description": "Создать новую задачу (также позволяет просматривать и обновлять открытые поля в зарегистрированных задачах)",
      "global": false,
      "entity_type": "Задача",
      "operation": "Создание",
      "implied_permissions": [
          {
              "permission_id": "6",
              "permission_key": "project_read_basic",
              "name": "Чтение проекта, базовое"
          }
      ]
  },
  {
      "permission_id": "11",
      "permission_key": "view_watchers",
      "name": "Просмотр списка наблюдателей",
      "description": "Просмотр списка пользователей, которые наблюдают за задачей (доступно на странице задачи)",
      "global": false,
      "entity_type": "Задача",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "6",
              "permission_key": "project_read_basic",
              "name": "Чтение проекта, базовое"
          }
      ]
  },
  {
      "permission_id": "12",
      "permission_key": "view_voters",
      "name": "Просмотр списка проголосовавших пользователей",
      "description": "Просмотр списка пользователей, которые голосовали за задачу (доступно на странице задачи)",
      "global": false,
      "entity_type": "Задача",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "6",
              "permission_key": "project_read_basic",
              "name": "Чтение проекта, базовое"
          }
      ]
  },
  {
      "permission_id": "41",
      "permission_key": "update_not_own_comment",
      "name": "Обновление чужого комментария к задаче",
      "description": "Редактирование чужих комментариев к задачам",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "40",
              "permission_key": "read_comment",
              "name": "Чтение комментария к задаче"
          }
      ]
  },
  {
      "permission_id": "42",
      "permission_key": "delete_not_own_comment",
      "name": "Удаление чужого комментария и окончательное удаление комментария",
      "description": "Удаление комментариев других пользователей",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Удаление",
      "implied_permissions": [
          {
              "permission_id": "40",
              "permission_key": "read_comment",
              "name": "Чтение комментария к задаче"
          }
      ]
  },
  {
      "permission_id": "50",
      "permission_key": "update_not_own_work_item",
      "name": "Обновление единицы работы другого пользователя",
      "description": "Изменение единиц работы, созданных другими пользователями",
      "global": false,
      "entity_type": "Единица работы в задаче",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "49",
              "permission_key": "read_work_item",
              "name": "Чтение единицы работы"
          },
          {
              "permission_id": "51",
              "permission_key": "update_work_item",
              "name": "Обновление единицы работы"
          }
      ]
  },
  {
      "permission_id": "53",
      "permission_key": "create_not_own_work_item",
      "name": "Создание единицы работы другого пользователя",
      "description": "Создание единиц работы для других пользователей",
      "global": false,
      "entity_type": "Единица работы в задаче",
      "operation": "Создание",
      "implied_permissions": [
          {
              "permission_id": "52",
              "permission_key": "create_work_item",
              "name": "Создание единицы работы"
          }
      ]
  },
  {
      "permission_id": "55",
      "permission_key": "create_report",
      "name": "Создание отчета",
      "description": "Создать отчет",
      "global": false,
      "entity_type": "Отчет",
      "operation": "Создание",
      "implied_permissions": [
          {
              "permission_id": "54",
              "permission_key": "read_report",
              "name": "Чтение отчета"
          }
      ]
  },
  {
      "permission_id": "56",
      "permission_key": "share_report",
      "name": "Поделиться отчетом",
      "description": "Публикация отчета для других пользователей",
      "global": false,
      "entity_type": "Отчет",
      "operation": "Публикация",
      "implied_permissions": [
          {
              "permission_id": "54",
              "permission_key": "read_report",
              "name": "Чтение отчета"
          }
      ]
  },
  {
      "permission_id": "13",
      "permission_key": "read_article",
      "name": "Чтение статьи",
      "description": "Чтение статей в базе знаний",
      "global": false,
      "entity_type": "Статья",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "6",
              "permission_key": "project_read_basic",
              "name": "Чтение проекта, базовое"
          }
      ],
      "dependent_permissions": [
          {
              "permission_id": "58",
              "permission_key": "create_article",
              "name": "Создание статьи"
          },
          {
              "permission_id": "59",
              "permission_key": "update_article",
              "name": "Обновление статьи"
          },
          {
              "permission_id": "60",
              "permission_key": "delete_article",
              "name": "Удаление статьи"
          },
          {
              "permission_id": "61",
              "permission_key": "read_article_comment",
              "name": "Чтение комментария к статье"
          }
      ]
  },
  {
      "permission_id": "31",
      "permission_key": "private_update_issue",
      "name": "Обновление закрытых полей задачи",
      "description": "Обновление закрытых полей задачи",
      "global": false,
      "entity_type": "Задача",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "30",
              "permission_key": "update_issue",
              "name": "Обновление задачи"
          },
          {
              "permission_id": "9",
              "permission_key": "private_read_issue",
              "name": "Чтение закрытых полей задач"
          }
      ]
  },
  {
      "permission_id": "57",
      "permission_key": "read_hidden_stuff",
      "name": "Подавление ограничений видимости",
      "description": "Просмотр задач, комментариев, вложений и статей, скрытых параметрами видимости",
      "global": false,
      "entity_type": "Видимость",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "9",
              "permission_key": "private_read_issue",
              "name": "Чтение закрытых полей задач"
          }
      ]
  },
  {
      "permission_id": "58",
      "permission_key": "create_article",
      "name": "Создание статьи",
      "description": "Добавление статей в базу знаний",
      "global": false,
      "entity_type": "Статья",
      "operation": "Создание",
      "implied_permissions": [
          {
              "permission_id": "13",
              "permission_key": "read_article",
              "name": "Чтение статьи"
          }
      ]
  },
  {
      "permission_id": "59",
      "permission_key": "update_article",
      "name": "Обновление статьи",
      "description": "Обновление статьей в базе знаний",
      "global": false,
      "entity_type": "Статья",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "13",
              "permission_key": "read_article",
              "name": "Чтение статьи"
          }
      ]
  },
  {
      "permission_id": "60",
      "permission_key": "delete_article",
      "name": "Удаление статьи",
      "description": "Удаление статьи из базы знаний",
      "global": false,
      "entity_type": "Статья",
      "operation": "Удаление",
      "implied_permissions": [
          {
              "permission_id": "13",
              "permission_key": "read_article",
              "name": "Чтение статьи"
          }
      ]
  },
  {
      "permission_id": "61",
      "permission_key": "read_article_comment",
      "name": "Чтение комментария к статье",
      "description": "Чтение комментариев к статьям в базе знаний",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Чтение",
      "implied_permissions": [
          {
              "permission_id": "13",
              "permission_key": "read_article",
              "name": "Чтение статьи"
          }
      ],
      "dependent_permissions": [
          {
              "permission_id": "62",
              "permission_key": "create_article_comment",
              "name": "Создание комментария к статье"
          },
          {
              "permission_id": "63",
              "permission_key": "update_article_comment",
              "name": "Обновление комментария к статье"
          },
          {
              "permission_id": "64",
              "permission_key": "delete_article_comment",
              "name": "Удаление комментария к статье"
          }
      ]
  },
  {
      "permission_id": "62",
      "permission_key": "create_article_comment",
      "name": "Создание комментария к статье",
      "description": "Добавление комментариев к статьям в базе знаний",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Создание",
      "implied_permissions": [
          {
              "permission_id": "61",
              "permission_key": "read_article_comment",
              "name": "Чтение комментария к статье"
          }
      ]
  },
  {
      "permission_id": "63",
      "permission_key": "update_article_comment",
      "name": "Обновление комментария к статье",
      "description": "Обновление чужих комментариев к статьям в базе знаний",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Обновление",
      "implied_permissions": [
          {
              "permission_id": "61",
              "permission_key": "read_article_comment",
              "name": "Чтение комментария к статье"
          }
      ]
  },
  {
      "permission_id": "64",
      "permission_key": "delete_article_comment",
      "name": "Удаление комментария к статье",
      "description": "Удаление чужих комментариев к статьям в базе знаний",
      "global": false,
      "entity_type": "Комментарий к задаче",
      "operation": "Удаление",
      "implied_permissions": [
          {
              "permission_id": "61",
              "permission_key": "read_article_comment",
              "name": "Чтение комментария к статье"
          }
      ]
  }
]