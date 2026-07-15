# ByteForge — Database Schema Reference

## User
| Field | Type | Notes |
|---|---|---|
| name | String | required |
| email | String | required, unique |
| password | String | hashed, never store plain text |
| role | String | 'student' or 'admin' |

## Problem
| Field | Type | Notes |
|---|---|---|
| title | String | required |
| description | String | required |
| difficulty | String | Easy / Medium / Hard |
| companyTags | [String] | e.g. Google, Amazon |
| topicTags | [String] | e.g. Array, DP |
| testCases | [{input, expectedOutput, isHidden}] | hidden = used for Submit, not Run |
| createdBy | ObjectId (ref: User) | |

## Submission
| Field | Type | Notes |
|---|---|---|
| user | ObjectId (ref: User) | required |
| problem | ObjectId (ref: Problem) | required |
| code | String | required |
| language | String | python / cpp / java |
| verdict | String | Accepted / Wrong Answer / TLE / Runtime Error / Compile Error / Pending |
| runtimeMs | Number | |
| memoryKb | Number | |

## Test (mock test session)
| Field | Type | Notes |
|---|---|---|
| user | ObjectId (ref: User) | required |
| problems | [ObjectId] (ref: Problem) | |
| durationMinutes | Number | required |
| startTime | Date | server-set, required |
| endTime | Date | calculated or set on submit |
| status | String | in-progress / completed / timed-out |
| results | [{problem, submission, verdict}] | |

## Quiz
| Field | Type | Notes |
|---|---|---|
| topic | String | required |
| questions | [{questionText, options, correctOptionIndex}] | |