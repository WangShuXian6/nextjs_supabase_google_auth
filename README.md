# nextjs + supabase + google auth 项目


## supabase 和 google 密钥配置说明
https://github.com/WangShuXian6/blog/issues/230#issuecomment-2876332297

## 使用
新增 `.env`
```env
NEXT_PUBLIC_SUPABASE_URL=https://temxxxqwz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGcixxxxI6IkpXVCJ9.eyJpc3MiOiJzdXBhxxxxxWFvc2FtYWh5cHJjb3hwcXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NxxxxTU4MDI1Mn0.fPj79mhgjnD_vRTcbtm-2dUmwvXzcyMiXaFtumr0pKw
```
```bash
pnpm i
pnpm run dev
```

![示例](/page.png)


### 登陆回调失败
其中 daily 为特定spabase schema 名称。不同错误不一样。
`GET /auth/callback?error=server_error&error_description=ERROR%3A+permission+denied+for+schema+daily+%28SQLSTATE+42501%29 `


#### 错误原因：
没有公开自定义的schema

#### 解决方案
公开自定义架构 [#](https://supabase.com/docs/guides/api/using-custom-schemas#exposing-custom-schemas)

https://supabase.com/docs/guides/api/using-custom-schemas

![Image](https://github.com/user-attachments/assets/cf8abe1d-c809-4c16-aa78-409aba255e2a)
您可以公开自定义数据库架构 - 为此，您需要执行以下步骤：

转到 [API 设置 ](https://supabase.com/dashboard/project/_/settings/api)，并将您的自定义架构添加到“公开的架构”中。
运行以下 SQL，将 myschema 替换为您的架构名称：
```sql
GRANT USAGE ON SCHEMA myschema TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA myschema TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA myschema TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA myschema TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA myschema GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA myschema GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA myschema GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```