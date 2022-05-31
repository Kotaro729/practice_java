document.addEventListener('DOMContentLoaded', function(){
    // レンダリングした時のページ情報を取得してアクティブにするタブを決める
    // const path = window.location.pathname
    // URLから現在のページを完全一致で探してくる

    // document.querySelector(`[href='${path}']`).classList.add('active')
	
	// 各タブに対してクリックイベントを適用
	const navbars = document.getElementsByClassName('navTab');
	for(let i = 0; i < navbars.length; i++) {
		navbars[i].addEventListener('click', tabSwitch);
	}
    
	// クリックに応じて active class を切り替える関数
	function tabSwitch(){
		// 引数で指定したnavTab要素の親となっているnavbarクラス要素を取得
		const bottomNavbarEle = this.closest('.customerNavbar');
		// bottomNavbarの子要素から active class を削除
		bottomNavbarEle.getElementsByClassName('active')[0].classList.remove('active');
        // 引数で指定した要素に active class を付与
		this.classList.add('active');
	};
});