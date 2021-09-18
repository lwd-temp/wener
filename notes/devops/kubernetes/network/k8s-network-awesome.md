---
title: Networking Awesome
tags:
  - Awesome
---

# Kubernetes Networking Awesome

- kube-router
- metallb

## Ingress & Gateway

- [Ingress Controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/#additional-controllers) 实现

:::tip Ingress 实现情况

1. 针对实现 Ingress API
   - 通常不暴露额外的 CDR
   - 例如 ingress-nginx
2. 基于现有 Web 服务支持 Ingress
   - 通常支持自定义 CDR
   - 例如 traefik
3. 基于现有 平台 支持 Ingress
   - 通常支持 接口 操作规则
   - 服务有状态
   - 例如 kong, apisix

:::

:::tip Ingress 选择

- 最好选择简单实用熟悉的
  - 例如 已知怎么定义一些特殊规则
- 选择轻量，功能单一的
  - 例如 证书尽量配合 cert-manager 使用
- 需要支持复杂 API 网关场景最好利用多 IngressClass 或 通过服务 进行继承使用
  - 例如 使用 kong 或 apisix 统一管理 API - ingress 执行 网关服务
- 将 Ingress 看作是反向代理的替代
- 推荐
  - ingress-nginx

:::

| -                     | based on     | ingress | gateway | governance    |
| --------------------- | ------------ | ------- | ------- | ------------- |
| [ingress-nginx]       | nginx        | 🟢      | 🔴      |
| [haproxy-ingress]     | haproxy      | 🟢      | 🟢      |
| [haproxytech-ingress] | haproxy      | 🟢      | 🔴      | haproxytech   |
| istio                 | envoy        | 🟢      | 🟢      | CNCF/google   |
| [contour]             | envoy        | 🟢      | 🟢      | CNCF          |
| [traefik]             | traefik      | 🟢      | 🟢      |
| [gloo]                | envoy        | 🟢      | 🟡      |
| Emissary-Ingress      | envoy        | 🟢      | 🟢      |
| [kong]                | nginx/kong   | 🟢      | 🟡      | Kong          |
| [apisix]              | nginx/apisix | 🟢      | 🟡      | Apache        |
| [citrix]              | Citrix ADC   | 🟢      |
| [enroute]             | envoy        | 🟢      |         | CNCF/saarasio |
| [easegress]           | easegress    | 🟢      |         | megaease      |
| [voyager]             | haproxy      | 🟢      |         | AppsCode      |
| [tyk]                 | typ          | 🟢      |
| [skipper]             | skipper      | 🟢      |

[ingress-nginx]: https://github.com/kubernetes/ingress-nginx
[apisix]: https://github.com/apache/apisix-ingress-controller
[gloo]: https://github.com/solo-io/gloo
[haproxy-ingress]: https://github.com/jcmoraisjr/haproxy-ingress
[haproxytech-ingress]: https://github.com/haproxytech/kubernetes-ingress
[kong]: https://github.com/Kong/kubernetes-ingress-controller
[voyager]: https://github.com/voyagermesh/voyager
[contour]: https://github.com/projectcontour/contour
[citrix]: https://github.com/citrix/citrix-k8s-ingress-controller
[enroute]: https://github.com/saarasio/enroute
[easegress]: https://github.com/megaease/easegress
[tyk]: https://github.com/TykTechnologies/tyk-operator
[skipper]: https://github.com/zalando/skipper