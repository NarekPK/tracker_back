export const basePermissions = [
    {
        "permission_id": "1",
        "permission_key": "organization_read",
        "name": "PN_READ_ORGANIZATION",
        "description": "Просматривайте организации и их атрибуты.",
        "global": true,
        "entity_type": "PE_ORGANIZATION",
        "operation": "PO_READ",
        "dependent_permissions": [
            {
                "permission_id": "2",
                "permission_key": "organization_create",
                "name": "PN_CREATE_ORGANIZATION"
            },
            {
                "permission_id": "3",
                "permission_key": "organization_update",
                "name": "PN_UPDATE_ORGANIZATION"
            },
            {
                "permission_id": "4",
                "permission_key": "organization_delete",
                "name": "PN_DELETE_ORGANIZATION"
            }
        ]
    },
    {
        "permission_id": "2",
        "permission_key": "organization_create",
        "name": "PN_CREATE_ORGANIZATION",
        "description": "Создавать новые организации.",
        "global": true,
        "entity_type": "PE_ORGANIZATION",
        "operation": "PO_CREATE",
        "implied_permissions": [
            {
                "permission_id": "1",
                "permission_key": "organization_read",
                "name": "PN_READ_ORGANIZATION"
            }
        ]
    },
    {
        "permission_id": "3",
        "permission_key": "organization_update",
        "name": "PN_UPDATE_ORGANIZATION",
        "description": "Редактируйте атрибуты организации, управляйте связанными проектами и правами доступа.",
        "global": true,
        "entity_type": "PE_ORGANIZATION",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "1",
                "permission_key": "organization_read",
                "name": "PN_READ_ORGANIZATION"
            }
        ]
    },
    {
        "permission_id": "4",
        "permission_key": "organization_delete",
        "name": "PN_DELETE_ORGANIZATION",
        "description": "Удалить данные об организации из системы.",
        "global": true,
        "entity_type": "PE_ORGANIZATION",
        "operation": "PO_DELETE",
        "implied_permissions": [
            {
                "permission_id": "1",
                "permission_key": "organization_read",
                "name": "PN_READ_ORGANIZATION"
            }
        ]
    },
    {
        "permission_id": "5",
        "permission_key": "project_create",
        "name": "PN_CREATE_PROJECT",
        "description": "Создание новых проектов.",
        "global": true,
        "entity_type": "PE_PROJECT",
        "operation": "PO_CREATE"
    },
    {
        "permission_id": "6",
        "permission_key": "project_read_basic",
        "name": "PN_READ_PROJECT,_BASIC",
        "description": "Просмотр базовых свойств и содержимого проекта. Разрешение «Чтение пользователя, базовое» позволяет просматривать участников команды проекта. Членство в группах, которым предоставлен доступ к сервисам, или разрешение «Чтение сервиса» позволяет просматривать список ресурсов для проекта.",
        "global": false,
        "entity_type": "PE_PROJECT",
        "operation": "PO_READ_BASIC",
        "dependent_permissions": [
            {
                "permission_id": "7",
                "permission_key": "project_read",
                "name": "PN_READ_PROJECT,_FULL"
            },
            {
                "permission_id": "8",
                "permission_key": "read_issue",
                "name": "PN_READ_ISSUE"
            },
            {
                "permission_id": "9",
                "permission_key": "private_read_issue",
                "name": "PN_READ_PRIVATE_ISSUE"
            },
            {
                "permission_id": "10",
                "permission_key": "create_issue",
                "name": "PN_CREATE_ISSUE"
            },
            {
                "permission_id": "11",
                "permission_key": "view_watchers",
                "name": "PN_VIEW_WATCHERS"
            },
            {
                "permission_id": "12",
                "permission_key": "view_voters",
                "name": "PN_VIEW_VOTERS"
            },
            {
                "permission_id": "13",
                "permission_key": "read_article",
                "name": "PN_READ_ARTICLE"
            }
        ]
    },
    {
        "permission_id": "7",
        "permission_key": "project_read",
        "name": "PN_READ_PROJECT,_FULL",
        "description": "Просмотр всех свойств и содержимого проектов. Разрешение «Чтение роли» позволяет просматривать роли, выданные команде проекта, и роли, присвоенные другим пользователям и группам в проекте. Членство в группах, которым предоставлен доступ к сервисам, или разрешение «Чтение сервиса» позволяют просматривать список ресурсов для проекта.",
        "global": false,
        "entity_type": "PE_PROJECT",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "6",
                "permission_key": "project_read_basic",
                "name": "PN_READ_PROJECT,_BASIC"
            }
        ],
        "dependent_permissions": [
            {
                "permission_id": "14",
                "permission_key": "project_update",
                "name": "PN_UPDATE_PROJECT"
            },
            {
                "permission_id": "15",
                "permission_key": "project_delete",
                "name": "PN_DELETE_PROJECT"
            }
        ]
    },
    {
        "permission_id": "14",
        "permission_key": "project_update",
        "name": "PN_UPDATE_PROJECT",
        "description": "Изменение свойств и содержимого проектов, управление ресурсами и доступом.",
        "global": false,
        "entity_type": "PE_PROJECT",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "7",
                "permission_key": "project_read",
                "name": "PN_READ_PROJECT,_FULL"
            }
        ]
    },
    {
        "permission_id": "15",
        "permission_key": "project_delete",
        "name": "PN_DELETE_PROJECT",
        "description": "Удаление проектов.",
        "global": false,
        "entity_type": "PE_PROJECT",
        "operation": "PO_DELETE",
        "implied_permissions": [
            {
                "permission_id": "7",
                "permission_key": "project_read",
                "name": "PN_READ_PROJECT,_FULL"
            }
        ]
    },
    {
        "permission_id": "16",
        "permission_key": "role_read",
        "name": "PN_READ_ROLE",
        "description": "Просмотр списка ролей и разрешений, назначенных каждой из ролей. Разрешение «Чтение проекта, полное» позволяет просматривать роли, назначенные команде проекта, и роли, назначенные другим пользователям и группам в проекте. Разрешение «Чтение сервиса» позволяет просматривать разрешения для отдельных сервисов.",
        "global": true,
        "entity_type": "PE_ROLE",
        "operation": "PO_READ",
        "dependent_permissions": [
            {
                "permission_id": "17",
                "permission_key": "role_manage",
                "name": "PN_MANAGE_ROLE"
            }
        ]
    },
    {
        "permission_id": "17",
        "permission_key": "role_manage",
        "name": "PN_MANAGE_ROLE",
        "description": "Создание и удаление ролей. Изменение свойств роли. Изменение набора разрешений, выданных роли.",
        "global": true,
        "entity_type": "PE_ROLE",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "16",
                "permission_key": "role_read",
                "name": "PN_READ_ROLE"
            }
        ]
    },
    {
        "permission_id": "18",
        "permission_key": "profile_updateself",
        "name": "PN_UPDATESELF_PROFILE",
        "description": "Изменение данных собственного профиля.",
        "global": true,
        "entity_type": "PE_USER",
        "operation": "PO_UPDATE_OWN",
        "dependent_permissions": [
            {
                "permission_id": "19",
                "permission_key": "user_update",
                "name": "PN_UPDATE_USER"
            }
        ]
    },
    {
        "permission_id": "20",
        "permission_key": "user_create",
        "name": "PN_CREATE_USER",
        "description": "Создание новых пользовательских аккаунтов. Приглашение пользователей к самостоятельной регистрации аккаунтов.",
        "global": true,
        "entity_type": "PE_USER",
        "operation": "PO_CREATE"
    },
    {
        "permission_id": "21",
        "permission_key": "user_read_basic",
        "name": "PN_READ_USER,_BASIC",
        "description": "Просмотр списка зарегистрированных пользователей и чтение ID, логина, имени и аватара для каждого пользователя. Управление членством в группе при наличии разрешения «Обновление группы».",
        "global": true,
        "entity_type": "PE_USER",
        "operation": "PO_READ_BASIC",
        "dependent_permissions": [
            {
                "permission_id": "22",
                "permission_key": "user_read",
                "name": "PN_READ_USER,_FULL"
            }
        ]
    },
    {
        "permission_id": "22",
        "permission_key": "user_read",
        "name": "PN_READ_USER,_FULL",
        "description": "Просмотр всех свойств для всех зарегистрированных пользователей, включая данные авторизации.",
        "global": true,
        "entity_type": "PE_USER",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "21",
                "permission_key": "user_read_basic",
                "name": "PN_READ_USER,_BASIC"
            }
        ],
        "dependent_permissions": [
            {
                "permission_id": "19",
                "permission_key": "user_update",
                "name": "PN_UPDATE_USER"
            },
            {
                "permission_id": "23",
                "permission_key": "user_delete",
                "name": "PN_DELETE_USER"
            }
        ]
    },
    {
        "permission_id": "19",
        "permission_key": "user_update",
        "name": "PN_UPDATE_USER",
        "description": "Изменение данных пользовательского профиля. Блокирование, объединение и обезличивание пользовательских аккаунтов.",
        "global": true,
        "entity_type": "PE_USER",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "18",
                "permission_key": "profile_updateself",
                "name": "PN_UPDATESELF_PROFILE"
            },
            {
                "permission_id": "22",
                "permission_key": "user_read",
                "name": "PN_READ_USER,_FULL"
            }
        ]
    },
    {
        "permission_id": "23",
        "permission_key": "user_delete",
        "name": "PN_DELETE_USER",
        "description": "Удаление пользовательских аккаунтов.",
        "global": true,
        "entity_type": "PE_USER",
        "operation": "PO_DELETE",
        "implied_permissions": [
            {
                "permission_id": "22",
                "permission_key": "user_read",
                "name": "PN_READ_USER,_FULL"
            }
        ]
    },
    {
        "permission_id": "24",
        "permission_key": "group_create",
        "name": "PN_CREATE_GROUP",
        "description": "Создание новых групп.",
        "global": false,
        "entity_type": "PE_GROUP",
        "operation": "PO_CREATE"
    },
    {
        "permission_id": "25",
        "permission_key": "group_read",
        "name": "PN_READ_GROUP",
        "description": "Просмотр списка групп и чтение свойств групп. Просмотр подгрупп при наличии разрешения на чтение как родительской, так и дочерних групп. Просмотр списка участников при наличии разрешения «Чтение пользователя, базовое».",
        "global": false,
        "entity_type": "PE_GROUP",
        "operation": "PO_READ",
        "dependent_permissions": [
            {
                "permission_id": "26",
                "permission_key": "group_update",
                "name": "PN_UPDATE_GROUP"
            },
            {
                "permission_id": "27",
                "permission_key": "group_delete",
                "name": "PN_DELETE_GROUP"
            }
        ]
    },
    {
        "permission_id": "26",
        "permission_key": "group_update",
        "name": "PN_UPDATE_GROUP",
        "description": "Изменение свойств групп. Управление подгруппами при наличии разрешения на изменение как родительской, так и дочерних групп. Обновление членства в группах при наличии разрешения «Чтение пользователя, базовое».",
        "global": false,
        "entity_type": "PE_GROUP",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "25",
                "permission_key": "group_read",
                "name": "PN_READ_GROUP"
            }
        ]
    },
    {
        "permission_id": "27",
        "permission_key": "group_delete",
        "name": "PN_DELETE_GROUP",
        "description": "Удаление групп.",
        "global": false,
        "entity_type": "PE_GROUP",
        "operation": "PO_DELETE",
        "implied_permissions": [
            {
                "permission_id": "25",
                "permission_key": "group_read",
                "name": "PN_READ_GROUP"
            }
        ]
    },
    {
        "permission_id": "28",
        "permission_key": "low_level_read",
        "name": "PN_READ_LOW_LEVEL",
        "description": "Доступ «только чтение» к административным действиям низкого уровня, в том числе к интеграциям со сторонними сервисами и метрикам.",
        "global": true,
        "entity_type": "PE_ADMINISTRATION",
        "operation": "PO_ADMIN",
        "dependent_permissions": [
            {
                "permission_id": "29",
                "permission_key": "low_level",
                "name": "PN_WRITE_LOW_LEVEL"
            }
        ]
    },
    {
        "permission_id": "29",
        "permission_key": "low_level",
        "name": "PN_WRITE_LOW_LEVEL",
        "description": "Управление административными действиями низкого уровня, в том числе интеграция со сторонними сервисами и резервное копирование баз данных. Требуется доступ на чтение для низкоуровневого администрирования.",
        "global": true,
        "entity_type": "PE_ADMINISTRATION",
        "operation": "PO_ADMIN",
        "implied_permissions": [
            {
                "permission_id": "28",
                "permission_key": "low_level_read",
                "name": "PN_READ_LOW_LEVEL"
            }
        ]
    },
    {
        "permission_id": "30",
        "permission_key": "update_issue",
        "name": "PN_UPDATE_ISSUE",
        "description": "Обновление открытых полей любой задачи",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_UPDATE",
        "dependent_permissions": [
            {
                "permission_id": "31",
                "permission_key": "private_update_issue",
                "name": "PN_UPDATE_PRIVATE_ISSUE"
            }
        ]
    },
    {
        "permission_id": "32",
        "permission_key": "delete_issue",
        "name": "PN_DELETE_ISSUE",
        "description": "Удаление задач",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_DELETE"
    },
    {
        "permission_id": "33",
        "permission_key": "link_issue",
        "name": "PN_LINK_ISSUE",
        "description": "Установка взаимосвязей между задачами",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_LINK"
    },
    {
        "permission_id": "34",
        "permission_key": "apply_commands_silently",
        "name": "PN_APPLY_COMMANDS_SILENTLY",
        "description": "Применяйте команды к задачам без отправки уведомлений",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_UPDATE"
    },
    {
        "permission_id": "35",
        "permission_key": "update_watchers",
        "name": "PN_UPDATE_WATCHERS",
        "description": "Назначение другого пользователя наблюдателем за задачей",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_UPDATE"
    },
    {
        "permission_id": "36",
        "permission_key": "create_attachment_issue",
        "name": "PN_CREATE_ATTACHMENT_OF_ISSUE",
        "description": "Добавление файлов и скриншотов к задачам",
        "global": false,
        "entity_type": "PE_ATTACHMENT",
        "operation": "PO_CREATE"
    },
    {
        "permission_id": "37",
        "permission_key": "update_attachment_issue",
        "name": "PN_UPDATE_ATTACHMENT_OF_ISSUE",
        "description": "Изменение файлов, прикрепленных к задаче, и изменение видимости вложений",
        "global": false,
        "entity_type": "PE_ATTACHMENT",
        "operation": "PO_UPDATE"
    },
    {
        "permission_id": "38",
        "permission_key": "delete_attachment_issue",
        "name": "PN_DELETE_ATTACHMENT_OF_ISSUE",
        "description": "Удаление файлов, прикрепленных к задачам",
        "global": false,
        "entity_type": "PE_ATTACHMENT",
        "operation": "PO_DELETE"
    },
    {
        "permission_id": "39",
        "permission_key": "create_comment",
        "name": "PN_CREATE_COMMENT",
        "description": "Добавление комментариев к задачам",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_CREATE"
    },
    {
        "permission_id": "40",
        "permission_key": "read_comment",
        "name": "PN_READ_COMMENT",
        "description": "Просмотр комментариев к задачам",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_READ",
        "dependent_permissions": [
            {
                "permission_id": "41",
                "permission_key": "update_not_own_comment",
                "name": "PN_UPDATE_NOT_OWN_COMMENT"
            },
            {
                "permission_id": "42",
                "permission_key": "delete_not_own_comment",
                "name": "PN_DELETE_NOT_OWN_COMMENT"
            }
        ]
    },
    {
        "permission_id": "43",
        "permission_key": "update_comment",
        "name": "PN_UPDATE_COMMENT",
        "description": "Редактирование собственных комментариев к задачам",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_UPDATE"
    },
    {
        "permission_id": "44",
        "permission_key": "delete_comment",
        "name": "PN_DELETE_COMMENT",
        "description": "Удаление комментариев других пользователей к задачам. Также позволяет удалять комментарии навсегда (как свои, так и других пользователей)",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_DELETE"
    },
    {
        "permission_id": "45",
        "permission_key": "create_watch_folder",
        "name": "PN_CREATE_WATCH_FOLDER",
        "description": "Создание тега или сохраненного поиска",
        "global": false,
        "entity_type": "PE_WATCH_FOLDER",
        "operation": "PO_CREATE"
    },
    {
        "permission_id": "46",
        "permission_key": "update_watch_folder",
        "name": "PN_UPDATE_WATCH_FOLDER",
        "description": "Позволяет редактировать общий тег или сохраненный поиск, если пользователь принадлежит к общей группе.",
        "global": false,
        "entity_type": "PE_WATCH_FOLDER",
        "operation": "PO_UPDATE"
    },
    {
        "permission_id": "47",
        "permission_key": "delete_watch_folder",
        "name": "PN_DELETE_WATCH_FOLDER",
        "description": "Удаление собственного тега или сохраненного поиска",
        "global": false,
        "entity_type": "PE_WATCH_FOLDER",
        "operation": "PO_DELETE"
    },
    {
        "permission_id": "48",
        "permission_key": "share_watch_folder",
        "name": "PN_SHARE_WATCH_FOLDER",
        "description": "Обновлять настройки, позволяющие другим пользователям просматривать, использовать и редактировать теги, сохраненные поисковые запросы, Agile-доски и диаграммы Ганта",
        "global": true,
        "entity_type": "PE_WATCH_FOLDER",
        "operation": "PO_SHARE"
    },
    {
        "permission_id": "49",
        "permission_key": "read_work_item",
        "name": "PN_READ_WORK_ITEM",
        "description": "Просмотр единиц работы по задачам",
        "global": false,
        "entity_type": "PE_ISSUE_WORK_ITEM",
        "operation": "PO_READ",
        "dependent_permissions": [
            {
                "permission_id": "50",
                "permission_key": "update_not_own_work_item",
                "name": "PN_UPDATE_NOT_OWN_WORK_ITEM"
            }
        ]
    },
    {
        "permission_id": "51",
        "permission_key": "update_work_item",
        "name": "PN_UPDATE_WORK_ITEM",
        "description": "Добавление и редактирование единиц работы",
        "global": false,
        "entity_type": "PE_ISSUE_WORK_ITEM",
        "operation": "PO_UPDATE",
        "dependent_permissions": [
            {
                "permission_id": "50",
                "permission_key": "update_not_own_work_item",
                "name": "PN_UPDATE_NOT_OWN_WORK_ITEM"
            }
        ]
    },
    {
        "permission_id": "52",
        "permission_key": "create_work_item",
        "name": "PN_CREATE_WORK_ITEM",
        "description": "Создание единиц работы",
        "global": false,
        "entity_type": "PE_ISSUE_WORK_ITEM",
        "operation": "PO_CREATE",
        "dependent_permissions": [
            {
                "permission_id": "53",
                "permission_key": "create_not_own_work_item",
                "name": "PN_CREATE_NOT_OWN_WORK_ITEM"
            }
        ]
    },
    {
        "permission_id": "54",
        "permission_key": "read_report",
        "name": "PN_READ_REPORT",
        "description": "Чтение отчета",
        "global": false,
        "entity_type": "PE_REPORT",
        "operation": "PO_READ",
        "dependent_permissions": [
            {
                "permission_id": "55",
                "permission_key": "create_report",
                "name": "PN_CREATE_REPORT"
            },
            {
                "permission_id": "56",
                "permission_key": "share_report",
                "name": "PN_SHARE_REPORT"
            }
        ]
    },
    {
        "permission_id": "8",
        "permission_key": "read_issue",
        "name": "PN_READ_ISSUE",
        "description": "Просмотр задачи (только открытые поля)",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "6",
                "permission_key": "project_read_basic",
                "name": "PN_READ_PROJECT,_BASIC"
            }
        ]
    },
    {
        "permission_id": "9",
        "permission_key": "private_read_issue",
        "name": "PN_READ_PRIVATE_ISSUE",
        "description": "Просмотр закрытых полей задач",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "6",
                "permission_key": "project_read_basic",
                "name": "PN_READ_PROJECT,_BASIC"
            }
        ],
        "dependent_permissions": [
            {
                "permission_id": "31",
                "permission_key": "private_update_issue",
                "name": "PN_UPDATE_PRIVATE_ISSUE"
            },
            {
                "permission_id": "57",
                "permission_key": "read_hidden_stuff",
                "name": "PN_READ_HIDDEN_STUFF"
            }
        ]
    },
    {
        "permission_id": "10",
        "permission_key": "create_issue",
        "name": "PN_CREATE_ISSUE",
        "description": "Создать новую задачу (также позволяет просматривать и обновлять открытые поля в зарегистрированных задачах)",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_CREATE",
        "implied_permissions": [
            {
                "permission_id": "6",
                "permission_key": "project_read_basic",
                "name": "PN_READ_PROJECT,_BASIC"
            }
        ]
    },
    {
        "permission_id": "11",
        "permission_key": "view_watchers",
        "name": "PN_VIEW_WATCHERS",
        "description": "Просмотр списка пользователей, которые наблюдают за задачей (доступно на странице задачи)",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "6",
                "permission_key": "project_read_basic",
                "name": "PN_READ_PROJECT,_BASIC"
            }
        ]
    },
    {
        "permission_id": "12",
        "permission_key": "view_voters",
        "name": "PN_VIEW_VOTERS",
        "description": "Просмотр списка пользователей, которые голосовали за задачу (доступно на странице задачи)",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "6",
                "permission_key": "project_read_basic",
                "name": "PN_READ_PROJECT,_BASIC"
            }
        ]
    },
    {
        "permission_id": "41",
        "permission_key": "update_not_own_comment",
        "name": "PN_UPDATE_NOT_OWN_COMMENT",
        "description": "Редактирование чужих комментариев к задачам",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "40",
                "permission_key": "read_comment",
                "name": "PN_READ_COMMENT"
            }
        ]
    },
    {
        "permission_id": "42",
        "permission_key": "delete_not_own_comment",
        "name": "PN_DELETE_NOT_OWN_COMMENT",
        "description": "Удаление комментариев других пользователей",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_DELETE",
        "implied_permissions": [
            {
                "permission_id": "40",
                "permission_key": "read_comment",
                "name": "PN_READ_COMMENT"
            }
        ]
    },
    {
        "permission_id": "50",
        "permission_key": "update_not_own_work_item",
        "name": "PN_UPDATE_NOT_OWN_WORK_ITEM",
        "description": "Изменение единиц работы, созданных другими пользователями",
        "global": false,
        "entity_type": "PE_ISSUE_WORK_ITEM",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "49",
                "permission_key": "read_work_item",
                "name": "PN_READ_WORK_ITEM"
            },
            {
                "permission_id": "51",
                "permission_key": "update_work_item",
                "name": "PN_UPDATE_WORK_ITEM"
            }
        ]
    },
    {
        "permission_id": "53",
        "permission_key": "create_not_own_work_item",
        "name": "PN_CREATE_NOT_OWN_WORK_ITEM",
        "description": "Создание единиц работы для других пользователей",
        "global": false,
        "entity_type": "PE_ISSUE_WORK_ITEM",
        "operation": "PO_CREATE",
        "implied_permissions": [
            {
                "permission_id": "52",
                "permission_key": "create_work_item",
                "name": "PN_CREATE_WORK_ITEM"
            }
        ]
    },
    {
        "permission_id": "55",
        "permission_key": "create_report",
        "name": "PN_CREATE_REPORT",
        "description": "Создать отчет",
        "global": false,
        "entity_type": "PE_REPORT",
        "operation": "PO_CREATE",
        "implied_permissions": [
            {
                "permission_id": "54",
                "permission_key": "read_report",
                "name": "PN_READ_REPORT"
            }
        ]
    },
    {
        "permission_id": "56",
        "permission_key": "share_report",
        "name": "PN_SHARE_REPORT",
        "description": "Публикация отчета для других пользователей",
        "global": false,
        "entity_type": "PE_REPORT",
        "operation": "PO_SHARE",
        "implied_permissions": [
            {
                "permission_id": "54",
                "permission_key": "read_report",
                "name": "PN_READ_REPORT"
            }
        ]
    },
    {
        "permission_id": "13",
        "permission_key": "read_article",
        "name": "PN_READ_ARTICLE",
        "description": "Чтение статей в базе знаний",
        "global": false,
        "entity_type": "PE_ARTICLE",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "6",
                "permission_key": "project_read_basic",
                "name": "PN_READ_PROJECT,_BASIC"
            }
        ],
        "dependent_permissions": [
            {
                "permission_id": "58",
                "permission_key": "create_article",
                "name": "PN_CREATE_ARTICLE"
            },
            {
                "permission_id": "59",
                "permission_key": "update_article",
                "name": "PN_UPDATE_ARTICLE"
            },
            {
                "permission_id": "60",
                "permission_key": "delete_article",
                "name": "PN_DELETE_ARTICLE"
            },
            {
                "permission_id": "61",
                "permission_key": "read_article_comment",
                "name": "PN_READ_ARTICLE_COMMENT"
            }
        ]
    },
    {
        "permission_id": "31",
        "permission_key": "private_update_issue",
        "name": "PN_UPDATE_PRIVATE_ISSUE",
        "description": "Обновление закрытых полей задачи",
        "global": false,
        "entity_type": "PE_ISSUE",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "30",
                "permission_key": "update_issue",
                "name": "PN_UPDATE_ISSUE"
            },
            {
                "permission_id": "9",
                "permission_key": "private_read_issue",
                "name": "PN_READ_PRIVATE_ISSUE"
            }
        ]
    },
    {
        "permission_id": "57",
        "permission_key": "read_hidden_stuff",
        "name": "PN_READ_HIDDEN_STUFF",
        "description": "Просмотр задач, комментариев, вложений и статей, скрытых параметрами видимости",
        "global": false,
        "entity_type": "PE_VISIBILITY",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "9",
                "permission_key": "private_read_issue",
                "name": "PN_READ_PRIVATE_ISSUE"
            }
        ]
    },
    {
        "permission_id": "58",
        "permission_key": "create_article",
        "name": "PN_CREATE_ARTICLE",
        "description": "Добавление статей в базу знаний",
        "global": false,
        "entity_type": "PE_ARTICLE",
        "operation": "PO_CREATE",
        "implied_permissions": [
            {
                "permission_id": "13",
                "permission_key": "read_article",
                "name": "PN_READ_ARTICLE"
            }
        ]
    },
    {
        "permission_id": "59",
        "permission_key": "update_article",
        "name": "PN_UPDATE_ARTICLE",
        "description": "Обновление статьей в базе знаний",
        "global": false,
        "entity_type": "PE_ARTICLE",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "13",
                "permission_key": "read_article",
                "name": "PN_READ_ARTICLE"
            }
        ]
    },
    {
        "permission_id": "60",
        "permission_key": "delete_article",
        "name": "PN_DELETE_ARTICLE",
        "description": "Удаление статьи из базы знаний",
        "global": false,
        "entity_type": "PE_ARTICLE",
        "operation": "PO_DELETE",
        "implied_permissions": [
            {
                "permission_id": "13",
                "permission_key": "read_article",
                "name": "PN_READ_ARTICLE"
            }
        ]
    },
    {
        "permission_id": "61",
        "permission_key": "read_article_comment",
        "name": "PN_READ_ARTICLE_COMMENT",
        "description": "Чтение комментариев к статьям в базе знаний",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_READ",
        "implied_permissions": [
            {
                "permission_id": "13",
                "permission_key": "read_article",
                "name": "PN_READ_ARTICLE"
            }
        ],
        "dependent_permissions": [
            {
                "permission_id": "62",
                "permission_key": "create_article_comment",
                "name": "PN_CREATE_ARTICLE_COMMENT"
            },
            {
                "permission_id": "63",
                "permission_key": "update_article_comment",
                "name": "PN_UPDATE_ARTICLE_COMMENT"
            },
            {
                "permission_id": "64",
                "permission_key": "delete_article_comment",
                "name": "PN_DELETE_ARTICLE_COMMENT"
            }
        ]
    },
    {
        "permission_id": "62",
        "permission_key": "create_article_comment",
        "name": "PN_CREATE_ARTICLE_COMMENT",
        "description": "Добавление комментариев к статьям в базе знаний",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_CREATE",
        "implied_permissions": [
            {
                "permission_id": "61",
                "permission_key": "read_article_comment",
                "name": "PN_READ_ARTICLE_COMMENT"
            }
        ]
    },
    {
        "permission_id": "63",
        "permission_key": "update_article_comment",
        "name": "PN_UPDATE_ARTICLE_COMMENT",
        "description": "Обновление чужих комментариев к статьям в базе знаний",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_UPDATE",
        "implied_permissions": [
            {
                "permission_id": "61",
                "permission_key": "read_article_comment",
                "name": "PN_READ_ARTICLE_COMMENT"
            }
        ]
    },
    {
        "permission_id": "64",
        "permission_key": "delete_article_comment",
        "name": "PN_DELETE_ARTICLE_COMMENT",
        "description": "Удаление чужих комментариев к статьям в базе знаний",
        "global": false,
        "entity_type": "PE_ISSUE_COMMENT",
        "operation": "PO_DELETE",
        "implied_permissions": [
            {
                "permission_id": "61",
                "permission_key": "read_article_comment",
                "name": "PN_READ_ARTICLE_COMMENT"
            }
        ]
    }
]