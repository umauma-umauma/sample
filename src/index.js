import "./styles.css";

//追加ボタンを押された時
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//追加ボタンを押された時の処理
const onClickAdd = () => {
  // text-box => 取得・初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストに追加する処理
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //listタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // todoの内容textを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの要素を完了リストから削除
      deleteFromCompleteList(backButton.parentNode);

      //textを取得
      const text = backButton.parentNode.firstElementChild.innerText;

      //未完成リストに追加
      createIncompleteList(text);
    });

    //　削除ボタン生成
    const sakujoButton = document.createElement("button");
    sakujoButton.innerText = "削除";
    sakujoButton.addEventListener("click", () => {
      deleteFromCompleteList(sakujoButton.parentNode);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    addTarget.appendChild(sakujoButton);

    //完了リスtに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};
