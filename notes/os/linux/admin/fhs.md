---
tags:
  - Structure
---

# Filesystem Hierarchy Standard

- [fhs-3.0](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html)
- [Filesystem Hierarchy Standard](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)
- /usr - Unix System Resources
- /srv - Site-specific data
- /sbin - System binaries

| /           | for                                                                                     |
| ----------- | --------------------------------------------------------------------------------------- |
| /bin        | -> /usr/bin 存放基本命令的可执行文件                                                    |
| /boot       | 存放启动引导程序相关的文件，例如内核、引导加载器配置文件等                              |
| /dev        | 存放设备文件，表示系统中的各种设备                                                      |
| /etc        | 存放系统配置文件和子目录                                                                |
| /home       | 用户主目录，每个用户都有一个以用户名命名的子目录                                        |
| /lib        | 存放基本系统程序和内核模块所需的共享库文件                                              |
| /media      | 挂载点目录，用于挂载可移动媒体设备，如CD-ROM、USB设备等                                 |
| /mnt        | 挂载点目录，通常用于临时挂载文件系统                                                    |
| /opt        | 用于安装附加的应用软件包                                                                |
| /proc       | 虚拟文件系统，存放内核和进程信息                                                        |
| /root       | 超级用户（root）的主目录                                                                |
| /run        | 存放应用程序运行时产生的临时文件和进程信息                                              |
| /sbin       | 存放系统管理员使用的系统命令                                                            |
| /srv        | 存放系统提供的服务相关的数据                                                            |
| /sys        | 虚拟文件系统，存放设备和内核信息                                                        |
| /tmp        | 存放临时文件，系统重新启动后该目录下的文件可能会被删除                                  |
| /usr        | 存放用户程序和数据，包含许多子目录，如bin（用户命令）、lib（库文件）、local（本地软件） |
| /var        | 存放经常变化的数据文件，如日志文件、邮件队列、缓存等                                    |
| /lib32      |
| /lib64      |
| /libx32     |
| /lost+found | ext2/ext3/ext4 文件系统的恢复目录                                                       |

| /     | /usr       | /usr/local       |
| ----- | ---------- | ---------------- |
| /sbin | /usr/sbin  | /usr/local/sbin  |
| /bin  | /usr/bin   | /usr/local/bin   |
| /etc  |            | /usr/local/etc   |
| /lib  | /usr/lib   | /usr/local/lib   |
|       | /usr/share | /usr/local/share |

---

```bash
# skeleton
# /etc/default/useradd
useradd -m -k /etc/skel
```

## FHS

- /boot

---

- /dev - devfs
- /proc - procfs
- /sys - sysfs

---

- /bin
- /lib
- /lib64
- /sbin
- /etc
  - opt/

---

- /home
  - $USER
- /opt
- /usr
  - bin/
  - local/

---

- /media
- /mnt
- /run - tmpfs
- /srv
- /var
  - cache/
  - lib/
  - lock/
  - log/
  - mail/
  - opt/
  - run/ -> /run
  - spool/
    - mail/ -> /var/mail
  - tmp/

## Debian

| from               | to        |
| ------------------ | --------- |
| /dev/.\*           | /run/\*   |
| /dev/shm           | /run/shm  |
| /dev/shm/\*        | /run/\*   |
| /etc/\* - writable | /run/\*   |
| /lib/init/rw       | /run      |
| /var/lock          | /run/lock |
| /var/run           | /run      |
| /tmp               | /run/tmp  |

- https://wiki.debian.org/ReleaseGoals/RunDirectory
