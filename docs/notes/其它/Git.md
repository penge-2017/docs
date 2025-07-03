# Git 入门：给小白的版本控制指南

今天，我想和大家分享一个我自学路上觉得最牛、也最重要的工具之一 —— **Git**。

> [!NOTE] 别被“版本控制”、“分布式”这些高大上的词吓到。我会用最简单的方式，带你一步步上手。这篇笔记就是为你这样的初学者准备的！

## 1. Git 是什么？为什么要学它？

想象一下你正在写一篇很重要的论文或者一个项目代码：

- **第一天**：你写了第一版，保存为 `论文_v1.docx`。
- **第二天**：导师让你修改，你改完后怕覆盖掉旧版，于是另存为 `论文_v2_修改版.docx`。
- **第三天**：你自己又有了新想法，保存为 `论文_v3_最终版.docx`。
- **第四天**：导师说，还是第一版的感觉最好，你能在那个基础上再改改吗？
- **你**：🤯 在一堆文件中疯狂寻找……

是不是很崩溃？**Git 就是来解决这个问题的！**

你可以把 Git 想象成一个**拥有超级“后悔药”和“时光机”功能的游戏存档系统**。

- **你每次完成一个阶段性的工作**，就可以用 Git “打个存档”，这在 Git 里叫做 **commit (提交)**。
- **想回到过去的某个版本？** 没问题，Git 可以让你随时读取任何一个“存档”。
- **想开个小号，尝试一些新功能，又怕搞砸主线任务？** Git 的 **branch (分支)** 功能可以让你轻松创建“平行宇宙”，在里面随便折腾，成功了再合并回主线。

> [!IMPORTANT] 无论是个人项目还是团队协作，Git 都是现代软件开发的基石。掌握它，你的开发效率和项目管理能力会得到质的飞跃。它是程序员的必备技能！

## 2. 安装与初次配置

万事开头难，但 Git 的安装非常简单。

**第一步：下载安装**

直接访问 [Git 官网](https://git-scm.com/downloads) 下载对应你操作系统的版本（Windows, Mac, Linux 都有）。

安装过程基本就是无脑“下一步”即可。安装完成后，在你的终端（Windows 用户可以使用 `Git Bash`，它会随 Git 一起安装）里输入以下命令，如果能看到版本号，就说明安装成功了。

```sh
git --version
```

**运行结果：**

```text
git version 2.39.2.windows.1
```

**第二步：设置你的“签名”**

第一次使用 Git，需要先自报家门，告诉 Git 你是谁。这样你每次“存档”（commit）的时候，Git 就知道是谁干的了。

打开终端，输入下面两条命令，把名字和邮箱换成你自己的。

> [!TIP] 这里的邮箱建议使用你注册 GitHub 或 Gitee 的邮箱，方便以后关联。

```sh
# 设置你的用户名
git config --global user.name "Your Name"

# 设置你的邮箱
git config --global user.email "youremail@example.com"
```

这两条命令只需要在你的电脑上设置一次，之后所有的 Git 项目都会使用这个配置。
## 3. Git 核心概念：三大区域

这是 Git 最核心、也最需要理解的概念。别怕，我们用一个购物的例子来理解。

![Git 三大区域](assets/Pasted%20image%2020250703163335.png)

1. **工作区 (Working Directory)**：就是你在电脑上能看到的项目文件夹。比如你的代码文件、图片等，你直接在这里进行编辑。
    
    - **好比**：你在超市里，货架上琳琅满目的商品。
2. **暂存区 (Staging Area / Index)**：一个临时的存放区域。当你完成了一部分修改，觉得“嗯，这部分可以了”，你就会把它放到暂存区，准备下一步“打包存档”。
    
    - **好比**：你选好了要买的商品，把它们放进了**购物车**。
3. **本地仓库 (Repository)**：这是 Git 存放所有“存档”（版本历史）的地方。当你执行“存档”命令时，Git 会把暂存区里的所有东西打包成一个版本，永久地保存在这里。这个仓库其实就是你项目根目录下的一个隐藏文件夹 `.git`。
    
    - **好比**：你推着购物车去**收银台结账**，所有商品都记录在了你的账单上，交易完成。

**总结一下我们的操作流程就是：**

在 **工作区** 修改文件 -> 将修改好的文件放入 **暂存区** -> 将暂存区的文件提交到 **本地仓库**。

## 4. 本地仓库实战：从零开始

理论说完了，我们来动手实战！

### 4.1 创建你的第一个仓库

找个合适的地方，创建一个新的项目文件夹，比如 `my-first-git-project`。

```sh
# 创建一个新文件夹
mkdir my-first-git-project

# 进入这个文件夹
cd my-first-git-project
```

现在，我们要让 Git 来管理这个文件夹。执行 `git init` 命令。

```sh
git init
```

**运行结果：**

```text
Initialized empty Git repository in xxxxxxx/xxxx/my-first-git-project/.git/
```

看到这个提示，恭喜你！Git 已经在你的项目里创建了一个 `.git` 隐藏文件夹，你的本地仓库建好了！

### 4.2 工作流：修改 -> 添加 -> 提交

这是我们日常使用 Git 最频繁的循环。

**第一步：创建和修改文件（在工作区）**

我们在项目里创建一个 `readme.md` 文件，并写入一些内容。

```sh
# 在 Windows 的 cmd/powershell 或 Mac/Linux 的 bash 中
echo "Hello, Git!" > readme.md
```

现在，我们想知道 Git 眼里的项目状态是怎样的。用 `git status` 命令，这是你以后用得最多的命令！

```sh
git status
```

**运行结果：**

```text
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        readme.md

nothing added to commit but untracked files present (use "git add" to track)
```

> [!NOTE] Git 告诉你：有一个“未跟踪的文件” `readme.md`。意思是 Git 发现了这个新文件，但你还没让它“进购物车”（暂存区）。

**第二步：添加到暂存区（购物车）**

我们使用 `git add` 命令，把 `readme.md` 添加到暂存区。

```sh
git add readme.md
```

> [!TIP] 如果有很多文件要添加，可以直接用 `git add .` 来添加当前目录下所有的修改。

现在再用 `git status` 看一下状态。

```sh
git status
```

**运行结果：**

```text
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   readme.md
```

看，状态变了！Git 告诉我们 `readme.md` 已经是一个“新文件”，并且“准备被提交”了。它已经在购物车里了！

**第三步：提交到仓库（结账存档）**

万事俱备，只差提交。我们用 `git commit` 命令来创建我们的第一个存档。

`-m` 参数后面跟着的是本次提交的说明信息，**一定要写清楚**，方便以后回顾。

```sh
git commit -m "feat: Add project readme file"
```

**运行结果：**

```text
[master (root-commit) a1b2c3d] feat: Add project readme file
 1 file changed, 1 insertion(+)
 create mode 100644 readme.md
```

> [!NOTE] 这里的 `a1b2c3d` 是本次提交的唯一ID（哈希值），是本地仓库提交的身份证号，不过被缩短了。

太棒了！你已经完成了第一个版本的存档。现在再用 `git status` 看看。

```sh
git status
```

**运行结果：**

```text
On branch master
nothing to commit, working tree clean
```

Git 告诉我们“工作区是干净的”，说明你所有的修改都已经被妥善保管了。

### 4.3 查看历史记录

想看看我们都打过哪些“存档”？用 `git log`。

```sh
git log
```

**运行结果：**

```text
commit a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0 (HEAD -> master)
Author: Your Name <youremail@example.com>
Date:   Sun Apr 2 15:30:00 2023 +0800

    feat: Add project readme file
```

这里显示了提交的 ID、作者、时间和我们写的说明。

> [!TIP] 我更推荐用一个更漂亮的格式来查看日志： `git log --oneline --graph --all` 它会用更简洁的一行来显示，并且能展示分支的图形化结构，非常清晰！

## 5. 远程仓库：与世界同步

到目前为止，我们所有的操作都在自己的电脑上（本地仓库）。但编程的乐趣在于分享与协作！这就需要**远程仓库 (Remote Repository)** 了。

最著名的远程仓库托管平台就是 **GitHub**（俗称“全球最大同性交友网站”，是程序员的代码天堂）和国内的 **Gitee (码云)**。

### 5.1 克隆一个现有项目

如果你想参与一个开源项目，或者把别人的代码下载到本地学习，最简单的方式就是 `git clone`。

比如，我们可以克隆 Vue.js 的官方仓库。

```sh
# 找一个空文件夹
git clone https://github.com/vuejs/vue.git
```

执行后，Git 会把整个项目，包括它所有的历史记录，都完整地下载到你的电脑上。

### 5.2 关联你自己的远程仓库

现在，我们想把自己刚才创建的 `my-first-git-project` 项目推送到 GitHub 上。

**前提：** 你需要先在 GitHub 或 Gitee 上创建一个**空的**远程仓库，比如也叫 `my-first-git-project`。

创建好之后，你会得到一个仓库地址，比如 `https://github.com/YourUsername/my-first-git-project.git`。

**第一步：关联远程仓库**

在你的本地项目文件夹里，执行 `git remote add` 命令，告诉本地 Git，这个远程地址的“昵称”是 `origin`。

```sh
git remote add origin https://github.com/YourUsername/my-first-git-project.git
```

> [!NOTE] `origin` 是一个默认的、习惯性的叫法，你也可以叫它 `github` 或者别的名字，但 `origin` 是最常见的。

**第二步：推送你的本地提交**

使用 `git push` 命令，把本地的提交推送到远程仓库。

```sh
# -u 参数会在推送的同时，将本地的 master 分支和远程的 master 分支关联起来，以后推送就可以简化为 git push
git push -u origin master
```

**运行结果：**

```text
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 250 bytes | 250.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/YourUsername/my-first-git-project.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

现在去你的 GitHub 页面刷新一下，就能看到你的 `readme.md` 文件了！

### 5.3 日常同步

- **`git push`**：当你本地有了新的提交，用它来**推送**到远程。
- **`git pull`**：当别人（或者你在另一台电脑上）更新了远程仓库，用它来**拉取**最新的改动到你本地。

## 6. 分支：Git 的精髓

分支是 Git 的“杀手级”功能，它让并行开发变得轻而易举。

想象一下，你的项目主线是 `master` 分支，它上面的代码永远是稳定可用的。

- 现在，你想开发一个新功能，比如“用户登录”。
- 你肯定不希望在主线上直接写，万一写了一半有 bug，整个项目都挂了。

**正确的做法是：**

1. **创建**一个新的分支，比如叫 `feature-login`。
2. **切换**到这个新分支上。
3. 在这个分支上尽情地写代码、提交，完全**不会影响** `master` 主分支。
4. 当你完成了登录功能，并且测试通过后，再把 `feature-login` 分支**合并 (merge)** 回 `master` 分支。

### 6.1 分支常用命令

```sh
# 查看所有本地分支，当前分支会用 * 标记
git branch

# 创建一个名为 feature-login 的新分支
git branch feature-login

# 切换到 feature-login 分支
# 在新版 Git 中，更推荐使用 git switch feature-login
git checkout feature-login

# 创建并直接切换到新分支（上面两步的合并）
git checkout -b feature-another-feature

# 回到主分支
git checkout master

# 将 feature-login 分支的修改合并到当前分支 (master)
git merge feature-login

# 删除已经合并完成的分支
git branch -d feature-login
```

> [!WARNING] 合并时可能会出现**冲突 (Conflict)**。比如你在两个分支上都修改了同一个文件的同一行。别担心，这是正常现象。Git 会在文件里标记出冲突的地方，你需要手动解决冲突，然后再提交一次。解决冲突是进阶技能，我们以后再详细说。

## 7. 本地文件的“后悔药”

在编程的世界里，犯错是家常便饭。关键在于，犯错之后我们有没有能力去修正它。Git 的撤销功能，就是我们最强大的安全网。我们根据“后悔”的程度，分三种情况来讨论。

### 7.1：文件刚改完，还没 `add` 到暂存区

这是最简单的情况。你好比在超市里，刚把一件商品拿到手里，还没放进购物车。这时候后悔了，怎么办？当然是直接放回货架！

**当前状态：**

我们先修改一下 `readme.md` 文件，在末尾加一行 "Oops, a mistake."。然后用 `git status` 查看。

```sh
# 修改 readme.md 文件
echo "Oops, a mistake." >> readme.md

git status
```

**运行结果：**

```text
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Git 很贴心地提示我们：使用 `git restore <file>...` 就可以丢弃工作区的改动。

**后悔药：**`git restore`

我们执行命令，把 `readme.md` 文件恢复到修改前的状态。

```sh
git restore readme.md
```

现在再查看 `readme.md` 文件内容，你会发现 "Oops, a mistake." 那行已经消失了。`git status` 也会显示工作区是干净的。

### 7.2：文件已经 `add`，但还没 `commit`

这种情况稍微复杂一点。你好比已经把商品放进了购物车（暂存区），但还没结账（提交）。现在后悔了，怎么办？从购物车里拿出来就行。

**当前状态：** 我们再次修改 `readme.md`，并这次使用 `git add` 将它放入暂存区。

```sh
# 再次修改 readme.md
echo "This change is staged." >> readme.md

# 添加到暂存区
git add readme.md

git status
```

**运行结果：**

```text
On branch master
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        modified:   readme.md
```

Git 再次提示我们：使用 `git rm --cached <file>...` 可以“取消暂存”（unstage）。不过，现代 Git 更推荐使用 `git restore --staged`，语义更清晰。

**后悔药第一步：**`git restore --staged`

我们先把文件从暂存区“拿出来”，放回到工作区。

```sh
git restore --staged readme.md
```

现在再用 `git status` 查看：

```sh
git status
```

**运行结果：**

```text
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.md
```

看！我们成功地回到了**场景一**的状态！文件修改还在，但已经不在暂存区了。

**后悔药第二步：**

现在，你可以选择：

1. 重新修改文件，然后 `git add`。
2. 或者，像场景一那样，彻底丢弃这次修改：`git restore readme.md`。
### 7.3：代码已经 `commit`，但还没 `push`

这是最“严重”的一种情况。你好比已经结完账，拿到了收据（commit）。现在想反悔，就得走“售后”流程了。这时我们有两种选择：`git reset`（暴力修改历史）和 `git revert`（安全地追加一次“反操作”）。

> [!IMPORTANT] 这里的操作只适用于**还未推送到远程仓库**的提交。如果提交已经被 `push` 了，为了不影响团队其他人，请优先使用 `git revert`！

我们先创建一个“错误”的提交。

```sh
# 创建一个新文件并提交
echo "bad content" > bad-file.txt
git add bad-file.txt
git commit -m "oops, committed a bad file"
```

现在 `git log --oneline` 会看到这个错误的提交在最顶上。

#### 方法A：`git reset`（时光倒流，重写历史）

`git reset` 命令可以把你的分支指针（HEAD）指回到过去某个提交，就像让时光倒流一样。它有三种模式：

- `--soft`：最温柔。仅仅移动了 HEAD 指针，你的修改内容会保留在**暂存区**。
- `--mixed` (默认)：中等。移动 HEAD 指针，并把修改内容放回到**工作区**。
- `--hard`：最暴力。移动 HEAD 指针，并**彻底丢弃**所有相关的修改。

> [!CAUTION] `git reset --hard` 是一个危险的操作，它会永久删除你的工作区改动，连 `Ctrl+Z` 都救不回来。使用前请三思！

**后悔药：`git reset`**

我们想撤销刚才的提交，但还想保留 `bad-file.txt` 的修改以便后续更正。所以我们使用默认的 `--mixed` 模式。`HEAD^` 表示回到上一个提交，也可以查看提交 log 的 id 进行返回指定的状态下。

```sh
git reset HEAD^
```

**运行结果：**

```text
Unstaged changes after reset:
M       bad-file.txt
```

现在你再看 `git log --oneline`，会发现那个 "oops" 提交已经消失了。同时 `git status` 会告诉你 `bad-file.txt` 作为一个未被追踪的文件，又回到了你的工作区。历史被干净利落地改写了！

#### 方法B：`git revert`（创建一次“反向”提交）

如果你不喜欢粗暴地修改历史，或者这个提交已经比较重要（虽然还没推送），`git revert` 是一个更安全、更专业的选择。

它不会删除旧的提交，而是会**创建一个新的提交**，这个新提交的内容刚好和你要撤销的那个提交**完全相反**，从而抵消它的影响。

**后悔药：`git revert`**

假设我们还处于刚刚提交了 `bad-file.txt` 的状态。

```sh
# 撤销上一个提交（HEAD）
git revert HEAD
```

执行后，Git 会弹出一个编辑器让你填写新提交的 commit message，默认会写好类似 `Revert "oops, committed a bad file"`。保存并退出即可。

现在再看 `git log --oneline`，你会看到：

```text
e8b9f7a (HEAD -> master) Revert "oops, committed a bad file"
a1b2c3d oops, committed a bad file
... (更早的提交)
```

看到了吗？那个错误的提交还在，但我们又追加了一个“撤销”提交。这样做的好处是，你的每一次操作都有记录，历史是清晰且完整的，非常适合团队协作。

| 修改位置状态              | 你的目标                      | 使用的命令                         |
| ------------------- | ------------------------- | ----------------------------- |
| **工作区** (未 add)     | 彻底丢弃修改                    | `git restore <file>`          |
| **暂存区** (已 add)     | 从暂存区拿回工作区                 | `git restore --staged <file>` |
| **本地仓库** (已 commit) | **[不推荐]** 暴力抹除提交，修改放回工作区  | `git reset HEAD^`             |
| **本地仓库** (已 commit) | **[推荐]** 安全地创建一个“反向”提交来撤销 | `git revert HEAD`             |

掌握了这些撤销技巧，你就可以大胆地在 Git 的世界里进行各种尝试了，因为你知道，无论发生什么，你总有办法回到过去！
## 总结

恭喜你！你已经掌握了 Git 最核心、最常用的功能！我们来回顾一下：

| 命令                            | 作用            |
| ----------------------------- | ------------- |
| `git init`                    | 初始化一个本地仓库     |
| `git status`                  | 查看当前仓库的状态     |
| `git add <file>`              | 将文件修改添加到暂存区   |
| `git commit -m "msg"`         | 将暂存区内容提交到本地仓库 |
| `git log`                     | 查看提交历史        |
| `git clone <url>`             | 克隆一个远程仓库到本地   |
| `git remote add origin <url>` | 关联一个远程仓库      |
| `git remote -v`               | 查看添加的所有远程仓库   |
| `git push`                    | 推送本地提交到远程     |
| `git pull`                    | 从远程拉取最新代码     |
| `git branch`                  | 查看/创建分支       |
| `git checkout <branch>`       | 切换分支          |
| `git merge <branch>`          | 合并分支          |
| `git restore <file>`          | 工作区后悔         |
| `git restore --staged <file>` | 暂存区后悔         |
| `git revert HEAD`             | 本地仓库“反向”提交来撤销 |

> [!TIP] 学习 Git 最好的方法就是**多用**！为你自己的每一个小项目都创建一个 Git 仓库，哪怕只是一个学习笔记。熟能生巧！
