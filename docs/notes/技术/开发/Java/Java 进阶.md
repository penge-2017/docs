
Hello，各位小伙伴！

到目前为止，我们已经像一个武林高手一样，掌握了 Java 的内功心法（面向对象）和基本招式（语法）。但是，光有这些还不够，我们还需要一些神兵利器。

想象一下，如果你有一堆书，或者一堆游戏卡带，你要怎么存放和管理它们？用一个固定大小的箱子（数组）吗？如果书越来越多，箱子不够大了怎么办？如果想快速找到某一本书怎么办？

Java 的**集合框架**就是为了解决这类问题而生的神兵利器。

## 1. 集合框架简介 (Collections Framework)

简单来说，集合框架就是 Java 提供的一套**用来存储和操作一组对象**的标准化工具。它位于 `java.util` 包中。

和数组（`Array`）相比，集合的优势在于：

- **长度可变**：可以动态地添加或删除元素，不用担心容量问题。
- **功能丰富**：提供了大量现成的方法，如查找、排序、遍历等。
- **类型多样**：提供了不同类型的集合，如 `List`、`Set`、`Map`，以适应不同的需求。

集合框架主要包含三大核心接口：`List`、`Set` 和 `Map`。我们来逐一认识它们。

## 2. `List` - 可重复的有序列表

`List` 是一个**有序**的集合，它允许我们存入**重复**的元素。你可以把它想象成一个播放列表，歌曲有先后顺序，而且同一首歌可以出现多次。

最常用的 `List` 实现类是 `ArrayList`。

**`ArrayList` 特点：**

- 底层是基于数组实现的。
- 查询快（因为有索引），增删慢（因为可能需要移动大量元素）。

**代码示例：**

我们来创建一个水果列表。

```java:line-numbers
import java.util.ArrayList;
import java.util.List;

public class ListDemo {
    public static void main(String[] args) {
        // 创建一个只能存放 String 类型元素的 List
        // 使用接口类型 List 作为引用，这是推荐的做法（多态）
        List<String> fruits = new ArrayList<>(); // [!code focus]

        // 1. 添加元素
        fruits.add("苹果");
        fruits.add("香蕉");
        fruits.add("橘子");
        fruits.add("香蕉"); // List 允许重复元素 // [!code focus]

        System.out.println("水果列表: " + fruits);

        // 2. 获取元素 (通过索引，从0开始)
        String firstFruit = fruits.get(0); // [!code focus]
        System.out.println("第一个水果是: " + firstFruit);

        // 3. 获取列表大小
        System.out.println("列表里有 " + fruits.size() + " 个水果。");

        // 4. 遍历列表 (使用增强 for 循环)
        System.out.println("--- 遍历所有水果 ---");
        for (String fruit : fruits) { // [!code focus]
            System.out.println(fruit);
        }
    }
}
```

**运行结果：**

```bash
水果列表: [苹果, 香蕉, 橘子, 香蕉]
第一个水果是: 苹果
列表里有 4 个水果。
--- 遍历所有水果 ---
苹果
香蕉
橘子
香蕉
```

::: tip 
泛型 (Generics) 你可能注意到了 `<String>` 这个东西，它叫做**泛型**。它限定了这个 List 只能存放 `String` 类型的元素。这样做的好处是**类型安全**，在编译时就能检查出你是否放了错误类型的元素，避免了在运行时出错。
:::

## 3. `Set` - 不重复的无序集合

`Set` 是一个**不包含重复元素**的集合。它通常是**无序**的，也就是说，你存入元素的顺序和取出来的顺序可能不一样。你可以把它想象成一个标签云，每个标签都是独一无二的。

最常用的 `Set` 实现类是 `HashSet`。

**`HashSet` 特点：**

- 基于哈希表实现，保证了元素的唯一性。
- 添加和查找元素的速度非常快。

**代码示例：**

我们来管理一篇文章的标签。

```java:line-numbers
import java.util.HashSet;
import java.util.Set;

public class SetDemo {
    public static void main(String[] args) {
        Set<String> tags = new HashSet<>();

        // 1. 添加元素
        tags.add("Java");
        tags.add("编程");
        tags.add("学习");
        boolean isAdded = tags.add("Java"); // 尝试添加一个重复的元素 // [!code focus]

        System.out.println("标签集合: " + tags);
        System.out.println("第二次添加 'Java' 成功了吗? " + isAdded); // 会返回 false

        // 2. 检查是否包含某个元素
        boolean hasJava = tags.contains("Java"); // [!code focus]
        System.out.println("集合里包含 'Java' 吗? " + hasJava);

        // 3. 遍历集合
        System.out.println("--- 遍历所有标签 ---");
        for (String tag : tags) {
            System.out.println(tag);
        }
    }
}
```

**运行结果：**

```bash
标签集合: [Java, 学习, 编程]
第二次添加 'Java' 成功了吗? false
集合里包含 'Java' 吗? true
--- 遍历所有标签 ---
Java
学习
编程
```

注意看，"Java" 只出现了一次，并且输出的顺序和我们添加的顺序可能不同。

## 4. `Map` - 键值对存储

`Map` 是一个存储**键值对 (Key-Value)** 的集合。每个元素都由一个唯一的**键 (Key)** 和一个对应的**值 (Value)** 组成。你可以把它想象成一本字典，通过“单词”（Key）来查找它的“释义”（Value）。

最常用的 `Map` 实现类是 `HashMap`。

**`HashMap` 特点：**

- Key 是唯一的，不能重复。如果用同一个 Key 多次存入，后面的值会覆盖前面的值。
- 根据 Key 计算出存储位置，查找、添加、删除的速度极快。
- 通常是无序的。

**代码示例：**

我们来存储学生姓名和他们的分数。

```java:line-numbers{18-21}
import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
        Map<String, Integer> studentScores = new HashMap<>();

        // 1. 添加键值对 (Key: 学生姓名, Value: 分数)
        studentScores.put("小明", 95);
        studentScores.put("小红", 88);
        studentScores.put("小刚", 92);
        studentScores.put("小明", 100); // 使用相同的 Key，会覆盖原来的值

        System.out.println("学生分数表: " + studentScores);

        // 2. 根据 Key 获取 Value
        int xiaomingsScore = studentScores.get("小明");
        System.out.println("小明的最终分数是: " + xiaomingsScore);

        // 3. 遍历 Map (推荐方式)
        System.out.println("--- 遍历所有学生和分数 ---");
        for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
            String name = entry.getKey();
            Integer score = entry.getValue();
            System.out.println(name + " 的分数是: " + score);
        }
    }
}
```

**运行结果：**

```bash
学生分数表: {小刚=92, 小明=100, 小红=88}
小明的最终分数是: 100
--- 遍历所有学生和分数 ---
小刚 的分数是: 92
小明 的分数是: 100
小红 的分数是: 88
```

看到没？`小明` 的分数被更新为了 `100`。我特意高亮了遍历 `Map` 的代码，这是最常用也是最高效的方式。

---

今天我们学习了 Java 中极为重要的集合框架。`List`、`Set`、`Map` 是你未来编程生涯中每天都会打交道的“老朋友”，熟练掌握它们，你的开发效率会大大提升。

当然，集合框架远不止这些，还有 `LinkedList`、`TreeSet`、`TreeMap` 等等，它们各有各的特点和适用场景。但作为入门，掌握 `ArrayList`、`HashSet` 和 `HashMap` 的基本用法，就已经足够应对 80% 的场景了。

我们的工具箱里又多了三件神兵利器！下一站，我们将探索如何与计算机的文件系统进行交互——**IO 流**，学习如何读取和写入文件。准备好了吗？我们下次见！

我们已经知道如何用集合来漂亮地组织和管理程序运行时的数据了。但这些数据都存在于内存中，一旦程序结束，它们就烟消云散了。如果我们想把程序的运行结果，比如一篇编辑好的文章、一份用户列表，保存下来，下次还能用，该怎么办呢？

答案就是 **IO (Input/Output)**。今天，我们就来学习如何让我们的 Java 程序与硬盘上的文件进行“对话”。

## 5. 什么是 IO 流？

**IO** 指的是**输入(Input)**和**输出(Output)**。在计算机中，数据就像水流一样，可以从一个地方流向另一个地方。这个流动的过程，我们就可以抽象地看作是一个“**流 (Stream)**”。

- **输入流 (Input Stream)**：数据从外部（如文件、网络）流向你的程序。这个过程就是**读取**。
- **输出流 (Output Stream)**：数据从你的程序流向外部（如文件、网络）。这个过程就是**写入**。

::: tip 
关键视角 记住，输入和输出都是**以程序为中心**的。

- 数据**进入**程序，叫输入。
- 数据**走出**程序，叫输出。 
:::

Java 的 IO体系设计得非常精巧，它把各种复杂的输入输出源（文件、网络、键盘等）都统一抽象成了“流”，我们只需要学会操作流，就能和这些设备打交道了。

## 6. 字节流与字符流

Java 的 IO 流主要分为两大类：

1. **字节流 (Byte Stream)**：
    
    - 处理数据的基本单位是**字节 (byte)**。
    - 它是万能的，可以处理**任何类型**的文件，包括文本、图片、音频、视频等。
    - 父类是 `InputStream` 和 `OutputStream`。
2. **字符流 (Character Stream)**：
    
    - 处理数据的基本单位是**字符 (char)**。
    - 它**专门用于处理纯文本文件** (`.txt`, `.java`, `.md` 等)。
    - 它的底层其实还是字节流，但它加上了**编码/解码**的功能，能自动帮我们处理各种字符集（如 UTF-8, GBK），避免出现“乱码”问题。
    - 父类是 `Reader` 和 `Writer`。

**简单原则**：处理纯文本，优先使用字符流；处理图片、视频等二进制文件，必须使用字节流。

## 7. 文件操作实战

说了这么多理论，我们来动手实战一下！我们将在项目根目录下创建一个名为 `my_note.txt` 的文件，并向其中写入和读取内容。

### 7.1 写入文件 (Output/Writer)

我们的目标是向 `my_note.txt` 文件中写入一句话 "Hello, Java IO!"。

这里，我们使用一种“**装饰者模式**”的组合，这是 Java IO 的经典用法： `BufferedWriter` (提供缓冲，提高效率) -> `OutputStreamWriter` (将字符流转换为字节流，可指定编码) -> `FileOutputStream` (真正与文件连接的字节流)。

```java:line-numbers
import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

public class WriteToFileDemo {
    public static void main(String[] args) {
        // try-with-resources 语句，可以自动关闭流，无需手动 finally 关闭
        try (FileOutputStream fos = new FileOutputStream("my_note.txt"); // [!code focus]
             OutputStreamWriter osw = new OutputStreamWriter(fos, StandardCharsets.UTF_8); // [!code focus]
             BufferedWriter writer = new BufferedWriter(osw)) { // [!code focus]

            writer.write("Hello, Java IO!"); // 写入第一行
            writer.newLine(); // 写入一个换行符
            writer.write("学习 IO 流让我可以保存数据了！"); // 写入第二行

            System.out.println("文件写入成功！");

        } catch (IOException e) {
            System.err.println("文件写入时发生错误: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

**运行结果：**

```bash
文件写入成功！
```

运行完这段代码后，你会在你的项目目录下发现一个 `my_note.txt` 文件，打开它，内容如下：

```txt
Hello, Java IO!
学习 IO 流让我可以保存数据了！
```

::: details 关键代码解释

- **`try-with-resources` (第 12 行)**: 这是 Java 7 引入的语法糖，所有在 `try()` 中声明的、实现了 `AutoCloseable` 接口的资源（比如各种流），都会在 `try` 块结束时被自动关闭。这极大地简化了代码，并避免了忘记关闭流导致的资源泄漏。
- **`FileOutputStream` (第 13 行)**: 创建一个文件输出字节流，连接到名为 `my_note.txt` 的文件。如果文件不存在，它会自动创建。
- **`OutputStreamWriter` (第 14 行)**: 这是一个“桥梁”，它把接收到的字符，按照指定的编码（我们用了 `StandardCharsets.UTF_8`，这是通用标准）转换成字节，然后交给 `FileOutputStream` 写入文件。
- **`BufferedWriter` (第 15 行)**: 这是一个“包装器”，它内部有一个缓冲区（一个内存区域）。你调用 `write` 时，数据先写入缓冲区，等缓冲区满了或者你手动刷新/关闭时，才一次性写入文件。这比每次都直接操作硬盘要快得多。 
:::

### 7.2 读取文件 (Input/Reader)

现在，我们再写一个程序，把刚才保存的 `my_note.txt` 文件的内容读取出来，并打印到控制台。

读取的组合与写入类似： `BufferedReader` -> `InputStreamReader` -> `FileInputStream`

```java:line-numbers{11-13,17}
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

public class ReadFromFileDemo {
    public static void main(String[] args) {
        System.out.println("--- 开始读取文件 ---");
        try (FileInputStream fis = new FileInputStream("my_note.txt");
             InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.UTF_8);
             BufferedReader reader = new BufferedReader(isr)) {

            String line;
            // 循环读取每一行，直到文件末尾 (readLine() 返回 null)
            while ((line = reader.readLine()) != null) {
                System.out.println(line); // 打印读取到的行
            }

        } catch (IOException e) {
            System.err.println("文件读取时发生错误: " + e.getMessage());
            e.printStackTrace();
        }
        System.out.println("--- 文件读取完毕 ---");
    }
}
```

**运行结果：**

```bash
--- 开始读取文件 ---
Hello, Java IO!
学习 IO 流让我可以保存数据了！
--- 文件读取完毕 ---
```

看，我们成功地把文件内容读回了程序中！我特意高亮了**第 17 行**，这个 `while` 循环是读取文本文件的经典写法，一定要掌握！

### 7.3. `File` 类

最后，我们简单介绍一下 `java.io.File` 类。注意，`File` 类本身**不能读写文件内容**，它代表的是文件或目录在硬盘上的一个**路径**。

你可以用它来：

- 创建、删除文件或文件夹。
- 获取文件名、路径、大小等信息。
- 判断文件/文件夹是否存在。

```java:line-numbers
import java.io.File;
import java.io.IOException;

public class FileClassDemo {
    public static void main(String[] args) {
        File file = new File("my_note.txt");

        if (file.exists()) {
            System.out.println("文件存在！");
            System.out.println("文件名: " + file.getName());
            System.out.println("绝对路径: " + file.getAbsolutePath());
            System.out.println("文件大小: " + file.length() + " 字节");
        } else {
            System.out.println("文件不存在！");
        }
    }
}
```

**运行结果：**

```bash
文件存在！
文件名: my_note.txt
绝对路径: D:\your\project\path\my_note.txt
文件大小: 53 字节
```

---

太棒了！今天我们解锁了一项至关重要的技能：文件 IO。现在你的程序不再是“一次性”的了，它可以将状态和结果持久化，真正地与计算机的存储系统交互。

我们学习了 IO 流的概念，区分了字节流和字符流，并掌握了使用“包装器”和 `try-with-resources` 来高效、安全地读写文本文件。

到此，JavaSE 的一些最核心、最基础的模块我们都已经涉猎了。接下来，我们将进入一个非常酷炫的话题——**多线程**。学习如何让你的程序能够“一心多用”，同时执行多个任务！准备好让你的程序“分身”了吗？我们下次笔记见！

想象一下，你在用电脑的时候，是不是可以一边听着音乐（音乐播放器在运行），一边在网上冲浪（浏览器在运行），同时后台还在下载一个游戏（下载软件在运行）？你的电脑是如何做到“一心多用”的？

在我们的程序中，也可以实现类似的效果。比如，一个网络云盘程序，它可以一边为你展示文件列表，一边在后台上传你刚刚选择的文件。这就是**多线程**的魅力！

## 8. 进程 (Process) 与 线程 (Thread)

在开始写代码前，我们得先分清两个基本概念：

- **进程 (Process)**：指的是一个正在运行的应用程序。比如你打开的微信、VS Code，它们每一个都是一个独立的进程。操作系统会为每个进程分配独立的内存空间，所以进程之间的数据是隔离的，相对安全。
- **线程 (Thread)**：是进程中的一条执行路径（或称为一个执行单元）。一个进程中至少有一个线程（主线程），也可以有多个线程。**同一个进程内的所有线程，共享该进程的内存资源**。

::: tip B站小剧场

- **进程**就像是B站这个公司。
- **线程**就像是公司里的员工，比如“视频审核员”、“弹幕管理员”、“直播推流员”。
- 所有员工（线程）都在B站这个公司（进程）里工作，共享公司的资源（服务器、数据库等）。他们可以分工合作，同时干多件事情，提高了整个公司的效率。 
:::

## 9. 如何创建线程？

在 Java 中，创建和启动一个新线程主要有两种方式。

### 方式一：继承 `Thread` 类

这是最直观的方式。

1. 创建一个类，让它继承 `java.lang.Thread` 类。
2. 重写 `run()` 方法，把这个线程需要执行的任务代码写在 `run()` 方法里。
3. 创建这个子类的对象，并调用它的 `start()` 方法来启动线程。

**代码示例：**

```java:line-numbers
// MyThread.java
public class MyThread extends Thread { // [!code focus]
    @Override
    public void run() { // [!code focus]
        // 这个线程要执行的任务
        for (int i = 0; i < 5; i++) {
            System.out.println("子线程 " + Thread.currentThread().getName() + " 正在运行: " + i);
        }
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("主线程 " + Thread.currentThread().getName() + " 开始运行。");

        MyThread thread1 = new MyThread();
        thread1.start(); // [!code focus]

        for (int i = 0; i < 5; i++) {
            System.out.println("主线程 " + Thread.currentThread().getName() + " 正在运行: " + i);
        }
    }
}
```

::: warning 

`start()` vs `run()` **一定要调用 `start()` 方法！**

- `thread1.start()`: 这会告诉 JVM：“请帮我开启一个新的线程，并让它去执行 `run()` 方法里的代码”。这是真正的多线程。
- `thread1.run()`: 这仅仅是当成一个普通的方法来调用，代码还是在当前线程（主线程）中执行，并没有开启新的线程。 
:::

**可能的运行结果：**

```bash
主线程 main 开始运行。
主线程 main 正在运行: 0
子线程 Thread-0 正在运行: 0
主线程 main 正在运行: 1
子线程 Thread-0 正在运行: 1
主线程 main 正在运行: 2
主线程 main 正在运行: 3
子线程 Thread-0 正在运行: 2
主线程 main 正在运行: 4
子线程 Thread-0 正在运行: 3
子线程 Thread-0 正在运行: 4
```

你会发现，主线程和子线程的输出是交错在一起的。这就是多线程并发执行的体现，谁先谁后由 CPU 的调度决定，每次运行结果可能都不同。

### 方式二：实现 `Runnable` 接口 (更推荐)

这种方式更受欢迎，因为它更灵活。Java 是单继承的，如果你的类已经继承了别的类，就不能再继承 `Thread` 了。而接口可以实现多个。

1. 创建一个类，实现 `java.lang.Runnable` 接口。
2. 实现接口中的 `run()` 方法。
3. 创建一个 `Thread` 对象，并将你的 `Runnable` 实现类对象作为参数传给 `Thread` 的构造函数。
4. 调用 `Thread` 对象的 `start()` 方法。

**代码示例：**

```java:line-numbers
// MyTask.java
public class MyTask implements Runnable { // [!code focus]
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("任务线程 正在运行: " + i);
        }
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        MyTask task = new MyTask(); // 创建任务对象
        Thread thread = new Thread(task); // 创建线程并关联任务 // [!code focus]
        thread.start(); // 启动线程

        System.out.println("主线程继续执行自己的任务...");
    }
}
```

这种方式将**任务（做什么）**和**线程（谁来做）**分离开来，是更好的面向对象设计。

## 10.线程的创建与执行方式

我们之前讲了两种，现在补充第三种，并用 `code-group` 对比。

::: code-group

```java [MyThread.java]
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("通过继承Thread创建");
    }
}
// 启动: new MyThread().start();
```

```java [MyTask.java]
public class MyTask implements Runnable {
    @Override
    public void run() {
        System.out.println("通过实现Runnable创建");
    }
}
// 启动: new Thread(new MyTask()).start();
```

```java [LambdaThread.java]
public class LambdaThread {
    public static void main(String[] args) {
        // Runnable 是一个函数式接口，可以直接用 Lambda 简化
        new Thread(() -> { // [!code focus]
            System.out.println("通过Lambda表达式创建");
        }).start();
    }
}
```

:::

Lambda 表达式是目前最简洁、最流行的方式。
## 11.线程休眠 (`Thread.sleep`)

`Thread.sleep(long millis)` 是一个**静态方法**，可以让**当前正在执行的线程**暂停指定的毫秒数。这常用于模拟网络延迟或控制执行频率。

```java
System.out.println("开始");
try {
    Thread.sleep(2000); // 让主线程休眠2秒
} catch (InterruptedException e) {
    e.printStackTrace();
}
System.out.println("结束");
```

## 12.同步 (`Synchronous`) 与异步 (`Asynchronous`)

这是一个非常重要的概念。

- **同步**: 方法调用时，调用者必须**等待**该方法执行完毕并返回结果，才能继续执行下一步。就像你去餐厅点餐，必须在柜台前等着厨师做好，拿到餐才能走。我们之前用的 `synchronized` 就是一种强制同步的机制。
    
    - **优点**：逻辑简单，符合常规思维。
    - **缺点**：容易发生阻塞，性能较低。
- **异步**: 方法调用时，调用者**不直接等待**结果，而是立即返回，可以继续做别的事情。被调用的方法会在后台自己执行，执行完毕后通过某种方式（如回调函数）通知调用者。就像你点外卖，下单后就可以去玩游戏了，外卖到了手机会通知你。
    
    - **优点**：不会阻塞，能充分利用 CPU，提高程序性能。
    - **缺点**：逻辑比同步复杂。

**多线程编程的核心，就是将耗时的任务（如文件下载、网络请求）异步化，从而避免主线程（如 UI 线程）被阻塞，提升用户体验。**
## 13. 线程安全问题

既然多个线程共享内存，那问题就来了。如果多个线程同时去修改同一个数据，会发生什么？

**这就是线程安全问题，也叫“数据争用” (Race Condition)。**

我们来看一个经典的银行取钱例子：假设一个账户有 1000 元，两个人（两个线程）同时去取钱，每人都想取 800 元。

```java:line-numbers
public class UnsafeBank {
    public static void main(String[] args) {
        Account account = new Account(1000); // 一个共享账户

        // 两个人同时取钱
        new Thread(new DrawingTask(account, 800), "小明").start();
        new Thread(new DrawingTask(account, 800), "小红").start();
    }
}

class Account {
    int balance;
    public Account(int balance) {
        this.balance = balance;
    }
}

class DrawingTask implements Runnable {
    Account account;
    int amount;

    public DrawingTask(Account account, int amount) {
        this.account = account;
        this.amount = amount;
    }

    @Override
    public void run() {
        // 检查余额是否足够
        if (account.balance >= amount) { // [!code focus]
            // 模拟网络延迟或处理时间
            try { Thread.sleep(100); } catch (InterruptedException e) {}

            account.balance -= amount; // [!code focus]
            System.out.println(Thread.currentThread().getName() + " 取款成功，余额: " + account.balance);
        } else {
            System.out.println(Thread.currentThread().getName() + " 取款失败，余额不足。");
        }
    }
}
```

**可能出现的灾难性结果：**

```bash
小明 取款成功，余额: 200
小红 取款成功，余额: -600
```

**为什么会这样？**

1. 小明线程执行到第 34 行，判断 `1000 >= 800`，成立。
2. 此时 CPU 切换，小红线程开始执行。它也执行到第 34 行，判断 `1000 >= 800`，也成立。
3. 然后小明线程继续执行，扣款，余额变为 200。
4. 小红线程也继续执行，它在自己之前判断的基础上扣款，`1000 - 800`，但此时 `balance` 已经是 200 了，所以最终结果是 `200 - 800 = -600`！账户被透支了！

### 使用 `synchronized` 解决问题

为了解决这个问题，Java 提供了 `synchronized` 关键字，它可以给一段代码或一个方法“上锁”。当一个线程进入被 `synchronized` 保护的代码块时，它会获得一个锁，其他线程想进入就必须等待，直到这个线程执行完毕并释放锁。

我们来修改 `run` 方法：

```java:line-numbers{3-5}
// ...
@Override
public void run() {
    // 对共享的 account 对象加锁
    synchronized (account) { // [!code focus]
        if (account.balance >= amount) {
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            account.balance -= amount;
            System.out.println(Thread.currentThread().getName() + " 取款成功，余额: " + account.balance);
        } else {
            System.out.println(Thread.currentThread().getName() + " 取款失败，余额不足。");
        }
    } // [!code focus] 锁在这里被释放
}
// ...
```

**现在再运行，结果就正确了：**

```bash
小明 取款成功，余额: 200
小红 取款失败，余额不足。
```

或者

```bash
小红 取款成功，余额: 200
小明 取款失败，余额不足。
```

`synchronized` 保证了同一时间只有一个线程能操作账户，确保了操作的**原子性**，从而保证了线程安全。

---

我们今天打开了并发编程的大门，这是一个既强大又复杂的世界。我们学会了如何创建线程，并初步了解了最常见的线程安全问题以及如何用 `synchronized` 来解决它。

JavaSE 的核心知识之旅到这里就差不多接近尾声了。我们从最基础的变量、运算符，到面向对象的封装、继承、多态，再到实用的集合、IO，最后到高级的多线程，你已经构建起了一套完整的 Java 基础知识体系！

在之前的旅程中，我们已经掌握了 Java 的绝大部分武功，从基本招式到内功心法，再到各种神兵利器。今天，我们要来学习一门堪称“禁术”的绝学——**反射 (Reflection)**。

这门技术赋予了我们在程序**运行时**去动态地了解和操作任何一个对象的能力，无论它的访问权限是 `public` 还是 `private`。它非常强大，是无数流行框架（如 Spring）的基石，但同时，如果滥用它，也可能带来风险。

准备好了吗？让我们揭开反射的神秘面纱！

## 14. 什么是反射？

**反射 (Reflection)** 是 Java 提供的一种机制，它允许一个正在运行的 Java 程序**检查 (inspect)** 和**修改 (modify)** 其自身的内部结构。

::: tip 
魔法镜子来解释 你可以把反射想象成一面“魔法镜子”。普通的程序只能使用一个对象，但不知道这个对象具体是怎么构成的。而通过反射这面镜子，程序不仅能看到对象，还能看清它的所有细节：它属于哪个类？它有哪些属性（哪怕是私有的）？它有哪些方法？甚至可以透过镜子去**改变它的属性**或**调用它的方法**。 
:::

这种在运行时“看透”并“操控”对象的能力，使得 Java 语言变得极其灵活。

### 14.1. 反射的基石：`Class` 对象

要使用反射，我们的第一步，也是最关键的一步，是获取目标类的**`Class` 对象**。

在 Java 中，每当一个类被加载到 JVM 中，JVM 就会为这个类创建一个独一无二的 `java.lang.Class` 类的实例。这个 `Class` 对象就包含了该类的所有信息，是我们进行反射操作的入口。

获取 `Class` 对象主要有三种方式：

```java:line-numbers
public class GetClassDemo {
    public static void main(String[] args) throws ClassNotFoundException {
        // 方式一：通过类名.class 获取 (最安全、性能最好)
        Class<String> strClass1 = String.class;

        // 方式二：通过对象的 getClass() 方法获取
        String myString = "Hello";
        Class<?> strClass2 = myString.getClass();

        // 方式三：通过 Class.forName("完整类名") 获取 (最灵活，常用于框架)
        Class<?> strClass3 = Class.forName("java.lang.String"); // [!code focus]

        System.out.println(strClass1 == strClass2); // true
        System.out.println(strClass2 == strClass3); // true
    }
}
```

**运行结果：**

```bash
true
true
```

这证明了同一个类在 JVM 中只有一个 `Class` 对象。其中，第三种方式 `Class.forName()` 是最动态的，因为它接收一个字符串参数，我们可以在运行时决定要加载哪个类。

### 14.2. 反射实战：剖析并操控一个类

光说不练假把式！我们来创建一个 `User` 类，然后用反射来对它进行一次彻底的“解剖”和“改造”。

**我们的“目标”类：**

```java
// User.java
public class User {
    private String name;
    private int age;

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void publicMethod() {
        System.out.println("这是一个公开的方法。");
    }

    private String privateMethod(String message) {
        return "这是一个私有方法，收到了消息: " + message;
    }

    @Override
    public String toString() {
        return "User{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}
```

现在，我们的反射大戏开始！

```java:line-numbers
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class ReflectionPowerDemo {
    public static void main(String[] args) throws Exception {
        // 1. 获取 User 类的 Class 对象
        Class<?> userClass = Class.forName("User");

        // 2. 通过反射创建 User 对象
        System.out.println("--- 1. 创建对象 ---");
        Constructor<?> constructor = userClass.getConstructor(String.class, int.class); // [!code highlight]
        Object user = constructor.newInstance("张三", 25); // [!code highlight]
        System.out.println("创建的对象: " + user);

        // 3. 通过反射访问并修改私有属性
        System.out.println("\n--- 2. 访问和修改私有属性 ---");
        Field nameField = userClass.getDeclaredField("name");

        ::: danger 危险操作
        // 要访问 private 成员，必须打破封装！
        nameField.setAccessible(true); // [!code error]
        :::

        Object originalName = nameField.get(user);
        System.out.println("原始 name: " + originalName);

        nameField.set(user, "李四"); // 修改私有属性的值
        System.out.println("修改后 name: " + nameField.get(user));
        System.out.println("修改后的对象: " + user);


        // 4. 通过反射调用私有方法
        System.out.println("\n--- 3. 调用私有方法 ---");
        Method privateMethod = userClass.getDeclaredMethod("privateMethod", String.class);

        privateMethod.setAccessible(true); // [!code warning]

        Object result = privateMethod.invoke(user, "你好呀！"); // [!code highlight]
        System.out.println("调用私有方法的结果: " + result);
    }
}
```

**运行结果：**

```bash
--- 1. 创建对象 ---
创建的对象: User{name='张三', age=25}

--- 2. 访问和修改私有属性 ---
原始 name: 张三
修改后 name: 李四
修改后的对象: User{name='李四', age=25}

--- 3. 调用私有方法 ---
调用私有方法的结果: 这是一个私有方法，收到了消息: 你好呀！
```

::: details 关键代码解读

- **`getDeclaredField("name")`**: 获取名为 `name` 的字段，`getDeclared...` 系列方法可以获取到包括 `private`在内的所有本类声明的成员。
- **`field.setAccessible(true)`**: 这是反射的“魔咒”！它会暂时取消 Java 的访问权限检查，允许我们访问私有成员。这是一个强大但危险的操作，因为它破坏了类的封装性。
- **`privateMethod.invoke(user, "你好呀！")`**: 调用方法。第一个参数是调用该方法的对象实例，后续参数是传递给该方法的实际参数。
:::

### 14.3. 反射的利与弊

反射是一把双刃剑，我们必须清楚它的优缺点。

**优点 (利)：**

- **极高的灵活性**：可以在运行时动态地创建对象和调用方法，大大提高了程序的灵活性和扩展性。这是所有主流框架（Spring, Mybatis 等）实现其核心功能的基础。
- **解耦**：可以降低代码模块之间的耦合度。

**缺点 (弊)：**

::: warning 反射的代价

- **性能开销**：反射操作比直接调用要慢得多。JVM 无法对其进行优化。因此，在性能敏感的场景下应避免使用。
- **破坏封装性**：如我们所见，反射可以无视 `private` 修饰符，这破坏了面向对象的核心原则之一，可能导致代码难以维护和理解。
- **安全风险**：不恰当地使用反射可能会暴露内部实现，带来安全隐患。
:::

## **接下来去哪里？**

- **Web 开发**：学习 `Servlet`, `JSP`，然后进军 `Spring`, `Spring Boot`, `MyBatis` 等主流框架，成为一名后端工程师。
- **安卓开发**：利用你的 Java 知识学习 Kotlin，结合 Android SDK，开发手机应用。
- **大数据**：深入学习 `Hadoop`, `Spark`, `Flink` 等，这些大数据框架很多都是基于 Java/Scala 的。
- **Java 高级**：学习高级的知识，进而去研究 Java 更加深层次的内容