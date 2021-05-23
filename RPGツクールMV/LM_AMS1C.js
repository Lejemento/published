// --------------------------------------------------------------------------

// AltMenuScreenCustom
//
// Copyright (c) Lejemento

// This software is released under the MIT License.

// http://opensource.org/licenses/mit-license.php
//

// --------------------------------------------------------------------------


/*:

 * @plugindesc AltMenuScreenの横並び人数を変更します。
 * @author レジェメント
 *

 * @help

 * 
パラメータに横人数を入力してください。
 * AMSの下にすればたぶん動きます。
 *  

 * 
このプラグインはMITライセンスに準じます。
 * 
何でもしちゃってください。
 * 
 * @param Ninzu
 * @desc 横並び人数です。
 * @default 4
 
*/



(function() {



var parameters = PluginManager.parameters('LM_AMS1C'); 
var Ninzu = Number(parameters['Ninzu']);

Window_MenuStatus.prototype.maxCols = function() {
        return Ninzu;
};

})();