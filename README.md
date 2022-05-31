# これは何
- Javaの勉強用の環境です
- Macを想定して書いていますが、インストールするものに書いてあるものが入ればwindowsでも(たぶん)動きます
- 構築環境
    - tomcat: 9.0.62.0
    - Java: 11.0.15
    - Apache Maven 3.6.3
    - node: 14.19.1
# 事前にインストールするもの
## 1. Docker desktop
- 参考: [Docker DesktopのMacへのインストール](https://matsuand.github.io/docs.docker.jp.onthefly/desktop/mac/install/)
- Docker Composeも一緒に入るはずだが、入っていなければ別にインストールする 
## 2. mySQLWorkbench
- MySQLを操作しやすくするためのGUI
- [公式サイト](https://www.mysql.com/jp/products/workbench/)からインストールする
## 3. VScode
- 今回利用するエディタ。一般的によく使われるのでインストールしておくことに損はない(※主観)。
- 参考: [Visual Studio Codeのダウンロードとインストール](https://www.javadrive.jp/vscode/install/index1.html) 
## 4. remote development (VScodeのプラグイン)
- VScodeがインストールできたら開く
- 左側のメニューバーから「Extensions」を選択し、検索窓に「Remote Development」と入力し検索する
- remote developmentをVScodeにインストールする

# 環境構築
## tomcat、mysqlのDockerコンテナの起動
1. VScodeを開き、左下端の緑色の「><」ボタン(remote development) を押し、 「Open Folder in Container」 を選択
2. Finderが開かれるので、ダウンロードした practice_java を選択し、「Open」で開く
- .devcontainer配下のdocker-composeが実行され、tomcatおよびmysqlのDockerコンテナがビルドされる
- ビルドが完了するとtomcatコンテナ内のゲストOSにログインした状態でワークスペースが開かれる
3. ワークスペースが開いたら、TOMCAT SERVERS横の＋ボタンを押し、/usr/local/tomcat/ を選択する
4. 後の操作がしやすいように(Macの場合は) Command + j でターミナルを開いておく
## データベースの準備
1. mySQLWorkbench を開く
2. MySQL connection横の+ボタンから先ほど立ち上げたMySQLサーバーを選択する。設定は以下。
- Connection name: todoapp
- Hostname: 127.0.0.1
- Port: 3306
- Username: root
OKを押すとパスワードの入力を求められるので「password」と入力する。

3. (初回のみ) 左上の「SQLを開くボタン」を押す
- Finderが開かれるので、practice_java => todoapp >= sql から initDB.sqlを開く。
- Commnad + Shift + Enter で実行する。todoアプリのデータベース、テーブルが作成される。

# Servletの実行手順
(tomcat、mysqlのDockerコンテナの起動でワークスペースが開いた状態を前提とする)
1. Command + j でターミナルを開く (以降コマンドはターミナルから実行する)
2. プロジェクトのディレクトリに移動
```
cd todoapp
```
3. 以下のコマンドを実行
```
mvn package
```
- MavenによりJavaプログラムがビルドされる。
- プロジェクトディレクトリ配下に target というフォルダが作成され、その中にプロジェクトのwarファイルができる
4. targetディレクトリ配下の プロジェクト名.war (今回はtodoapp.war) を右クリックし、「Debug on tomcat server」を選択
- tomcatにwarファイルがデプロイされる
5. TOMCAT SERVERSから tomcat を右クリックし「start」でサーバーを起動する
6. TOMCAT SERVERSのtomcatからデプロイしたプロジェクト名を右クリックし、「Open in browser」で開く
- 開かないことがあるのでその場合はURLを直接叩けば良い (localhost:8080/todoapp/Read とか)
7. 以降、Javaファイルを編集するとその変更が反映される
- ただし、jspの編集は反映されないみたい (現在調査中)
- warファイルを再生成しているわけではないため、tomcatを再起動した時には mvn package の実行が必要であることに注意する

# (参考) sassのコンパイル
## 動作環境
- gulpを使ってsassの変更を監視し、cssに逐次コンパイルする
- jspやhtmlに適用するときはコンパイルされたcssを利用すれば良い 
## 初回のみ
- 以下のコマンドを実行する (npmでgulpやsassがインストールされる)
```
bash gulpinit.sh
```
## 開発時
- 以下のコマンドを実行
```
npx gulp watch
```
- gulpの監視タスクが実行され、sassが変更されるたびにcssへの変換が行われる
- 使い終わったら controll + C で gulp を止める

# ライブラリを追加したい場合
- Mavenの設定ファイルである「pom.xml」のdependenciesタグ下に追加する