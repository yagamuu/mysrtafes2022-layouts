# Mystery Dungeon RTA FES 3 Layouts
第3回不思議のダンジョンシリーズRTAフェスというイベント用に作成したNodeCGのbundleです。  
This is the [NodeCG](http://github.com/nodecg/nodecg) bundle used for the streaming overlay in Mystery Dungeon RTA FES 3.  

## Installation
- `Docker`、`Docker Compose`のインストールを行う
- プロジェクトディレクトリに`/cfg`ディレクトリを作成し、各種bundle用の設定jsonファイルを配置
    - 当bundleは規定の時刻ごとに背景画像を変更する機能が存在し、背景画像のファイル名を設定ファイルから設定する必要があります
    - プロパティ名などは`configschema.json`から確認してください
- Docker Compose上でビルド、起動を行う(例:`docker-compose up -d`)

## Credits
- [NodeCG](https://github.com/nodecg/nodecg): Main framework.
- [nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol): NodeCG bundle for broadcast graphics framework/application.
- [nodecg-vue-ts-template](https://github.com/zoton2/nodecg-vue-ts-template): Template for NodeCG bundles that use Vue.js and TypeScript.
- [nodecg-twitter-widget](https://github.com/cma2819/nodecg-twitter-widget): NodeCG layout bundle for showing tweet.
- [nodecg-spotify-widget](https://github.com/cma2819/nodecg-spotify-widget): NodeCG layout bundle for showing spotify information.
- [BOBSON](https://twitter.com/BOBSON27): Graphics design.
- [bear](https://twitter.com/bearfaust0123): HTML/CSS coding.
- [isuZu](https://twitter.com/y_isuZu): Marathon Logo, Setup background illust.