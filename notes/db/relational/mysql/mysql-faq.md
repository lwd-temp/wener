---
tags:
  - FAQ
---

# MySQL FAQ

```sql
select version();
```

## debug connections

```sql
-- 默认 151 - 150 普通用户, 1 super
show variables like 'max_connections';
show status where variable_name = 'threads_connected';
show processlist;

select id,
       user,
       host,
       db,
       command,
       time,
       state,
       info
from information_schema.processlist
```

## 修改密码

```sql
select user,host from mysql.user;
select user,host,db from mysql.db;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

-- 允许 root 远程
-- root@localhost -> root@%
UPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='root';
FLUSH PRIVILEGES;

-- UPDATE mysql.db SET Host='%' WHERE Host='localhost' AND User='username';
-- GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';
-- GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
```

## 估算表大小

```sql
-- 行数
select table_rows, TABLE_SCHEMA, TABLE_NAME
from information_schema.tables
order by TABLE_ROWS desc;

select (DATA_LENGTH / AVG_ROW_LENGTH) as total_rows, TABLE_NAME
from INFORMATION_SCHEMA.TABLES
order by total_rows desc;

-- 数据量
select sys.format_bytes(DATA_LENGTH), TABLE_NAME
from INFORMATION_SCHEMA.TABLES
order by DATA_LENGTH desc;
```

## Backup

- https://dba.stackexchange.com/a/91322/234272

## Expression of generated column 'status' contains a disallowed function: curdate.

MySQL virtual 列不能用 CONNECTION_ID(), CURRENT_USER(), NOW().

## 删除数据不会释放空间

- 除非使用 innodb_file_per_table
- optimize table 会减小 .idb, 但不会减小 ibdata1