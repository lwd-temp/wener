---
tags:
  - Design
---

# API Design

:::tip

- grpc 内部默认 4mb buffer

:::

- Google Cloud API [常见设计模式](https://cloud.google.com/apis/design/design_patterns)
  - `[start_xxx, end_xxx)`
  - `map<string, string> labels`
- [Microsoft/api-guidelines](https://github.com/Microsoft/api-guidelines)
- https://cloud.google.com/apis/design/
- https://opensource.zalando.com/restful-api-guidelines/
  - [zalando/zally](https://github.com/zalando/zally)
    - API linter
- https://apistylebook.com/
  - http://apistylebook.com/design/guidelines/
- [restcookbook/restcookbook](https://github.com/restcookbook/restcookbook)
- [Atlassian REST API design guidelines version 1](https://developer.atlassian.com/server/framework/atlassian-sdk/atlassian-rest-api-design-guidelines-version-1/)
  - 集合名字 singular
- [adidas/api-guidelines](https://github.com/adidas/api-guidelines)
  - https://adidas.gitbook.io/api-guidelines/
- [interagent/http-api-design](https://github.com/interagent/http-api-design)
- [WhiteHouse/api-standards](https://github.com/WhiteHouse/api-standards)
- https://postgrest.org/en/stable/api.html

## 分页和排序 {#pagination}

- Offset/Limit
  - offset+limit
- Cursor/Limit
  - cursor+limit
  - 时间: until, since
- Zalando
  - sort - `+id,-name`,`-id`
    - `+` asc, `-` desc
- Google API
  - order_by - `field [asc|desc],...`
- MS API
  - orderBy=name desc,hireDate

```json title="Meta GQL.json"
{
  "data": [],
  "paging": {
    "cursors": {
      "after": "XYZ=",
      "before": "XYZ="
    },
    "previous": "https://?limit=25&before=XYZ=",
    "next": "https://?limit=25&after=XYZ="
  }
}
```

```json title="Twitter.json"
{
  "ids": [123],
  "next_cursor": 123,
  "next_cursor_str": "123",
  "previous_cursor": -123,
  "previous_cursor_str": "-123"
}
```

```json "Zalando.json"
{
  "items": [],
  "self": "http://?cursor=",
  "first": "",
  "prev": "",
  "next": "",
  "last": "",
  "query": {}
}
```

- 参考
  - https://developers.facebook.com/docs/graph-api/results

## 过滤 {#filter}

:::tip

- 减少接口数量 - 提升开发效率
- 增加业务灵活性 - 业务变化接口不变

:::

- [MiniQuery](https://wener.me/notes/languages/miniquery)
  - 允许前端直接传类似 where 的语句，后端重写为安全的查询过滤
  - [wenerme/js-miniquery](https://github.com/wenerme/js-miniquery)
- AIP-160
  - `field > 1`
  - 字段在左边
- PostgREST
  - `GET /people?age=gte.18&student=is.true HTTP/1.1`
    - `age=gte.18` -> `age > 18`
    - 通过操作过滤
  - `GET /people?or=(age.lt.18,age.gt.21) HTTP/1.1`

## 选择返回 {#select}

:::tip

- 部分返回 - 性能
- 关联查询 - 客户端的开发体验
- 增加业务灵活性 - 业务变化接口不变
- 支持多端开发场景
- GraphQL的出现解决了该问题

:::

- Google API
  - `fields=name,generation,size`
  - `fields=items(id,metadata/key1)`
- Zalando
  - fields - `(name,friends(name))`
    - 获取部分字段
    - 包含 name 和 friends 数组对象的 name
  - embed - `(items)`
    - 包含关联属性
    - 包含额外内容
- PostgREST
  - `GET /people?select=first_name,age HTTP/1.1`
  - `GET /people?select=id,json_data->>blood_type,json_data->phones HTTP/1.1`
    - JSON 数据选择
  - `GET /people?select=*,full_name HTTP/1.1`
    - 额外字段

## Zalando

- 查询参数
  - q - 默认查询
  - sort - 逗号分隔
    - `+id,-name`,`-id`
    - `+` asc, `-` desc
  - fields - `(name,friends(name))`
    - 获取部分字段
  - embed - `(items)`
    - 包含关联属性
  - offset
  - cursor
  - limit

**fields**

```
<fields>            ::= [ <negation> ] <fields_struct>
<fields_struct>     ::= "(" <field_items> ")"
<field_items>       ::= <field> [ "," <field_items> ]
<field>             ::= <field_name> | <fields_substruct>
<fields_substruct>  ::= <field_name> <fields_struct>
<field_name>        ::= <dash_letter_digit> [ <field_name> ]
<dash_letter_digit> ::= <dash> | <letter> | <digit>
<dash>              ::= "-" | "_"
<letter>            ::= "A" | ... | "Z" | "a" | ... | "z"
<digit>             ::= "0" | ... | "9"
<negation>          ::= "!"
```

## Google Cloud

- `fields=name,generation,size`
- `fields=items(id,metadata/key1)`
- https://cloud.google.com/storage/docs/json_api#partial-response

## gRPC API Design

- 接口面向资源
- 资源名字
  - 资源 **必须** 包含资源名字
  - _可以_ 包含 `<resource>_id`
  - _可以_ 包含 `uid`
  - ID 字段 _应该_ 为 字符串
  - 例如
    - `teams/first/members/wener`
    - `users/wener`
  - 完整资源名字
    - `服务名字/资源名字`
    - `//library.wener.me/publishers/123/books/456`
      - 对于的类型 `library.wener.me/Publisher`, `library.wener.me/Book`
- 集合资源名字
  - 复数、驼峰
  - `users/wener/events/hello-world`
  - 可以考虑支持跨集合
    - `publishers/-/books/{book}`
    - `users/-/events?filter=`
- 资源类型 - {Service Name}/{Type}
  - ServiceName
  - Type
- GetResource(GetResourceRequest) returns (Resource)
  - GetResourceRequest#name -- 资源名字 -> `publishers/{publisher}/books/{book}`
- ListResources(ListResourceRequest) returns (ListResourceResponse)
  - ListResourceRequest#
    - parent - 上级集合 -> `publishers/*`
    - page_size
    - page_token - 尽量前端不可逆
    - skip - 可选实现
    - order_by - `field [asc|desc],...`
    - filter - [AIP-160](https://google.aip.dev/160)
      - `a AND b OR NOT c` - OR 优先级高于 AND
      - `NOT a` = `-a`
      - `=,!=,>,<,>=,<=`
      - true,false,null
      - `a.b = true`
      - 包含/has `a.b:10` - a 为集合，b 为集合元素字段
      - `call(args...)`
      - 字段名必须在左边
    - bool show_deleted - 软删除
    - unreachable
  - ListResourceResponse
    - repeated Resource resources
    - next_page_token
    - 可选 int64 total_size
- CreateResource(CreateResourceRequest) returns (Resource)
  - CreateResourceRequest
    - parent
    - resource
    - resource_id 有些场景可以支持客户端自己指定
  - 长时间运行操作返回 google.longrunning.Operation
- UpdateResource(UpdateResourceRequest) returns (Resource)
  - UpdateResourceRequest
    - resource
      - 通过 name 匹配
      - etag - 可指定 etga 进行比较更新，如果不匹配则失败
    - google.protobuf.FieldMask update_mask - 支持部分更新
    - bool allow_missing - 如果不存则创建
- DeleteResource(DeleteResourceRequest) returns (google.protobuf.Empty)
- DeleteResourceRequest
  - name
  - bool force - 强制级联删除
  - etag - 如果匹配才删除
  - bool allow_missing - 忽略不存在
- PurgeResources(PurgeResourcesRequest) returns (google.longrunning.Operation)
  - 批量删除
  - PurgeResourcesRequest
    - parent
    - filter
    - force
  - PurgeResourcesResponse
    - purge_count
    - purge_sample
- UndeleteResource(UndeleteResourceRequest) returns (Resource)
  - 支持软删除
  - UndeleteResourceRequest
    - name
- Batch
- ImportResources(ImportResourcesRequest) returns (google.longrunning.Operation)
  - ImportResourcesRequest
    - parent
- ExportResources(ExportResourcesRequest) returns (google.longrunning.Operation)
  - ExportResourcesRequest
    - filter
- 常见标准字段
  - name
  - parent
  - uid
  - display_name,title,given_name,faamily_ame
  - create_time,update_time,delete_time
  - expire_time - 软删除场景
  - etag - checksum
- 常见请求字段
  - request_id - UUID
  - validate_only - Change validation
  - google.protobuf.FieldMask
    - 不应该在请求包含 - 可以在 metadata 包含 - 例如 头
    - 必须 optional
    - 支持 `*`
    - 现在推荐 view
  - 例如 enum BookView {BOOK_VIEW_UNSPECIFIED=0;BASIC = 1;FULL = 2;}
- 单实例资源只有 Get 和 Update
- https://google.aip.dev/
- https://github.com/googleapis/googleapis/blob/master/google/api/
- 参考
  - [einride/aip-go](https://github.com/einride/aip-go)
    - 包含了解析资源名字逻辑

> **Note**
>
> - 不要用 unsigned integer
> - 不要用 optional - 除非表示特定含义 - 例如 空 为 未投票、未评分
>   - optional 会返回 zero value - 即便没有 set

### entpb

- 一个资源一个服务
- 生成大量内容，但模式固定
- entpb https://github.com/ent/contrib
- [#2446](https://github.com/ent/ent/issues/2446)

```proto
syntax = "proto3";

service UserService {
  rpc Create ( CreateUserRequest ) returns ( User );
  rpc Get ( GetUserRequest ) returns ( User );
  rpc Update ( UpdateUserRequest ) returns ( User );
  rpc Delete ( DeleteUserRequest ) returns ( google.protobuf.Empty );
  rpc List ( ListUserRequest ) returns ( ListUserResponse );
  rpc BatchCreate ( BatchCreateUsersRequest ) returns ( BatchCreateUsersResponse );
}

message CreateUserRequest {
  User user = 1;
}

message GetUserRequest {
  int64 id = 1;
  View view = 2;

  enum View {
    VIEW_UNSPECIFIED = 0;
    BASIC = 1;
    WITH_EDGE_IDS = 2;
  }
}
message UpdateUserRequest {
  User user = 1;
}
message DeleteUserRequest {
  int64 id = 1;
}
message ListUserRequest {
  int32 page_size = 1;
  string page_token = 2;
  View view = 3;

  enum View {
    VIEW_UNSPECIFIED = 0;
    BASIC = 1;
    WITH_EDGE_IDS = 2;
  }
}
message ListUserResponse {
  repeated User user_list = 1;
  string next_page_token = 2;
}

message BatchCreateUsersRequest {
  repeated CreateUserRequest requests = 1;
}
message BatchCreateUsersResponse {
  repeated User users = 1;
}
```

- https://github.com/ent/contrib/blob/1faab982b6648b7704a6cf41ff65d9cb7811a2be/entproto/internal/todo/ent/proto/entpb/entpb.proto

## 翻页参数 {#pagination}

- 最终是需要 limit+offset
- 允许用户提供各种输入
  - cursor 不在这个范围内

```ts
export function normalizePagination(page: {
  pageSize?: number;
  pageIndex?: number;
  pageNumber?: number;
  limit?: number;
  offset?: number;
}) {
  let { pageSize = 20, pageNumber = 1, pageIndex = pageNumber - 1, limit, offset } = page;
  return {
    limit: limit || pageSize,
    offset: offset ?? pageIndex * pageSize,
  };
}
```

## 游标翻页 {#cursor}

- cursor+limit
- 基本信息
  - id/timestamp
  - direction - 方向
    - 默认 `>` - 往后取
- 可以考虑额外的信息
  - 例如排序字段

```ts
interface Cursor {
  id: string;
  direction: 'asc' | 'desc';
}
```

```
where id ${direction === 'asc' ? '>' : '<'} ${id}
```

## Naming

- PaginationResponse
- PaginatedResponse
- PaginationInfo

## Payload vs Input vs Data vs Object vs Output

- Payload - 载荷
  - GraphQL 里一般 mutation 返回都是 Payload
  - 不具有 Resource/Entity 属性
  - CreateUserPayload, UpdateUserPayload
- Input - 输入
  - 强调数据作为输入
  - GraphQL 里有 Input 概念区分于 Object 概念
  - 具有 Resource/Entity 属性
  - UserCreateInput, UserUpdateInput
- Data - 数据
  - 通用 - Data -> Key & Value
  - 类似 Dicionary, Record, DTO
  - UserCreationData, UserUpdateData
- Object - 对象
  - 通常内存表示
  - 可能支持方法 - Object -> Method & Fields
  - UserCreationObject, UserUpdateObject
- Output
  - 输出
  - 强调可序列化的数据
  - 用于 IO/API 交互场景
  - 区分内部的 Entity
  - 类似 Object
  - 例如: UserEntity, UserOutput, UserObject - 避免都叫 User
