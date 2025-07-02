---
title: Python
lang: zh-CN
author: YourName
date: 2023-10-27
---

#  🚀 Hello, Python World!

Hey，未来的开发者，你好！🎉

欢迎来到我的 Python 学习笔记。我跟你一样，也是一个计算机技术的狂热爱好者，从 B 站上的“编程入门”视频，到 GitHub 上的开源项目，再到 CSDN 的技术博客，一路摸爬滚打，乐在其中。

这篇笔记，是我为你——一位即将踏入编程世界的新朋友——精心准备的。我会用最简单直接的方式，带你走进 Python 的奇妙世界。不用担心看不懂，这里没有复杂的底层原理，只有清晰的思路和好玩的例子。

准备好了吗？让我们一起开始这段激动人心的旅程吧！

## 1. 什么是 Python？🐍

简单来说，**Python 是一种编程语言**。

“编程语言”听起来很高大上，但你可以把它想象成一种我们与计算机沟通的“特殊语言”。我们用这种语言写下指令（代码），计算机就会像一个听话的机器人一样，按照我们的指令去执行任务，比如计算、处理文字、播放音乐等等。

> [!NOTE]
> Python 因为语法简单、清晰，非常接近我们日常说的英语，所以被公认为**最适合初学者入门**的编程语言之一。学起来没那么痛苦，能让你更快地获得成就感！

## 2. 准备你的“开发工坊” (环境搭建)

要开始写代码，我们首先需要一个“工坊”，也就是**开发环境**。就像画家需要画板和颜料一样。

对于新手，我有两种建议：

### 方案一：【最推荐】使用在线工具 (零安装)

刚开始学习，最怕的就是被复杂的安装过程劝退。所以，我强烈推荐你使用在线的 Python 编辑器。你只需要一个浏览器就能开始写代码，非常方便！

> [!TIP]
> 推荐一些好用的在线编程网站：
> *   [Replit](https://replit.com/languages/python3)
> *   [菜鸟教程在线工具](https://www.jyshare.com/compile/9/)
> *   [Programiz Online Python Compiler](https://www.programiz.com/python-programming/online-compiler/)
>
> 你可以随便选一个打开，就能看到一个可以写代码的界面了。

### 方案二：【进阶】在自己电脑上安装 Python

如果你想更专业一点，想在自己的电脑上安装 Python，那也很棒！

1.  访问 [Python 官网](https://www.python.org/downloads/)。

![](assets/Pasted%20image%2020250703012442.png)

2.  点击黄色的 "Download Python" 按钮下载最新版本。

> [!IMPORTANT]
> 在安装时，请务必勾选 **"Add Python to PATH"** 或 **"Add python.exe to PATH"** 这个选项！这非常非常重要，可以让你省去很多后续的麻烦。

## 3. 你的第一行代码: `print()`

万事俱备，只欠代码！现在，让我们写下编程界的“传统问候”—— "Hello, World!"。

在你的在线编辑器或本地环境中，输入下面这行代码：

```python
print("Hello, Python World!")
```
# 📝 变量 - 数据的“魔法盒子”

在上一节，我们用 `print()` 向世界问好。但编程的真正威力在于处理**数据**。要处理数据，我们首先得有个地方能**存放**它。这个“地方”，就是**变量**。

## 1. 什么是变量？

想象一下，你有很多个储物盒，每个盒子上都贴着一个标签，比如“玩具”、“零食”、“学习资料”。当你需要找东西时，只要看标签就能快速找到对应的盒子。

在 Python 中，**变量（Variable）** 就扮演着“贴了标签的储物盒”的角色。

*   **盒子**：是内存中的一块空间，用来存储数据。
*   **标签**：就是我们给这个盒子起的名字，也就是**变量名**。
*   **盒里的东西**：就是我们存进去的数据，也就是**值**。

创建一个变量的过程，我们称之为“赋值”。语法非常简单：

```python
变量名 = 值
```

来看个例子。我们想记录一个网站的名字，比如 "Bilibili"。

```python:line-numbers
# 1. 创建一个名为 name 的变量
# 2. 把 "Bilibili" 这个值放进去
name = "Bilibili"

# 3. 打印这个变量里存储的值
print(name)
```

**运行结果:**

```bash
Bilibili
```

看，`print()` 不仅能打印直接写进去的文本，还能打印出变量里存储的内容！这就是变量的强大之处：**一次存储，多次使用**。

## 2. Python 的基本数据类型

我们往“盒子”里放的东西可以是多种多样的，比如文字、数字、甚至是判断题的对错。在编程中，我们把这些不同种类的数据称为**数据类型 (Data Types)**。

对于初学者，我们先掌握最核心的四种：

### a. 字符串 (String)

字符串就是**文本**，比如我们之前用的 `"Hello, Python World!"`。在 Python 中，任何被单引号 `' '` 或双引号 `" "` 包裹起来的内容都是字符串。

python:line-numbers

```python:line-numbers
# 字符串可以使用双引号
my_favorite_website = "GitHub"
print(my_favorite_website)

# 也可以使用单引号
my_hobby = 'Coding'
print(my_hobby)
```

**运行结果:**

```bash
GitHub
Coding
```

> [!TIP] 单引号和双引号通常可以混用，但如果你的文本本身包含单引号，最好用双引号包裹，反之亦然。比如 `description = "It's a beautiful day."`。

### b. 整数 (Integer)

整数就是**不带小数点的数字**，比如年龄、数量、年份等。

```python:line-numbers
# 存储我的年龄
my_age = 18
print(my_age)

# 存储一年有多少天（大约）
days_in_a_year = 365
print(days_in_a_year)
```

**运行结果:**

```bash
18
365
```

### c. 浮点数 (Float)

浮点数就是**带小数点的数字**，比如身高、体重、价格等。

```python:line-numbers
# 存储我的身高（米）
my_height = 1.75
print(my_height)

# 存储圆周率 π
pi = 3.14159
print(pi)
```

**运行结果:**

```bash
1.75
3.14159
```

### d. 布尔值 (Boolean)

布尔值非常特殊，它**只有两个值**：`True` (真) 和 `False` (假)。它就像一个开关，只有“开”和“关”两种状态。通常用来表示判断的结果。

> [!IMPORTANT] 注意，`True` 和 `False` 的首字母必须大写！

```python:line-numbers
# 我是不是一个初学者？是的
is_beginner = True
print(is_beginner)

# 我是不是已经放弃了？没有
is_given_up = False
print(is_given_up)
```

**运行结果:**

```bash
True
False
```

## 3. 如何查看数据类型？ `type()` 函数

如果你不确定一个变量到底是什么类型，Python 提供了一个非常有用的函数 `type()`，它可以帮助我们查看。

```python:line-numbers{8,9,10,11}
name = "CSDN"
age = 23
pi = 3.14
is_learning = True

# 我们来检查一下这些变量的类型
print(type(name))
print(type(age))
print(type(pi))
print(type(is_learning))
```

**运行结果:**

```bash
<class 'str'>   # str 代表 string (字符串)
<class 'int'>   # int 代表 integer (整数)
<class 'float'> # float 代表 float (浮点数)
<class 'bool'>  # bool 代表 boolean (布尔值)
```

`type()` 是一个很棒的调试工具，在你以后写更复杂的代码时会经常用到它。

## 4. 变量命名有什么规则？

给变量起名字不是随意的，需要遵守一些基本规则，就像我们给孩子起名不能用奇怪的符号一样。

- **必须以字母或下划线 `_` 开头**。
- **不能以数字开头**。
- 名字里只能包含**字母、数字和下划线**。
- **大小写敏感**。`age` 和 `Age` 是两个完全不同的变量。

::: details 点击查看 ✅ 正确 和 ❌ 错误 的命名示例

✅ **一些好的命名习惯 (推荐):**

```python
user_name = "Alice"  # 使用下划线分隔单词 (蛇形命名法)
age = 20
favorite_food = "Pizza"
```

❌ **一些错误的命名:**

```python
# 2_users = "Bob"      # 错误：不能以数字开头
# user-name = "Charlie"  # 错误：不能包含连字符 -
# user name = "David"    # 错误：不能包含空格
# print = "Hello"        # 严重错误：不能使用 Python 的关键字 (内置功能名) 作为变量名
```

:::

# 🔧 运算符 - 让数据“动”起来

我们已经在变量这个“魔法盒子”里装进了各种数据（数字、文字等）。但如果数据只是静静地待着，那就太无聊了！编程的乐趣在于**操作**这些数据，让它们产生新的价值。而执行操作的工具，就是**运算符**。

## 1. 算术运算符：你的随身计算器

算术运算符主要用来对数字（整数 `int` 和浮点数 `float`）进行数学计算。这部分非常简单，和你用计算器没什么两样。

来看一个综合的例子：

```python:line-numbers
a = 10
b = 3

print(f"a + b = {a + b}")    # 加法
print(f"a - b = {a - b}")    # 减法
print(f"a * b = {a * b}")    # 乘法
print(f"a / b = {a / b}")    # 除法，结果总是浮点数
print(f"a // b = {a // b}")   # 整除，结果只保留整数部分
print(f"a % b = {a % b}")    # 取余，得到除法的余数
print(f"a ** b = {a ** b}")  # 幂运算，a 的 b 次方
```

**运行结果:**

```bash
a + b = 13
a - b = 7
a * b = 30
a / b = 3.3333333333333335
a // b = 3
a % b = 1
a ** b = 1000
```

> [!TIP] **`%` (取余)** 这个运算符非常有用！比如，可以用它来判断一个数是奇数还是偶数。如果 `number % 2` 的结果是 `0`，那么 `number` 就是偶数；如果是 `1`，就是奇数。

## 2. 字符串的“运算符”：拼接与重复

对于字符串 `str`，我们不能做加减乘除，但它有两个特殊的运算符：`+` 和 `*`。

- `+`：用于**拼接 (Concatenation)**，就是把两个字符串连在一起。
- `*`：用于**重复 (Repetition)**，就是把一个字符串重复多次。

```python:line-numbers
first_name = "Guido"
last_name = "van Rossum"

# 使用 + 拼接字符串
full_name = first_name + " " + last_name
print(full_name)

# 使用 * 重复字符串
separator = "-" * 20  # 把 "-" 重复 20 次
print(separator)
```

**运行结果:**

```bash
Guido van Rossum
--------------------
```

## 3. 比较运算符：进行是非判断

比较运算符用于比较两个值，然后返回一个布尔值：`True` (真) 或 `False` (假)。这在后面的条件判断中至关重要。

|运算符|含义|示例|结果|
|---|---|---|---|
|`==`|等于|`5 == 5`|`True`|
|`!=`|不等于|`5 != 3`|`True`|
|`>`|大于|`5 > 3`|`True`|
|`<`|小于|`5 < 3`|`False`|
|`>=`|大于等于|`5 >= 5`|`True`|
|`<=`|小于等于|`5 <= 3`|`False`|

> [!WARNING] **判断相等用的是 `==` (两个等号)，而不是 `=` (一个等号)！** 这是新手最最最容易犯的错误！`=` 是赋值，是把右边的值放进左边的变量里。`==` 是比较，是判断两边的值是否相等。


```python:line-numbers
my_age = 20
your_age = 18

print(f"我们的年龄相等吗? {my_age == your_age}")
print(f"我的年龄比你大吗? {my_age > your_age}")
print(f"Python 是最好的语言吗? {'Python' == 'Python'}")
```

**运行结果:**

```bash
我们的年龄相等吗? False
我的年龄比你大吗? True
Python 是最好的语言吗? True
```

## 4. 终极神器：`f-string` 格式化

我们之前在拼接字符串和数字时，可能会这样做： `"我的年龄是：" + str(my_age)` 这里需要用 `str()` 把数字转换成字符串才能拼接，非常麻烦。

现在，我向你介绍 Python 中处理字符串的终极神器：**f-string** (格式化字符串字面值)。

它的用法超级简单：在字符串的引号前加上一个 `f`，然后就可以用大括号 `{}` 直接在字符串里嵌入变量了。

```python:line-numbers{5}
name = "Bilibili"
year = 2009
user_count = 100000000

# 传统方式，又长又麻烦
print("网站: " + name + ", 成立于 " + str(year) + " 年。")

# 使用 f-string，清晰又优雅！
print(f"网站: {name}, 成立于 {year} 年, 用户数超过 {user_count / 10000} 万！")
```

看到没？在第5行，我们不仅可以直接放入变量 `name` 和 `year`，甚至可以在 `{}` 内部直接进行数学运算 `user_count / 10000`！这就是 `f-string` 的强大之处。

**运行结果:**

```bash
网站: Bilibili, 成立于 2009 年。
网站: Bilibili, 成立于 2009 年, 用户数超过 10000.0 万！
```

# 🧠 条件控制 - 让代码学会思考

到目前为止，我们写的代码都是“一条路走到黑”的，从第一行顺序执行到最后一行。但真实世界充满了选择：
*   **如果**今天下雨，**就**带伞。
*   **如果**饿了，**就**去吃饭，**否则**就继续学习。
*   **如果**考试成绩大于90分，评为“优秀”；**如果**大于75分，评为“良好”；**否则**评为“及格”。

这种“如果...就...否则...”的逻辑，在 Python 中通过**条件控制语句** `if` 来实现。这是我们赋予程序“智能”的第一步。

## 1. 最基本的 `if` 语句

`if` 语句的结构非常简单，就像说英语一样：`if` (如果) 某个条件是 `True`，`:` (那么就) 做下面的事。

**语法结构:**
```python
if 条件:
    # 条件为 True 时，执行这里的代码块
    # 注意这里有缩进！
```

> [!IMPORTANT] **缩进 (Indentation)** 在 Python 中，**缩进**（通常是4个空格）极其重要！它不是为了好看，而是语法的一部分。Python 通过缩进来判断哪些代码是属于 `if` 下面的代码块。不正确的缩进会导致程序报错。

我们来看一个例子：检查一个人的年龄是否可以看某部电影。

```python:line-numbers
age = 20

# 如果年龄大于等于 18...
if age >= 18:
    # ...就打印下面的信息
    print("你已成年，可以观看此电影。") # 这行代码因为缩进，所以属于 if

print("检查完毕。") # 这行代码没有缩进，不属于 if，无论如何都会执行
```

**运行结果:**

```bash
你已成年，可以观看此电影。
检查完毕。
```

现在，我们把 `age` 改成 `16` 试试看：

```python:line-numbers{4}
age = 16

# 如果年龄大于等于 18... (16 >= 18 的结果是 False)
if age >= 18:
    # 条件不满足，这里的代码将被跳过！
    print("你已成年，可以观看此电影。")

print("检查完毕。")
```

**运行结果:**

```bash
检查完毕。
```

看到没？因为 `age >= 18` 这个条件不成立（结果为 `False`），`if` 下方的缩进代码块被完全跳过了。

## 2. `if-else`：两种选择

`if` 只能处理“如果满足条件就做事”的情况。但我们经常需要“如果不满足，就做另一件事”。这时，`else` (否则) 就派上用场了。

**语法结构:**

```python
if 条件:
    # 条件为 True 时执行
else:
    # 条件为 False 时执行
```

我们来做一个经典的“判断奇偶数”的例子。我们知道，能被 2 整除的数是偶数，余数是 0。

```python:line-numbers
number = 7

# 判断 number 除以 2 的余数是否为 0
if number % 2 == 0:
    # 如果条件为 True，执行这行
    print(f"{number} 是一个偶数。")
else:
    # 如果条件为 False，执行这行
    print(f"{number} 是一个奇数。")
```

因为 `number` 是 `7`，`7 % 2 == 0` 的结果是 `False`，所以程序会跳过 `if` 的代码块，执行 `else` 的代码块。

**运行结果:**

```bash
7 是一个奇数。
```

如果我们把 `number` 改成 `10`，`10 % 2 == 0` 结果为 `True`，你猜会发生什么？

```python:line-numbers{4}
number = 10

if number % 2 == 0:
    # 条件为 True，执行这里！
    print(f"{number} 是一个偶数。")
else:
    # else 部分被跳过
    print(f"{number} 是一个奇数。")
```

**运行结果:**

```bash
10 是一个偶数。
```

VitePress 的行高亮功能是不是很酷？它能清楚地显示出代码的执行路径！

## 3. `if-elif-else`：多种选择

`elif` 是 `else if` 的缩写，它解决了有多个条件需要判断的场景。

**语法结构:**

```python
if 条件1:
    # 执行代码1
elif 条件2:
    # 执行代码2
elif 条件3:
    # 执行代码3
...
else:
    # 所有条件都不满足时执行
```

程序会从上到下依次检查，一旦找到一个 `True` 的条件，就会执行对应的代码块，然后**整个 `if` 语句就结束了**，后面的 `elif` 和 `else` 都会被忽略。

我们用一个成绩评级的例子来看看：

```python:line-numbers{6,7}
score = 85

if score >= 90:
    print("你的成绩是：优秀 (A)")
elif score >= 75:
    # 85 >= 75 是 True，执行这里，然后结束
    print("你的成绩是：良好 (B)")
elif score >= 60:
    print("你的成绩是：及格 (C)")
else:
    print("你需要补考！(D)")
```

在这个例子中，`score` 是 `85`。

1. `score >= 90` ( `85 >= 90` ) 是 `False`，跳过。
2. 检查 `elif score >= 75` ( `85 >= 75` )，这是 `True`！执行对应的 `print` 语句。
3. 整个 `if` 结构结束。后面的 `elif` 和 `else` 不再检查。

**运行结果:**

```bash
你的成绩是：良好 (B)
```

# 🔁 循环 - 让重复工作自动化

想象一下，你的老板让你在屏幕上打印 100 遍 "我爱工作"。你会怎么做？

```python
print("我爱工作")
print("我爱工作")
print("我爱工作")
# ... (省略 97 行) ...
```

天啊，这也太蠢了！作为一名聪明的程序员，我们绝不能干这种体力活。这时候，**循环 (Loops)** 就闪亮登场了。循环结构可以让一段代码重复执行多次，将我们从枯燥的重复中解放出来。

Python 中主要有两种循环：`for` 循环和 `while` 循环。

## 1. `for` 循环：按次数重复

`for` 循环通常用在**已知重复次数**或者需要**遍历一个集合**的场景。它的口头禅是：“对于这个集合里的每一个元素，都做一遍下面的事。”

最常见的搭档是 `range()` 函数，它可以生成一个整数序列。

> [!TIP] `range()` 函数用法：
> 
> - `range(5)`: 生成从 0 到 4 的序列 `[0, 1, 2, 3, 4]`。
> - `range(1, 6)`: 生成从 1 到 5 的序列 `[1, 2, 3, 4, 5]`。
> - `range(1, 10, 2)`: 生成从 1 开始，步长为 2 的序列 `[1, 3, 5, 7, 9]`。

现在，我们用 `for` 循环来解决开头那个打印 5 遍 "我爱工作" 的问题（100遍太长了，我们先来个简单的）：


```python:line-numbers
# for 循环将依次取出 range(5) 中的每一个数字 (0, 1, 2, 3, 4)
# 每取出一个数字，就执行一次缩进的代码块
for i in range(5):
    # 变量 i 在这里代表当前是第几次循环
    print(f"第 {i + 1} 遍: 我爱工作")

print("任务完成！")
```

**运行结果:**

```bash
第 1 遍: 我爱工作
第 2 遍: 我爱工作
第 3 遍: 我爱工作
第 4 遍: 我爱工作
第 5 遍: 我爱工作
任务完成！
```

看，只用了 3 行代码，就完成了 5 次重复操作，是不是非常高效？

## 2. `while` 循环：按条件重复

`while` 循环则用于**不知道具体要循环多少次，但知道循环要在什么条件下停止**的场景。它的口头禅是：“只要这个条件还是 `True`，就一直做下面的事，直到条件变成 `False` 为止。”

**语法结构:**

```python
while 条件:
    # 只要条件为 True，就一直执行这里的代码
    # !! 务必在循环体内修改与条件相关的变量，否则会造成死循环 !!
```

> [!WARNING] **死循环警告！** 使用 `while` 循环时，必须确保循环内部有代码能让循环条件最终变为 `False`，否则程序会无限执行下去，直到你强制停止它。

我们用 `while` 循环来实现和上面 `for` 循环一样的效果：

```python:line-numbers
# 1. 初始化一个计数器变量
count = 0

# 2. 只要 count 小于 5，就继续循环
while count < 5:
    print(f"第 {count + 1} 遍: 我爱工作")
    # 3. 关键！每次循环后，都让 count 加 1
    # 如果没有这行，count 永远是 0，循环就停不下来了
    count = count + 1

print("任务完成！")
```

**运行结果:**

```bash
第 1 遍: 我爱工作
第 2 遍: 我爱工作
第 3 遍: 我爱工作
第 4 遍: 我爱工作
第 5 遍: 我爱工作
任务完成！
```

## 3. `for` vs `while`：代码组对比

`for` 和 `while` 很多时候可以互相替代。这里我们用 VitePress 的**代码组**功能来直观对比一下，看看用它们分别打印 1 到 3 该怎么写。

::: code-group

```python [for]
# for 循环更简洁，因为它天生就是用来计数的
print("使用 for 循环:")
for i in range(1, 4): # range(1, 4) -> [1, 2, 3]
    print(i)
```


```python [while]
# while 循环需要手动设置和更新计数器
print("使用 while 循环:")
i = 1 # 1. 初始化
while i <= 3: # 2. 设置条件
    print(i)
    i = i + 1 # 3. 更新计数器
```

:::

**运行结果 (两种方式一样):**

```bash
使用 for 循环:
1
2
3
```

通过对比可以发现，在**固定次数**的循环中，`for` 循环的代码显然更简洁、更不容易出错。

## 4. 循环控制：`break` 和 `continue`

有时候我们不希望循环“从一而终”，而是想在中间“跳车”或者“跳过”某一次。这时就需要 `break` 和 `continue`。

### `break`：终止循环

`break` 用于**完全终止**并跳出整个循环。一旦执行 `break`，循环就立刻结束了。

**场景**：假设我们要在一个数字列表里找数字 `7`，找到了就没必要继续找了。

```python:line-numbers{5,6}
# 模拟一个数字列表
numbers = [1, 4, 9, 7, 12, 15]

for num in numbers:
    print(f"正在检查: {num}")
    if num == 7:
        print("找到了数字 7！停止搜索。")
        break # 立刻跳出 for 循环

print("循环结束。")
```

**运行结果:**

```bash
正在检查: 1
正在检查: 4
正在检查: 9
正在检查: 7
找到了数字 7！停止搜索。
循环结束。
```

可以看到，当找到 `7` 之后，`break` 被触发，循环立即停止，后面的 `12` 和 `15` 根本没有被检查。

### `continue`：跳过本次

`continue` 用于**跳过当前这一次**循环中余下的代码，直接进入下一次循环。

**场景**：我们想打印 1 到 5 之间所有的奇数。

```python:line-numbers{4,5}
for i in range(1, 6):
    # 如果 i 是偶数 (i % 2 == 0)
    if i % 2 == 0:
        # 跳过本次循环中剩下的 print(i)
        continue
    print(i)
```

**运行结果:**

```bash
1
3
5
```

当 `i` 是 `2` 和 `4` 时，`if` 条件成立，`continue` 被执行，直接跳到了下一次循环，所以 `print(i)` 就没有机会被执行。

# 🗃️ 列表 - 数据的“收纳盒”

之前，我们存储数据都是用一个变量存一个值，比如 `name = "Alice"`。但如果我想记录我最喜欢的几个 UP 主，难道要这样写吗？

```python
up_host_1 = "老师好我叫何同学"
up_host_2 = "影视飓风"
up_host_3 = "罗翔说刑法"
# ...
```

这太麻烦了！如果我有十几个喜欢的 UP 主呢？为了解决这个问题，Python 提供了一种强大的数据结构，叫做 **列表 (List)**。你可以把它想象成一个收纳盒，可以把一堆东西（数据）按顺序放进去。

## 1. 创建一个列表

创建一个列表非常简单，只需要把所有元素用逗号 `,` 分隔，然后用方括号 `[]` 包起来。

```python:line-numbers
# 创建一个包含字符串的列表
favorite_ups = ["老师好我叫何同学", "影视飓风", "罗翔说刑法", "稚晖君"]

# 创建一个包含数字的列表
lucky_numbers = [3, 7, 13, 21, 666]

# 列表里也可以放不同类型的数据
mixed_list = ["Hello", 1024, 3.14, True]

# 打印列表
print(favorite_ups)
print(lucky_numbers)
print(mixed_list)
```

**运行结果:**

```bash
['老师好我叫何同学', '影视飓风', '罗翔说刑法', '稚晖君']
[3, 7, 13, 21, 666]
['Hello', 1024, 3.14, True]
```

## 2. 访问列表中的元素 (索引)

列表里的元素都是有顺序的，就像排队一样。我们可以通过它们的位置（**索引 Index**）来精确地找到任何一个元素。

> [!IMPORTANT] **索引从 0 开始！** 在 Python 和大多数编程语言中，第一个元素的索引是 `0`，第二个是 `1`，以此类推。这是新手必须牢记的一点！


```python:line-numbers
favorite_ups = ["老师好我叫何同学", "影视飓风", "罗翔说刑法", "稚晖君"]
#                ^ 索引 0           ^ 索引 1       ^ 索引 2       ^ 索引 3

# 获取第一个元素 (索引为 0)
first_up = favorite_ups[0]
print(f"我最喜欢的第一个UP主是: {first_up}")

# 获取第三个元素 (索引为 2)
third_up = favorite_ups[2]
print(f"排在第三位的是: {third_up}")
```

**运行结果:**


```bash
我最喜欢的第一个UP主是: 老师好我叫何同学
排在第三位的是: 罗翔说刑法
```

Python 还支持一个超酷的**负数索引**，`-1` 代表最后一个元素，`-2` 代表倒数第二个，以此类推。


```python:line-numbers{2,5}
# 获取最后一个元素
last_up = favorite_ups[-1]
print(f"排在最后一位的是: {last_up}")

# 获取倒数第二个元素
second_to_last_up = favorite_ups[-2]
print(f"倒数第二位的是: {second_to_last_up}")
```

**运行结果:**


```bash
排在最后一位的是: 稚晖君
倒数第二位的是: 罗翔说刑法
```

## 3. 修改、添加和删除元素

列表是**可变 (Mutable)** 的，这意味着我们可以随时修改它。

### 修改元素

直接通过索引赋值即可。


```python:line-numbers{4}
tools = ["VSCode", "GitHub", "Typora"]
print(f"修改前的工具列表: {tools}")

# 我现在更喜欢用 Obsidian 做笔记，把 Typora 换掉
tools[2] = "Obsidian"

print(f"修改后的工具列表: {tools}")
```

**运行结果:**


```bash
修改前的工具列表: ['VSCode', 'GitHub', 'Typora']
修改后的工具列表: ['VSCode', 'GitHub', 'Obsidian']
```

### 添加元素

使用 `.append()` 方法，可以在列表**末尾**添加一个新元素。


```python:line-numbers{4}
tools = ["VSCode", "GitHub", "Obsidian"]
print(f"添加前的工具列表: {tools}")

# 我最近开始用 Docker 了，把它加进来
tools.append("Docker")

print(f"添加后的工具列表: {tools}")
```

**运行结果:**


```bash
添加前的工具列表: ['VSCode', 'GitHub', 'Obsidian']
添加后的工具列表: ['VSCode', 'GitHub', 'Obsidian', 'Docker']
```

### 删除元素

- 使用 `.pop()` 方法，可以删除指定索引的元素（如果不写索引，默认删除最后一个）。
- 使用 `.remove()` 方法，可以直接删除指定的**值**（如果该值有多个，只删除第一个）。


```python:line-numbers
languages = ["Python", "JavaScript", "Go", "Java", "Go"]
print(f"原始列表: {languages}")

# 删除索引为 3 的元素 ("Java")
removed_lang = languages.pop(3)
print(f"删除了 '{removed_lang}' 后的列表: {languages}")

# 删除值为 "Go" 的第一个元素
languages.remove("Go")
print(f"删除了 'Go' 后的列表: {languages}")
```

**运行结果:**


```bash
原始列表: ['Python', 'JavaScript', 'Go', 'Java', 'Go']
删除了 'Java' 后的列表: ['Python', 'JavaScript', 'Go', 'Go']
删除了 'Go' 后的列表: ['Python', 'JavaScript', 'Go']
```

## 4. 遍历列表 (配合 for 循环)

`for` 循环和列表是天生一对！我们可以非常方便地取出列表中的每一个元素并进行处理。


```python:line-numbers
# 我们的 UP 主列表
favorite_ups = ["老师好我叫何同学", "影视飓风", "罗翔说刑法", "稚晖君"]

print("我关注的宝藏UP主们：")
# for 循环会依次将列表中的每个元素赋值给 up_name 变量
for up_name in favorite_ups:
    print(f"- {up_name}")
```

**运行结果:**


```bash
我关注的宝藏UP主们：
- 老师好我叫何同学
- 影视飓风
- 罗翔说刑法
- 稚晖君
```

# 📚 字典 - 更智能的“标签盒”

我们已经学会了用列表 `[]` 来存储一排数据，比如 `["Bilibili", "YouTube", "GitHub"]`。但如果我想存储一个更复杂的信息，比如一个用户的个人资料，该怎么办？

姓名: Linus Torvalds 职业: 程序员 贡献: Linux, Git

用列表来存 `["Linus Torvalds", "程序员", ["Linux", "Git"]]` 似乎也行，但你必须记住索引 `0` 是姓名，`1` 是职业... 太不直观了！

为了解决这个问题，Python 提供了**字典 (Dictionary)**。它不通过位置索引，而是通过唯一的 **键 (key)** 来存取 **值 (value)**，形成一个 **键值对 (key-value pair)**。

## 1. 什么是字典？

你可以把字典想象成一本真正的英文字典：
*   **键 (key)**：就是你要查的单词，比如 "Python"。键必须是**唯一**的。
*   **值 (value)**：就是单词对应的释义，比如 "一种蟒蛇；一种编程语言"。

字典用花括号 `{}` 来创建，每个键值对的格式是 `key: value`，键值对之间用逗号 `,` 分隔。

```python:line-numbers
# 创建一个描述 Bilibili 网站的字典
bilibili_info = {
    "name": "哔哩哔哩",
    "slogan": "你感兴趣的视频都在B站",
    "founder": "徐逸",
    "founding_year": 2009
}

print(bilibili_info)
````

**运行结果:**

```bash
{'name': '哔哩哔哩', 'slogan': '你感兴趣的视频都在B站', 'founder': '徐逸', 'founding_year': 2009}
```

## 2. 访问字典中的值

访问字典中的值，不是用数字索引，而是用方括号 `[]` 加上对应的**键**。

```python:line-numbers
bilibili_info = {
    "name": "哔哩哔哩",
    "slogan": "你感兴趣的视频都在B站",
    "founder": "徐逸",
    "founding_year": 2009
}

# 通过键 'slogan' 来获取对应的值
print(f"B站的口号是: {bilibili_info['slogan']}")
```

**运行结果:**

```bash
B站的口号是: 你感兴趣的视频都在B站
```

### 安全地访问：`.get()` 方法

如果你试图访问一个不存在的键，程序会报错 (`KeyError`)。

```python
# 这行代码会报错，因为没有 'ceo' 这个键
# print(bilibili_info['ceo']) 
```

为了避免程序崩溃，我们可以使用 `.get()` 方法。如果键存在，它会返回对应的值；如果不存在，它会返回 `None`（或者你指定的默认值），而不是报错。

```python:line-numbers{2,5}
# 使用 .get() 访问一个不存在的键
ceo = bilibili_info.get('ceo')
print(f"CEO 是谁? {ceo}")

# .get() 还可以提供一个默认值
ceo = bilibili_info.get('ceo', '目前未知')
print(f"CEO 是谁? {ceo}")
```

**运行结果:**

```bash
CEO 是谁? None
CEO 是谁? 目前未知
```

`.get()` 方法是处理可能缺失数据的专业做法，非常推荐使用。

## 3. 修改、添加和删除键值对

### 添加和修改

字典的添加和修改语法是一样的。如果键存在，就是修改；如果键不存在，就是添加。

```python:line-numbers{7,11}
user_profile = {
    "username": "tech_lover",
    "level": 5
}
print(f"原始资料: {user_profile}")

# 添加一个新的键值对
user_profile['email'] = 'lover@example.com'
print(f"添加邮箱后: {user_profile}")

# 修改一个已有的值
user_profile['level'] = 6
print(f"等级提升后: {user_profile}")
```

**运行结果:**

```bash
原始资料: {'username': 'tech_lover', 'level': 5}
添加邮箱后: {'username': 'tech_lover', 'level': 5, 'email': 'lover@example.com'}
等级提升后: {'username': 'tech_lover', 'level': 6, 'email': 'lover@example.com'}
```

### 删除

使用 `del` 关键字可以删除一个指定的键值对。

```python:line-numbers{4}
user_profile = {'username': 'tech_lover', 'level': 6, 'email': 'lover@example.com'}
print(f"删除前: {user_profile}")

# 删除 email 这个键值对
del user_profile['email']

print(f"删除后: {user_profile}")
```

**运行结果:**

```bash
删除前: {'username': 'tech_lover', 'level': 6, 'email': 'lover@example.com'}
删除后: {'username': 'tech_lover', 'level': 6}
```

## 4. 遍历字典

遍历字典是常见的操作。有三种主要方式，我们用 VitePress 的代码组来对比一下：

::: code-group

```python [直接循环]
# 直接在 for 循环中使用字典，会遍历所有的键
user = {"name": "Alice", "id": 101}
for key in user:
    print(f"键: {key}, 值: {user[key]}")
```

```python [values方法]
# 使用 .values() 方法来只遍历所有的值
user = {"name": "Alice", "id": 101}
for value in user.values():
    print(f"值: {value}")
```

```python [items方法]
# 使用 .items() 方法，可以同时获取键和值，这是最高效、最清晰的方式！
user = {"name": "Alice", "id": 101}
for key, value in user.items():
    print(f"键: {key}, 值: {value}")
```

:::

**运行结果 (遍历键和值的方式):**

```bash
键: name, 值: Alice
键: id, 值: 101
```

# 🪄 函数 - 代码的“复用魔法”

到目前为止，我们写的代码都是从上到下执行的。如果我想在程序的开头、中间和结尾都向用户问好，我可能需要写三遍同样的代码：

```python
print("====================")
print("你好, 欢迎来到Python的世界!")
print("====================")

# ... 中间省略 100 行代码 ...

print("====================")
print("你好, 欢迎来到Python的世界!")
print("====================")

# ... 又省略 100 行代码 ...

print("====================")
print("你好, 欢迎来到Python的世界!")
print("====================")
```

这种做法违背了编程中一个非常重要的原则：**DRY (Don't Repeat Yourself)**，即“不要重复你自己”。代码重复会带来维护的噩梦：一旦你想修改问候语，就得修改所有地方。

为了解决这个问题，我们可以使用**函数 (Function)**。

## 1. 什么是函数？

函数，就是一段被赋予了**名字**的、可被**重复使用**的代码块，用于执行某个特定的任务。

你可以把它想象成一个“食谱”：

- **函数名**：就是食谱的名字，比如 `“制作番茄炒蛋”`。
- **函数体**：就是食谱里的具体步骤（代码）。
- **调用函数**：就是你每次想吃番茄炒蛋时，拿出这个食谱照着做一遍。

## 2. 定义和调用一个简单的函数

在 Python 中，我们使用 `def` 关键字来定义一个函数。

**语法结构:**

```python
def 函数名():
    # 函数体 (缩进的代码块)
    # 这里是函数要执行的操作
```

我们来把上面的问候语打包成一个函数：

```python:line-numbers
# 1. 定义一个名为 welcome 的函数
def welcome():
    print("====================")
    print("你好, 欢迎来到Python的世界!")
    print("====================")

# 2. 调用 (执行) 这个函数
print("程序开始...")
welcome()

print("\n处理一些业务...\n")

# 3. 再次调用这个函数
welcome()
print("程序结束.")
```

**运行结果:**

```bash
程序开始...
====================
你好, 欢迎来到Python的世界!
====================

处理一些业务...

====================
你好, 欢迎来到Python的世界!
====================
程序结束.
```

看！现在我们只需要定义一次 `welcome()` 函数，之后就可以在任何地方通过 `welcome()` 来调用它。如果想修改问候语，只需要修改函数定义里的代码就行了，非常方便！

## 3. 给函数传递信息 (参数)

上面的函数虽然能复用，但功能有点死板。如果我想向不同的人问好，比如 "你好, Alice"、"你好, Bob"，该怎么办？

我们可以给函数定义**参数 (Parameters)**，让它变得更灵活。参数就像是函数这个“食谱”里可以变化的“食材”。

```python:line-numbers{1,5,8}
# 定义函数时，括号里的 name 就是一个参数 (形参)
def greet(name):
    print(f"你好, {name}! 欢迎你！")

# 调用函数时，我们传入的具体的值 "Alice" 就是参数 (实参)
greet("Alice")

# 我们可以用不同的参数多次调用它
greet("GitHub")
```

**运行结果:**

```bash
你好, Alice! 欢迎你！
你好, GitHub! 欢迎你！
```

## 4. 让函数返回结果 (`return`)

函数不仅能执行操作（比如打印），还能计算并**返回 (return)** 一个结果。这就像你让一个机器人去计算 `2+3`，它不仅算完了，还得把结果 `5` 告诉你。

`return` 关键字就是用来做这件事的。

```python:line-numbers{2,6}
# 这个函数接收一个数字，然后返回它的平方
def square(number):
    return number * number

# 调用函数，并将返回的结果存入变量 result
result = square(5)
print(f"5 的平方是: {result}")

# 也可以直接在其他表达式中使用函数的返回值
print(f"12 的平方是: {square(12)}")
```

**运行结果:**

```bash
5 的平方是: 25
12 的平方是: 144
```

> [!IMPORTANT] 一旦函数执行到 `return`，它会立即结束，并把 `return` 后面的值返回。`return` 后面的任何代码都不会被执行。

## 5. 函数的文档说明 (Docstrings)

给函数写好注释和说明是一个非常好的习惯。在 Python 中，我们有一种标准的注释方式，叫做**文档字符串 (Docstrings)**，它写在函数定义的第一行，用三对引号 `"""..."""` 包裹。

```python:line-numbers{2-4}
def square(number):
    """
    计算并返回一个数字的平方。
    """
    return number * number

# 在很多代码编辑器（如 VS Code）里，当你调用这个函数时，
# 它会自动显示你写的文档字符串作为提示！
print(square(9))
```

写好 Docstrings，不仅方便别人阅读你的代码，也方便未来的你自己。

# 📦 模块与包 - Python 的“乐高积木”

我们已经学会了编写函数，这让我们的代码变得更加整洁和可复用。但随着项目越来越大，我们不可能把所有的函数都写在同一个 `.py` 文件里，那样会变得难以管理。

想象一下，你正在搭建一个巨大的乐高模型。你不会把所有的积木都混在一个大桶里，而是会把它们分门别类地放在不同的小盒子里：红色积木一盒，轮子一盒，透明件一盒。

在 Python 中，**模块 (Module)** 和 **包 (Package)** 就是我们用来组织代码的“小盒子”和“大箱子”。

## 1. 什么是模块 (Module)？

一个**模块**，说白了，就是**一个 `.py` 文件**。

这个文件里可以包含变量、函数、类等任何 Python 代码。我们可以把功能相关的代码放在一个模块里，方便管理和复用。

举个例子，假设我们创建一个名为 `my_utils.py` 的文件，里面放一些我们自己写的、常用的工具函数。

::: code-group

```python [my_utils.py]
# 这是一个模块文件
PI = 3.14159

def greet(name):
    """一个简单的问候函数"""
    return f"Hello, {name}!"

def calculate_area(radius):
    """计算圆的面积"""
    return PI * (radius ** 2)
```

```python [main.py]
# 这是我们的主程序文件
# 我们想在 main.py 中使用 my_utils.py 里的代码
```

:::

现在，问题来了：如何在 `main.py` 中使用 `my_utils.py` 里的代码呢？答案是：`import`。

## 2. 导入和使用模块 (`import`)

`import` 关键字是连接不同模块的桥梁。我们有几种常见的导入方式。

### 方式一：`import module_name` (推荐)

这是最常用、最推荐的方式。它会导入整个模块。

```python:line-numbers{1,4,5}
# 在 main.py 中
import my_utils # 导入整个 my_utils.py 文件

# 使用时，需要通过 "模块名.变量" 或 "模块名.函数" 的方式来调用
area = my_utils.calculate_area(10)
greeting = my_utils.greet("Pythonista")

print(f"圆的面积是: {area}")
print(greeting)
```

**运行结果:**

```bash
圆的面积是: 314.159
Hello, Pythonista!
```

这种方式的好处是**代码清晰**，你一眼就能看出 `calculate_area` 函数是来自 `my_utils` 模块的，不会和你自己定义的函数混淆。

### 方式二：`from module_name import ...`

如果你只需要模块中的某几个函数或变量，可以使用 `from ... import ...`。

```python:line-numbers{1,4,5}
# 在 main.py 中
from my_utils import greet, PI # 只导入 greet 函数和 PI 变量

# 使用时，可以直接调用，不需要加模块名
print(f"PI 的值是: {PI}")
greeting = greet("World")
print(greeting)

# 如果你尝试调用未导入的函数，会报错
# area = calculate_area(10) # 这行会产生 NameError
```

**运行结果:**

```bash
PI 的值是: 3.14159
Hello, World!
```

这种方式更简洁，但如果导入的函数和你当前文件中的函数重名，就会产生冲突。

## 3. Python 的“秘密武器”：标准库

Python 之所以如此受欢迎，一个重要原因就是它自带了一个极其丰富的**标准库 (Standard Library)**。

标准库里包含了海量的、预先写好的模块，涵盖了网络、文件、数学、日期、随机数等方方面面。这意味着，很多常见的功能你根本不需要自己写，直接 `import` 来用就行！

我们来看两个超级有用的标准库模块：

### `math` 模块：数学计算

```python:line-numbers
import math

# 计算 16 的平方根
print(f"16的平方根是: {math.sqrt(16)}")

# 使用 math 模块里更精确的 pi
print(f"math库中的pi值是: {math.pi}")
```

**运行结果:**

```bash
16的平方根是: 4.0
math库中的pi值是: 3.141592653589793
```

### `random` 模块：生成随机数

这个模块非常有趣，可以用来做抽奖、生成验证码等

```python:line-numbers
import random

# 生成一个 1 到 10 之间的随机整数
random_number = random.randint(1, 10)
print(f"今天的幸运数字是: {random_number}")

# 从列表中随机选择一个元素
winner_list = ["Alice", "Bob", "Charlie", "David"]
lucky_winner = random.choice(winner_list)
print(f"恭喜 {lucky_winner} 中奖！")
```

**运行结果 (每次可能不同):**

```bash
今天的幸运数字是: 7
恭喜 Charlie 中奖！
```

## 4. 什么是包 (Package)？

如果说模块是单个的 `.py` 文件（小盒子），那么**包 (Package)** 就是一个包含了多个模块的**文件夹**（大箱子）。

当一个项目变得非常庞大，比如一个网站后端，我们可能会把处理用户功能的模块放在 `user` 包里，处理商品功能的模块放在 `product` 包里，这样结构就非常清晰。

对于初学者，我们暂时只需要理解这个概念即可。你现在打交道最多的还是单个模块。

# 📄 文件操作 - 让程序与世界对话

到目前为止，我们程序里的所有数据（变量、列表、字典）都存储在内存中。这意味着程序一旦结束，所有数据都会消失。这就像你在沙滩上画画，潮水一来，什么都没了。

如果想让数据被**永久保存**，我们就需要把它写入到**文件 (File)** 中。同样，我们也可以从文件中读取数据，让程序处理现实世界的信息。这个过程，就叫做**文件输入/输出 (File I/O)**。

## 1. 读取文件 (Input)

读取文件就像是打开一本书，阅读里面的内容。在 Python 中，我们主要使用 `open()` 函数来完成这个操作。

最推荐、最安全的方式是使用 `with` 语句，因为它能确保文件在操作完成后被自动关闭，即使中间发生了错误。

**语法结构:**

```python
with open("文件路径", "r") as f:
    # 在这里对文件对象 f 进行操作
```

- `"文件路径"`: 你要打开的文件名，比如 `"notes.txt"`。
- `"r"`: 代表**读取模式 (read mode)**，这是默认模式。
- `f`: 是我们给打开的文件起的一个变量名，通常约定俗成用 `f` (file 的缩写)。

假设我们有一个名为 `slogans.txt` 的文件，内容如下：

::: code-group

```txt [文本文件]
你感兴趣的视频都在B站。
记录世界，记录你。
随时随地，发现新鲜事。
```

:::

现在，我们来读取它。

### 方法一：一次性读取全部 `f.read()`

这个方法会把文件的所有内容读成一个**单一的字符串**。

```python:line-numbers
with open("slogans.txt", "r") as f:
    content = f.read()
    print(content)
```

**运行结果:**

```text
你感兴趣的视频都在B站。
记录世界，记录你。
随时随地，发现新鲜事。

```

### 方法二：逐行读取 (推荐)

对于大文件，一次性读入内存可能会消耗太多资源。更好的方法是使用 `for` 循环来逐行读取，这样既高效又节省内存。

```python:line-numbers{4}
with open("slogans.txt", "r") as f:
    print("--- 逐行读取 ---")
    for line in f:
        # .strip() 可以去除每行末尾的换行符和空白
        print(line.strip())
```

**运行结果:**

```text
--- 逐行读取 ---
你感兴趣的视频都在B站。
记录世界，记录你。
随时随地，发现新鲜事。
```

> [!TIP] 为什么用 `.strip()`？因为文件中的每一行结尾都有一个看不见的换行符 `\n`，直接 `print(line)` 会导致输出多一个空行。`.strip()` 可以帮我们清理掉这些多余的空白。

## 2. 写入文件 (Output)

写入文件就像是拿出笔记本，在上面写字。我们同样使用 `open()` 函数，但需要改变“模式”。

- **写入模式 (`'w'`)**: 如果文件**不存在**，就创建新文件；如果文件**已存在**，会**完全覆盖**掉原来的所有内容！
- **追加模式 (`'a'`)**: 如果文件**不存在**，就创建新文件；如果文件**已存在**，会在文件**末尾**追加新内容，不会覆盖。

> [!WARNING] 使用 `'w'` (write) 模式要格外小心！它就像一块橡皮擦，会把你文件里原有的东西全部擦掉。如果你只想在文件后面加东西，请务必使用 `'a'` (append) 模式。

### 写入模式 (`'w'`) 示例

```python:line-numbers
# 喜欢的编程语言列表
languages = ["Python", "JavaScript", "Go"]

with open("my_languages.txt", "w") as f:
    for lang in languages:
        # f.write() 不会自动换行，需要我们手动添加换行符 \n
        f.write(lang + "\n")

print("文件 my_languages.txt 已创建/覆盖。")
```

执行后，会生成一个 `my_languages.txt` 文件，内容是：

```text
Python
JavaScript
Go
```

### 追加模式 (`'a'`) 示例

现在，我们向刚才的文件中追加一种新语言。

```python:line-numbers{2,3}
with open("my_languages.txt", "a") as f:
    f.write("Rust\n")

print("已向 my_languages.txt 文件末尾追加内容。")
```

再次打开 `my_languages.txt`，你会发现内容变成了：

```text
Python
JavaScript
Go
Rust
```

# 🛡️ 异常处理 - 让你的程序更坚固

想象一下，你正在驾驶一辆你刚造好的汽车。如果路上突然出现一个坑，这辆车是直接散架（程序崩溃），还是悬挂系统吸收冲击，平稳驶过（优雅处理）？

在编程中，这些“坑”就是**异常 (Exceptions)**——那些在程序运行时发生的、打断正常流程的错误事件。比如：
*   试图读取一个不存在的文件 (`FileNotFoundError`)
*   用一个数除以零 (`ZeroDivisionError`)
*   试图把文字转换成数字，但文字不是数字格式 (`ValueError`)

一个健壮的程序不应该因为这些可预见的意外而崩溃。**异常处理**就是我们为程序安装的“悬挂系统”。

## 1. 问题的出现：可怕的红色错误

我们先来看看不处理异常会发生什么。我们尝试读取一个根本不存在的文件 `ghost_file.txt`。

```python:line-numbers
print("程序开始...")
f = open("ghost_file.txt", "r")
content = f.read()
print(content)
print("程序结束。") # 这行代码永远不会被执行
```

**运行结果 (程序崩溃):**

```bash
程序开始...
Traceback (most recent call last):
  File "main.py", line 2, in <module>
    f = open("ghost_file.txt", "r")
FileNotFoundError: [Errno 2] No such file or directory: 'ghost_file.txt'
```

看到这堆红色的 `Traceback` 了吗？这就是程序崩溃的信号。它告诉我们发生了 `FileNotFoundError`，并且程序在第 2 行就中断了，后面的代码根本没机会执行。

## 2. `try...except`：优雅的“安全网”

为了防止程序崩溃，我们可以使用 `try...except` 语句块来“捕获”这个异常。

**语法结构:**

```python
try:
    # 尝试执行这里的代码，这部分代码可能会出问题
except 错误类型:
    # 如果 try 块中发生了指定类型的错误，就执行这里的代码
```

现在，我们用它来改造上面的代码：

```python:line-numbers{2,3,4,5,6}
print("程序开始...")

try:
    # 我们把可能出错的代码放进 try 块
    f = open("ghost_file.txt", "r")
    content = f.read()
    print(content)
except FileNotFoundError:
    # 如果发生了 FileNotFoundError，就执行这里
    print("哎呀，文件好像不见了，请检查文件名是否正确。")

print("程序结束。") # 这次，这行代码会被成功执行！
```

**运行结果 (优雅处理):**

```bash
程序开始...
哎呀，文件好像不见了，请检查文件名是否正确。
程序结束。
```

看！程序没有崩溃。它尝试执行 `try` 块里的代码，发现出错了（`FileNotFoundError`），于是立刻跳到 `except FileNotFoundError` 块，执行了我们预设的友好提示，然后继续执行后面的代码。

## 3. 处理多种不同的异常

一个 `try` 块里可能会发生多种不同的错误。我们可以设置多个 `except` 块来分别处理它们。

```python:line-numbers
try:
    num1 = int(input("请输入一个被除数: "))
    num2 = int(input("请输入一个除数: "))
    result = num1 / num2
    print(f"结果是: {result}")
except ValueError:
    # 如果用户输入的不是数字，int() 转换会失败
    print("输入错误：请输入有效的数字！")
except ZeroDivisionError:
    # 如果用户输入的除数是 0
    print("错误：除数不能为零！")
```

你可以自己运行一下这段代码，分别尝试输入 `abc` 或者让除数为 `0`，看看程序是如何响应的。

## 4. `finally`：无论如何都要执行

有时候，我们希望某些代码**无论是否发生异常都必须执行**，比如关闭文件、释放资源等。这时，`finally` 块就派上用场了。

```python:line-numbers{7,8}
try:
    num = int(input("请输入一个数字: "))
    print(f"你输入了: {num}")
except ValueError:
    print("这不是一个有效的数字。")
finally:
    # 无论是否发生异常，这部分代码总会被执行
    print("--- 操作结束，感谢使用 ---")
```

**运行场景一 (输入 `123`):**

```bash
请输入一个数字: 123
你输入了: 123
--- 操作结束，感谢使用 ---
```

**运行场景二 (输入 `abc`):**

```bash
请输入一个数字: abc
这不是一个有效的数字。
--- 操作结束，感谢使用 ---
```

看到了吗？`finally` 里的代码就像一个尽职尽责的收尾员，总是在最后出现。

# 🏛️ 面向对象编程(OOP) - 创造你自己的世界

到目前为止，我们一直在使用 Python 内置的数据类型（如 `str`, `int`, `list`, `dict`）和函数来解决问题。我们的数据和操作这些数据的函数是**分离**的。

比如，要描述一个“用户”，我们可能会用一个字典来存数据，再写几个独立的函数来操作它：

```python
user_data = {"name": "Alice", "level": 5}

def user_login(user):
    print(f"{user['name']} 登录成功！")

user_login(user_data)
```

这没问题，但当程序变得复杂时，数据和功能会散落在各处，难以维护。

**面向对象编程 (OOP)** 提供了一种更好的方式：将相关的数据（属性）和功能（方法）**打包**在一起，形成一个独立的、完整的“对象”。

## 1. 核心概念：类 (Class) 与 对象 (Object)

这是 OOP 中最重要的两个概念，我们可以用一个简单的比喻来理解：

- **类 (Class)**：是一个**蓝图**或**模板**。它定义了一类事物应该具有哪些**属性**（比如汽车有品牌、颜色）和哪些**功能**（比如汽车能启动、能鸣笛）。蓝图本身不是一辆真车。
- **对象 (Object)**：是根据**类**这个蓝图创造出来的**实体**。每一辆具体的汽车（比如一辆红色的特斯拉、一辆黑色的宝马）都是一个对象。对象也被称为**实例 (Instance)**。

## 2. 创建你的第一个类

在 Python 中，我们使用 `class` 关键字来定义一个类。按照惯例，类名通常采用**大驼峰命名法**（每个单词首字母大写），比如 `MyCar`, `UserProfile`。

我们来定义一个简单的 `Car` 类：

```python:line-numbers
class Car:
    pass # pass 是一个占位符，表示什么都不做

# 现在，我们根据这个蓝图来“制造”两辆具体的车
my_tesla = Car()
your_bmw = Car()

print(my_tesla)
print(your_bmw)
```

**运行结果:**

```bash
<__main__.Car object at 0x10a7b3e50>
<__main__.Car object at 0x10a7b3e80>
```

我们成功创建了两个 `Car` 类的对象！它们是两个独立的实体，存储在内存的不同位置。

## 3. `__init__` 方法：对象的“初始化”

上面的 `Car` 类太空了，它没有任何属性。我们希望每辆车被制造出来时，就自带品牌和颜色。这时，就需要一个特殊的“初始化”方法：`__init__()`。

这个方法会在**创建对象时自动被调用**，用来设置对象的初始属性。

```python:line-numbers{2-5}
class Car:
    # __init__ 是一个特殊方法，也叫构造函数
    def __init__(self, brand, color):
        # self.brand = brand 的意思是：
        # “把传入的 brand 参数值，赋给这个对象自己的 brand 属性”
        self.brand = brand
        self.color = color

# 创建对象时，需要提供 __init__ 方法需要的参数
my_car = Car("特斯拉", "红色")

# 我们可以通过 . 来访问对象的属性
print(f"我有一辆{my_car.color}的{my_car.brand}。")
```

**运行结果:**

```bash
我有一辆红色的特斯拉。
```

> [!IMPORTANT] **关于 `self`** `self` 是 OOP 中的一个核心关键字。在类的方法中，它**永远是第一个参数**，并且**代表对象本身**。你可以把它理解成“我自己”这个代词。Python 会自动处理 `self` 的传递，我们调用时不需要给它传值。

## 4. 定义方法：对象的“行为”

光有属性还不够，我们希望对象能做一些事。在类中定义的函数，我们称之为**方法 (Method)**。方法定义了对象的行为。

我们给 `Car` 类添加两个方法：`start_engine` 和 `honk`。

```python:line-numbers{7-12}
class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    # 定义一个启动引擎的方法
    def start_engine(self):
        print(f"这辆{self.brand}的引擎启动了！ Vroom Vroom!")

    # 定义一个鸣笛的方法
    def honk(self):
        print("嘀嘀!")

# 创建一个对象
my_car = Car("大众", "白色")

# 调用对象的方法
my_car.start_engine()
my_car.honk()
```

**运行结果:**

```bash
这辆大众的引擎启动了！ Vroom Vroom!
嘀嘀!
```

# 🎉 小结与最终章展望

今天，我们踏入了面向对象编程的大门，这是编程思维的一次巨大飞跃！

- 我们理解了**类 (Class)** 是蓝图，**对象 (Object)** 是实体。
- 学会了使用 `class` 关键字来**定义**一个类。
- 掌握了使用 `__init__` 方法来**初始化**对象的**属性**（数据）。
- 学会了定义**方法**来赋予对象**行为**（功能）。
- 理解了 `self` 代表**对象本身**。

我们已经完成了从零基础到掌握 Python 核心编程概念的全过程！你现在已经具备了： ✅ 基础语法和数据类型 ✅ 逻辑控制（条件与循环） ✅ 核心数据结构（列表与字典） ✅ 代码组织能力（函数与模块） ✅ 实战技能（文件操作与异常处理） ✅ 高级编程思想（面向对象）

**那么，下一步呢？**

你已经拥有了坚实的基础，是时候去探索更广阔的世界了！我为你推荐几个方向：

1. **做一个小项目**：这是巩固知识最好的方式！比如做一个命令行记事本、一个简单的爬虫去抓取网页信息、一个猜数字游戏等。
2. **深入学习一个方向**：
    - **Web开发**：学习 `Flask` 或 `Django` 框架，制作自己的网站。
    - **数据分析**：学习 `Pandas`, `NumPy`, `Matplotlib` 等库，从数据中发现秘密。
    - **自动化脚本**：学习 `Selenium` 或 `Playwright`，让程序帮你操作浏览器。
    - **人工智能**：学习 `PyTorch` 或 `TensorFlow`，进入最前沿的领域。

**这篇学习笔记就到此告一段落了。但你的 Python 之旅，才刚刚开始！** 记住，编程是一门手艺，多写、多练、多看别人的优秀代码（比如 GitHub 上的项目），你一定会成为一名出色的开发者。

祝你编程愉快，在代码的世界里创造无限可能！🚀
