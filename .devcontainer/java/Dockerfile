# tomcat9とJDK11をインストール
FROM tomcat:9-jdk11-openjdk-slim-bullseye
 
# プロジェクトディレクトリを作成
RUN mkdir /opt/project
 
RUN apt-get update && \
    # Maven(ビルドツール)
    apt-get -y install maven \
    # nodeの依存ライブラリ
    python3-software-properties gnupg2 curl wget \
    # インフラのデバッグ用
    lsof iputils-ping netcat

# nodeをインストール
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install nodejs -y
