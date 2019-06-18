# coblood-db

<img width=90% src="https://gitlab.com/debbian/coblood-db/raw/master/coblood.png">

2019.04.01 edits:
Table : Column
+ users: regDate (autocomplete on user registration -> registration date)

2019.03.30 edits:
[Table : Column]
+ messages: deletedByAdmin
+ users: banned, deleted
+ bloodrequests: status

2019.03.29 edits:
+ added data needed in table 'role' -> (ids / types) and table 'compatible' -> (blood types compatibility info) 
+ added fields in table 'messages' related to trash folder -> (trashReceiver, trashSender)
- deleted fields in table 'bloodrequests' (because of team's decision for single request per need)