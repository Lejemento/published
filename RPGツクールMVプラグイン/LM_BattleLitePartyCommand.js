// --------------------------------------------------------------------------

// BattleLitePartyCommand
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc パーティーコマンドの表示条件を簡略化します。
 * @author レジェメント
 *

 * @help

 * 
パーティーコマンドが表示されるタイミングを「1ターン目最初」に限定します。
 * バニラ通り、1番キャラの行動選択でキャンセルキーを押せば2ターン目以降でも表示できます。
 * 
 * コードはトリアコンタン様に書いていただいたものです。
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 * 
 
*/



(function() {



    'use strict';
    
    var _BattleManager_startInput = BattleManager.startInput;
    BattleManager.startInput = function() {
        _BattleManager_startInput.apply(this, arguments);
        if (this._phase === 'input' && $gameTroop.turnCount() > 0) {
            BattleManager.selectNextCommand();
        }
    };

})();