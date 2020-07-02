var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var heroPlayer;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "aqa9h-nL-TA",
    playerVars: {
      // playsinline: 1,
      // loop: 1,
      // playlist: "aqa9h-nL-TA", //上と同じ動画ID_リピートするには入力必須
      // rel: 0, // 関連動画の非表示
      // controls: 0, // 動画プレーヤーのコントロール非表示
      // modestbranding: 1,
      // showinfo: 0,
      playsinline: 1,
      autoplay: 1, // 自動再生
      loop: 1, // ループ有効
      listType: "playlist", //リスト再生（ループ再生に必要）
      playlist: "aqa9h-nL-TA", // 再生する動画リスト（ループ再生に必要）
      controls: 0, // コントロールバー非表示
      enablejsapi: 1, //JavaScript API 有効
      modestbranding: 1, //yutubeロゴの非表示
      iv_load_policy: 3, //動画アノテーションを表示しない
      disablekb: 1, //キーボード操作OFF
      showinfo: 0, //動画の再生が始まる前に動画のタイトルなどの情報を表示しない
      rel: 0, //再生終了時に関連動画を表示しない
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });

  heroPlayer = new YT.Player("hero_player", {
    height: "360",
    width: "640",
    videoId: "bhnOKRrTcd4",
    playerVars: {
      // playsinline: 1,
      // loop: 1,
      // playlist: "bhnOKRrTcd4", //上と同じ動画ID_リピートするには入力必須
      // rel: 0, // 関連動画の非表示
      // controls: 0, // 動画プレーヤーのコントロール非表示
      // modestbranding: 1,
      // showinfo: 0,

      playsinline: 1,
      autoplay: 1, // 自動再生
      loop: 1, // ループ有効
      listType: "playlist", //リスト再生（ループ再生に必要）
      playlist: "bhnOKRrTcd4", // 再生する動画リスト（ループ再生に必要）
      controls: 0, // コントロールバー非表示
      enablejsapi: 1, //JavaScript API 有効
      modestbranding: 1, //yutubeロゴの非表示
      iv_load_policy: 3, //動画アノテーションを表示しない
      disablekb: 1, //キーボード操作OFF
      showinfo: 0, //動画の再生が始まる前に動画のタイトルなどの情報を表示しない
      rel: 0, //再生終了時に関連動画を表示しない
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

//プレーヤの準備完了後に呼び出す関数
function onPlayerReady(event) {
  event.target.mute(); //ミュートにしないとスマホで再生されない
  event.target.playVideo(); //ビデオを再生
}

var done = false;
function onPlayerStateChange(event) {
  var ytStatus = event.target.getPlayerState();
  if (ytStatus == YT.PlayerState.ENDED) {
    event.target.mute(); //ミュートにしないとスマホで再生されない
    event.target.playVideo(); //ビデオを再生
  }
}

$(function () {
  function resizeMovie() {
    var $w = $(window),
      bw = 1200, //基準にする横幅
      bh = (bw / 16) * 9, //基準にする高さ(16:9)
      w = $w.width(), //表示サイズ(幅)
      h = $w.height(), //表示サイズ(高さ)
      mw = w, //動画サイズ(幅)
      mh = Math.round(bh * (mw / bw)); //動画サイズ(高さ)

    if (mh < h) {
      //動画の高さが表示サイズの高さより小さかったら
      mh = h; //表示サイズの高さに変更
      mw = Math.round(bw * (mh / bh)); //高さに合わせて横幅変更
    }

    $("#player").css({
      width: mw,
      height: mh,
      marginTop: (h - mh) / 2,
      marginLeft: (w - mw) / 2,
    });
  }

  resizeMovie();

  $(window).resize(resizeMovie);
});
