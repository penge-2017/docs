

Hey，各位未来的大佬们！

欢迎来到我的学习笔记。我跟你们一样，是个计算机技术的狂热爱好者，没事就喜欢逛 B 站、GitHub，捣鼓各种好玩的技术。这份笔记是我自学 Java 时整理的，希望能用最“人话”的方式，把一些概念说清楚，帮助和我一样刚入门的小伙伴们。

咱们废话不多说，直接开整！

## 1. Java 是什么？为什么学它？

在我们开始写代码之前，得先搞明白，Java 到底是个啥？

简单来说，Java 是一门**面向对象**的编程语言。它最牛的地方在于一个叫做 **“一次编写，到处运行” (Write Once, Run Anywhere)** 的特性。

想象一下，你写好的代码就像是装进了一个标准化的集装箱（编译后的 `.class` 文件），这个集装箱可以在任何安装了“码头吊装设备”（Java 虚拟机 - JVM）的操作系统上（Windows, macOS, Linux）运行，而不需要为每个平台重新改造。

::: tip 提示：JDK、JRE 和 JVM 刚开始你可能会被这三个名词搞混，别怕，很简单：

- **JVM (Java Virtual Machine)**: Java 虚拟机，是真正运行 Java 代码的“虚拟电脑”。
- **JRE (Java Runtime Environment)**: Java 运行环境，包含了 JVM 和一些 Java 运行所必需的核心库。如果只是想**运行**一个 Java 程序，装 JRE 就够了。
- **JDK (Java Development Kit)**: Java 开发工具包，是给咱们开发者用的。它包含了 JRE 和一些开发工具（比如编译器 `javac.exe`、打包工具 `jar.exe` 等）。 关系就是：**JDK > JRE > JVM**。我们学习开发，直接装 JDK 就行了！ :::
:::
### 你的第一个 Java 程序：Hello, World!

学习任何语言的传统，都是从输出 "Hello, World!" 开始。这会让你对这门语言有个最直观的感受。

```java
// HelloWorld.java

public class HelloWorld {
    public static void main(String[] args) {
        // 这行代码的作用是在控制台打印输出 "Hello, World!"
        System.out.println("Hello, World!");
    }
}
```

**怎么运行它？**

1. 把上面代码保存为 `HelloWorld.java` 文件。
2. 打开你的命令行工具（CMD 或 Terminal）。
3. **编译**：输入 `javac HelloWorld.java`，会生成一个 `HelloWorld.class` 文件。
4. **运行**：输入 `java HelloWorld` (注意，这里没有 `.class` 后缀)。

**运行结果：**

```bash
Hello, World!
```

恭喜！你已经成功运行了你的第一个 Java 程序！

## 2. 变量与数据类型

程序需要处理数据，就像我们做菜需要各种食材一样。在 Java 中，我们用**变量（Variable）**来存放数据。

你可以把变量想象成一个带标签的盒子，盒子里存放着东西（数据），标签就是变量名，盒子的种类就是**数据类型（Data Type）**。

### 2.1 基本数据类型 (Primitive Types)

Java 提供了一些最基础的“盒子类型”，用来存放数字、字符和真假值。这些是 Java 语言内置的，效率很高。

|数据类型|描述|例子|
|---|---|---|
|`int`|整数（最常用）|`int age = 18;`|
|`long`|长整数（存很大的数）|`long earthPopulation = 8000000000L;` (注意L后缀)|
|`double`|双精度浮点数（小数）|`double price = 19.99;`|
|`float`|单精度浮点数（小数）|`float score = 98.5f;` (注意f后缀)|
|`char`|单个字符|`char grade = 'A';` (用单引号)|
|`boolean`|布尔值（真或假）|`boolean isOnline = true;`|
|`byte`|字节|`byte b = 100;`|
|`short`|短整数|`short s = 30000;`|

::: warning 注意

- 定义 `long` 类型变量时，最好在数字后面加上 `L`。
- 定义 `float` 类型变量时，必须在数字后面加上 `f`，因为小数默认是 `double` 类型。 :::
:::
### 2.2 引用数据类型 (Reference Types)

除了上面那些基础的，还有一种更强大的“盒子”，它可以存放更复杂的东西，比如一个对象、一个数组等。我们最常用的就是 `String`（字符串）。

- `String`: 用来存放一串字符。

```java
// String 不是基本数据类型，但用法很像
String name = "Bilibili"; // 用双引号
```

**代码示例：**

```java
public class VariablesDemo {
    public static void main(String[] args) {
        // 声明并初始化一个整型变量
        int myAge = 20;

        // 声明一个双精度浮点型变量
        double itemPrice;
        // 赋值
        itemPrice = 99.9;

        // 声明一个字符型变量
        char initial = 'J';

        // 声明一个布尔型变量
        boolean isLearning = true;

        // 声明一个字符串变量
        String platform = "CSDN";

        System.out.println("我的年龄是: " + myAge);
        System.out.println("商品价格: " + itemPrice);
        System.out.println("我的首字母: " + initial);
        System.out.println("我正在学习吗? " + isLearning);
        System.out.println("我常用的学习平台: " + platform);
    }
}
```

**运行结果：**

```bash
我的年龄是: 20
商品价格: 99.9
我的首字母: J
我正在学习吗? true
我常用的学习平台: CSDN
```

## 3. 运算符 (Operators)

有了数据，我们就要对它们进行操作，比如加减乘除。这些操作的符号，就是**运算符**。

### 3.1 算术运算符

就是我们小学学的数学运算。

- `+` (加), `-` (减), `*` (乘), `/` (除)
- `%` (取模/取余数): 比如 `10 % 3` 结果是 `1`。

### 3.2 赋值运算符

用来给变量赋值。

- `=` (赋值): `int a = 10;`
- `+=`, `-=`, `*=`, `/=`: 复合赋值，比如 `a += 2;` 等价于 `a = a + 2;`。

### 3.3 比较运算符

用来比较两个值，结果总是 `boolean` 类型（`true` 或 `false`）。

- `==` (等于)
- `!=` (不等于)
- `>` (大于), `<` (小于)
- `>=` (大于等于), `<=` (小于等于)

### 3.4 逻辑运算符

用来连接多个布尔表达式。

- `&&` (逻辑与 - AND): 两边都为 `true`，结果才为 `true`。
- `||` (逻辑或 - OR): 只要有一边为 `true`，结果就为 `true`。
- `!` (逻辑非 - NOT): 取反，`!true` 结果是 `false`。

**代码示例：**

```java
public class OperatorsDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 4;

        // 算术运算符
        System.out.println("a + b = " + (a + b)); // 14
        System.out.println("a / b = " + (a / b)); // 2 (整数除法，小数部分被舍弃)
        System.out.println("a % b = " + (a % b)); // 2 (10除以4商2余2)

        // 比较运算符
        boolean isEqual = (a == b);
        System.out.println("a 等于 b 吗? " + isEqual); // false

        // 逻辑运算符
        boolean condition1 = (a > 5);  // true
        boolean condition2 = (b < 5);  // true
        System.out.println("condition1 AND condition2: " + (condition1 && condition2)); // true

        boolean condition3 = (b > 5); // false
        System.out.println("condition1 OR condition3: " + (condition1 || condition3)); // true
    }
}
```

**运行结果：**

```bash
a + b = 14
a / b = 2
a % b = 2
a 等于 b 吗? false
condition1 AND condition2: true
condition1 OR condition3: true
```

第一部分的内容就到这里！我们已经掌握了 Java 的基本“零件”：**变量**、**数据类型**和**运算符**。感觉怎么样？是不是没有想象中那么难？

接下来，我们将学习如何让程序“活”起来，学会思考和重复，也就是**流程控制**。如果你对这部分内容已经理解了，或者有任何疑问，都可以告诉我。准备好了的话，我们就继续下一部分的内容！

在上一篇笔记中，我们已经学会了 Java 的基本构成单元。但程序如果只能从上到下一行行执行，那就太“死板”了。今天，我们要让程序学会“思考”，能够根据条件做出判断，还能不厌其烦地重复做某件事。Let's Go!
### 3.5 三元运算符

这是一个 `if-else` 语句的简洁写法，非常适合用在简单的赋值场景。

它的语法是：`条件 ? 表达式1 : 表达式2`

如果“条件”为 `true`，则整个表达式的结果是“表达式1”的值；否则，结果是“表达式2”的值。

::: code-group

```java [ConditionDemo.java]
public class ConditionDemo {
    public static void main(String[] args) {
        int score = 85;
        String grade;
        if (score >= 60) {
            grade = "及格";
        } else {
            grade = "不及格";
        }
        System.out.println("你的成绩是: " + grade);
    }
}
```

```java [TernaryDemo.java]
public class TernaryDemo {
    public static void main(String[] args) {
        int score = 85;
        //           条件    ?  true时的值 : false时的值
        String grade = score >= 60 ? "及格" : "不及格"; // [!code focus]
        System.out.println("你的成绩是: " + grade);
    }
}
```

:::

两种写法的运行结果完全相同，但三元运算符让代码更紧凑。

## 4. 流程控制 (Flow Control)

流程控制，顾名思义，就是控制代码执行的流程。主要分为三种结构：

1. **顺序结构**：代码从上到下，依次执行。这是最基本的结构，我们之前的代码都是顺序结构。
2. **选择结构**：根据条件的真假，选择性地执行某段代码。比如“如果今天下雨，就带伞出门”。
3. **循环结构**：在满足条件的情况下，重复执行某段代码。比如“每天都要学习，直到学会为止”。

### 4.1 选择结构 (Conditional Statements)

#### `if` 语句

这是最基本的选择结构。如果 `if` 后面的括号 `()` 里的条件为 `true`，就执行花括号 `{}` 里的代码。

```java
// IfDemo.java
public class IfDemo {
    public static void main(String[] args) {
        int score = 95;
        if (score >= 60) {
            System.out.println("成绩及格了，很棒！");
        }
    }
}
```

**运行结果：**

```bash
成绩及格了，很棒！
```

#### `if-else` 语句

`if` 负责“如果...”，`else` 就负责“否则...”。当条件不满足时，程序会跳过 `if` 的代码块，执行 `else` 的代码块。

```java
// IfElseDemo.java
public class IfElseDemo {
    public static void main(String[] args) {
        int score = 50;
        if (score >= 60) {
            System.out.println("成绩及格了，很棒！");
        } else {
            System.out.println("成绩不及格，要加油哦！");
        }
    }
}
```

**运行结果：**

```bash
成绩不及格，要加油哦！
```

#### `if-else if-else` 语句

当有多个条件需要判断时，我们可以用这个结构。它会从上到下依次判断，一旦有一个条件满足，就执行对应的代码块，然后整个结构就结束了，后面的 `else if` 和 `else` 都不再判断。

```java
// GradeDemo.java
public class GradeDemo {
    public static void main(String[] args) {
        int score = 85;
        if (score >= 90) {
            System.out.println("你的成绩是：优秀 (A)");
        } else if (score >= 80) {
            System.out.println("你的成绩是：良好 (B)");
        } else if (score >= 60) {
            System.out.println("你的成绩是：及格 (C)");
        } else {
            System.out.println("你的成绩是：不及格 (D)");
        }
    }
}
```

**运行结果：**

```bash
你的成绩是：良好 (B)
```

#### `switch` 语句

当需要判断的条件是一个变量和多个固定的值进行比较时，`switch` 语句比 `if-else if` 更清晰。

::: tip 提示
`switch` 的小秘密 `switch` 可以判断的类型有 `byte`, `short`, `int`, `char`, `String` (JDK 7+), 和枚举类型。 
:::

```java
// SwitchDemo.java
public class SwitchDemo {
    public static void main(String[] args) {
        int dayOfWeek = 3;
        String dayName;

        switch (dayOfWeek) {
            case 1:
                dayName = "星期一";
                break; // break 的作用是跳出 switch 结构
            case 2:
                dayName = "星期二";
                break;
            case 3:
                dayName = "星期三";
                break;
            case 4:
                dayName = "星期四";
                break;
            case 5:
                dayName = "星期五";
                break;
            case 6:
                dayName = "星期六";
                break;
            case 7:
                dayName = "星期日";
                break;
            default: // 如果以上 case 都不匹配，则执行 default
                dayName = "无效的日期";
                break;
        }
        System.out.println("今天是: " + dayName);
    }
}
```

**运行结果：**

```bash
今天是: 星期三
```

::: warning 
`break` 很重要！ 在 `switch` 的 `case` 中，如果你忘记写 `break`，程序会继续执行下一个 `case` 的代码，直到遇到 `break` 或者 `switch` 结束为止。这叫做“穿透效应”，有时候是 Bug 的来源，要特别小心！ 
:::

### 4.2 循环结构 (Looping Statements)

#### `for` 循环

`for` 循环是我们最常用的循环结构，特别适合在**循环次数已知**的情况下使用。

它的结构分为三部分：`for (初始化; 循环条件; 更新语句)`

1. **初始化**：循环开始前执行，只执行一次（例如 `int i = 1`）。
2. **循环条件**：每次循环开始前判断，如果为 `true`，就执行循环体；如果为 `false`，就结束循环。
3. **更新语句**：每次循环体执行完毕后执行（例如 `i++`）。

```java
// ForLoopDemo.java
public class ForLoopDemo {
    public static void main(String[] args) {
        // 打印 5 次 "Hello, GitHub!"
        for (int i = 1; i <= 5; i++) {
            System.out.println("第 " + i + " 次打印: Hello, GitHub!");
        }
    }
}
```

**运行结果：**

```bash
第 1 次打印: Hello, GitHub!
第 2 次打印: Hello, GitHub!
第 3 次打印: Hello, GitHub!
第 4 次打印: Hello, GitHub!
第 5 次打印: Hello, GitHub!
```

#### `while` 循环

`while` 循环先判断条件，如果条件为 `true`，才执行循环体。它适合**循环次数不确定**，但知道循环结束条件的情况。

```java
// WhileLoopDemo.java
public class WhileLoopDemo {
    public static void main(String[] args) {
        int count = 1;
        while (count <= 3) {
            System.out.println("这是 while 循环的第 " + count + " 次执行。");
            count++; // 千万不要忘记更新条件变量，否则会造成死循环！
        }
    }
}
```

**运行结果：**

```bash
这是 while 循环的第 1 次执行。
这是 while 循环的第 2 次执行。
这是 while 循环的第 3 次执行。
```

#### `do-while` 循环

`do-while` 循环和 `while` 循环很像，但它保证循环体**至少会执行一次**，因为它先执行代码，然后再判断条件。

```java
// DoWhileLoopDemo.java
public class DoWhileLoopDemo {
    public static void main(String[] args) {
        int number = 100; // 即使条件一开始就不满足
        do {
            System.out.println("do-while 循环执行了！number 的值是: " + number);
            number++;
        } while (number < 5); // 判断条件在这里
    }
}
```

**运行结果：**

```bash
do-while 循环执行了！number 的值是: 100
```

你看，即使 `number < 5` 是 `false`，`do` 里面的代码还是执行了一次。

### 4.3 循环控制：`break` 与 `continue`

- `break`: 彻底终止并**跳出整个循环**，继续执行循环后面的代码。
- `continue`: **跳过当前这次循环**的剩余部分，立即开始下一次循环。

**代码示例：**

```java:line-numbers
public class LoopControlDemo {
    public static void main(String[] args) {
        System.out.println("--- break 示例 ---");
        // 找到 1-10 中第一个能被 7 整除的数
        for (int i = 1; i <= 10; i++) {
            if (i % 7 == 0) {
                System.out.println("找到了！第一个能被7整除的数是: " + i);
                break; // 找到后就没必要继续循环了，直接跳出
            }
        }

        System.out.println("\n--- continue 示例 ---");
        // 打印 1-5 中除了 3 以外的所有数字
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // 当 i=3 时，跳过本次循环的 System.out.println(i);
            }
            System.out.println("当前数字是: " + i);
        }
    }
}
```

**运行结果：**

```bash
--- break 示例 ---
找到了！第一个能被7整除的数是: 7

--- continue 示例 ---
当前数字是: 1
当前数字是: 2
当前数字是: 4
当前数字是: 5
```

---

太棒了！我们已经掌握了如何控制程序的流程。现在我们的代码已经不那么“死板”了，它能根据我们的指令进行判断和重复。这是从写“命令”到写“逻辑”的一大步。

到目前为止，我们接触的还都是 Java 的“过程式”编程思想。接下来，我们将进入 Java 的核心，也是最强大的部分——**面向对象编程 (Object-Oriented Programming, OOP)**。这会是一个思维上的巨大转变，但也是 Java 魅力的真正所在。

准备好迎接思想的升级了吗？如果准备好了，我们就继续探索面向对象的世界！

在前面的笔记里，我们学会了 Java 的基本语法和流程控制。这让我们能写出一些可以解决简单问题的程序。但是，如果我们想构建更复杂、更庞大、更接近现实世界的软件系统，就需要一种更高级的思维方式。

我们要推开这扇大门，进入 **面向对象编程 (Object-Oriented Programming, OOP)** 的世界。这是 Java 的灵魂所在！

## 5. 从“面向过程”到“面向对象”

在我们开始之前，先来理解一下思想上的转变。

- **面向过程 (Procedure-Oriented)**：我们之前写的代码，更像是“面向过程”。它关注的是“**步骤**”和“**流程**”。就像一份菜谱，告诉你第一步做什么，第二步做什么... 这种方式处理简单问题很直接，但当问题变得复杂时，代码会变得难以维护和扩展。
    
- **面向对象 (Object-Oriented)**：它关注的是“**谁**”来做“**什么事**”。它试图将现实世界中的事物抽象成程序中的“**对象**”，每个对象都有自己的**属性**（状态）和**行为**（能做什么）。整个程序就是由不同对象之间的相互协作来完成的。
    

::: tip 
举个例子：把大象放进冰箱

- **面向过程**：
    1. 打开冰箱门。
    2. 抬起大象。
    3. 把大象塞进去。
    4. 关上冰箱门。
- **面向对象**：
    1. 我们有三个**对象**：你、大象、冰箱。
    2. 你这个对象，有一个行为叫 `操作冰箱()`。
    3. 冰箱这个对象，有行为 `打开门()` 和 `关闭门()`。
    4. 整个过程变成了：你 `操作冰箱` -> 冰箱 `打开门()` -> 你 `操作大象` -> 冰箱 `关闭门()`。 :::

看起来好像更复杂了？别急，当系统变大时，这种把功能划分给不同“对象”的方式，会让我们的代码结构更清晰、更容易复用和维护。
:::
## 6. 类 (Class) 与 对象 (Object)

这是 OOP 的两个最核心的概念。

- **类 (Class)**：可以理解为是一个**模板**或者**蓝图**。它定义了一类事物应该具有的共同**属性**（成员变量）和**行为**（成员方法）。例如，“汽车”这个概念就是一个类。
- **对象 (Object)**：是根据**类**这个模板创建出来的**具体实例**。例如，你家的那辆“红色的特斯拉”就是一个对象。

**总结：类是抽象的，对象是具体的。**

### 6.1 定义一个类

我们来定义一个“学生”类（`Student`）。一个学生有什么？有姓名、有年龄。能做什么？能学习、能打招呼。

```java
// Student.java
public class Student {
    // 属性 (成员变量)
    String name;
    int age;

    // 行为 (成员方法)
    public void study() {
        System.out.println(name + " 正在努力学习 Java！");
    }

    public void sayHello() {
        System.out.println("大家好，我叫 " + name + "，今年 " + age + " 岁。");
    }
}
```

### 6.2 创建和使用对象

有了 `Student` 这个蓝图，我们就可以创建出具体的学生对象了。这个过程叫做**实例化**。

我们创建一个新的 `Main.java` 文件来使用 `Student` 类。

```java
// Main.java
public class Main {
    public static void main(String[] args) {
        // 1. 创建一个 Student 对象，我们叫他 studentA
        // new Student() 就是在根据蓝图创建一个具体的学生
        // Student studentA 就是给这个学生贴上一个名叫 studentA 的标签
        Student studentA = new Student();

        // 2. 给这个对象的属性赋值
        studentA.name = "小明";
        studentA.age = 18;

        // 3. 调用这个对象的行为（方法）
        studentA.sayHello();
        studentA.study();

        System.out.println("--------------------");

        // 4. 我们可以创建另一个完全独立的对象
        Student studentB = new Student();
        studentB.name = "小红";
        studentB.age = 17;
        studentB.sayHello();
        studentB.study();
    }
}
```

**运行结果：**

```bash
大家好，我叫 小明，今年 18 岁。
小明 正在努力学习 Java！
--------------------
大家好，我叫 小红，今年 17 岁。
小红 正在努力学习 Java！
```

看到了吗？`studentA` 和 `studentB` 是两个完全独立的对象，它们各自拥有自己的 `name` 和 `age`，但共享 `Student` 类中定义的 `study()` 和 `sayHello()` 行为。

## 7. 数组 (`Array`) 与 `Object` 类

- **数组 (`Array`)**: 是一种**定长**的、存放**相同类型**数据元素的容器。
    
    ```java
    // 声明一个能存放5个整数的数组
    int[] scores = new int[5];
    scores[0] = 99; // 通过索引赋值
    
    // 声明并直接初始化
    String[] names = {"小明", "小红", "小刚"};
    System.out.println(names[1]); // 输出 "小红"
    System.out.println("数组长度: " + names.length); // 使用 .length 获取长度
    ```
    
    数组的缺点是长度固定，不如集合灵活。
    
- **`Object` 类**: 在 Java 中，`Object` 类是所有类的“老祖宗”，位于 `java.lang` 包。如果你定义一个类时没有指定 `extends`，那么它就**默认继承 `Object` 类**。 这意味着所有对象都天生拥有 `Object` 类的方法，比如：
    
    - `toString()`: 返回对象的字符串表示，我们经常重写它。
    - `equals(Object obj)`: 比较两个对象是否相等，默认比较地址，通常需要重写。
    - `hashCode()`: 返回对象的哈希码。

#### 方法与参数 (Methods & Parameters)

我们来深入理解一下方法。

- **方法签名**: 方法名 + 参数列表。
- **参数**:
    - **值传递 (Pass by Value)**: Java 中**只有值传递**。
        - 当参数是**基本数据类型**时，传递的是值的**副本**。方法内对参数的修改，不影响外部的原始变量。
        - 当参数是**引用数据类型**（如对象、数组）时，传递的是**引用地址的副本**。方法内通过这个副本地址修改对象内部的状态，会影响到外部的原始对象。

## 8. 权限修饰符与 `final`

|修饰符|同一类|同一包|不同包子类|不同包非子类|
|---|---|---|---|---|
|`public`|✅|✅|✅|✅|
|`protected`|✅|✅|✅|❌|
|`default`|✅|✅|❌|❌|
|`private`|✅|❌|❌|❌|

- `final` 关键字：
    - 修饰**变量**：变为**常量**，只能赋值一次。`final double PI = 3.14;`
    - 修饰**方法**：该方法**不能被子类重写 (Override)**。
    - 修饰**类**：该类**不能被继承**。比如 `String` 类就是 `final` 的。
        
        java
        
        ```java
        class SuperClass {
            public final void show() { /* ... */ }
        }
        
        class SubClass extends SuperClass {
            // public void show() {} // [!code error] 编译错误！不能重写 final 方法
        }
        ```
        

## 9.`static` 静态成员

`static` 关键字用来修饰属于**类**而不是属于某个**对象实例**的成员。

- **静态属性 (Class Variable)**: 该类的所有对象**共享**同一个静态属性。
- **静态方法 (Class Method)**: 可以直接通过 `类名.方法名()` 调用，无需创建对象。

```java
public class Counter {
    public static int count = 0; // 静态属性，所有 Counter 对象共享
    public String name;

    public Counter(String name) {
        this.name = name;
        count++; // 每创建一个对象，count 就加 1
    }

    public static void showCount() { // 静态方法
        System.out.println("总共创建了 " + count + " 个对象。");
        // System.out.println(this.name); // [!code warning] 静态方法不能访问非静态成员(name)
    }
}

// --- 使用 ---
Counter c1 = new Counter("A");
Counter c2 = new Counter("B");
System.out.println(Counter.count); // 输出 2
Counter.showCount(); // 直接通过类名调用静态方法
```

## 10.枚举 (`enum`)

当一个变量的取值范围是有限且固定的几个值时，比如星期、季节、订单状态，就非常适合使用**枚举**。

`enum` 是一种特殊的类，它提供了一种类型安全的方式来表示一组常量。

java

```java
// 定义一个表示星期的枚举
public enum Weekday {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// --- 使用 ---
public class EnumDemo {
    public static void main(String[] args) {
        Weekday today = Weekday.FRIDAY;

        switch (today) {
            case MONDAY:
                System.out.println("周一，开始搬砖...");
                break;
            case FRIDAY: // [!code focus]
                System.out.println("周五，准备过周末！");
                break;
            default:
                System.out.println("平常的一天。");
                break;
        }
    }
}
```

**运行结果：**

bash

```bash
周五，准备过周末！
```

使用枚举比使用 `final static int` 常量更安全、更直观、功能更强大。

## 11. 面向对象的三大特性

OOP 之所以强大，主要归功于它的三个核心特性：**封装、继承、多态**。

### 11.1 封装 (Encapsulation)

封装，就是**把数据（属性）和操作数据的方法（行为）捆绑在一起（也就是放在一个类里），并对数据的访问进行限制**。

在上面的 `Student`例子中，我们可以直接 `studentA.age = -18;`，这显然是不合理的。封装就是为了解决这个问题。

**如何实现封装？**

1. 使用 `private` 关键字将属性设为私有，这样外部就不能直接访问了。
2. 提供 `public` 的 `get` 和 `set` 方法作为统一的出口，来获取和设置这些私有属性。我们可以在 `set` 方法中加入逻辑判断，确保数据的合理性。

我们来改造一下 `Student` 类：

```java{4-5,8-19}
// Student.java (封装后)
public class Student {
    // 1. 将属性私有化
    private String name;
    private int age;

    // 2. 提供 public 的 getter 和 setter 方法
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name; // this.name 指的是当前对象的 name 属性
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0 && age < 150) { // 在 setter 中加入数据校验
            this.age = age;
        } else {
            System.out.println("输入的年龄不合法！");
        }
    }

    // 行为 (成员方法)
    public void study() {
        System.out.println(name + " 正在努力学习 Java！");
    }

    public void sayHello() {
        System.out.println("大家好，我叫 " + name + "，今年 " + age + " 岁。");
    }
}
```

现在，我们这样使用它：

```java
// Main.java
public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        // student.name = "小明"; // 这行会报错！因为 name 是 private 的
        
        student.setName("小明");
        student.setAge(18); // 正常设置
        student.sayHello();

        student.setAge(-10); // 尝试设置一个不合法的值
        student.sayHello(); // 年龄没有被改变
    }
}
```

**运行结果：**

```bash
大家好，我叫 小明，今年 18 岁。
输入的年龄不合法！
大家好，我叫 小明，今年 18 岁。
```

封装的好处是：**隐藏内部细节，保护数据安全，同时向外部提供明确的接口**。

### 11.2 继承 (Inheritance)

继承，就是**让一个类（子类）获取另一个类（父类）的属性和方法**。这极大地提高了代码的复用性。

比如，“老师”和“学生”都是“人”，他们都有姓名和年龄。我们可以创建一个 `Person` 类，然后让 `Student` 和 `Teacher` 类都去**继承**它。

```java
// Person.java (父类)
public class Person {
    String name;
    int age;

    public void eat() {
        System.out.println(name + " 正在吃饭。");
    }
}

// Student.java (子类)
// 使用 extends 关键字来表示继承
public class Student extends Person {
    public void study() {
        // 子类可以直接使用父类的属性
        System.out.println(name + " 正在努力学习 Java！");
    }
}

// Teacher.java (子类)
public class Teacher extends Person {
    public void teach() {
        System.out.println(name + " 正在讲授 Java 课程。");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "小华";
        student.age = 19;
        student.study(); // 调用自己的方法
        student.eat();   // 调用从父类继承来的方法

        Teacher teacher = new Teacher();
        teacher.name = "王老师";
        teacher.age = 35;
        teacher.teach(); // 调用自己的方法
        teacher.eat();   // 调用从父类继承来的方法
    }
}
```

**运行结果：**

```bash
小华 正在努力学习 Java！
小华 正在吃饭。
王老师 正在讲授 Java 课程。
王老师 正在吃饭。
```

继承建立了类之间的 “is-a” 关系（学生是人，老师也是人），让代码结构更符合现实逻辑。

### 11.3 多态 (Polymorphism)

多态，字面意思是“**多种形态**”。它指的是**同一个行为，对于不同的对象，会产生不同的表现形态**。

实现多态主要依赖于：

1. **继承**：必须有子类和父类。
2. **方法重写 (Override)**：子类可以重新定义父类中的同名方法。
3. **父类引用指向子类对象**：`Person p = new Student();`

我们来看一个经典的例子：动物的叫声。

```java
// Animal.java (父类)
public class Animal {
    public void makeSound() {
        System.out.println("动物发出声音...");
    }
}

// Dog.java (子类)
public class Dog extends Animal {
    // @Override 是一个注解，表示这是在重写父类的方法，有助于编译器检查
    @Override
    public void makeSound() {
        System.out.println("小狗 汪汪汪！");
    }
}

// Cat.java (子类)
public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("小猫 喵喵喵~");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // 父类引用指向子类对象
        Animal myDog = new Dog(); 
        Animal myCat = new Cat();

        // 同样是调用 makeSound() 方法
        myDog.makeSound(); // 执行的是 Dog 类重写后的方法
        myCat.makeSound(); // 执行的是 Cat 类重写后的方法
    }
}
```

**运行结果：**

```bash
小狗 汪汪汪！
小猫 喵喵喵~
```

看，同样是 `Animal` 类型的变量，同样是调用 `makeSound()` 方法，但因为它们实际指向的对象不同（一个是 `Dog`，一个是 `Cat`），所以最终执行的行为也不同。这就是多态！

多态极大地提高了程序的**灵活性和可扩展性**。

---

呼~ 今天的内容信息量很大，我们正式踏入了面向对象的世界。理解并掌握**类、对象、封装、继承、多态**是学好 Java 的基石。这可能需要你花点时间消化和练习，试着把你身边的任何事物都用“类”的思维去建模，比如一部手机、一杯咖啡、一个英雄角色等等。

接下来，我们将继续深入 OOP，学习更高级的概念，如**抽象类 (Abstract Class)** 和 **接口 (Interface)**，它们是多态的进一步延伸和应用。

如果这部分内容让你感到兴奋，那就说明你已经开始领悟到编程的真正魅力了！我们下次再见！

我们已经学会了用“类”来构建我们程序的世界，并且通过“继承”和“多态”让这个世界变得生动起来。但有时候，我们会遇到一些更“抽象”的问题。比如，我们想定义一个“规则”，但不关心具体怎么实现，或者想定义一个“模板”，其中某些部分需要由“后人”来填写。

这就是我们要聊的**抽象类**和**接口**。它们是架构师们最喜欢的工具之一！

## 12. 抽象类 (Abstract Class)

我们回顾一下多态的例子：`Animal` 类有一个 `makeSound()` 方法。但问题来了，一个泛指的“动物”到底应该发出什么声音呢？这个问题没有答案，这个行为本身是**抽象**的。只有具体的动物，比如“狗”或“猫”，才知道自己该怎么叫。

为了解决这个问题，Java 提供了 `abstract` 关键字。

- **抽象方法**：一个只有方法声明，没有方法体（没有 `{}`）的方法，必须用 `abstract` 修饰。
- **抽象类**：一个包含抽象方法的类，必须用 `abstract` 修饰。

**核心思想：**

1. 抽象类**不能被实例化**（不能 `new`），因为它包含了未实现的方法，它存在的意义就是被继承。
2. 子类继承了抽象类，就**必须实现（重写）父类中所有的抽象方法**，否则子类也必须被声明为抽象类。

我们来改造一下 `Animal` 的例子：

```java{1,3,9,15}
// Animal.java (Abstract Class)
public abstract class Animal {
    // 抽象方法，没有方法体
    public abstract void makeSound();

    // 抽象类也可以有普通方法
    public void sleep() {
        System.out.println("Zzz...");
    }
}

// Dog.java
public class Dog extends Animal {
    // 必须重写父类的抽象方法
    @Override
    public void makeSound() {
        System.out.println("小狗 汪汪汪！");
    }
}

// Cat.java
public class Cat extends Animal {
    // 必须重写父类的抽象方法
    @Override
    public void makeSound() {
        System.out.println("小猫 喵喵喵~");
    }
}
```

**使用它：**

```java
// Main.java
public class Main {
    public static void main(String[] args) {
        // Animal animal = new Animal(); // 这行会报错！抽象类不能被实例化

        Animal myDog = new Dog();
        myDog.makeSound(); // 调用子类重写的方法
        myDog.sleep();     // 调用父类的普通方法

        Animal myCat = new Cat();
        myCat.makeSound();
        myCat.sleep();
    }
}
```

**运行结果：**

```bash
小狗 汪汪汪！
Zzz...
小猫 喵喵喵~
Zzz...
```

抽象类就像一个半成品，它规定了子类必须完成哪些工作，同时也可以提供一些通用的功能。

## 13. 接口 (Interface)

如果说抽象类是“半成品”，那接口就是**纯粹的“规范”和“契约”**。它比抽象类还要抽象。

想象一下你电脑上的 USB 接口。它定义了一套标准：能供电、能传输数据。它不关心你插上来的是鼠标、键盘、U盘还是手机。任何设备，只要遵循了 USB 这个**接口规范**，就能被电脑识别和使用。

在 Java 中，`interface` 就是这样的角色。

**核心思想：**

1. 接口使用 `interface` 关键字定义。
2. 接口中所有的方法**默认都是 `public abstract` 的**（所以这两个关键字可以省略）。
3. 接口**不能被实例化**。
4. 一个类通过 `implements` 关键字来实现一个或多个接口。
5. 一个类实现了接口，就**必须实现接口中定义的所有方法**。

**代码示例：**

```java{1,2,3,8,14}
// USB.java (Interface)
public interface USB {
    void connect();    // 默认就是 public abstract void connect();
    void disconnect(); // 默认就是 public abstract void disconnect();
}

// Mouse.java
// 一个类可以实现多个接口，用逗号隔开
public class Mouse implements USB {
    @Override
    public void connect() {
        System.out.println("鼠标已连接，开始工作！");
    }
    @Override
    public void disconnect() {
        System.out.println("鼠标已断开。");
    }
}

// Keyboard.java
public class Keyboard implements USB {
    @Override
    public void connect() {
        System.out.println("键盘已连接，可以打字了！");
    }
    @Override
    public void disconnect() {
        System.out.println("键盘已断开。");
    }
}
```

**接口最大的用处在于，定义一种规范，然后通过多态来使用：**

```java
// Computer.java
public class Computer {
    // 这个方法可以接收任何实现了 USB 接口的对象
    public void plugIn(USB device) {
        device.connect();
    }
    
    public static void main(String[] args) {
        Computer myComputer = new Computer();
        
        Mouse myMouse = new Mouse();
        Keyboard myKeyboard = new Keyboard();
        
        myComputer.plugIn(myMouse);    // 传入 Mouse 对象
        myComputer.plugIn(myKeyboard); // 传入 Keyboard 对象
    }
}
```

**运行结果：**

```bash
鼠标已连接，开始工作！
键盘已连接，可以打字了！
```

接口定义了一种“**能力**”。任何类只要实现了这个接口，就表明它具备了这个能力，可以被同样的方式来对待。

### 抽象类 vs. 接口

这是一个经典问题，也是理解 OOP 设计的关键。

|特性|抽象类 (`abstract class`)|接口 (`interface`)|
|---|---|---|
|**继承关系**|`extends`，Java 中**单继承**（一个类只能有一个父类）|`implements`，Java 中**多实现**（一个类可以实现多个接口）|
|**成员变量**|可以有各种类型的成员变量|只能有 `public static final` 的常量（即全局常量）|
|**成员方法**|可以有抽象方法，也可以有具体的、已实现的方法|在 Java 8 之前只能有抽象方法，之后可以有 `default` 和 `static` 方法|
|**构造方法**|有构造方法（但不能直接 `new`，用于子类 `super()` 调用）|没有构造方法|
|**设计理念**|“**is-a**” 关系，强调所属关系，如 `Dog` is a `Animal`。|“**can-do**” 关系，强调能力，如 `Phone` can do `USB` connect。|

## 14. 匿名内部类 (Anonymous Inner Class)

有时候，我们想实现一个接口或者继承一个类，但这个实现**只会用到一次**。专门为它创建一个新的 `.java` 文件似乎有点小题大做。这时，匿名内部类就派上用场了。

它就像一个“一次性”的类，没有名字，定义和实例化一步完成。

**代码示例：**

```java
public class AnonymousDemo {
    public static void main(String[] args) {
        // 传统方式：需要先创建一个类去实现接口
        // USB myFan = new Fan();
        // myFan.connect();

        // 使用匿名内部类的方式
        // 这里 new 的不是 USB 接口，而是 new 了一个实现了 USB 接口的、没有名字的类的对象
        USB myFan = new USB() {
            @Override
            public void connect() {
                System.out.println("小风扇已连接，开始吹风~");
            }

            @Override
            public void disconnect() {
                System.out.println("小风扇已断开。");
            }
        }; // 注意这里有个分号

        myFan.connect();
    }
}
```

**运行结果：**

```bash
小风扇已连接，开始吹风~
```

这种写法在事件监听、多线程等场景下非常常见，能让代码更紧凑。

## 15. 异常处理 (Exception Handling)

写程序就像开车，即使我们再小心，也可能遇到意外情况，比如用户输入了错误的数据、要读取的文件不存在、网络突然断开等等。如果不对这些“意外”进行处理，程序就会“崩溃”并终止。

**异常 (Exception)** 就是 Java 中处理这些意外情况的机制。

### `try-catch-finally`

这是 Java 异常处理的核心语法。

- `try`：把**可能出现异常**的代码块放进这里。
- `catch`：如果 `try` 块中发生了**指定类型**的异常，就执行 `catch` 块中的代码来“捕获”和处理它。
- `finally`：无论是否发生异常，`finally` 块中的代码**总会执行**。通常用来做资源释放等清理工作。

**代码示例：**

```java{2,6,9}
public class ExceptionDemo {
    public static void main(String[] args) {
        try {
            // 尝试执行可能出错的代码
            System.out.println("尝试进行除法运算...");
            int result = 10 / 0; // 这里会产生一个算术异常 (ArithmeticException)
            System.out.println("计算结果: " + result); // 这行不会被执行
        } catch (ArithmeticException e) {
            // 捕获并处理异常
            System.out.println("出错了！捕获到算术异常！");
            System.out.println("错误信息: " + e.getMessage()); // 打印异常信息
        } finally {
            // 无论如何都会执行的代码
            System.out.println("运算结束，finally 块被执行。");
        }

        System.out.println("程序继续正常运行...");
    }
}
```

**运行结果：**

```bash
尝试进行除法运算...
出错了！捕获到算术异常！
错误信息: / by zero
运算结束，finally 块被执行。
程序继续正常运行...
```

如果没有 `try-catch`，程序在 `10 / 0` 那一行就会直接崩溃并终止，最后一句 "程序继续正常运行..." 就不会被打印出来。异常处理保证了程序的**健壮性**。

---

今天我们学习了面向对象设计中的高级武器——抽象类和接口，以及保证程序稳定运行的护盾——异常处理。这些概念的结合，才能让我们构建出真正健壮、灵活、可扩展的软件系统。

## 16. 包与模块 (Packages & Modules)

随着项目越来越大，我们写的类会越来越多。为了更好地管理它们，避免命名冲突，Java 提供了“包”的机制。

#### 包 (`package`)

**包**，你可以直接理解为**文件夹**。它是一种命名空间的管理机制。

- **作用**：
    1. **区分同名类**：不同包下可以有同名的类，比如 `com.a.User` 和 `com.b.User`。
    2. **管理类**：将功能相关的类放在同一个包下，便于查找和维护。
- **声明**：必须在 Java 源文件的**第一行**声明该文件所属的包。
    
    
    ```java
    package com.bilibili.learning; // [!code focus]
    
    public class MyFirstClass {
        // ...
    }
    ```
    
    这表示 `MyFirstClass.java` 文件应该放在 `com/bilibili/learning` 这个目录结构下。

#### 导入 (`import`)

如果想在当前类中使用另一个包下的类，就需要使用 `import` 语句将其“导入”。

```java
package com.bilibili.app;

import java.util.ArrayList; // 精确导入 ArrayList 类
import java.util.List;
// import java.util.*; // 也可以使用通配符*导入 java.util 包下的所有类

public class MainApp {
    public static void main(String[] args) {
        // 因为已经 import，所以可以直接使用类名，而不需要写完整路径
        List<String> list = new ArrayList<>();
    }
}
```

::: tip 提示 
推荐使用精确导入，而不是 `*` 通配符。这样能让代码的可读性更强，一眼就知道你用了哪些类。
:::


到这里，JavaSE 的核心语法和面向对象思想我们基本上都过了一遍。你已经从一个“门外汉”变成了手持利器的“准武士”！

接下来，Java 还为我们提供了大量现成的、非常强大的工具库，比如用于存放和管理数据的**集合框架 (Collections)**、用于文件读写的 **IO 流**等等。下一篇笔记，我们将开始探索这些实用的工具！继续加油！