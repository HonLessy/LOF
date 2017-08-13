cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        errorPrefab:{
            type:cc.Prefab,
            default:null,
        }
    },

    // use this for initialization
    onLoad: function () {

    },
    touchToNextScene(){
        var editname = this.node.getChildByName("editname");
        var editpwd = this.node.getChildByName("editpwd");
        
        if(editname.String ==="请输入账号"||editpwd.String === "请输入密码"){
            var error = cc.instantiate(this.errorPrefab);
            this.node.addChild(error);
            error.setPosition = cc.p(0,0);
        }
        cc.director.loadScene('ChooseCharactor');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
