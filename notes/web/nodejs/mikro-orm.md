---
title: mikro-orm
---

# mikro-orm

- [mikro-orm/mikro-orm](https://github.com/mikro-orm/mikro-orm)
  - MIT, Typescript
  - ORM
  - 支持 Data Mapper, Unit of Work, Identity Map
  - 支持 MongoDB, MySQL, MariaDB, PostgreSQL, SQLite
  - 支持 dataloader
- @mikro-orm/knex
  - Builder

:::tip

- mikro-orm 使用 knex， knex pool 默认 `min:2, max:10`
- 不支持复杂多样的 JOIN 逻辑
- 默认 cascade 为 persist
  - 新 entity 总会 persist - 忽略 cascade

:::

:::note

- **类名不能重复**
- 不支持多态 [#706](https://github.com/mikro-orm/mikro-orm/issues/706)
- ManyToOne join 必须为主键 [#593](https://github.com/mikro-orm/mikro-orm/issues/593)
- join 列不能重复定义
  - 例如 user, userId 不能同时存在
- 不能配合 ts-mixer
  - 可以考虑利用 EntitySchema 做 mixin
  - https://github.com/mikro-orm/mikro-orm/discussions/5371

```ts
// 让 user 和 userId 同时存在
@Property({ persist: false })
get userId(): string {
  return this.user.id;
}
```

- 全局 filter [#3009](https://github.com/mikro-orm/mikro-orm/issues/3009)

```ts
const filters = em.applyFilters('EntityName', {}, {}, 'read');
qb.andWhere(filters);
```

:::

```bash
# mongodb, mysql, mariadb, sqlite
npm add @mikro-orm/core @mikro-orm/postgresql
```

```json title="tsconfig.json"
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "esModuleInterop": true
}
```

```ts
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package
import { EntityManager } from '@mikro-orm/postgresql';

const orm = await MikroORM.init<PostgreSqlDriver>({
  // 自动发现 - 不推荐
  // entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
  // entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
  // entities: ['./dist/app/**/entities'],
  // entitiesTs: ['./src/app/**/entities'],
  // entities: ['./dist/app/**/entities/*.entity.js'],
  // entitiesTs: ['./src/app/**/entities/*.entity.ts'],

  // 手动配置
  entities: [Author, Book, BookTag, Publisher, Test],
  discovery: { disableDynamicFileAccess: true },

  dbName: 'my-db-name',
  type: 'postgresql',
});
const em = orm.em as EntityManager;
```

- https://mikro-orm.io/docs/configuration#using-environment-variables

```bash
npm add -D @mikro-orm/cli
# mikro-orm.config.js
npx mikro-orm

mikro-orm generate-entities

# by dlx
pnpm --package=@mikro-orm/cli dlx mikro-orm

NODE_OPTIONS='--loader tsx' pnpm mikro-orm generate-entities --schema public -p ./src/server/db/entities/ -d
```

- mikro-orm.config.ts
  - 依赖 ts-node

```ts
export type MinimalOptionalEntityFields =
  | 'id'
  | 'uid'
  | 'createdAt'
  | 'updatedAt'
  | 'sid'
  | 'tid'
  | 'attributes'
  | 'properties'
  | 'extensions';

@Entity({ abstract: true })
export abstract class MinimalBaseEntity<Entity extends MinimalBaseEntity<any>> extends BaseEntity<Entity, 'id'> {
  // 在子类中定义 - Base 里的定义无法覆盖
  [OptionalProps]?: MinimalOptionalEntityFields;

  @PrimaryKey({ type: 'text', defaultRaw: 'public.gen_ulid()' })
  id!: string;

  //@PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  uid!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ type: 'timestamptz', defaultRaw: 'current_timestamp' })
  createdAt!: Date;

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
```

## STI

- STI -> Single Table Inheritance 单表继承

```ts
@Entity({
  discriminatorColumn: 'type',
  // discriminatorMap: { person: 'Person', employee: 'Employee' },
  // discriminatorValue: 'person',
  abstract: true, // discriminatorMap 不包含自己
})
export class BasePerson {
  @Enum()
  type!: 'person' | 'employee';
}
@Entity({
  discriminatorValue: 'person',
})
export class Person extends BasePerson {
  // ...
}
@Entity({
  discriminatorValue: 'employee',
})
export class Employee extends BasePerson {}
```

- https://mikro-orm.io/docs/inheritance-mapping#single-table-inheritance

## Collection

```ts
interface Collection<T> {
  load(): Promise<this>;
  loadItems(): Promise<T[]>;
  loadCount(): Promise<number>;

  matching(cond: FilterQuery<T>): this;

  getItems(): T[];

  add(...items: T[]): this;
  remove(...items: T[]): this;
  contains(item: T): boolean;
  count(): number;

  // 数组
  slice(start?: number, end?: number): T[];
  exists(cb: (item: T) => boolean): boolean;
  find(cb: (item: T, index: number) => boolean): T | undefined;
  filter(cb: (item: T, index: number) => boolean): T[];
  map<R>(mapper: (item: T, index: number) => R): R[];
  indexBy<K extends keyof T>(prop: K): Record<string, T>;

  shouldPopulate(populated?: boolean): boolean;
  populated(populated?: boolean): boolean;
  init(): Promise<this>;

  toJSON(): any;
}
```

## RequestContext

- Middleware `RequestContext.create(orm.em, next)`

## Relationships

- https://mikro-orm.io/docs/relationships

## Metadata

- MetadataStorage
  - Key ->EntityMetadata
  - `key = entity && path ? entity + '-' + Utils.hash(path) : null`
- Utils.lookupPathFromDecorator
  - 获取 Decorator 调用的 path

```ts
MetadataStorage.getMetadataFromDecorator(UserEntity);
```

**@Entity**

```ts
export function Entity(options: EntityOptions<any> = {}) {
  return function <T>(target: T & Dictionary) {
    const meta = MetadataStorage.getMetadataFromDecorator(target);
    Utils.mergeConfig(meta, options);
    meta.class = target as unknown as Constructor<T>;

    if (!options.abstract || meta.discriminatorColumn) {
      meta.name = target.name;
    }

    return target;
  };
}
```

# Version

## MikroORM v6

- 类型
  - populate 类型安全
  - Opt 类型 - 解决之前需要 OptionalProps 的问题，不好扩展
  - Hidden 类型 - 序列化后字段不存在
  - BaseEntity 不再需要类型参数，通过 PrimaryKeyProp 定义
  - `[Config]?: DefineConfig<{ forceObject: true }>;`
    - 序列化后类型为 object
- 查询
  - populate 支持 `*` - 所有，之前的 true
  - populate 支持 `$infer` - 基于查询
  - Collection 接口功能完善 - 类似 数组
  - findByCursor - 基于游标分页
  - 关联子查询 $some, $none, $every
- helper
  - rel
  - ref
- [dataloader](https://mikro-orm.io/docs/dataloaders)
- Logging
  - 支持 label、context
  - 可以按需关闭
- 可以扩展 EntityManager
- 解决默认 require 插件依赖问题
- `MikroORM.initSync`
- 元数据生成 adapter
  - GeneratedCacheAdapter
  - `npx mikro-orm cache:generate --combined`
  - 可以避免 reflect-metadata 、 @mikro-orm/reflection

```ts
MikroORM.init({
  metadataCache: {
    enabled: true,
    adapter: GeneratedCacheAdapter,
    options: { data: require('./temp/metadata.json') },
  },
});

//
MikroORM.init({
  dataloader: Dataloader.ALL,
});
```

# FAQ

## LockMode

```
OPTIMISTIC
PESSIMISTIC_READ
PESSIMISTIC_WRITE
PESSIMISTIC_PARTIAL_WRITE
PESSIMISTIC_WRITE_OR_FAIL
PESSIMISTIC_PARTIAL_READ
```

- PESSIMISTIC_WRITE_OR_FAIL
  - FOR UPDATE NOWAIT

## Transaction query already complete
