function super_f_get_window(){
    var win = '<div id="super_f_window" style="text-align: center;"><div id="toolbardiv" style="position:absolute;white-space:nowrap;overflow:hidden;top:22px;left:0px;max-height:24px;height:36px;right:0px;padding:6px;"></div> <div id="sidebardiv" style="display:none"></div><div id="graphdiv" style="position:absolute;overflow:hidden;top:60px;bottom:26px;right:0px;cursor:default; height:100%;width:100%;background-color:white;"></div><div id="outlinediv" style="display:none" ></div><div id="statusdiv" style="text-align:right;position:absolute;overflow:hidden;bottom:0px;left:0px;max-height:25px;height:25px;right:0px;color:white;padding:1px;"></div></div>';
    var content = document.createElement('div');
    content.style.padding="1%";
    content.style.backgroundColor = 'white';
    content.innerHTML = win;
    // Center the mxWindow for super_f window
    var w = document.body.clientWidth;
    var h = (document.body.clientHeight || document.documentElement.clientHeight);
    super_f_wnd = new mxWindow('Super_Block -Xcos', content, (w-600)/2, (h-500)/2, 710, 400, true, true);
    super_f_wnd.setMaximizable(true);
    super_f_wnd.setMinimizable(true);
    super_f_wnd.setScrollable(true);
    super_f_wnd.setResizable(true);
    super_f_wnd.setClosable(true);
    super_f_wnd.setVisible(true);
    var toolbar = document.getElementById("toolbardiv");
    toolbar.style.backgroundImage = "url('images/toolbar_bg.gif')";
    var statusbar = document.getElementById("statusdiv");
    statusbar.style.backgroundImage = "url('images/toolbar_bg.gif')";
    var graph = document.getElementById("graphdiv");
    graph.style.backgroundImage = "url('images/grid.gif')";
    super_f_exist_flag = true;

    var test = main(document.getElementById('graphdiv'),
    document.getElementById('outlinediv'),
    document.getElementById('toolbardiv'),
    document.getElementById('sidebardiv'),
    document.getElementById('statusdiv'),super_f_exist_flag);

}
