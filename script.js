var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "z4pWvWYcb_I",
    playerVars: {
      playsinline: 1,
      loop: 1,
      playlist: "z4pWvWYcb_I", //上と同じ動画ID_リピートするには入力必須
      rel: 0, // 関連動画の非表示
      controls: 1, // 動画プレーヤーのコントロール非表示
      modestbranding: 1,
      showinfo: 0,
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
