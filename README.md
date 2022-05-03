# これは何
- Javaの勉強用の環境です

# 事前にインストールするもの
- Docker for desktop をインストールする
    - Docker Composeも一緒に入るはずだが、入っていなければ別にインストールする 
- mySQLWorkbenchをインストールする
- VScodeをインストールする
- VScodeのプラグインから remote developmentをインストールする

# 環境構築
## tomcat、mysqlのDockerコンテナの起動
1. remote developmentから Open Folder in Container を選択
2. このフォルダを開く 
- .devcontainer配下のdocker-composeが実行され、tomcatおよびmysqlのDockerコンテナがビルドされる
- ビルドが完了するとtomcatコンテナ内のゲストOSにログインした状態でワークスペースが開かれる
3. ワークスペースが開いたら、TOMCAT SERVERS横の＋ボタンを押し、/usr/local/tomcat/ を選択する
## データベースの準備
1. mySQLWorkbench を開く
2. localhost:3306 に MySQLサーバーが立ち上がっているのでこれを選択する
3. (初回のみ) todoapp/sql から initDB.sqlを開き実行。
- todoアプリのデータベース、テーブルが作成される

# Servletの実行手順
1. cd todoapp でプロジェクトのディレクトリに移動
2. mvn package を実行 
- Javaプログラムがビルドされ、プロジェクトディレクトリ配下に target というフォルダが作成され、その中にプロジェクトのwarファイルができる
3. targetディレクトリ配下の プロジェクト名.war (今回はtodoapp.war) を右クリックし、「Debug on tomcat server」を選択
- tomcatにwarファイルがデプロイされる
4. TOMCAT SERVERSから tomcat を右クリックし「start」でサーバーを起動する
5. TOMCAT SERVERSのtomcatからデプロイしたプロジェクト名を右クリックし、「Open in browser」で開く
- 開かないことがあるのでその場合はURLを直接叩けば良い (localhost:8080/todoapp/Read とか)

# sassのコンパイル
## 動作環境
- gulpを使ってsassの変更を監視し、cssに逐次コンパイルする
- jspやhtmlといった静的ページにはコンパイルされたcssを利用すれば良い 
## 初回のみ
- bash gulpinit.sh を実行する (npmでgulpやsassがインストールされる)
## 開発時
- npx gulp watch を実行
- gulpの監視タスクが実行され、sassが変更されるたびにcssへの変換が行われる
- 使い終わったら controll + C で gulp を止める