const crypto = require("crypto")

export const baseCustomFields = [
  {
    "key": "type",
    "field_type": "single_enum",
    "name": "CF_TYPE",
    "default_value": "CF_BUG",
    "can_be_empty": false,
    "empty_value": "CF_NO_TYPE",
    "options": [
      { id: crypto.randomUUID(), name: "CF_BUG" },
      { id: crypto.randomUUID(), name: "CF_COSMETICS" },
      { id: crypto.randomUUID(), name: "CF_EXCEPTION" },
      { id: crypto.randomUUID(), name: "CF_FEATURE" },
      { id: crypto.randomUUID(), name: "CF_TASK" },
      { id: crypto.randomUUID(), name: "CF_USABILITY_PROBLEM" },
      { id: crypto.randomUUID(), name: "CF_PERFORMANCE_PROBLEM" },
      { id: crypto.randomUUID(), name: "CF_EPIC" }
    ]
  },
  {
    "key": "priority",
    "field_type": "single_enum",
    "name": "CF_PRIORITY",
    "default_value": "CF_NORMAL",
    "can_be_empty": false,
    "empty_value": "CF_NO_PRIORITY",
    "options": [
      { id: crypto.randomUUID(), name: "CF_SHOW_STOPPER" },
      { id: crypto.randomUUID(), name: "CF_CRITICAL" },
      { id: crypto.randomUUID(), name: "CF_MAJOR" },
      { id: crypto.randomUUID(), name: "CF_NORMAL" },
      { id: crypto.randomUUID(), name: "CF_MINOR" }
    ]
  },
  {
    "key": "state",
    "field_type": "single_enum",
    "name": "CF_STATE",
    "default_value": "CF_SUBMITTED",
    "can_be_empty": false,
    "empty_value": "CF_NO_STATE",
    "options": [
      { id: crypto.randomUUID(), name: "CF_SUBMITTED" },
      { id: crypto.randomUUID(), name: "CF_OPEN" },
      { id: crypto.randomUUID(), name: "CF_IN_PROGRESS" },
      { id: crypto.randomUUID(), name: "CF_TO_BE_DISCUSSED" },
      { id: crypto.randomUUID(), name: "CF_REOPENED" },
      { id: crypto.randomUUID(), name: "CF_CAN_NOT_REPRODUCE" },
      { id: crypto.randomUUID(), name: "CF_DUPLICATE" },
      { id: crypto.randomUUID(), name: "CF_FIXED" },
      { id: crypto.randomUUID(), name: "CF_WILL_NOT_FIX" },
      { id: crypto.randomUUID(), name: "CF_INCOMPLETE" },
      { id: crypto.randomUUID(), name: "CF_OBSOLETE" },
      { id: crypto.randomUUID(), name: "CF_VERIFIED" },
    ]
  },
  {
    "key": "assignee",
    "field_type": "single_user",
    "name": "CF_ASSIGNEE",
    "default_value": null,
    "can_be_empty": true,
    "empty_value": "CF_NO_ASSIGNEE",
    "options": null
  },
  {
    "key": "due-date",
    "field_type": "date",
    "name": "CF_DUE_DATE",
    "default_value": null,
    "can_be_empty": true,
    "empty_value": 'CF_NO_DUE_DATE',
    "options": null
  },
  {
    "key": "estimate",
    "field_type": "period",
    "name": "CF_ESTIMATE",
    "default_value": null,
    "can_be_empty": true,
    "empty_value": null,
    "options": null
  },
  {
    "key": "time-spent",
    "field_type": "period",
    "name": "CF_TIME_SPENT",
    "default_value": null,
    "can_be_empty": true,
    "empty_value": null,
    "options": null
  }
]