# Quick start

部署文件的渲染模板，我们下文将定义一些变量，helm执行时会将变量渲染进模板文件中。


## values.yaml

这个文件中的键值对，即为我们上文中所引用的变量。

将所以有变量集中在一个文件中，方便部署的时候进行归档以及灵活替换。

同时，helm命令支持使用 `--set FOO_BAR=FOOBAR` 参数对values 文件中的变量进行赋值，可以进一步简化部署流程。


## 参数对照表

### 框架参数

框架参数为针对本模板使用的 `mocha + chai` 的框架的测试参数。程序运行或测试管理服务后端会使用到。使用时不要对参数进行删除。如有需要请谨慎修改

参数名 | 含义
--- | ---
framework|本应用使用的测试框架名称，测试管理模块显示结果使用，请谨慎修改
env.open.RESULTPATH|测试报告存储文件夹名称
env.open.RESULTNAME|测试报告文件名
env.open.SLOW|测试结果慢速阈值
env.open.TIMEOUT|测试结果超时阈值
env.open.RESULTGATEWAY|测试结果回传api地址


### 自定义参数

自定义参数为本模板中实例方法使用的可配置参数，请根据自己的需求进行逻辑、参数修改。
本模板的示例api测试为 `iam-service` 中的 `self` 方法。

参数名 | 含义
--- | ---
env.open.APIGATEWAY|准备进行测试的api地址
env.open.PROJECTID|准备进行测试的项目id
env.open.LOGINNAME|准备进行测试的用户名
env.open.PASSWORD|准备进行测试的用户密码