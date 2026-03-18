---
title: Java untuk Pemula — Bagian 1
description: Panduan lengkap dasar-dasar Java, mulai dari setup VS Code hingga cara kompilasi dan menjalankan program, termasuk pengenalan project Maven.
navigation:
  icon: i-lucide-coffee
---

# ☕ Java untuk Pemula — Bagian 1: Dasar-Dasar Java

Selamat datang di seri **Java untuk Pemula**! Pada bagian pertama ini, kita akan menyiapkan lingkungan pengembangan dan mempelajari cara mengkompilasi serta menjalankan program Java. Semua langkah dirancang agar mudah diikuti, bahkan jika Anda baru pertama kali belajar Java.

::tip
**Java** adalah bahasa pemrograman yang populer, _platform-independent_, dan digunakan secara luas di berbagai industri. Versi terbaru LTS (Long-Term Support) adalah **JDK 21**.
::

---

## 🛠️ Setup VS Code untuk Java

#### 1. Install JDK (Java Development Kit)

JDK adalah perangkat lunak yang diperlukan untuk mengembangkan dan menjalankan Java. Unduh **JDK 21 LTS** dari [Adoptium](https://adoptium.net).

::callout{icon="i-lucide-alert-triangle" color="warning"}
**Penting:** Install **JDK**, bukan hanya JRE. JDK sudah mencakup compiler (`javac`), runtime (`java`), dan berbagai alat pengembangan lainnya.
::

#### 2. Install VS Code + Ekstensi Java

Buka VS Code, tekan `Ctrl+Shift+X` untuk membuka panel ekstensi, lalu cari dan instal **Extension Pack for Java** dari Microsoft. Satu paket ini sudah mencakup semua ekstensi yang diperlukan:

::card-group
  ::card
  ---
  title: "Extension Pack for Java"
  icon: i-simple-icons-microsoft
  ---
  Bundle utama yang berisi Language Support, Debugger, Test Runner, Maven, dan Project Manager. Cukup install ini, semua ekstensi di bawah otomatis terpasang.
  ::
  ::card
  ---
  title: "Java Language Support"
  icon: i-lucide-code-xml
  ---
  Dari Red Hat. Memberikan IntelliSense, autocomplete, dan error highlighting.
  ::
  ::card
  ---
  title: "Debugger for Java"
  icon: i-lucide-bug
  ---
  Mendukung breakpoint, step-through, dan inspect variable.
  ::
  ::card
  ---
  title: "Java Test Runner"
  icon: i-lucide-flask
  ---
  Menjalankan unit test JUnit/TestNG dengan mudah.
  ::
  ::card
  ---
  title: "Maven for Java"
  icon: i-lucide-package
  ---
  Integrasi dengan build tool Maven.
  ::
  ::card
  ---
  title: "Project Manager for Java"
  icon: i-lucide-folder
  ---
  Membuat dan mengelola project Java.
  ::
::

#### 3. Verifikasi Instalasi

Buka terminal di VS Code (`Ctrl+`` ` ```) dan jalankan perintah berikut:

```bash
java --version
javac --version
```

Output yang diharapkan (nomor versi bisa berbeda):

::code-preview
```
openjdk 21.x.x 2023-xx-xx
javac 21.x.x
```
#code
```bash
java --version
javac --version
```
::

::tip{icon="i-lucide-check-circle"}
Jika muncul versi Java, berarti instalasi sukses! Jika tidak, coba restart VS Code atau periksa PATH environment variable.
::
::

---

## 🚀 Compile & Jalankan via Terminal

#### 1. Buat File Java

Buat folder baru untuk project, lalu buat file `HelloWorld.java` dengan isi:

```java [HelloWorld.java]
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Halo, Dunia!");
    }
}
```

::callout
**Aturan penamaan:** Nama file harus **sama persis** dengan nama class (termasuk huruf besar/kecil). Dalam contoh ini, class bernama `HelloWorld`, maka file harus `HelloWorld.java`.
::

#### 2. Compile

Buka terminal di folder yang berisi file `.java`, lalu jalankan:

```bash [Terminal]
javac HelloWorld.java
```

Perintah ini akan menghasilkan file `HelloWorld.class` (bytecode) di folder yang sama.

#### 3. Jalankan

Untuk menjalankan program, gunakan perintah `java` diikuti nama class (tanpa ekstensi `.class`):

```bash [Terminal]
java HelloWorld
```

::code-preview
Output:
```
Halo, Dunia!
```
#code
```bash
java HelloWorld
```
::

::tip
Setiap kali Anda mengubah kode, Anda harus mengulangi langkah **compile** (`javac`) sebelum menjalankannya lagi.
::
::

---

### 📁 Struktur Folder dengan Package

Jika program Anda menggunakan **package**, misalnya:

```java [src/main/latihan/Hello.java]
package src.main.latihan;

public class Hello {
    public static void main(String[] args) {
        System.out.println("Halo dari package!");
    }
}
```

Maka struktur folder harus sesuai: `src/main/latihan/Hello.java`.

::code-preview
**Compile:**
```bash
javac src/main/latihan/Hello.java
```

**Jalankan dengan fully qualified name:**
```bash
java src.main.latihan.Hello
```
::

::warning{icon="i-lucide-alert-triangle"}
**Perhatikan:** Saat menjalankan, gunakan titik (`.`) sebagai pemisah package, bukan garis miring (`/`).
::

---

### 📦 Compile Banyak File Sekaligus

Jika Anda memiliki banyak file `.java` dalam satu folder, compile semuanya dengan:

```bash
javac *.java
```

Untuk mengarahkan hasil kompilasi ke folder terpisah (misal `bin/`), gunakan opsi `-d`:

```bash
javac -d bin *.java
java -cp bin NamaClass
```

::field-group
  ::field{name="-d" type="directory"}
  Menentukan direktori tujuan untuk file `.class`. Jika belum ada, folder akan dibuat otomatis.
  ::
  ::field{name="-cp" type="classpath"}
  Memberitahu JVM di mana mencari file `.class`. Dalam contoh di atas, `-cp bin` artinya classpath adalah folder `bin`.
  ::
::

---

### 📚 Menggunakan Library Eksternal (.jar)

Saat menggunakan library eksternal (dalam format `.jar`), Anda perlu menyertakannya di classpath.

::tabs
  ::tabs-item{label="Windows" icon="i-lucide-terminal"}
  ```bash
  javac -cp ".;library.jar" Program.java
  java  -cp ".;library.jar" Program
  ```
  ::
  ::tabs-item{label="Mac / Linux" icon="i-lucide-terminal"}
  ```bash
  javac -cp ".:library.jar" Program.java
  java  -cp ".:library.jar" Program
  ```
  ::
::

::callout{icon="i-lucide-info"}
Tanda titik (`.`) di awal classpath mewakili direktori saat ini. Pisahkan beberapa entri dengan titik koma (`;`) di Windows atau titik dua (`:`) di Mac/Linux.
::

---

### ⚡ Shortcut di VS Code

Setelah ekstensi Java terinstall, Anda bisa memanfaatkan shortcut berikut untuk mempercepat alur kerja:

| Shortcut | Aksi |
|----------|------|
| :kbd{value="Ctrl+F5"} | Menjalankan program tanpa debugger. |
| :kbd{value="F5"} | Menjalankan dengan debugger (breakpoint aktif). |
| Klik tombol **Run** ▷ di pojok kanan atas | Menjalankan file yang sedang dibuka. |
| Klik link **Run** atau **Debug** di atas method `main()` | Menjalankan atau melakukan debug pada method `main`. |

::tip{icon="i-lucide-zap"}
Dengan shortcut ini, Anda tidak perlu membuka terminal setiap kali. Cukup tekan `Ctrl+F5` dan program akan langsung dijalankan.
::

---

## 📁 Starter Project Java dengan Maven

Maven adalah build tool yang populer untuk Java. Berikut adalah struktur project Maven standar yang bisa Anda gunakan sebagai titik awal.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}
  :::code-tree{default-value="src/main/java/com/example/App.java"}
  ```xml [pom.xml]
  <?xml version="1.0" encoding="UTF-8"?>
  <project xmlns="http://maven.apache.org/POM/4.0.0"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
           http://maven.apache.org/xsd/maven-4.0.0.xsd">
      <modelVersion>4.0.0</modelVersion>

      <groupId>com.example</groupId>
      <artifactId>my-java-app</artifactId>
      <version>1.0-SNAPSHOT</version>
      <packaging>jar</packaging>

      <properties>
          <maven.compiler.source>21</maven.compiler.source>
          <maven.compiler.target>21</maven.compiler.target>
          <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      </properties>

      <dependencies>
          <dependency>
              <groupId>org.junit.jupiter</groupId>
              <artifactId>junit-jupiter</artifactId>
              <version>5.10.0</version>
              <scope>test</scope>
          </dependency>
      </dependencies>

      <build>
          <plugins>
              <plugin>
                  <groupId>org.apache.maven.plugins</groupId>
                  <artifactId>maven-surefire-plugin</artifactId>
                  <version>3.2.2</version>
              </plugin>
          </plugins>
      </build>
  </project>
  ```

  ```java [src/main/java/com/example/App.java]
  package com.example;

  /**
   * Hello world!
   */
  public class App {
      public static void main(String[] args) {
          System.out.println("Hello, Maven!");
      }
  }
  ```

  ```java [src/test/java/com/example/AppTest.java]
  package com.example;

  import org.junit.jupiter.api.Test;
  import static org.junit.jupiter.api.Assertions.assertTrue;

  /**
   * Unit test for simple App.
   */
  public class AppTest {
      @Test
      public void testApp() {
          assertTrue(true);
      }
  }
  ```

  ````md [README.md]
  # My Java App

  Ini adalah project Java sederhana dengan Maven.

  ## Cara Menjalankan

  ```bash
  # Compile dan package
  mvn clean package

  # Jalankan aplikasi
  java -cp target/my-java-app-1.0-SNAPSHOT.jar com.example.App
  ```

  ## Menjalankan Tes

  ```bash
  mvn test
  ```
  ````

  ```gitignore [.gitignore]
  target/
  .idea/
  *.iml
  .vscode/
  *.class
  ```
  :::
::

::tip{icon="i-lucide-rocket"}
Untuk membuat project Maven dengan cepat, Anda bisa menggunakan perintah berikut di terminal:
```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=my-java-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```
Setelah itu, import project ke VS Code sebagai folder.
::

---

## ✨ Kesimpulan

Sekarang Anda sudah siap untuk mulai menulis dan menjalankan program Java menggunakan VS Code, baik secara manual maupun dengan Maven. Selanjutnya, kita akan belajar tentang variabel, tipe data, dan struktur kontrol di **Bagian 2**.

::badge
**Selamat belajar!** 🎉
::

---

*Terinspirasi dari dokumentasi [Nuxt UI](https://ui.nuxt.com) dan template [SaaS](https://github.com/nuxt-ui-templates/saas).*