const { Player } = TextAliveApp;

// 単語が発声されていたら #text に表示する
const animateWord = function (now, unit) {
  if (unit.contains(now)) {
    document.querySelector("#text").textContent = unit.text;
  }
};

// TextAlive Player を作る
const player = new Player({
  app: { token: "aB9rO5Q99KqkSuKj" },
  mediaElement: document.querySelector("#media"),
});

document.querySelector("#play").addEventListener(() => {
  // king妃jack躍 / 宮守文学 feat. 初音ミク
  player.createFromSongUrl("https://piapro.jp/t/ucgN/20230110005414");
});

player.addListener({
  // 動画オブジェクトの準備が整ったとき（楽曲に関する情報を読み込み終わったとき）に呼ばれる
  onVideoReady: (v) => {
    // 定期的に呼ばれる各単語の "animate" 関数をセットする
    let w = player.video.firstWord;
    while (w) {
      w.animate = animateWord;
      w = w.next;
    }
  },
  onAppReady: (app) => {
  }
});
